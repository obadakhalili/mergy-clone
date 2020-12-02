const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const { promises: fs } = require("fs");

(async () => {
  try {
    console.log("Buidling ...");

    const postCSS = await fs.readFile("src/styles.css");
    const result = await postcss([
      tailwindcss,
      autoprefixer,
      csso
    ]).process(postCSS, { from: "src/styles.css", to: "public/styles/index.css" });
    await fs.writeFile("public/styles/index.css", result.css);
    
    console.log("The CSS file was built successfully");
  } catch (e) {
    console.log("An error occurred while building the CSS file", e);
    process.exit(1);
  }
})();
