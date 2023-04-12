const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://tinnova-teste-qa.vercel.app',
    videoCompression: false,
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 720
  },
});
