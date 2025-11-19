import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { toTS, ensureDirExists } from "./utils.js";

// ======================================
// 1. Get YAML file from argument
// ======================================
const inputFile = process.argv[2]; // e.g., "config/profile.yaml"
if (!inputFile) {
    console.error("❌ Please provide the path to the YAML file.");
    console.error("Usage: node generate-data.js config/profile.yaml");
    process.exit(1);
}

const yamlPath = path.join(process.cwd(), inputFile);

if (!fs.existsSync(yamlPath)) {
    console.error(`❌ ${inputFile} not found!`);
    process.exit(1);
}

// ======================================
// 2. Load YAML
// ======================================
const yamlContent = fs.readFileSync(yamlPath, "utf8");
const data = yaml.load(yamlContent);
console.log(`✅ Loaded YAML: ${inputFile}`);

// ======================================
// 2. Prepare output directory
// ======================================
const outDir = path.join(process.cwd(), "src", "data");
ensureDirExists(outDir);

// ======================================
// 3. Helper: write TS file with imports
// ======================================
function writeTS(filename, variable, content) {
  const packageIconsMap = new Map(); // package -> Set of icon names
  const fileToVarMap = new Map(); // local file path -> variableName
  const imageImports = [];

  // convert file path to valid TS variable
  const getVariableName = filePath => {
    const baseName = path.basename(filePath, path.extname(filePath));
    return baseName.replace(/[\s\.\-]/g, "_");
  };

  // recursively collect assets (icons and images)
  function collectAssets(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(collectAssets);
    } else if (obj && typeof obj === "object") {
      Object.entries(obj).forEach(([key, value]) => {
        // handle icons
        if (key === "icon" && value?.name && value?.package) {
          if (!packageIconsMap.has(value.package)) {
            packageIconsMap.set(value.package, new Set());
          }
          packageIconsMap.get(value.package).add(value.name);
          obj[key] = value.name; // use raw variable
        }
        // handle local images
        else if (
          ["logo", "image", "profile_image", "preview_image"].includes(key) &&
          typeof value === "string" &&
          !/^https?:\/\//.test(value)
        ) {
          let variableName;
          if (fileToVarMap.has(value)) {
            variableName = fileToVarMap.get(value);
          } else {
            variableName = getVariableName(value);
            fileToVarMap.set(value, variableName);
            imageImports.push({ variableName, filePath: value });
          }
          obj[key] = variableName;
        }
        // recurse for nested objects
        else if (typeof value === "object" && value !== null) {
          collectAssets(value);
        }
      });
    }
  }

  collectAssets(content);

  // generate import statements
  let importStatements = "";

  packageIconsMap.forEach((icons, pkg) => {
    importStatements += `import { ${Array.from(icons).join(", ")} } from "${pkg}";\n`;
  });

  imageImports.forEach(({ variableName, filePath }) => {
    importStatements += `import ${variableName} from "${filePath}";\n`;
  });

  if (importStatements) importStatements += "\n";

  // combine imports and TS content
  const tsContent = `${importStatements}export const ${variable} = ${toTS(content)};\n`;
  fs.writeFileSync(path.join(outDir, filename), tsContent);
}

// ======================================
// 4. Write TS files
// ======================================
Object.entries(data).forEach(([key, value]) => {
  if (key === "SITE" && value.repoUrl) {
        const repoName = value.repoUrl.replace(/\.git$/, "").split("/").pop() || "";
        value.repoName = repoName;
        value.base = `/${repoName}/`;
    }
  
  writeTS(`${key}.ts`, key, value);
});

console.log("✅ Generated TS files successfully!");
