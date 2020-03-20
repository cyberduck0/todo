
import { ApolloGateway, LocalGraphQLDataSource } from '@apollo/gateway';
import { buildFederatedSchema, ServiceDefinition } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import { importSchema } from 'graphql-import';
import path from 'path';

import { Todo as ModelTodo, TodoItem as ModelTodoItem } from './src/model/todo';
import { User as ModelUser } from './src/model/user';
import { Resolvers as TodoResolvers, Todo, TodoItem } from './src/generated/graphql/todos';
import { Resolvers as UserResolvers, User } from './src/generated/graphql/users';
import { TodoService } from './src/service/todo-service';
import { MockTodoService } from './src/service/mock-todo-service';
import { UserService } from './src/service/user-service';
import { GrpcUserService } from './src/service/grpc-user-service';
import { UserServiceClient } from './src/generated/pb/user_grpc_pb';
import { credentials } from 'grpc';

(async function () {

    const USER_SERVICE_ADDR = process.env.USER_SERVICE_ADDR || "localhost:9000";

    const todosGQLService: ServiceDefinition = {
        name: 'todos',
        typeDefs: gql(await importSchema(path.join(__dirname, "../schema/todos.graphql"))),
    }

    const usersGQLService: ServiceDefinition = {
        name: 'users',
        typeDefs: gql(await importSchema(path.join(__dirname, "../schema/users.graphql"))),
    }

    const todoService: TodoService = new MockTodoService;
    
    const userService: UserService = new GrpcUserService(
        new UserServiceClient(USER_SERVICE_ADDR, credentials.createInsecure())
    )

    const serTodoItem: (item: ModelTodoItem) => TodoItem = ({ id, todoId, content, created, done, index }) => {
        return { id, todoId, content, created: created.toISOString(), done, index };
    }

    const serTodo: (todo: ModelTodo, items: ModelTodoItem[]) => Todo = ({ id, title, comment }, items) => {
        return { id, title, comment, items: items.map(serTodoItem) };
    }

    const serUser: (user: ModelUser) => User = ({ id, username }) => ({ id, username });

    const resolvers: TodoResolvers & UserResolvers = {
        Query: {
            todo: async (_, { id }) => {
                const todo = await todoService.getTodo(id);
                const items = await todoService.listTodoItems([id]);
                return serTodo(todo, items);
            },
            todos: async () => {
                const todos = await todoService.listTodos();
                const items = await todoService.listTodoItems(todos.map(t => t.id));
                return todos.map(todo => serTodo(todo, items.filter(item => item.todoId == todo.id)));
            },
            users: async () => {
                const users = await userService.listUsers();
                return users.map(serUser);
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