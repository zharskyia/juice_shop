import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    constructor() {
        super();
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
        this.elements.securityAnswerField = '#securityAnswerControl';
    }

    visit() {
        cy.visit('#/register');
    }
    getEmailField() {
        return cy.get(this.elements.emailField)
    }
    getPasswordField() {
        return cy.get(this.elements.passwordField)
    }
    getRepeatPasswordField() {
        return cy.get(this.elements.repeatPasswordField)
    }
    getSecurityAnswerField() {
        return cy.get(this.elements.securityAnswerField)
    }

    fillRegistrationFields(user) {
        cy.log('Fill in registration form...');

        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.userPassword);
        this.getRepeatPasswordField().type(user.repeatPassword);
        this.getSecurityAnswerField().type(user.securityAnswer);
    }
}

export default new RegistrationPage();