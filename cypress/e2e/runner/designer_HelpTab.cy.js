import { shouldRunTest } from '../../pages/generic_method/runalltest.js';
import tests from '../imports/imports.js';
import config from '../../configuration/config.json';
const { password, username } = config;

describe('Help tab Menu ', () => {

    beforeEach(() => {
        cy.clearCookies(); // optional, to avoid conflicts
        cy.loginWithSession(username, password, 'DCR Solutions Test');
        tests.open_the_graph('graph_id_1');
        tests.Click_On_Help_tab();
        cy.log('Logged in via session:', `${username}-${'DCR Solutions Test'}-${Cypress.spec.name}`);
    });
    describe('0068: Verify the App Menu buttons functionaltiy..', () => {
        it('Verify the Start tour Menu', function () {
            // if (!shouldRunTest('0068')) this.skip(); // Skip this test if TEST_CASE does not match
            return tests.Click_On_startDCRTour();

        });
        it('Verify the About DCR Menu', function () {
            // if (!shouldRunTest('0068')) this.skip(); // Skip this test if TEST_CASE does not match
            return tests.Click_On_AboutDCR();
        });
        it('Verify the DCR Doc Menu', function () {
            // if (!shouldRunTest('0068')) this.skip(); // Skip this test if TEST_CASE does not match
            return tests.Click_On_DCRDoc();


        });
    });
});