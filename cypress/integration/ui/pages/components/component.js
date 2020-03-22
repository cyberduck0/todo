export class Component {
    constructor(selector) {
        this.selector = selector;
    }

    get element() {
        return cy.get(this.selector)
    }
}