import BasePage from "./BasePage";

class LoginPage extends BasePage {

    constructor() {
        super();
        this.elements.registerAccountButton = '#loginButton';
        this.elements.emailControl = '#emailControl';
        this.elements.userPasswordControl = '#passwordControl';
        this.elements.repeatPasswordControl = '#repeatPasswordControl';
        this.elements.securityAnswerControl = '#securityAnswerControl';
        this.elements.registerButton = '#registerButton';
    }

    visit() {
        cy.visit('#/login');
    }

    getEmailControl() {
        return cy.get(this.elements.emailControl);
    }
    getPasswordControl() {
        return cy.get(this.elements.userPasswordControl);
    }
    getRepeatPasswordControl() {
        return cy.get(this.elements.repeatPasswordControl);
    }
    getSecurityAnswerControl() {
        return cy.get(this.elements.repeatSecurityAnswerControl);
    }
    getRegisterButtonControl() {
        return cy.get(this.elements.repeatRegisterButtonControl);
    }

    fillLoginFields(user) {
        cy.log('Fill in login form...');
        cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click({ force: true });
        cy.get('#emailControl').type(user.email);
        cy.get('#passwordControl').type(user.userPassword);
        cy.get('#repeatPasswordControl').type(user.repeatPassword);
        cy.get('#securityAnswerControl').type(user.securityAnswer);
    }
}

export default new LoginPage();


