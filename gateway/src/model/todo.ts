export interface Todo {
    id: string;
    title: string;
    comment: string;
}

export interface TodoItem {
    id: string;
    todoId: string;
    content: string;
    done: boolean;
    created: Date;
    index: number;
}