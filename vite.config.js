import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
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
