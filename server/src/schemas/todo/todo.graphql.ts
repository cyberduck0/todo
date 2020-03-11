import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import todos from './constants';
import { Todo } from './types.graphql';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    todo: {
      type: GraphQLList(Todo),
      resolve: () => todos,
    },
    todoItem: {
      type: Todo,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (_, { id }) => todos.find(todo => todo.id === id),
    },
  }),
});
