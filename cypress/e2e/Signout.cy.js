import Login from "..//PageObjects/Login";

describe ('Signing out of website', ()=> {
    it ('signout', ()=> {
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
        cy.wait(1000)
        cy.get (".cl-avatarImage.cl-userButtonAvatarImage").click()
        cy.wait(1000)
        cy.get(".cl-userButtonPopoverActionButtonText.cl-userButtonPopoverActionButtonText__signOut").click()
        cy.wait(1000)
        cy.url().should('contains',"https://workpermitconsultancy.com/")
    })
    })
})