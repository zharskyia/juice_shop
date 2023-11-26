import user from '../fixtures/user.json'
import { login, register } from '../support/helper'
import { faker } from '@faker-js/faker'

user.email = faker.internet.email({ provider: 'fakeMail.com' });
user.password = faker.internet.password();
user.repeatPassword = user.password;
user.securityAnswer = faker.person.firstName('female');

describe('Authorization test cases', () => {

    it('Register new user', () => {

        register(user)
    })

    it('Login user', () => {

        login(user)
    })

    it('Login user with invalid password', () => {

        user.email = faker.internet.email({ provider: 'fakeMail.com' });
        // user.loginName = faker.animal.bear.name

        login(user);
    })
})

