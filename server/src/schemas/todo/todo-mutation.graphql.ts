import {
  GraphQLObjectType,
  GraphQLString,
  isType,
  GraphQLNonNull,
} from 'graphql';
import { Todo, ToDoItem } from './types.graphql';
import todos, { TodoItem as TodoItemInterface } from './constants';
import { makeId } from '../../utils';

export default new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation',
  fields: () => ({
    addTodoList: {
      type: Todo,
      description: 'Add Todo list item',
      args: {
        title: { type: GraphQLString },
        comment: { type: GraphQLString },
      },
      resolve: (_, args) => {
        if (!args) {
          args = {};
        }
        const newTodo = {
          id: makeId(),
          title: args.title,
          comment: args.comment,
          items: [],
          collab: [],
        };
        todos.push(newTodo);
        return newTodo;
      },
    },
    addTodoItem: {
      type: ToDoItem,
      description: 'Add Todo item',
      args: {
        todoListId: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLString },
      },
      resolve: (_, args) => {
        if (!args) {
          args = {};
        }
        const todoListIndex = todos.findIndex(
          singleItem => singleItem.id === args.todoListId,
        );
        console.log(todoListIndex);

        let newTodoItem = {} as TodoItemInterface;
        if (todoListIndex > -1) {
          newTodoItem = {
            index: todos.length - 1,
            content: args.content,
            done: false,
            created: new Date().toISOString(),
            end: '',
          };
          todos[todoListIndex].items.push(newTodoItem);
        }

        return newTodoItem;
      },
    },
  }),
});
