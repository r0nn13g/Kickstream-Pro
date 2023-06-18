const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        aliases: {
          // Define your custom aliases here
          // For example:
          "@components": "./components",
        },
      },
    },
  ],
};
