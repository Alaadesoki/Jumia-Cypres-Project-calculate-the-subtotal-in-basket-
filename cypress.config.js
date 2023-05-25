const { defineConfig } = require("cypress");

module.exports = defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    execTimeout: 12000,
    taskTimeout: 12000,
    viewportHeight: 1500,
    viewportWidth: 1500,

    retries: { "runMode": 0, "openMode": 0 },
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    e2e: {
       baseUrl: "https://www.jumia.com.eg/",
        "specPattern": "cypress/e2e/**/*.{feature,features}",
    setupNodeEvents(on, config) {
        return require('./cypress/Plugins/index')(on, config),
            on('task', {
                log(message) {
                    console.log(message)
                    return null
                },
            })
    },
  },
});