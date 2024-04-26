import Login from "..//PageObjects/Login";

describe('Manage Account Settings', ()=> {
    it ('Add Email Address', ()=>{
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
        cy.wait(1000)
        cy.get (".cl-avatarImage.cl-userButtonAvatarImage").click()
        cy.wait(1000)
        cy.get(".cl-userButtonPopoverActionButtonText.cl-userButtonPopoverActionButtonText__manageAccount").click()
        cy.wait(1000)
        cy.get("span[data-localization-key='userProfile.start.emailAddressesSection.primaryButton']").click()
        cy.wait(1000)
        cy.get("#emailAddress-field").type("nuh_1214@yahoo.com")
        cy.get(".cl-formButtonPrimary").click()
        cy.get(".cl-formHeaderTitle").should('contain',"Verification code")
    })
    it ('Remove Email Address', ()=>{
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
        cy.wait(1000)
        cy.get (".cl-avatarImage.cl-userButtonAvatarImage").click()
        cy.wait(1000)
        cy.get(".cl-userButtonPopoverActionButtonText.cl-userButtonPopoverActionButtonText__manageAccount").click()
        cy.wait(1000)
        cy.get("body > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1) > div:nth-child(1)").click()
        cy.get(".cl-internal-1trxv31").click()
        cy.get(".cl-formButtonPrimary").click()
        cy.get(".cl-internal-1kii5f8").click()
})
it ('Delete Account', ()=>{
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
cy.wait(1000)
    cy.get (".cl-avatarImage.cl-userButtonAvatarImage").click()
    cy.wait(1000)
    cy.get(".cl-userButtonPopoverActionButtonText.cl-userButtonPopoverActionButtonText__manageAccount").click()
    cy.scrollTo('bottom')
    cy.get("button[aria-label='Delete account']").click()
})
it.only ('Change Password', ()=>{
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
        cy.wait(1000)
        cy.get (".cl-avatarImage.cl-userButtonAvatarImage").click()
        cy.wait(1000)
        cy.get(".cl-userButtonPopoverActionButtonText.cl-userButtonPopoverActionButtonText__manageAccount").click()
        cy.wait(1000)
        cy.get(".cl-profileSectionPrimaryButton.cl-profileSectionPrimaryButton__password").click()
        cy.get("#currentPassword-field").type("workpermit!123")
        cy.get("#newPassword-field").type("workpermit@123")
        cy.get("#confirmPassword-field").type("workpermit@123")
        // cy.get("#signOutOfOtherSessions-field").check().should('be checked')
        cy.get(".cl-formButtonPrimary").click()
})
})