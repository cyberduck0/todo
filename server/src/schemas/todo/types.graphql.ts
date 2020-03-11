import { GraphQLNonNull, GraphQLString, GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLInt } from "graphql";

export const ToDoItem = new GraphQLObjectType({
  name: 'TodoItem',
  fields: {
    index: { type: GraphQLNonNull(GraphQLInt) },
    content: { type: GraphQLString },
    done: { type: GraphQLBoolean },
    created: { type: GraphQLString },
    end: { type: GraphQLString },
  },
});

export const Todo = new GraphQLObjectType({
  name: 'Todo',
  fields: {
    id: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    comment: { type: GraphQLString },
    items: { type: GraphQLList(ToDoItem) },
    collab: { type: GraphQLList(GraphQLString) },
  },
});
