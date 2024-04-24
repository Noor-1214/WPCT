import Login from "..//PageObjects/Login";

describe ("Sign-in", () => {
   
    // Verfiy necessary elements are present
    it ('should display sign-in page elements', () => {
        cy.visit ('https://workpermitconsultancy.com/sign-up#/?redirect_url=https%3A%2F%2Fworkpermitconsultancy.com%2F')
        cy.get('#emailAddress-field').should('exist');
        cy.get('#password-field').should('exist');
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').should('exist');
    });

    // Enter valid credentials and submit
    it.only ('Login using valid credentials', () => {
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
    })
    
    // Enter invalid Email and submit
      it('should display error message for invalid Email', () => {
        cy.visit ('https://workpermitconsultancy.com/sign-in')
        cy.get('#identifier-field').type('invalid_username@gmail.com');
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
        cy.contains("Couldn't find your account.").should('be.visible');
      });

    // Enter invalid Password and submit
    it('should display error message for invalid Password', () => {
        cy.get('#password-field').type('invalid_password');
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
        cy.contains("Couldn't find your account.").should('be.visible');
      });

     // Submit form with blank fields    
      it('should display error messages for blank credentials', () => {
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
    
        // Verify error messages for both fields
        cy.contains('Please enter your email').should('be.visible');
        cy.contains('Please enter your password').should('be.visible');
      });
})
})