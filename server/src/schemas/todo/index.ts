import { GraphQLSchema } from 'graphql';
import { Query } from './todo.graphql';
export default new GraphQLSchema({
  query: Query,
});
