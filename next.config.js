/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages doesn't support optimized images
  },
  basePath: "/BiellavitaWebsite", // Add your repo name here for GitHub Pages
  assetPrefix: "/BiellavitaWebsite/", // This is necessary for GitHub Pages
};
module.exports = nextConfig;
