import { Todo, TodoItem } from "../model/todo";

export interface TodoService {

    getTodo(id: string): Promise<Todo>;

    getTodoItem(todoId: string, id: string): Promise<TodoItem>;

    listTodos(): Promise<Todo[]>;

    listTodoItems(todoIds: string[]): Promise<TodoItem[]>;

    addTodo(title: string, comment?: string): Promise<string>;

    addTodoItem(todoId: string, title: string): Promise<string>;

    editTodo(id: string, title?: string, comment?: string): Promise<Todo>
    
    editTodoItem(todoId: string, id: string, content?: string, done?: boolean, index?: number): Promise<TodoItem>

    removeTodo(id: string): Promise<void>

    removeTodoItem(todoId: string, id: string): Promise<void>

}