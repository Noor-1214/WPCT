describe ('Footer Links Tests', () => {
    it ('should navigate to specified page', () => {
        cy.visit ('https://workpermitconsultancy.com/')
        cy.scrollTo('bottom')
        cy.xpath("//a[normalize-space()='Information Security']").click()
        cy.url().should('eq', 'https://workpermitconsultancy.com/information-security');

        cy.wait(1000)
        cy.xpath("//a[normalize-space()='Cookie Policy']").click()
        cy.url().should('eq', 'https://workpermitconsultancy.com/cookie-policy');

        cy.wait(1000)
        cy.xpath("//a[normalize-space()='Privacy Policy']").click()
        cy.url().should('eq', 'https://workpermitconsultancy.com/privacy-policy');

        cy.wait(1000)
        cy.xpath("//a[normalize-space()='Term & Conditions']").click()
        cy.url().should('eq', 'https://workpermitconsultancy.com/terms-and-conditions');
    })
})
