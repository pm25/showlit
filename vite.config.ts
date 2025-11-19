import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { SITE } from "./src/data/SITE";

// https://vite.dev/config/
export default defineConfig({
    base: SITE.base,
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "/src": path.resolve(__dirname, "src")
        },
    },
});
