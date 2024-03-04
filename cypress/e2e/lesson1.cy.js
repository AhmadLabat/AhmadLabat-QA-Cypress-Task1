/// < reference types="cypress"/>
describe ("lesson 1",()=>{
    it("validate that the user can login to facebook",()=>{
        cy.visit ("https://www.facebook.com/login/device-based/regular/login/");
        cy.get("#email").type("ahamdlabat44@gmail.com")
        cy.get("#pass").type("0599789263159123")
        //cy.get("#loginbutton").click()
        cy.get('[data-testid="royal_login_button"]').click()
        cy.get('.fcb').click()



    })
})