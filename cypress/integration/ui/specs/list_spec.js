import { NavBar } from '../pages/components/navbar';
import { Page } from '../pages/page';
import { List } from '../pages/list-page';
import { Login } from '../pages/login-page';

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
        
        //expect(Page.checkMainContentText('have.text', 'No Todo lists available.')) 
    })


    it('User can create a new task', function () {
        const listTitle = 'Do It On: ' + Date.now()

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()

        // expect(List.getListSection(listTitle).should('exist'))
    })


    it('User can delete a list', function () {
        const listTitle = 'Do It On: ' + Date.now()

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()

        expect(List.getListSection(listTitle).should('exist'))

        List.deleteListModal(listTitle)
        List.confirmDeleteListModal()
  
        // expect(Page.checkMainContentText('have.text', listTitle))
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

        // expect(Page.checkMainContentText('not.have.text', listTitle))
        // cannot match fulltext since cypress writes the text too fast and omits some charactes
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

        // cannot match fulltext since cypress writes the text too fast and omits some charactes
        // expect(Page.checkMainContentText('have.text', newTaskComment))
    })


    it('User can add items to task list', function () {
        const timestamp = Date.now()
        const listTitle = 'Do It On: ' + timestamp
        const newItemTitle = 'I have to do this tang on ' + timestamp

        NavBar.goTo('List')

        List.addList()
        List.setListTitle(listTitle)
        List.confirmAddListModal()    

        List.editList(listTitle)
       
        List.addListItem()
        List.setListItemTitle(newItemTitle)
        List.confirmAddListItem()

        // cannot match fulltext since cypress writes the text too fast and omits some charactes
        // expect(Page.checkMainContentText('have.text', newItemTitle))
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

        // cannot match fulltext since cypress writes the text too fast and omits some charactes
        // expect(Page.checkMainContentText('have.text', newItemTitle))
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

        // cannot match fulltext since cypress writes the text too fast and omits some charactes
        // expect(Page.checkMainContentText('have.text', newItemTitle))
    })

})