import { defineConfig } from "next";

export default defineConfig({
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/BiellavitaWebsite", // Add your repo name here for GitHub Pages
  assetPrefix: "/BiellavitaWebsite/", // This is necessary for GitHub Pages
});
