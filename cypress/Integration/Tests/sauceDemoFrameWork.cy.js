/// <reference types ='cypress'/>

import loginsPage from '../pageObjects/LoginsPage'
import productsPage from '../pageObjects/ProductsPage'

const data = require('../../fixtures/SauceDemo.json')

describe('Sauce Demo Framework',()=>{
    it('Sorting Ability',()=>{
        const LoginPage = new loginsPage()
        const ProductPage = new productsPage()
        
        cy.visit(Cypress.env('url'))
        LoginPage.getUsernamePlaceHolder().type(data.userName[0])
        LoginPage.getPasswordPlaceHolder().type(data.passWord)
        LoginPage.getLoginButton().click()
        ProductPage.getSortButton().select('Name (A to Z)')
        ProductPage.verifyElementAreSortedInAZ()
        ProductPage.getSortButton().select('Name (Z to A)')
        ProductPage.verifyElementAreSortedInZA()
    
        
        

    })
})