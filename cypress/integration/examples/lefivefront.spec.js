/// <reference types="cypress" />


describe("LeFiveFront Testing", () =>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Visit site", function(){
        cy.get(".filterOpaque").click()
        cy.viewport(2400,1600)
        cy.wait(3000);
        cy.scrollTo("0","500")
        cy.get(".sliderContainer")
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(2).click({scrollBehavior: false})
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(1).click({scrollBehavior: false})
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(0).click({scrollBehavior: false})
        cy.scrollTo("0","1450")
        cy.wait(2000)
        cy.scrollTo("0","2300")
        cy.wait(2000)
        cy.scrollTo("0","3300")
        cy.wait(2000)
        cy.get(".filterOpaque").click()
        cy.wait(1000)
        cy.get(".burgerButton").click()
        cy.wait(1500)
        cy.contains("Le Five Facilities").click()
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE West Sacramento").click()
        cy.wait(1500);
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE Other").click()
        cy.wait(1500);
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE Foo").click()
        cy.wait(1500);
        cy.get(".burgerButton").click()
        cy.contains("Adult Soccer").click()
        cy.wait(1000);
        cy.contains("Adult Leagues").click({force: true})
        cy.wait(2000)
        cy.scrollTo("0","1450")
        cy.wait(2000)
        cy.scrollTo("0","2300")
        cy.wait(2000)
        cy.get(".mainLogo").click()


        cy.get(".filterOpaque").click()
        cy.viewport(1600,1200)
        cy.wait(3000);
        cy.scrollTo("0","500")
        cy.get(".sliderContainer")
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(2).click({scrollBehavior: false})
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(1).click({scrollBehavior: false})
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(0).click({scrollBehavior: false})
        cy.scrollTo("0","1700")
        cy.wait(2000)
        cy.scrollTo("0","2500")
        cy.wait(2000)
        cy.scrollTo("0","3500")
        cy.wait(2000)
        cy.get(".filterOpaque").click()
        cy.wait(1000)
        cy.get(".burgerButton").click()
        cy.wait(1500)
        cy.contains("Le Five Facilities").click()
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE West Sacramento").click()
        cy.wait(1500);
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE Other").click()
        cy.wait(1500);
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE Foo").click()
        cy.wait(1500);
        cy.get(".burgerButton").click()
        cy.contains("Adult Soccer").click()
        cy.wait(1000);
        cy.contains("Adult Leagues").click({force: true})
        cy.wait(2000)
        cy.scrollTo("0","1700")
        cy.wait(2000)
        cy.scrollTo("0","2500")
        cy.wait(2000)
        cy.get(".mainLogo").click()

        cy.get(".filterOpaque").click()
        cy.viewport(980,830)
        cy.wait(3000);
        cy.scrollTo("0","1000")
        cy.get(".sliderContainer")
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(2).click({scrollBehavior: false, force: true})
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(1).click({scrollBehavior: false, force: true})
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(0).click({scrollBehavior: false, force: true})
        cy.scrollTo("0","2000")
        cy.wait(2000)
        cy.scrollTo("0","3000")
        cy.wait(2000)
        cy.scrollTo("0","4300")
        cy.wait(2000)
        cy.get(".filterOpaque").click()
        cy.wait(1000)
        cy.get(".burgerButton").click()
        cy.wait(1500)
        cy.contains("Le Five Facilities").click()
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE West Sacramento").click()
        cy.wait(1000)
        cy.scrollTo("0","1000")
        cy.wait(1500);
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE Other").click()
        cy.wait(1000)
        cy.scrollTo("0","1000")
        cy.wait(1500);
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE Foo").click()
        cy.wait(1000)
        cy.scrollTo("0","1000")
        cy.wait(1500);
        cy.get(".burgerButton").click()
        cy.contains("Adult Soccer").click()
        cy.wait(1000);
        cy.contains("Adult Leagues").click({force: true})
        cy.wait(2000)
        cy.scrollTo("0","2000")
        cy.wait(2000)
        cy.scrollTo("0","3000")
        cy.wait(2000)
        cy.get(".mainLogo").click()
        
        cy.get(".filterOpaque").click()
        cy.viewport("samsung-s10")
        cy.wait(3000);
        cy.scrollTo("0","500")
        cy.wait(2000)
        cy.scrollTo("0","1300")
        cy.get(".sliderContainer")
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(2).click({scrollBehavior: false})
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(1).click({scrollBehavior: false})
        cy.wait(1000)
        cy.get(".slick-dots>li").eq(0).click({scrollBehavior: false})
        cy.scrollTo("0","1450")
        cy.wait(2000)
        cy.scrollTo("0","2300")
        cy.wait(2000)
        cy.scrollTo("0","3300")
        cy.wait(2000)
        cy.get(".filterOpaque").click()
        cy.wait(1000)
        cy.get(".burgerButton").click()
        cy.wait(1500)
        cy.contains("Le Five Facilities").click()
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE West Sacramento").click()
        cy.wait(1000)
        cy.scrollTo("0","1000")
        cy.wait(1500);
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE Other").click()
        cy.wait(1000)
        cy.scrollTo("0","1000")
        cy.wait(1500);
        cy.get(".MuiFormControl-root").click()
        cy.wait(1000);
        cy.contains("LE FIVE Foo").click()
        cy.wait(1000)
        cy.scrollTo("0","1000")
        cy.wait(1500);
        cy.get(".burgerButton").click()
        cy.contains("Adult Soccer").click()
        cy.wait(1000);
        cy.contains("Adult Leagues").click({force: true})
        cy.wait(2000)
        cy.scrollTo("0","1450")
        cy.wait(2000)
        cy.scrollTo("0","2300")
        cy.wait(2000)
        cy.get(".mainLogo").click()
    })
})


  