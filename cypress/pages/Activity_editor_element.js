

// class EditActivitypage {


// clickoneditbutton() {
//     cy.wait(2000);
//     cy.get(':nth-child(3) > .dropdown-toggle',{timeout:1000}).click({force:true});
//   }
  
//   clickoneditactivitybutton(){
//     cy.get('#showSequence',{timeout:1000}).click();
    
//    }

//    ClickonFormButton(){
//     cy.get('#formSequenceTabs > :nth-child(3) > a',{timeout:1000}).click();
//     cy.wait(2000);
//    }
//    VerifythePrecondictionform(){ // verfiy the precondiction form is disabled or not
//     cy.get('input[name="A2"]')
//     .should('have.attr', 'disabled');

//     // cy.get('input[name="A2"]')
//     // .should('not.have.attr', 'disabled');

//    }
// enterValueInField(fieldName, text) {
//     cy.get(`input[name="${fieldName}"]`).type(text);
//     cy.get(`input[name="${fieldName}"]`).should('have.value', text);
//     cy.get('.phase__header').click();
// }
   
//    clickonClossButton(){
//     cy.get(':nth-child(2) > .button__inner-wrapper > .button').click();
//    }
//    Verifytheresponseruleicon(){
//     cy.get(':nth-child(5) > .dcr-label').should('be.visible');
// }
// }
//    export default new EditActivitypage();