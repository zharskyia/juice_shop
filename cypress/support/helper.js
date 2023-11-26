export function register(user) {
    cy.log('Open registration page');
    cy.visit('#/register');
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click({ force: true });

    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.repeatPassword);
    cy.get('.mat-select-arrow-wrapper.ng-tns-c130-11').click();
    cy.get('#mat-select-0').click;
    cy.get('.mat-option-text').contains('Mother\'s maiden name?').click({ force: true });
    cy.get('#securityAnswerControl').type(user.securityAnswer);
    cy.get('#registerButton').click()
    cy.getCookies('Object').should('exist');
}

export function login(user) {
    cy.log('Open login page');
    cy.visit('#/login');
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click({ force: true });

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('User authorization');
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('#loginButton').click();

}

export function order(user) {
    cy.log('Order product');

    cy.visit('#/register');
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click({ force: true });

    cy.get('#emailControl').type(user.email);
    cy.get('#passwordControl').type(user.password);
    cy.get('#repeatPasswordControl').type(user.repeatPassword);
    cy.get('.mat-select-arrow-wrapper.ng-tns-c130-11').click();
    cy.get('#mat-select-0').click;
    cy.get('.mat-option-text').contains('Mother\'s maiden name?').click({ force: true });
    cy.get('#securityAnswerControl').type(user.securityAnswer);
    cy.get("a[aria-label='dismiss cookie message']").click({ force: true });
    cy.get('#registerButton').click()

    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('#loginButton').click();
    cy.log('Authorize user');

    cy.contains(' Apple Pomace ').parents('[class="mat-grid-tile-content"]').find('[aria-label="Add to Basket"]').click();
    cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('not.equal', '0')

    cy.get('.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted').click();
    cy.get('#checkoutButton').click();
    cy.get('.mat-focus-indicator.btn.btn-new-address.mat-button.mat-raised-button.mat-button-base.mat-primary').click();

    cy.get('#mat-input-7').type('Ukraine');
    cy.get('#mat-input-8').type('Andrii');
    cy.get('#mat-input-9').type('0506622536');
    cy.get('#mat-input-10').type('00001');
    cy.get('#address').type('Hrushevskogo str.');
    cy.get('#mat-input-12').type('Kyiv');
    cy.get('#mat-input-13').type('Kyiv region');
    cy.get('#submitButton').click();

    cy.get('.mat-radio-outer-circle').click({ force: true });
    cy.get('.mat-focus-indicator.btn.btn-next.mat-button.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click();

    cy.get('#mat-radio-41.mat-radio-button.mat-accent').click({ force: true });
    cy.get('.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary').click();

    cy.get('#mat-expansion-panel-header-0').click();
    cy.get('#mat-input-14').type('Andrii Zharskyi');
    cy.get('#mat-input-15').type('1111 2222 3333 4444');
    cy.get('#mat-input-16').select(10);
    cy.get('#mat-input-17').select(10);
    cy.get('#submitButton').click();
    cy.get('.mat-radio-inner-circle').click({ force: true });
    cy.get('.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary').click();
    cy.get('#checkoutButton').click();

    cy.get('.confirmation').contains('Thank you for your purchase!');
    cy.get('.fa-layers-counter.fa-layers-top-right.fa-3x.warn-notification').should('contain', "0");
}

export function feedback(user) {
    cy.log('Feedback');

    cy.visit('#/contact');
    cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click({ force: true })
    cy.get('#comment').type('ТОП товар за свої гроші!');
    cy.get('[aria-label="Slider for selecting the star rating"]').click('bottomRight');

    cy.get('#captchaControl').click();
    // cy.get('#submitButton').click();
}
