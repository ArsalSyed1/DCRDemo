class generic_search_page {

    ClickonProcessbutton() {
      return  cy.get('a#showCategoriesSequenceList>span:nth-of-type(3)',{timeout:10000}).click({timeout: 1000})
    }


    EnterProcessName(processName) {
        cy.get('#genericSearch')
          .focus()  // Keep the field focused
          .type(processName );
    }
    
    ClickOnSearchButton() {
        cy.get('i.fas.fa-search').click({timeout: 1000})
    }

    ClickOnEyeIcon() {
        cy.get('a[href="/Tool?id=1924013"][title="View Process"]').invoke("removeAttr", "target").click({timeout: 1000})
    }

    ClickOnEditPRocessIcon() {
      cy.get('a[href="/Tool?id=1932988"][title="Edit Process"]').invoke("removeAttr", "target").click({timeout: 1000})

    }

        
    visit(url) {
      return cy.visit(url);
    }
}

export default new generic_search_page()
  

