class Recommendationpage {
  SelectRecommendedScenario() {
    return cy.get('a > strong', { timeout: 1000 }).click();
  }
  clickonOpenbutton() {
    return cy.get('a.btn.btn-primary.executeEvent').click();
  }
  clickonClosebutton() {
    return cy.get('#simFormPreview > .dcrform > .activity-form > .activity-form__footer > :nth-child(2) > .button__inner-wrapper > .button').click();
  }
  ClickonRendercheckbox() {
    return cy.get('#simRender').click({ force: true });
  }
  Scrolltotheexecutebutton(eventId) {
    return cy.wait(2000)
      .get(`li[data-eventid="${eventId}"]`)
      .first() // Ensures only one element is selected
      .scrollIntoView({ block: "center", inline: "nearest" }) // Ensures element is centered
      .should('be.visible'); // Ensures the element is visible after scrolling
  }
  Scroll(Scroll) {
    return cy.get(Scroll).scrollIntoView();
  }
  ClickonExecuteButton(executeButton) {
    return cy.get(executeButton).click();
  }
  EnterValueInField(fieldName, text) {
    return cy.get(fieldName).type(text)
      .get('.phase__header').click();
  }
  VerifyExecutedIcon(VerifyExecutedIcon) {
    return cy.get(VerifyExecutedIcon).should('be.visible');
  }
  clickonexitbutton() {

    return cy.get('#exitSimulation',{timeout:10000}).click();
  }
  clickondiscardbutton() {
    return cy.get('#discardSim').click();
  }
  clickonsaveandexitbutton() {
    return cy.get('#sureLeaveSim').click();
  }
  clickonSimulationdropdown() {
    return cy.get('ul#toolMainMenu>li:nth-of-type(4)>a  ').click({ force: true });
  }
  clickonsimulationHistory() {
    return cy.get('#showSimHistory').click({ force: true });
  }
  clickonrerunbutton() {
    return cy.get('#reRunAllRepSims').click({ force: true });
  }
  entersimulationtitle(title) {
    return cy.get('#simTitle > .form-control').type(title);
  }
}

export default new Recommendationpage()