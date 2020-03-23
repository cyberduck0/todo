import { NavBar } from './components/navbar';

export class Page {
    navBar = new NavBar();

    static goToPage(pageName) {
        this.navBar.goTo(pageName);
    }

    static goToUrl(url) {
        cy.visit(url);
    }

    static getMainContent() {
        return cy.get(this.mainContent)
    }

    // TODO does not work correctly
    static getSelectorOfElem(element) {
        return Cypress.SelectorPlayground.getSelector(element)
    }
    
}

Page.mainContent = '[class*="content-container"]'