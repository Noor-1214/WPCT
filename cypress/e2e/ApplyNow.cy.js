import Login from "..//PageObjects/Login";

describe ('Apply Now Page test', () =>{
    it('sign-in', ()=>{
      cy.visit("https://workpermitconsultancy.com/")
      cy.get("body > div:nth-child(2) > header:nth-child(1) > nav:nth-child(1) > div:nth-child(5) > a:nth-child(1)").click()
      cy.wait(1000)
      cy.fixture('WPCT').then((data) =>{
      const ln = new Login();
      ln.setEmail(data.email)
      ln.clickContinue();
      ln.setPassword(data.password)
      ln.clickContinue();
      ln.verifyLogin();
        cy.get("a:nth-child(3)").click()
        cy.wait(1000)
        cy.get("#termsAndConditions").check().should('be.checked')
        cy.wait(1000)
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
})