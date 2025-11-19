import fs from "fs";
import path from "path";
import { ensureDirExists } from "./utils.js";

const inputPath = path.join(process.cwd(), "src", "data", "publications.json");
const outputPath = path.join(process.cwd(), "src", "data", "generated", "featured_publications.json");

function extractFeaturedPub() {
    const raw = fs.readFileSync(inputPath, "utf-8");
    const PubData = JSON.parse(raw);

    const featuredPublications = PubData.publications.filter((pub) => pub.featured);

    const featuredData = {
        author_name: PubData.author_name,
        publications: featuredPublications,
    };

    const output = JSON.stringify(featuredData, null, 4);

    ensureDirExists(outputPath);
    fs.writeFileSync(outputPath, output, "utf-8");
    
    console.log("✅ featured_publications.json generated successfully.");
}

extractFeaturedPub();
