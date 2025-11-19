import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const SITE_PATH = path.join(process.cwd(), "config", "site.yaml");

if (!fs.existsSync(SITE_PATH)) {
  console.error("❌ site.yaml not found. Please create it before building.");
  process.exit(1);
}

const siteConfig = yaml.load(fs.readFileSync(SITE_PATH, "utf8"));

const placeholder = "https://github.com/pm25/showlit";
if (siteConfig.SITE?.repoUrl === placeholder || !siteConfig.SITE?.repoUrl) {
  console.error("❌ Please update repoUrl in config/site.yaml before building.");
  process.exit(1);
}

console.log("✅ repoUrl found. Proceeding with build...");
