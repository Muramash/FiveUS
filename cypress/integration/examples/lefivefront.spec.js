/// <reference types="cypress" />


describe("LeFiveFront Testing", () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/main')
    })
    it("Visit site", function(){
        cy.viewport(2400,1600)
        cy.wait(2000);
        // cy.scrollTo("0","500", { easing:"swing" })
        cy.get(".slick-dots>li").eq(1).click()
        cy.wait(500)
        cy.get(".slick-dots>li").eq(0).click()
        cy.wait(500)
        cy.get(".slick-dots>li").eq(2).click()
        cy.wait(500)
        // cy.viewport(500,877)
        // cy.wait(3000);
        // cy.scrollTo("0","500", { easing:"swing" })
        // cy.viewport("samsung-s10");
        // cy.wait(3000);
        cy.viewport("iphone-x");
        // cy.wait(3000);
        // cy.scrollTo("0","1000");
    })
})


  