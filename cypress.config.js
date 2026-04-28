const { fetchEmails } = require('./cypress/Email_verification/gmailHelper');
const { defineConfig } = require("cypress");
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const fs = require("fs");
const path = require("path");
const mammoth = require("mammoth");
const { clear } = require('console');

module.exports = defineConfig({
  projectId: "3m9maq",
  e2e: {
     chromeWebSecurity: false,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 2,
    viewportWidth: 1920,
    viewportHeight: 1200,
    pageLoadTimeout: 100000,

    setupNodeEvents(on, config) {
      const logsPath = path.join(__dirname, 'logs');
      require("cypress-terminal-report/src/installLogsPrinter")(on);

  // console.log("✅ Initializing Allure plugin...");
  // allureWriter(on, config);

      on("task", {
        getEmails(query) {
          return fetchEmails(query);
        },
        fileExists(filePath) {
          return fs.existsSync(filePath);
        },
        readDoc(filePath) {
          const fullPath = path.resolve(filePath);
          const data = fs.readFileSync(fullPath);
          return mammoth
            .extractRawText({ buffer: data })
            .then((result) => result.value)
            .catch((err) => {
              throw new Error(`Error reading .doc file: ${err.message}`);
            });
        },
        getDownloadedFileName(downloadsFolder) {
          const files = fs.readdirSync(downloadsFolder);
          return files.length ? files[0] : null;
        },
        saveLogs({ testName, logs }) {
          const sanitized = testName.replace(/[<>:"\/\\|?*\x00-\x1F]/g, '_');
          const logDir = path.join(__dirname, 'logs');
          if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
          fs.writeFileSync(path.join(logDir, `${sanitized}.log`), logs.join('\n'));
          return null;
        },

        async ensureSiteIsReady({ url, timeout = 120000, interval = 5000 }) {
          const fetch = require('node-fetch');
          const start = Date.now();
          
          while (Date.now() - start < timeout) {
            try {
              const res = await fetch(url, { timeout: 10000 });
              if (res.ok) {
                console.log(`Site ${url} is ready.`);
                return true;
              }
              console.warn(`Site responded with ${res.status}. Retrying...`);
            } catch (e) {
              console.warn(`Fetch failed: ${e.message}. Retrying...`);
            }
            await new Promise((resolve) => setTimeout(resolve, interval));
          }
          throw new Error(`Site ${url} did not respond within ${timeout}ms`);
        }
      });

      const environment = config.env.ENV || "test";
      console.log(`🌍 Running in ENV: ${environment}`);
      console.log(`Use AuthHub login: ${config.env.USE_AUTHHUB_LOGIN}`);

      if (environment === "test") {
        config.baseUrl = "https://wwwtest.dcrgraphs.net:43443/";
        config.repositoryApiBaseUrl = "https://repositorytest.dcrgraphs.net:43443/";
        config.liveApiBaseUrl = "https://livetest.dcrgraphs.net:43443/";
        config.formserverApiBaseUrl = "https://formservertest.dcrgraphs.net:43443/";
      } else if (environment === "prodIIS01") {
        config.baseUrl = "https://dcrgraphs.net:41443/";
        config.repositoryApiBaseUrl = "https://repository.dcrgraphs.net:41443/";
        config.liveApiBaseUrl = "https://live.dcrgraphs.net:41443/";
        config.formserverApiBaseUrl = "https://formserver.dcrgraphs.net:41443/";
      } else if (environment === "prodIIS02") {
        config.baseUrl = "https://dcrgraphs.net:42443/";
        config.repositoryApiBaseUrl = "https://repository.dcrgraphs.net:42443/";
        config.liveApiBaseUrl = "https://live.dcrgraphs.net:42443/";
        config.formserverApiBaseUrl = "https://formserver.dcrgraphs.net:42443/";
      } else if (environment === "demo") {
        config.baseUrl = "https://wwwdemo.dcrgraphs.net:43443/";
        config.repositoryApiBaseUrl = "https://repositorydemo.dcrgraphs.net:43443/";
        config.liveApiBaseUrl = "https://livetest.dcrgraphs.net:43443/";
        config.formserverApiBaseUrl = "https://formserverdemo.dcrgraphs.net:43443/";
      }

      config.specPattern = "cypress/e2e/runner/*.cy.js";

      console.log(`Base URL: ${config.baseUrl}`);
      return config;
    },

    env: {
      BypassRecaptchaHeaderName: "X-Bypass-Recaptcha",
      BypassRecaptchaHeaderValue: "3f8a9c2a45.b8a73d5e-89f10c94e0f6b3f1a4d29a",
      // allure: true,
      TEST_CASE: "ALL",
      USE_AUTHHUB_LOGIN: true,
    }
  },

  // Use both reporters via cypress-multi-reporters
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mocha-junit-reporter, mochawesome",
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/[hash].xml',
      includePending: true,
      suiteTitleSeparatedBy: ".",
      testCaseSwitchClassnameAndName: true,
      overwrite: false,
      attachment: true,
      html: true
    },
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      merge: true, // 
      saveAllAttempts: false 
    },
    cypressTerminalReportReporterOptions: {
      printLogsToConsole: "always",
      printLogsToFile: "always",
      outputRoot: "logs",
      outputTarget: {
        terminal: "logs/terminal-report.json"
      }
    }
  },

  downloadsFolder: "cypress/downloads",
  screenshotOnRunFailure: true,
});
