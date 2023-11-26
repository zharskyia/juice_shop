import user from '../fixtures/user.json'
import { order } from '../support/helper'
import { faker } from '@faker-js/faker'

user.email = faker.internet.email({ provider: 'fakeMail.com' });
user.password = faker.internet.password();
user.repeatPassword = user.password;
user.securityAnswer = faker.person.firstName('female');
user.countryName = faker.location.countryName;
user.phoneNumber = faker.internet.phoneNumber;
user.zipCode = faker.number.zipCode;
user.deliveryStreet = faker.location.deliveryStreet;
user.cityName = faker.internet.cityName;
user.regionName = faker.location.regionName;
user.cardNumber = faker.internet.cardNumber;

describe('Order product test cases', () => {

    it('Order product', () => {

        order(user);
    })
})