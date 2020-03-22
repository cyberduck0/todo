import { NavBar } from './components/navbar';

export class Page {
    navBar = new NavBar();

    static goToPage(pageName) {
        this.navBar.goTo(pageName);
    }

    static goToUrl(url) {
        cy.visit(url);
    }

    static checkMainContentText(option, text) {
        cy.get(this.mainContent).invoke('text').then((extractedText) => {
            extractedText.should(option, text)
        })
    }
}

Page.mainContent = '[class*="content-container"]'