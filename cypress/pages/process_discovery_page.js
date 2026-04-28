
class ProcessDiscoveryPage {   
    clickonApp() {
        return cy.get(':nth-child(5) > .dropdown-toggle', { timeout: 1000 }).click();
    }
    clickonProcessdicoveryApp() {
        return cy.wait(5000)
            .then(() => cy.get('#extensionsMenu > :nth-child(2) > a', { timeout: 1000 }).click());
    }
    clikonfindrulebutton() {
        return cy.wait(15000)
            .then(() => cy.get("input[value='Find rules']", { timeout: 1000 }).click());
    }
    clickoncrossbutton() {
        return cy.wait(5000)
            .then(() => cy.get('#panel_92_PLUGIN > .panelTitle > .far', { timeout: 1000 }).click());
    }
    clickonDCRPublisher() {
        return cy.wait(5000)
            .then(() => cy.get('#extensionsMenu > :nth-child(4) > a', { timeout: 1000 }).click());
    }
    clickonXlsheetbutton() {
        return cy.wait(2000)
            .then(() => cy.get('#convertIntoDocx', { timeout: 1000 }).click());
    }
    Verifdocfile() {
        const fileName = '1924013.docx';
        const downloadsFolder = Cypress.config('downloadsFolder');
        const filePath = `${downloadsFolder}/${fileName}`;
        return cy.task('fileExists', filePath).should('be.true')
            .then(() => cy.task('readDoc', filePath))
            .then((content) => {
                // expect(content).to.include('Expense Report using Model');
            });
    }

// Verifdocfile(){ 
//     cy.wait(10000); // wait for the file to be downloaded
//     cy.task('getDownloadedFileName', 'docx').then((fileName) => {
//         const downloadsFolder = Cypress.config('downloadsFolder');
//         const filePath = `${downloadsFolder}/${fileName}`;
//         cy.task('fileExists', filePath).should('be.true');   
//         cy.task('readDoc', filePath).then((content) => {
//             // expect(content).to.include('Expense Report using Model');         
//         });
//     });
// }


    verifyModelRecommendation() {
        return cy.wait(5000)
            .then(() => cy.get('#modelRecommendationResult > .table > tbody > :nth-child(1) > :nth-child(2)', { timeout: 1000 }).should('exist'));
    }

}
export default new ProcessDiscoveryPage()
