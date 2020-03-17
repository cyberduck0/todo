
import { ApolloGateway, LocalGraphQLDataSource } from '@apollo/gateway';
import { buildFederatedSchema, ServiceDefinition } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import { importSchema } from 'graphql-import';
import path from 'path';

import { Todo as ModelTodo, TodoItem as ModelTodoItem } from './src/model/todo';
import { Resolvers, Todo, TodoItem } from './src/generated/graphql/todos';
import { TodoService } from './src/service/todo-service';
import { MockTodoService } from './src/service/mock-todo-service';

(async function() {

    const todosGQLService: ServiceDefinition = {
        name: 'todos',
        typeDefs: gql(await importSchema(path.join(__dirname, "../schema/todos.graphql"))),
    }

    const usersGQLService: ServiceDefinition = {
        name: 'users',
        typeDefs: gql(await importSchema(path.join(__dirname, "../schema/users.graphql"))),
    }

    const todoService: TodoService = new MockTodoService;

    const serTodoItem: (item: ModelTodoItem) => TodoItem = ({id, todoId, content, created, done, index}) => {
        return { id, todoId, content, created: created.toISOString(), done, index };
    }

    const serTodo: (todo: ModelTodo, items: ModelTodoItem[]) => Todo = ({id, title, comment}, items) => {
        return { id, title, comment, items: items.map(serTodoItem) };
    } 

    const resolvers: Resolvers = {
        Query: {
            todo: async (_, { id }) => {
                const todo = await todoService.getTodo(id);
                const items = await todoService.listTodoItems([id]);
                return serTodo(todo, items);
            },
            todos: async (_, { skip, limit }) => {
                const todos = await todoService.listTodos(skip, limit);
                const items = await todoService.listTodoItems(todos.items.map(t => t.id));
                return {
                    items: todos.items.map(t => serTodo(t, items.filter(i => i.todoId === t.id))),
                    skip: todos.skip,
                    limit: todos.limit,
                    total: todos.total,
                };
            }
        },
        Mutation: {
            addTodo: async (_, { title, comment }) => {
                const id = await todoService.addTodo(title, comment);
                const todo = await todoService.getTodo(id);
                const items = await todoService.listTodoItems([id]);
                return serTodo(todo, items);
            },

            addTodoItem: async (_, { todoId, content }) => {
                const id = await todoService.addTodoItem(todoId, content);
                const item = await todoService.getTodoItem(todoId, id);
                return serTodoItem(item);
            },

            editTodo: async (_, { id, title, comment }) => {
                await todoService.editTodo(id, title, comment);
                const todo = await todoService.getTodo(id);
                const items = await todoService.listTodoItems([id]);
                return serTodo(todo, items);
            },

            editTodoItem: async (_, { id, todoId, content, done, index }) => {
                await todoService.editTodoItem(todoId, id, content, done, index);
                const item = await todoService.getTodoItem(todoId, id);
                return serTodoItem(item);
            },

            removeTodo: async (_, { id }) => {
                await todoService.removeTodo(id);
                return null;
            },

            removeTodoItem: async (_, { id, todoId }) => {
                await todoService.removeTodoItem(todoId, id);
                return null;
            }
        }
    };

    const gateway = new ApolloGateway({
        debug: true,
        localServiceList: [todosGQLService, usersGQLService],
        buildService: (service: ServiceDefinition) => new LocalGraphQLDataSource(buildFederatedSchema([{ ...service, resolvers }]))
    });

    const server = new ApolloServer({ 
        gateway, 
        subscriptions: false,
        introspection: true,
        playground: true,
    });
    
    server.listen(4001).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });

}()).catch(error => {
    console.log(error);
    process.exit(1);
})