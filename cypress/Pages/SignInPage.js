const account_button = ':nth-child(1) > .trig'
const signin_button = '#dpdw-login-box > .inbox > .-pam > .btn'
const email = '#input_identifierValue'

class SigninPage {
    getaccount_button () {return cy.get (account_button)}

    clicksignin_button () {return cy.get(signin_button)}

    type_email () {return cy.get(email)}
    
}

export default SigninPage