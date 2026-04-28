function shouldRunTest(testId) {
    const param = Cypress.env('TEST_CASE') || 'ALL'; // Default to 'ALL' if TEST_CASE is not set
    return param === testId || param === 'ALL'; // Run the test if IDs match or if 'ALL'
  }
  
  module.exports = { shouldRunTest };
  