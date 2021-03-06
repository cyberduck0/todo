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
