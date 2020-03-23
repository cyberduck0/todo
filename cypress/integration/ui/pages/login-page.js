import { Button } from '../pages/components/base/button';
import { InputField } from '../pages/components/base/inputField';

import { Page } from '../pages/page';

export class Login extends Page {

    static setLoginEmail(email) {
        this.emailInputSelector.getInputField()
        .clear()
        .type(email)
    }

    static setPassword(password) {
        this.passwordInputSelector.getInputField()
        .clear()
        .type(password)
    }

    static submitLogin() {
        this.submitButton.click()
    }

    static interceptAlertMessageOnLoginSubmit(message) {
        const stub = cy.stub()

        cy.on ('window:alert', stub)
        this.submitButton.getButton()
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith(message)      
        })
    }
}

// selectors section
Login.submitButton = new Button('span:contains("Submit")')

Login.emailInputSelector = new InputField('label:contains("Email")~div>input')
Login.passwordInputSelector = new InputField('label:contains("Password")~div>input')
