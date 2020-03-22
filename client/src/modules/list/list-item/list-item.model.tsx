export const TODO_LIST_MAX_PER_PAGE = 4;

export interface PaginatedTodos {
  todos: {
    items: Todo[];
    skip: number;
    limit: number;
    total: number;
  }
}

export interface TodoItem {
  id: string;
  todoId: string;
  content: string;
  created: string;
  done: boolean;
  index: number;
}

export interface Todo {
  id: string;
  title: string;
  comment: string;
  items: TodoItem[];
}

export interface ListItemComponentModel extends Todo {
  clicked: () => void;
}
