import { GraphQLSchema } from 'graphql';
import { Query } from './todo.graphql';
import mutation from './todo-mutation.graphql';

export default new GraphQLSchema({
  query: Query,
  mutation,
});
