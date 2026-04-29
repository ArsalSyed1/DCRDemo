import tests from '../imports/imports.js';
import config from '../../configuration/config.json';
const { password, username } = config;

describe('Apps tab Menu ', () => {

  beforeEach(() => {  
    cy.clearCookies(); // optional, to avoid conflicts
    cy.loginWithSession(username, password, 'DCR Solutions Test');
    cy.log('Logged in via session:', `${username}-DCR Solutions Test-${Cypress.spec.name}`);
  });
  describe('0068: Verify the App Menu buttons functionaltiy..', () => {
    it('Verify the App Menu', function () {
      // if (!shouldRunTest('0068')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests.open_the_graph('graph_id_1')
        .then(() => {
          return tests.clickonapp();
        })
        .then(() => {
          return tests.Click_On_DCR_Rule_Assistance();
        });

    });
  });
});