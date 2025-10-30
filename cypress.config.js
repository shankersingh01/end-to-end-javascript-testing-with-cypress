const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  projectId: 'v34v29',
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalPromptCommand: true,
  },
});
