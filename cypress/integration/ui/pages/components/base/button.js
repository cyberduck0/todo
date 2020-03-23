import { Component } from '../component';

export class Button extends Component {
    constructor(selector) {
        super(selector);
    }

    getButton() {
        return cy.get(this.selector)
    }

    click() {
        cy.get(this.selector).click()
    }

}