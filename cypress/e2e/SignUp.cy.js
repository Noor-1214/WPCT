describe ("Sign-in", () => {
   
    // Verfiy necessary elements are present
    it('should display sign-in page elements', () => {
        cy.visit ('https://workpermitconsultancy.com/sign-up#/?redirect_url=https%3A%2F%2Fworkpermitconsultancy.com%2F')
        cy.get('#emailAddress-field').should('exist');
        cy.get('#password-field').should('exist');
        cy.get('.cl-formButtonPrimary').should('exist');
    });

    // Enter valid credentials and submit
    it('should sign up with valid credentials', () => {
        cy.visit ('https://workpermitconsultancy.com/sign-up#/?redirect_url=https%3A%2F%2Fworkpermitconsultancy.com%2F')
        cy.get('#emailAddress-field').type('valid_username@gmail.com');
        cy.get('#password-field').type('valid_password');
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
        cy.get('.cl-headerTitle.🔒️.cl-internal-1vbdq0x').should('have.text', 'Verify your email');
        cy.wait(2000)
      });
    
    // Enter invalid Email and submit
      it('should display error message for invalid Email', () => {
        cy.visit ('https://workpermitconsultancy.com/sign-up#/?redirect_url=https%3A%2F%2Fworkpermitconsultancy.com%2F')
        cy.get('#emailAddress-field').type('invalid_username@com');
        cy.get('#password-field').type('invalid_password');
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
        cy.contains("Email address must be a valid email address.").should('be.visible');
        cy.wait(2000)
      });

    // Enter invalid Password and submit
    it('should display error message for invalid Password', () => {
        cy.visit('https://workpermitconsultancy.com/sign-up#/?redirect_url=https%3A%2F%2Fworkpermitconsultancy.com%2F')
        cy.get('#emailAddress-field').type('invalid_username@gmail.com');
        cy.get('#password-field').type('invalid');
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();
        cy.contains("Your password must contain 8 or more characters.").should('be.visible');
        cy.wait(2000)
      });

     // Submit form with blank fields    
      it('should display error messages for blank credentials', () => {
        cy.visit('https://workpermitconsultancy.com/sign-up#/?redirect_url=https%3A%2F%2Fworkpermitconsultancy.com%2F')
        cy.get('.cl-formButtonPrimary.🔒️.cl-internal-1fsg6zy').click();

        cy.get('#emailAddress-field').then(($emailField) => {
          const emailValue = $emailField.val();
          cy.get('#password-field').then(($passwordField) => {
            const passwordValue = $passwordField.val();
        if (!emailValue || !passwordValue) {
          cy.get(".cl-headerTitle.🔒️.cl-internal-1vbdq0x").should('have.text', 'Create your account');
        } 
        else {
          cy.get('.cl-headerTitle.🔒️.cl-internal-1vbdq0x').should('have.text','Verify your email')
        }
        cy.wait(2000)
      });
    });
  })
})