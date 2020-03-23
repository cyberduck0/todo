import { NavBar } from '../pages/components/navbar';
import { Page } from '../pages/page';
import { List } from '../pages/list-page';
import { Login } from '../pages/login-page';
import { Helpers } from '../../../support/helpers'

const validEmail = 'dude@gmail.com'

// TODO add beter taskTitle creation handling

describe('Tasks Manipulation', function () {


    beforeEach('User is successfully logged in', function () {
        Page.goToUrl('')

        Login.setLoginEmail(validEmail)
        Login.submitLogin()
    })


    after('Make sure all tasks are deleted', function () {
        // refresh; should be handled better
        Page.goToUrl('localhost:3000/list')
        Login.submitLogin()
        
        List.deleteAllLists()
        
        expect(Page.getMainContent().invoke('text').should('contain', 'No Todo lists available.'))
    })


    it('User can create a new list', function () {
        const listTitle = 'Do It On: ' + Date.now()

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()

        expect(Page.getMainContent().invoke('text').should('contain', listTitle))
    })


    it('User can delete a list', function () {
        const listTitle = 'Do It On: ' + Date.now()

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()

        List.deleteListModal(listTitle)
        List.confirmDeleteListModal()
  
        expect(Page.getMainContent().invoke('text').should('not.contain', listTitle))
    })


    it('User can edit a task title', function () {
        const listTitle = 'Do It On: ' + Date.now()
        const newListTitle = 'Edited Task Title On: ' + Date.now()

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()      

        List.editList(listTitle)
        List.setNewListTitle(newListTitle)

        expect(List.getListTitleInputField().invoke('val').should('contain', newListTitle))
        expect(List.getListTitleInputField().invoke('val').should('not.contain', listTitle))
    })


    it('User can edit a task comment', function () {
        const listTitle = 'Do It On: ' + Date.now()
        const timestamp = Date.now()
        const newTaskComment = 'Here is a new comment to this task, and it has been produced on ' + timestamp

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()
        
        List.editList(listTitle)
        List.setNewListComment(newTaskComment)

        expect(List.getListCommentInputField().invoke('val').should('contain', newTaskComment))
    })
})


describe('Items Manipulation', function () {


    beforeEach('User is successfully logged in', function () {
        Page.goToUrl('')

        Login.setLoginEmail(validEmail)
        Login.submitLogin()
    })


    after('Make sure all tasks are deleted', function () {
        // refresh; should be handled better
        Page.goToUrl('localhost:3000/list')
        Login.submitLogin()
        
        List.deleteAllLists()
        
        expect(Page.getMainContent().invoke('text').should('contain', 'No Todo lists available.'))
    })

    

    it('User can add items to list', function () {
        const timestamp = Date.now()
        const listTitle = 'Do It On: ' + timestamp
        const itemTitle = 'I have to do this tang on ' + timestamp

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()    

        List.editList(listTitle)
       
        List.addListItem()
        List.setListItemTitle(itemTitle)
        List.confirmAddListItem()

        expect(List.getItemRowByIndex(0).invoke('val').should('contain', itemTitle))
    })


    it('User can change item title', function () {
        const timestamp = Date.now()
        const listTitle = 'Do It On: ' + timestamp
        const itemTitle = 'I have to do this tang on ' + timestamp
        const newIemTitle = 'I have to postpone on ' + timestamp

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()    

        List.editList(listTitle)
       
        List.addListItem()
        List.setListItemTitle(itemTitle)
        List.confirmAddListItem()

        List.changeItemTitle(itemTitle, newIemTitle)

        expect(List.getItemRowByIndex(0).invoke('val').should('contain', newIemTitle))
        expect(List.getItemRowByIndex(0).invoke('val').should('not.contain', itemTitle))
    })


    it('User can delete item', function () {
        const timestamp = Date.now()
        const listTitle = 'Do It On: ' + timestamp
        const itemTitle = 'I have to do this tang on ' + timestamp

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()    

        List.editList(listTitle)
       
        List.addListItem()
        List.setListItemTitle(itemTitle)
        List.confirmAddListItem()

        List.deleteItem(itemTitle)

        expect(List.getItemsTable().invoke('text').should('not.contain', itemTitle)) 
    })


    it('User can sort tasks by drag and drop', function () {
        const timestamp = Date.now()
        const listTitle = 'Do It On: ' + timestamp
        const items = ['I have to do this tang no. 1', 'I have to do this tang no. 2', 'I have to do this tang no. 3']
        const itemsString = items.join("{enter}")

        const itemIndexToMove = Helpers.getRandomInt(0, items.length-1) // -1 since len returns from 1 to X
        const indexToMoveTo = Helpers.getRandomInt(1, items.length)

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()    

        List.editList(listTitle)
       
        List.addListItem()
        List.setListItemTitle(`${itemsString}`)
        List.confirmAddListItem()

        List.dragItem(items[itemIndexToMove], indexToMoveTo)

        expect(List.getItemRowByIndex(indexToMoveTo-1).invoke('val').should('equal', items[itemIndexToMove])) // index-1 since its handled as array, with index starting with 0
    })
})
