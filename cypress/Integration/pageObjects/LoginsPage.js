class loginsPage
{
    getUsernamePlaceHolder(){
        return cy.get('#user-name')
    }
    getPasswordPlaceHolder(){
        return cy.get('#password')
    }
    getLoginButton(){
        return cy.get('#login-button')
    }
}
export default loginsPage
