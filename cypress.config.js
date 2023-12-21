const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  projectId: "6gd1w8",

  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
