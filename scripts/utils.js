import fs from "node:fs";
import path from "node:path";

// Ensure the directory for a given file path exists.
export function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Check if a value represents a local file path (not an HTTP URL)
export function isLocalFile(value) {
  return typeof value === "string" && !/^https?:\/\//.test(value);
}

// Convert a JavaScript object to a TypeScript-like string representation
export function toTS(obj, indent = 0) {
  const pad = level => " ".repeat(level);

  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]";
    const items = obj.map(i => pad(indent + 2) + toTS(i, indent + 2));
    return `[\n${items.join(",\n")}\n${pad(indent)}]`;
  } 
  
  if (obj && typeof obj === "object") {
    const entries = Object.entries(obj).map(([key, value]) => {
      const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;

       // treat image data type as raw variables if it's local file
      if (["icon", "logo", "profile_image", "preview_image"].includes(key) && isLocalFile(value)) {
        // write icon value as raw variable (no quotes)
        return pad(indent + 2) + `${formattedKey}: ${value}`;
      }

      if (typeof value === "object" && value !== null) {
        return pad(indent + 2) + `${formattedKey}: ${toTS(value, indent + 2)}`;
      } 
      
      if (typeof value === "string") {
        return pad(indent + 2) + `${formattedKey}: \`${value}\``;
      } 
      
      return pad(indent + 2) + `${formattedKey}: ${value}`;
    });

    return `{\n${entries.join(",\n")}\n${pad(indent)}}`;
  } 
  
  if (typeof obj === "string") return `\`${obj}\``;
  return String(obj);
}