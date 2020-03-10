/* eslint-disable @typescript-eslint/no-var-requires */

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./public/index.html",
    "./src/**/*.vue",
    "./node_modules/vue-tailwind/src/themes/default/**/*.js",
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("tailwindcss"),
          require("autoprefixer"),
          ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
        ],
      },
    },
  },
  lintOnSave: false,
};
