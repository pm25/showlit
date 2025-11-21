import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { ensureDirExists } from "./utils.js";

const articlesDir = path.join(process.cwd(), "public", "articles");
const outputPath = path.join(process.cwd(), "src", "data", "generated", "articles.json");

function getSlug(filename) {
  return filename.replace(/\.md$/, "");
}

// frontmatter extractor
function parseFrontmatter(content) {
  const match = /^---\n([\s\S]*?)\n---\n?/.exec(content);

  if (!match) {
    return { data: {}, content };
  }

  const yamlBlock = match[1];
  const body = content.slice(match[0].length);

  let data = {};
  try {
    data = yaml.load(yamlBlock) || {};
  } catch (err) {
    console.error("YAML parse error:", err);
  }

  return { data, content: body };
}

// recursively get all .md files in a directory
function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });

  list.forEach((file) => {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.isFile() && file.name.endsWith(".md")) {
      results.push(filePath);
    }
  });

  return results;
}

function generatePostsJson() {
  const files = getAllMarkdownFiles(articlesDir);

  const articles = {};

  files.forEach((filePath) => {
    const relativePath = path.relative(articlesDir, filePath).replace(/\\/g, "/"); // normalize slashes
    const parts = relativePath.split("/");

    // must be {slug}/{slug}.md
    if (parts.length !== 2 || parts[1] !== `${parts[0]}.md`) {
      console.warn(`⚠️ Skipping invalid file structure: ${relativePath}. Expected /{slug}/{slug}.md`);
      return;
    }

    const slug = parts[0];

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = parseFrontmatter(fileContent);

    const defaults = {
      title: "Untitled",
      created_at: "",
      updated_at: "",
      summary: "",
      cover_image: "",
      author: "Anonymous",
      draft: false,
    };

    articles[slug] = {
      path: path.relative(process.cwd(), filePath).replace(/\\/g, "/"),
      ...defaults,
      ...data,
    };
  });

  const sortedEntries = Object.entries(articles).sort(([, a], [, b]) => {
    const dateA = a.created_at || "";
    const dateB = b.created_at || "";
    return dateB.localeCompare(dateA);
  });

  const sortedArticles = Object.fromEntries(sortedEntries);

  ensureDirExists(outputPath);
  fs.writeFileSync(outputPath, JSON.stringify(sortedArticles, null, 4), "utf-8");

  console.log(`✅ articles.json generated with ${Object.keys(sortedArticles).length} posts`);
}

generatePostsJson();
