import user from '../fixtures/user.json'
import { feedback } from '../support/helper'
import FeedbackPage from '../support/pages/FeedbackPage';

describe('User feedback', () => {

    it('Feedback test', () => {

        feedback(user)

        FeedbackPage.getcaptcha().invoke('text').then((captchaText) => {
            const result = eval(captchaText);
            FeedbackPage.getcaptchaResult().type(result);

            FeedbackPage.getcustomerFeedbackSubmitButton().click()
            cy.contains("Thank you so much for your amazing 5-star feedback!")
        })


    })
})