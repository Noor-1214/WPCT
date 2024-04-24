class Login{
    setEmail(email){
        cy.get("#identifier-field").type(email);
    }
    clickContinue(){
        cy.get(".cl-formButtonPrimary").click();
    }
    setPassword(password){
        cy.get("#password-field").type(password);
    }
    clickContinue(){
        cy.get(".cl-formButtonPrimary").click();
    }
    verifyLogin(){
        cy.url().should('eq', 'https://workpermitconsultancy.com/')
    }
}

export default Login;