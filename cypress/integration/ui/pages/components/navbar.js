import { Component } from "./component";

export class NavBar extends Component {
    listsNavItem = '[href="/list"]'

    constructor() {
        super('[id="app-sidebar"]');
    }

    static goTo(name) {
        cy.get(`span:contains("${name}")`)
        .click()
    }
}


