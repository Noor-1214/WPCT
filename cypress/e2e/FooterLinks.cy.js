describe ('Footer Social Media Links Tests', () => {
    it ('should navigate to Facebook page', () => {
        cy.visit ('https://workpermitconsultancy.com/')
        cy.scrollTo('bottom')
        cy.get(".flex.items-center.my-2:nth-child(1)").click()
        cy.url().should('not.eq', 'https://www.facebook.com/');

        cy.wait(1000)
        cy.get(".flex.items-center.my-2:nth-child(2)").click()
        cy.url().should('not.eq', 'https://www.twitter.com/');

        cy.wait(1000)
        cy.get(".flex.items-center.my-2:nth-child(3)").click()
        cy.url().should('not.eq', 'https://www.linkedin.com/');

        cy.wait(1000)
        cy.get(".flex.items-center.my-2:nth-child(4)").click()
        cy.url().should('not.eq', 'https://www.instagram.com/');
    })
})
