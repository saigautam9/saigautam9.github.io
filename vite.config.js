import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps asset paths relative, so the same build works on
// Vercel, Netlify, and GitHub Pages project pages (user.github.io/repo).
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { outDir: "dist" },
});
