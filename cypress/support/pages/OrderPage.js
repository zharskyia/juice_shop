import BasePage from "./BasePage";

class OrderPage extends BasePage {

    constructor() {
        super();
        this.elements.countryName = '#mat-input-7';
        this.elements.userName = '#mat-input-8';
        this.elements.phoneNumber = '#mat-input-9';
        this.elements.zipCode = '#mat-input-10';
        this.elements.deliveryStreet = '#address';
        this.elements.cityName = '#mat-input-12';
        this.elements.regionName = '#mat-input-13';
        this.elements.userName = '#mat-input-14';
        this.elements.cardNumber = '#mat-input-15';
    }

    visit() {
        cy.visit('#/search');
    }
    getCountryName() {
        return cy.get(this.elements.countryName);
    }
    getUserName() {
        return cy.get(this.elements.userName);
    }
    getPhoneNumber() {
        return cy.get(this.elements.phoneNumber);
    }
    getZipCode() {
        return cy.get(this.elements.zipCode);
    }
    getDeliveryStreet() {
        return cy.get(this.elements.deliveryStreet);
    }
    getCityName() {
        return cy.get(this.elements.cityName);
    }
    getRegionName() {
        return cy.get(this.elements.regionName);
    }
    getUserName() {
        return cy.get(this.elements.userName);
    }
    getCardNumber() {
        return cy.get(this.elements.cardNumber);
    }

    fillOrderFields(order) {
        cy.log('Fill in order forms...');
        this.getCountryName().type(user.countryName);
        this.getUserName().type(user.userName);
        this.getPhoneNumber().type(user.phoneNumber);
        this.getZipCode().type(user.zipCode);
        this.getDeliveryAddress().type(user.deliveryAddress);
        this.getCityName().type(user.cityName);
        this.getRegionName().type(user.regionName);
        this.getUserName().type(user.userName);
        this.getCardNumber().type(user.cardNumber);

    }
}

export default new OrderPage();