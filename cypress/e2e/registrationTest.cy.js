import user from '../fixtures/user.json'
import { register } from '../support/helper';
import { faker } from '@faker-js/faker'

user.email = faker.internet.email({ provider: 'fakeMail.com' });
user.password = faker.internet.password();
user.repeatPassword = user.password;
user.securityAnswer = faker.person.firstName('female');

describe('Registration test cases', () => {

    it('Registration', () => {

        register(user)
    })
})