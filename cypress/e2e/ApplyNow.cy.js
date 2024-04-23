describe ('Apply Now Page test', () =>{
    it.only('sign-in', ()=>{
        cy.visit('https://workpermitconsultancy.com/')
        cy.wait(1000)
        cy.xpath("//a[normalize-space()='Sign in']").click()
        cy.get("#identifier-field").type('wpct.123@gmail.com')
        cy.get(".cl-formButtonPrimary").click()
        cy.wait(1000)
        cy.get("#password-field").type('wpct1234')
        cy.get(".cl-formButtonPrimary").click()
        cy.wait(500)
        cy.url().should('eq', 'https://workpermitconsultancy.com/')
        cy.wait(3000)
        cy.get("a:nth-child(3)").click()
        cy.wait(3000)
        cy.get("#termsAndConditions").check().should('be.checked')
        cy.wait(3000)
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)").click()
        cy.url().should('eq', 'https://workpermitconsultancy.com/apply-now')
        cy.wait(1000)
        cy.get('#firstName').should('exist');
        cy.get('#lastName').should('exist');
        cy.get('#email').should('exist');
        cy.get('#dob').should('exist');
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
        cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').click()
      })
})