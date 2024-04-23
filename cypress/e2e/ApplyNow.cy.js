describe ('Apply Now Page test', () =>{
    it ('should display page elements',() => {
        cy.visit('https://workpermitconsultancy.com/apply-now')
        cy.get('#firstName').should('exist');
        cy.get('#lastName').should('exist');
        cy.get('#email').should('exist');
        cy.get('#dob').should('exist');
        cy.get('#currentCountry').should('exist');
        cy.get("input[placeholder='Your Contact Number']").should('exist');
        cy.get('#nationality').should('exist');
        cy.get('#maritalStatus').should('exist');
        cy.get('#requestType').should('exist');
        cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)').should('exist');
        cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').should('exist');
    })
})