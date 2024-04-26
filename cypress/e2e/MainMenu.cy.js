import Login from "..//PageObjects/Login";

describe ('Testing the Main Menu', ()=>{
    before('test',()=>{
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
    })
    it ('Check the presence of Elements in header', ()=>{
        cy.visit("https://workpermitconsultancy.com/")
        cy.wait(3000)
        cy.get("a:nth-child(3)").click()  //Home
        cy.url().should('contains',"https://workpermitconsultancy.com/")
        cy.wait(3000)
        cy.get("a:nth-child(3)").click() //Apply Now
        cy.url().should('contains',"https://workpermitconsultancy.com/apply-now") 
        cy.wait(3000)
        cy.get("a:nth-child(2)").click() //About Us
        cy.url().should('contains',"https://workpermitconsultancy.com/about-us") 
        cy.wait(3000)
        cy.get("body > div:nth-child(2) > header:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > a:nth-child(4)").click() //Dashboard
        cy.url().should('contains',"https://workpermitconsultancy.com/dashboard") 
        cy.wait(3000)
        cy.get(".cl-avatarImage.cl-userButtonAvatarImage").click()
    })
})