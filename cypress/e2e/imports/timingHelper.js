// timingHelper.js

function timeStepCypress(label, fn) {
    const start = performance.now();
  
    // Cypress commands don't return a Promise, so use .then() to handle completion
    cy.wrap(fn()).then(() => {
      const end = performance.now();
      cy.log(`✅ Step "${label}" took ${Math.round(end - start)} ms`);
    }, error => {
      cy.log(`❌ Error in step "${label}": ${error.message}`);
      throw error;
    });
  }
  
  module.exports = {
    timeStepCypress
  };
  