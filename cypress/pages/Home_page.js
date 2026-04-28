import ClickMethod from './generic_method/click_method';

class Home_page {

    clickonOrganization_popup() {
        // cy.get('#selectedOrganization').click();
        return ClickMethod.clickElement('#selectedOrganization');
    }
    clickon1stOrganization() {
        // cy.get('[data-id="1"]', { timeout: 10000 }).click();
        return ClickMethod.clickAndWaitForApi('[data-id="1"]', 'https://repositorytest.dcrgraphs.net:43443/api/organization/1/UpdatePrimaryOrganization', 'Community_OrganizationApi');
    }

    clickon2ndOrganization() {
        // cy.get('[data-id="12"]', { timeout: 10000 }).click();
        return ClickMethod.clickAndWaitForApi('[data-id="12"]', 'https://repositorytest.dcrgraphs.net:43443/api/organization/12/UpdatePrimaryOrganization', 'DCR_OrganizationApi');
    }

    switchOrganization(targetOrg) {
        // Get the selected organization name
        return cy.get('#selectedOrganization').invoke('text').then((orgName) => {
            const trimmedOrgName = orgName.trim();
            cy.log(`Current organization: ${trimmedOrgName}`);

            if (trimmedOrgName === targetOrg) {
                cy.log(`Organization is already ${targetOrg}. No action needed.`);
            } else {
                cy.log(`Current organization is ${trimmedOrgName}. Changing to ${targetOrg}.`);
                return this.clickonOrganization_popup()
                    .then(() => {
                        if (targetOrg === 'Community') {
                            return this.clickon1stOrganization();
                        } else if (targetOrg === 'DCR Solutions Test') {
                            return this.clickon2ndOrganization();
                        }
                    });
            }
        }).then(() => cy.wait(2000, { log: false }));
    }

    clickonFavoriteicon() {
        return cy.get('.itemIcon > .far, .itemIcon > .fas', { timeout: 50000 })
            .first()
            .then(($checkbox) => {
                if ($checkbox.hasClass('fas')) {
                    // If the checkbox is checked
                    return cy.wrap($checkbox).click({ force: true }); // Uncheck it
                } else if ($checkbox.hasClass('far')) {
                    // If the checkbox is unchecked
                    return cy.wrap($checkbox).click({ force: true }); // Check it
                }
            });
    }

    clickonLickicon() {
        return cy.get('.notLiked > .far, .liked > .fas')
            .then(($element) => {
                if ($element.hasClass('notLiked')) {
                    // If the checkbox is in the unliked state
                    return cy.wrap($element)
                        .click({ force: true })
                        .should('have.class', 'liked')
                        .and('not.have.class', 'notLiked');
                } else if ($element.hasClass('liked')) {
                    // If the checkbox is in the liked state
                    return cy.wrap($element)
                        .click({ force: true })
                        .should('have.class', 'notLiked')
                        .and('not.have.class', 'liked');
                }
            });
    }

}

export default new Home_page()


