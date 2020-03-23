import { Button } from "./components/base/button"
import { InputField } from "./components/base/inputField"
import { Page } from '../pages/page';


export class List extends Page {

    static addList() {
        this.addListButton.click()
    }


    static setListTitle(listTitle) {
        this.getListTitleInputField()
            .type(listTitle)
    }


    static confirmAddListModal() {
        this.confirmAddListButton.click()
    }


    static deleteAllLists() {
        this.deleteListButton.getButton()
            .each($el => {
                $el.click()
            })

        /* not ideal since it should be within modal that is produced when clicked on 'deleteTaskButtonSelector', 
        but CY clicks all delete buttons, layering confirm modals above themselves, and they are then not accessible */
        this.confirmDeleteListButton.getButton()
            .each($el => {
                $el.click()
            })
    }


    static getListSectionByTitle(listTitle) {
        return cy.get(`[class*="MuiPaper-root"]:contains("${listTitle}")`)
    }


    static deleteListModal(listTitle) {
        this.getListSectionByTitle(listTitle).within(() => {
            this.deleteListButton.click()
        })
    }


    static confirmDeleteListModal() {
        this.confirmDeleteListButton.click()
    }


    static editList(listTitle) {
        this.getListSectionByTitle(listTitle).within(() => {
            this.editListButton.click()
        })
    }


    static getListTitleInputField() {
        return this.taskTitleInput.getInputField()
    }


    static getListCommentInputField() {
        return this.editListCommentInput.getInputField()
    }

    
    static setNewListTitle(newTitle) {
        this.getListTitleInputField()
            .clear()
            .type(newTitle)
    }


    static setNewListComment(newComment) {
        this.getListCommentInputField()
            .clear()
            .type(newComment)
    }


    static addListItem() {
        this.addTaskItemsButton.click()
    }


    static setListItemTitle(listItemTitle) {
        this.listItemTitleInput.getInputField()
            .type(listItemTitle)
    }


    static confirmAddListItem() {
        this.confirmAddTaskItemButton.click()
    }


    static getItemsTable() {
        return cy.get(this.itemsTableSelector)
    }


    static getItemSectionByTitle(itemTitle) {
        return cy.get(`[class="sortable-item"]:has([value="${itemTitle}"])`)
      }

    static changeItemTitle(oldTitle, newTitle) {
        this.getItemSectionByTitle(oldTitle).within(() => {
            cy.get('div>input')
            .clear()
            .type(newTitle)
        })
    }


    static deleteItem(itemTitle) {
        this.getItemSectionByTitle(itemTitle).within(() => {
            this.deleteItemButton.click()
        })
    }


    static dragItem(itemToDrag, rowIndex) {
        cy.log(`Moving "${itemToDrag}" to the row no. ${rowIndex}`)
        this.getItemSectionByTitle(itemToDrag).find(this.dragSelector) // what is dragged
            .drag(`div.sortable-list > div:nth-child(${rowIndex})`) // where it's dropped
    }


    static getItemRowByIndex(index) {
        return cy.get(this.itemsRowsSelector).eq(index)
    }
}

// input field selectors
List.emailInput = new InputField('label:contains("Email")~div>input')
List.taskTitleInput = new InputField('label:contains("Title")~div>input')
List.taskCommentInput = new InputField('label:contains("Comment")')
List.editListCommentInput = new InputField('label:contains("Comment")~div>input')
List.listItemTitleInput = new InputField('label:contains("Items")~div>textarea')

// button selectors
List.addListButton = new Button('span:contains("Add List")')
List.confirmAddListButton = new Button('span:contains("Add Todo")')
List.deleteListButton = new Button('[title="Remove list"]')
List.confirmDeleteListButton = new Button('span:contains("Yes")')
List.cancelDeleteListButton = new Button('span:contains("Cancel")')
List.editListButton = new Button('span:contains("Edit List")')
List.addTaskItemsButton = new Button('[title="Add items"]')
List.confirmAddTaskItemButton = new Button('span:contains("Add todo items")')
List.deleteItemButton = new Button('[title="Remove item"]')

List.dragSelector = '[class="sortable-item-drag"]'
List.itemsTableSelector = '[class="sortable-list"]'
List.itemsRowsSelector = '[class="todo-item-container"] > div [class="MuiInputBase-input MuiInput-input"]'


// modals selectors
// List.addListModal = '[class="add-list-form"]'
// List.deleteListModal = '[class="modal-inner"]'