const fs = require('fs');
const path = require('path');
const { DOMParser, XMLSerializer } = require('xmldom');

// Paths
const reportPath = path.join(__dirname, 'cypress', 'results', 'report.xml');
const logsDir = path.join(__dirname, 'logs');

// Path for merged-report.json
const mergedReportPath = path.join(__dirname, 'merged-report.json');

// Read XML
const xmlString = fs.readFileSync(reportPath, 'utf-8');
const doc = new DOMParser().parseFromString(xmlString, 'application/xml');

const testcases = doc.getElementsByTagName('testcase');

for (let i = 0; i < testcases.length; i++) {
  const testcase = testcases[i];
  const testName = testcase.getAttribute('name');
  if (!testName) continue;
  // Log file name: testName.log (sanitize for filesystem)
  const safeName = testName.replace(/[<>:"\/\\|?*\x00-\x1F]/g, '_');
  const logFile = path.join(logsDir, `${safeName}.log`);
  if (fs.existsSync(logFile)) {
    const logContent = fs.readFileSync(logFile, 'utf-8');
    // Remove existing <system-out>
    const existing = testcase.getElementsByTagName('system-out');
    for (let j = existing.length - 1; j >= 0; j--) {
      testcase.removeChild(existing[j]);
    }
    // Add new <system-out> with CDATA
    const systemOut = doc.createElement('system-out');
    const cdata = doc.createCDATASection(logContent);
    systemOut.appendChild(cdata);
    testcase.appendChild(systemOut);
  }
}

// --- Merge logs into merged-report.json ---
if (fs.existsSync(mergedReportPath)) {
  const mergedReport = JSON.parse(fs.readFileSync(mergedReportPath, 'utf-8'));
  function attachLogsToTests(suites) {
    if (!suites) return;
    for (const suite of suites) {
      if (suite.tests && Array.isArray(suite.tests)) {
        for (const test of suite.tests) {
          if (test.title) {
            const safeName = test.title.replace(/[<>:"\/\\|?*\x00-\x1F]/g, '_');
            const logFile = path.join(logsDir, `${safeName}.log`);
            if (fs.existsSync(logFile)) {
              const logContent = fs.readFileSync(logFile, 'utf-8');
              test.logs = logContent;
            }
          }
        }
      }
      // Recursively process nested suites
      if (suite.suites && Array.isArray(suite.suites)) {
        attachLogsToTests(suite.suites);
      }
    }
  }
  if (mergedReport.results && Array.isArray(mergedReport.results)) {
    for (const result of mergedReport.results) {
      if (result.suites && Array.isArray(result.suites)) {
        attachLogsToTests(result.suites);
      }
    }
  }
  fs.writeFileSync(mergedReportPath, JSON.stringify(mergedReport, null, 2), 'utf-8');
  console.log('Log content merged into merged-report.json.');
}

// Write back XML
const xmlOut = new XMLSerializer().serializeToString(doc);
fs.writeFileSync(reportPath, xmlOut, 'utf-8');
console.log('Log content merged into JUnit XML.');
