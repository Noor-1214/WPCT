import Login from "..//PageObjects/Login";

describe ('Signing out of website', ()=> {
    it.only ('signout', ()=> {
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

    it ('Delete Account', ()=>{
        cy.visit ('https://workpermitconsultancy.com/')
        cy.wait(1000)
        cy.xpath("//a[normalize-space()='Sign in']").click()
        cy.get("#identifier-field").type('noor.huda@sequenx.com')
        cy.get(".cl-formButtonPrimary").click()
        cy.wait(1000)
        cy.get("#password-field").type('dont@me28')
        cy.get(".cl-formButtonPrimary").click()
        cy.wait(1000)
        cy.get (".cl-avatarImage.cl-userButtonAvatarImage").click()
        cy.wait(1000)
        cy.get(".cl-userButtonPopoverActionButtonText.cl-userButtonPopoverActionButtonText__manageAccount").click()
        cy.scrollTo('bottom')
        cy.get("button[aria-label='Delete account']").click()
    })
})