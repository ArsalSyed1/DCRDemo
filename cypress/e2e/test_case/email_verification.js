import EmailVerification from '../../pages/email_verification';
export const verifyEmail = () => {
  const emailVerification = new EmailVerification();

  return emailVerification.getEmails().then((emails) => {
    const firstEmail = emails[0];
    cy.log(`📧 Email Subject: ${firstEmail.subject || 'No Subject'}`);
    return cy.wrap(emailVerification.decodeEmailBody(firstEmail)).then((decodedBody) => {
      // Optional: Write to file for debugging
      cy.writeFile('cypress/downloads/email_body.html', decodedBody);
      // Extract the Complete Registration link
      return emailVerification.extractRegistrationLink(decodedBody).then((registrationLink) => {

        if (!registrationLink) {
          cy.log('❌ Registration link not found in email body.');
          return;
        }
        cy.log(`🔗 Opening Registration Link: ${registrationLink}`);

        // Visit in same tab
        return emailVerification.visitRegistrationLink(registrationLink).then(() => {
          cy.wait(5000);
          cy.get('body').should('exist');
          cy.log('✅ Registration page opened successfully.');
        });
      });
    });
  });
};
