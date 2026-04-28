import dragMethod from '../pages/generic_method/drag_method';
import { logStep } from '../support/e2e';
class Activitypage {

  clickOnactivitybutton(activity) {
   return cy.get(activity, { timeout: 1000 }).should('be.visible').click();
  }

  clickAndDragActivityBoxToRight(offsetX, offsetY) {
    const selector = 'path[data-type="activityBody"][title="A1"]';
   return dragMethod.clickAndDragElement(selector, offsetX, offsetY);
  }

 addlinesbetweenactivities(eventId,eventId2) {
    // Click on Activity2
      // return clickmethod.clickElement(`path[data-type="activityBody"][title="${eventId}"]`)    
    return cy.get(`path[data-type="activityBody"][event-id="${eventId}"]`, { timeout: 1000 })    
      .should('exist')
      .click({ force: true })
      // Right-click on Activity1
      .then(() => {
        return cy.get(`path[data-type="activityBody"][event-id="${eventId2}"]`, { timeout: 1000 })
          .should('exist')
          .rightclick({ force: true });
      })
     
  }
  addResponseline(eventId,eventId2) {
    // Click on Activity2
      // return clickmethod.clickElement(`path[data-type="activityBody"][title="${eventId}"]`)    
    return cy.get(`path[data-type="activityBody"][title="${eventId}"]`, { timeout: 1000 })    
      .should('exist')
      .click({ force: true })
      // Right-click on Activity1
      .then(() => {
        return cy.get(`path[data-type="activityBody"][title="${eventId2}"]`, { timeout: 1000 })
          .should('exist')
          .rightclick({ force: true });
      })
      // Click the #cresponse option
      .then(() => {
        return cy.get('#cresponse', { timeout: 1000 })
          .should('be.visible')
          .click();
      });
  }
  
  clickonactivitybox() {
    return cy.get('path[data-type="activityBody"][title="Activity0"]', { timeout: 1000 })
      .should('exist') // Ensure Activity1 exists
      .click({ force: true });
  }
  selectdatatypedropdown(Value) {
   return cy.get(':nth-child(7) > .row > .col-lg-10 > .form-control',{ timeout: 1000 }).then($select => {
      const options = $select.find('option');
      const values = [];
      options.each((_, option) => {
        values.push(option.value);
      });
      cy.log('Available values:', values);
     return cy.wrap($select).select(Value, { force: true }); // Select the value by name
    });

  }

  // textOption_DisplaySize(SelectedValue) {
  //   cy.wait(2000);
  //   cy.get('#formDisplaySize',{ timeout: 1000 }).select(SelectedValue);
  //   cy.get(':nth-child(7) > .row > #editDataValue > .far').click();
   
  // }
  
  textOption_DisplaySize(SelectedValue) {
    cy.wait(2000);

    // Get the currently selected value's text
   return cy.get('#formDisplaySize', { timeout: 1000 }).invoke('val').then((currentValue) => {
        if (currentValue) {
            // If a value is already selected, click the edit icon
           return cy.get(':nth-child(7) > .row > #editDataValue > .far').click();
        } else {
            // Otherwise, select the provided value
          return  cy.get('#formDisplaySize', { timeout: 1000 }).select(SelectedValue);
        }
    });
}





  textOption_Placeholder(EnterValue) {
  return  cy.get('#dataTypePlaceHolder', { timeout: 1000 }).clear().type(EnterValue);
  }

  TextOption_HintText(TextOption_HintText) {
   return cy.get('#dataTypeHintText',{ timeout: 1000 }).clear().type(TextOption_HintText);
  }
  
  ClickonDoneButton() {
  return  cy.get('#setUpDataType',{ timeout: 1000 }).click();  }
  clickoneditbutton() {
    cy.wait(2000);
   return cy.get(':nth-child(3) > .dropdown-toggle',{timeout:1000}).click({force:true});
  }
  
  clickoneditactivitybutton(){
   return cy.get('#showSequence',{timeout:1000}).click();
    
   }
  Selectactivity(){
   return cy.get('[data-id="Activity0"]').click()
    .then(() => {return cy.get('#formSequenceTabs > :nth-child(3) > a').click()})
    .then(() =>{ return cy.get('#formSequenceClose').click()});
  }
   Reload(){
    logStep('Reloading activity page');
   return cy.reload();
   }
   

}

export default new Activitypage();
