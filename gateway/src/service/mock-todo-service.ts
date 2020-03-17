import { TodoService } from './todo-service';
import { Todo, TodoItem, PaginatedList } from '../model/todo';

export class MockTodoService implements TodoService {

    private todos: Todo[] = [];

    private todoItems: { [key: string]: TodoItem[] } = {};

    getTodo(id: string): Promise<Todo> {
        return Promise.resolve(this.todos.find(t => t.id === id));
    }

    getTodoItem(todoId: string, id: string): Promise<TodoItem> {
        const items = this.todoItems[todoId];
        if (items === undefined) throw new Error("Unknown Todo ID");
        return Promise.resolve(items.find(i => i.id === id));
    }

    listTodos(skip: number = 0, limit: number = 20): Promise<PaginatedList<Todo>> {
        const end = skip + limit;
        return Promise.resolve({
            items: this.todos.slice(skip, end),
            limit, skip, total: this.todos.length
        });
    }

    listTodoItems(todoId: string[]): Promise<TodoItem[]> {
        return Promise.resolve(todoId.flatMap(todoId => {
            return this.todoItems[todoId]
                ? this.todoItems[todoId]
                : [];
        }));
    }

    addTodo(title: string, comment: string = ''): Promise<string> {
        const id = this.newId();
        const todo: Todo = { id, title, comment };
        this.todos = [...this.todos, todo];
        this.todoItems[id] = [];
        return Promise.resolve(id);
    }

    addTodoItem(todoId: string, content: string): Promise<string> {
        const currentItems = this.todoItems[todoId];
        if (currentItems === undefined) throw new Error("Unknown Todo ID")
        const id = this.newId();
        const index = currentItems.reduce((max, item) => item.index >= max ? max + 1 : max, 0);
        const newItem: TodoItem = { id, todoId, content, created: new Date, done: false, index };
        this.todoItems[todoId] = [...currentItems, newItem];
        return Promise.resolve(id);
    }

    editTodo(id: string, title?: string, comment?: string): Promise<Todo> {
        this.todos = this.todos.map(todo => todo.id === id
            ? this.partialUpdate(todo, { title, comment })
            : todo
        );
        
        return this.getTodo(id);
    }

    editTodoItem(todoId: string, id: string, content?: string, done?: boolean, index?: number): Promise<TodoItem> {
        const items = this.todoItems[todoId];
        if (items === undefined) throw new Error("Unknown Todo ID");
        this.todoItems[todoId] = items.map(todoItem => todoItem.id === id
            ? this.partialUpdate(todoItem, { content, done, index })
            : todoItem
        );
        
        return this.getTodoItem(todoId, id);
    }

    async removeTodo(id: string): Promise<void> {
        this.todos = this.todos.filter(t => t.id !== id);
    }

    async removeTodoItem(todoId: string, id: string): Promise<void> {
        const items = this.todoItems[todoId];
        if (items === undefined) throw new Error("Unknown Todo ID");
        this.todoItems[id] = items.filter(ti => ti.id !== id);
    }

    private partialUpdate<T>(item: T, update: Partial<T>): T {
        let copy = { ...item };
        Object.keys(update).forEach(key => {
            if (update[key] !== undefined) copy[key] = update[key];
        })
        
        return copy;
    }

    private newId(): string {
        return Math.floor(Math.random() * 10e10).toString();
    }

}