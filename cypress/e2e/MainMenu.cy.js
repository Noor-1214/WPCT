describe ('Testing the Main Menu', ()=>{
    it ('Check the presence of Home in header', ()=>{
        cy.visit("https://workpermitconsultancy.com/")
        cy.wait(2000)
        cy.get("a:nth-child(3)").click()
        cy.wait(2000)
        cy.url().should('contains',"https://workpermitconsultancy.com/")
    })

    it.only ('Check the presence of About Us in header', ()=>{
        cy.visit("https://workpermitconsultancy.com/")
        cy.wait(2000)
        cy.get(".text-md.font-Poppins.tracking-widest.font-semibold.leading-6.text-myBlue.active").click()
        cy.wait(2000)
        cy.get("h1[class=' text-center font-playfairDisplay tracking-wide 2xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold mb-4 text-myBlue w-[100%]']").should('contains',"About Us")
    })

    it.only ('Check the presence of Apply Now in header', ()=>{
        cy.visit("https://workpermitconsultancy.com/")
        cy.wait(2000)
        cy.get("a:nth-child(3)").click()
        cy.wait(2000)
        cy.url().should('contains',"https://workpermitconsultancy.com/apply-now")
    })

    it ('Check the presence of Dashboard in header', ()=>{
        cy.visit("https://workpermitconsultancy.com/")
        cy.wait(2000)
        cy.get("body > div:nth-child(2) > header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > a:nth-child(4)").click()
        cy.wait(2000)
        cy.url().should('contains',"https://workpermitconsultancy.com/dashboard")
    })
})