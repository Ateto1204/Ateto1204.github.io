import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { execFileSync } from "node:child_process";
import {
    copyFileSync,
    mkdirSync,
    readFileSync,
    writeFileSync,
} from "node:fs";

const seoRoutes = [
    {
        path: "experience",
        title: "Experience | Dong-Yi Su (Ateto)",
        description:
            "Research, internships, talks, and teaching experience of Dong-Yi Su, an undergraduate researcher in software engineering and artificial intelligence.",
        canonical: "https://ateto1204.github.io/experience/",
    },
    {
        path: "publications",
        title: "Publications | Dong-Yi Su (Ateto)",
        description:
            "Research publications by Dong-Yi Su in software engineering, artificial intelligence, software evolution, and related fields.",
        canonical: "https://ateto1204.github.io/publications/",
    },
];

function makeRouteHtml(indexHtml, route) {
    return indexHtml
        .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
        .replace(
            /(<meta name="description" content=")[^"]*(" \/>)/,
            `$1${route.description}$2`
        )
        .replace(
            /(<link rel="canonical" href=")[^"]*(" \/>)/,
            `$1${route.canonical}$2`
        )
        .replace(
            /(<meta property="og:title" content=")[^"]*(" \/>)/,
            `$1${route.title}$2`
        )
        .replace(
            /(<meta property="og:description" content=")[^"]*(" \/>)/,
            `$1${route.description}$2`
        )
        .replace(
            /(<meta property="og:url" content=")[^"]*(" \/>)/,
            `$1${route.canonical}$2`
        )
        .replace(
            /(<meta name="twitter:title" content=")[^"]*(" \/>)/,
            `$1${route.title}$2`
        )
        .replace(
            /(<meta name="twitter:description" content=")[^"]*(" \/>)/,
            `$1${route.description}$2`
        );
}

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
                const indexHtml = readFileSync("dist/index.html", "utf8");
                copyFileSync("dist/index.html", "dist/404.html");

                for (const route of seoRoutes) {
                    const routeDirectory = `dist/${route.path}`;
                    mkdirSync(routeDirectory, { recursive: true });
                    writeFileSync(
                        `${routeDirectory}/index.html`,
                        makeRouteHtml(indexHtml, route)
                    );
                }
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
