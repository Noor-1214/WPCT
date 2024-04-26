import Login from "..//PageObjects/Login";

describe ("Sign-in", () => {
  beforeEach("URL", ()=>{
    cy.visit ('https://workpermitconsultancy.com/sign-in')
  })
   
    // Verfiy necessary elements are present
    // it ('should display sign-in page elements', () => {
    //     cy.visit ('https://workpermitconsultancy.com/sign-up#/?redirect_url=https%3A%2F%2Fworkpermitconsultancy.com%2F')
    //     cy.get('#emailAddress-field').should('exist');
    //     cy.get('#password-field').should('exist');
    //     cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').should('exist');
    // });

    // Enter invalid Email and submit
    it('should display error message for invalid Email', () => {
      cy.get('#identifier-field').type('invalid_username@gmail.com');
      cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
      cy.contains("Couldn't find your account.").should('be.visible');
      cy.wait(2000)
    });

  // Enter invalid Password and submit
  it('should display error message for invalid Password', () => {
    cy.get('#identifier-field').type('noor.huda@sequenx.com');
      cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
      cy.get('#password-field').type('invalid_password');
      cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > p:nth-child(2)").should('have.text','Password is incorrect. Try again, or use another method.');
      cy.wait(2000)
    });

   // Submit form with blank fields    
    it('should display error messages for blank credentials', () => {
      cy.get(".cl-formButtonPrimary").click();
  
      // Verify error messages for both fields
      cy.get("label[for='identifier-field']").should('be.visible');
      cy.wait(2000)
    });

    // Enter valid credentials and submit
    it('Login using valid credentials', () => {
      cy.visit("https://workpermitconsultancy.com/sign-in")
      cy.wait(1000)
      cy.fixture('WPCT').then((data) =>{
      const ln = new Login();
      ln.setEmail(data.email)
      ln.clickContinue();
      ln.setPassword(data.password)
      ln.clickContinue();
      ln.verifyLogin();
    })
    
  })  
})