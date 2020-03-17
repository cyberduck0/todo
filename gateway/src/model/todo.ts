export interface PaginatedList<T> {
    items: T[];
    skip: number;
    limit: number;
    total: number;
}

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