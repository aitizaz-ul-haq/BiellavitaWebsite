// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export", // Export static HTML
  images: {
    unoptimized: true, // GitHub Pages doesn't support optimized images
  },
  basePath: isProd ? "/BiellavitaWebsite" : "", // Add your repo name here for GitHub Pages
  assetPrefix: isProd ? "/BiellavitaWebsite/" : "", // This is necessary for GitHub Pages
};
