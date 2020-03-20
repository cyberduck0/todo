export const TODO_LIST_MAX_PER_PAGE = 4;

export interface PaginatedTodos {
  todos: {
    items: ListItem[];
    skip: number;
    limit: number;
    total: number;
  }
}

export interface ListItemItems {
  content: string;
  done: boolean;
  created: string;
  assigned?: string;
}

export interface ListItem {
  id: string;
  title: string;
  comment: string;
  items: ListItemItems[];
}

export interface ListItemComponentModel extends ListItem {
  clicked: () => void;
}