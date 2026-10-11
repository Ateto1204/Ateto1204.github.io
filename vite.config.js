import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { execFileSync } from "node:child_process";
import { copyFileSync } from "node:fs";

function getLastUpdatedTimestamp() {
    try {
        return execFileSync("git", ["log", "-1", "--format=%cI"], {
            encoding: "utf8",
        }).trim();
    } catch {
        return new Date().toISOString();
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "github-pages-spa-fallback",
            closeBundle() {
                copyFileSync("dist/index.html", "dist/404.html");
            },
        },
    ],
    define: {
        "import.meta.env.VITE_LAST_UPDATED": JSON.stringify(
            getLastUpdatedTimestamp()
        ),
    },
    assetsInclude: ["**/*.JPG"],
    base: "/",
    resolve: {
        alias: {
            "@": "/src",
            "@fortawesome/free-regular-svg-icons": fileURLToPath(
                new URL(
                    "node_modules/@fortawesome/free-regular-svg-icons",
                    import.meta.url
                )
            ),
            "@fortawesome/free-brands-svg-icons": fileURLToPath(
                new URL(
                    "node_modules/@fortawesome/free-brands-svg-icons",
                    import.meta.url
                )
            ),
        },
    },
});
