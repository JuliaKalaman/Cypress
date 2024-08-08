const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    env: {
      BASE_URL: 'https://www.saucedemo.com/',
      USER_NAME: 'standard_user',
      USER_PASSWORD: 'secret_sauce',
    },
    // "baseUrl": "https://www.saucedemo.com/",
    // "baseUrl": "https://qauto.forstudy.space/",
    // "defaultCommandTimeout": 5000,
    // "fixturesFolder": "cypress/fixtures",
    // "specPattern": "**/*.cy.{js,jsx,ts,tsx}",
    // "viewportWidth": 1280,
    // "viewportHeight": 720,
    // "screenshotsFolder": "cypress/screenshots",
    // "videosFolder": "cypress/videos",


    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
