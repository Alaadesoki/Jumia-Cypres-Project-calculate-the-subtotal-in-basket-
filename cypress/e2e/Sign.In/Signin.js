import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import SigninPage from '../../Pages/SignInPage'

const signinpage = new SigninPage()
const continueBtn = '[class="mdc-touch-target-wrapper"]'

beforeEach(() => {
    cy.fixture('LoginData').as('user')

})

Given ('Iam in home Page' , () =>{
 
    cy.visit ('/')    
})

When ('click on account button' , () =>{
    signinpage.getaccount_button().click({ force: true })

})

And ('click to sign in' , () =>{
    signinpage.clicksignin_button().click({ force: true })
    cy.wait(10000)
})

And ('type the email' , ()=> {
    cy.get('@user').then(user => {
        signinpage.type_email().type (user.email)
      //  
              ///Cypress recaptcha command
//cy.contains('Verify you are human').click({force:true})
cy.get('[tabindex="0"]').last()
/*.should('be.visible')
.should('not.be.empty')
.then(($iframe) => {
    const $body = $iframe.contents().find('body')

cy.wrap($body)
.get('[type="checkbox"]')
.click({force:true})

})*/
    
    })
       
    })

    Then ('click continue' ,() => {
        cy.wait(3000)
        cy.get(continueBtn).children().first().click();

  });
      
    