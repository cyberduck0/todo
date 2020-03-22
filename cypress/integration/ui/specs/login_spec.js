import { Page } from "../pages/page"
import { Login } from "../pages/login-page"

const validEmail = 'dude@gmail.com'
const invalidEmail = 'dude2@gmail.com'
const incorrectPassword = 'jirkakara'


describe('User Login', function () {

    it(`User is logged in with an email ${validEmail} and on mainpage`, function () {
        Page.goToUrl('')

        Login.setLoginEmail(validEmail)

        Login.submitLogin()

        expect(Page.getMainContent().should('exist'))
    })


    it(`Use non-whitelisted email ${invalidEmail} for login`, function () {
        Page.goToUrl('')

        Login.setLoginEmail(invalidEmail)

        // TODO do better
        expect(Login.interceptAlertMessageOnLoginSubmit('Wrong password dude/et'))
    })


    it('Use invalid password', function () {
        Page.goToUrl('')

        Login.setLoginEmail(validEmail)

        Login.setPassword(incorrectPassword)

        // TODO do better
        expect(Login.interceptAlertMessageOnLoginSubmit('Wrong password dude/et'))
    })
})
