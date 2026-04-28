class Computationpage {
  clickOnExecuteButton() {
    return cy.get("a.btn.btn-primary.executeEvent").click({ timeout: 1000 });
  }
  verifyswinlane() {
    cy.wait(1000, { log: false });
    return cy
      .get("#traceCostSwimLanes > label")
      .trigger("wheel", { deltaY: 500 })
      .then(() => {
        // Simulate scrolling down

        return cy.get("#traceCostSwimLanes > label").should("exist");
      });
  }

  verifyEffectLogs(expectedText) {
    return cy
      .get(".itemExtras > div > label")
      .should("exist")
      .then(($label) => {
        const labelValue = $label.text();
        cy.log("Label value:", labelValue);
        expect(labelValue).to.include(
          expectedText,
          `Label does not contain "${expectedText}"`
        );
      });
  }

  validateSimulationComputationValues() {
    cy.get("#executeLogList li").then(($rows) => {

      let ceiling, floor, duration;

      $rows.each((_, row) => {
        const title = Cypress.$(row).find(".itemTitle").text().trim();
        const computation = Cypress.$(row)
          .find(".itemExtras label")
          .text()
          .replace("Computations:", "")
          .trim();

        if (title === "Ceiling") ceiling = computation;
        if (title === "Floor") floor = computation;
        if (title === "DurationX") duration = computation;
      });

      cy.log("Ceiling:", ceiling);
      cy.log("Floor:", floor);
      cy.log("DurationX:", duration);

      const ceilingDays = parseInt(ceiling.match(/P(\d+)D/)[1]);
      const floorDays = parseInt(floor.match(/P(\d+)D/)[1]);
      const durationDays = parseInt(duration.match(/P(\d+)D/)[1]);

      // Rule 1: Ceiling and Floor differ by 1
      expect(Math.abs(ceilingDays - floorDays)).to.eq(1);

      // Rule 2: DurationX matches either
      expect([ceilingDays, floorDays]).to.include(durationDays);
    });
  }
}
export default new Computationpage();
