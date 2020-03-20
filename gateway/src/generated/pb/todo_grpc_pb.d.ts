// package: todo
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as todo_pb from "./todo_pb";

interface ITodoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listTodos: ITodoServiceService_IListTodos;
    listTodoItems: ITodoServiceService_IListTodoItems;
    addTodo: ITodoServiceService_IAddTodo;
    removeTodo: ITodoServiceService_IRemoveTodo;
    editTodoTitle: ITodoServiceService_IEditTodoTitle;
    editTodoDescription: ITodoServiceService_IEditTodoDescription;
    addTodoItem: ITodoServiceService_IAddTodoItem;
    removeTodoItem: ITodoServiceService_IRemoveTodoItem;
    toggleTodoItem: ITodoServiceService_IToggleTodoItem;
    editTodoItem: ITodoServiceService_IEditTodoItem;
}

interface ITodoServiceService_IListTodos extends grpc.MethodDefinition<todo_pb.ListTodosRequest, todo_pb.ListTodosResponse> {
    path: string; // "/todo.TodoService/ListTodos"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.ListTodosRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.ListTodosRequest>;
    responseSerialize: grpc.serialize<todo_pb.ListTodosResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.ListTodosResponse>;
}
interface ITodoServiceService_IListTodoItems extends grpc.MethodDefinition<todo_pb.ListTodoItemsRequest, todo_pb.ListTodoItemsResponse> {
    path: string; // "/todo.TodoService/ListTodoItems"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.ListTodoItemsRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.ListTodoItemsRequest>;
    responseSerialize: grpc.serialize<todo_pb.ListTodoItemsResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.ListTodoItemsResponse>;
}
interface ITodoServiceService_IAddTodo extends grpc.MethodDefinition<todo_pb.AddTodoRequest, todo_pb.Id> {
    path: string; // "/todo.TodoService/AddTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.AddTodoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.AddTodoRequest>;
    responseSerialize: grpc.serialize<todo_pb.Id>;
    responseDeserialize: grpc.deserialize<todo_pb.Id>;
}
interface ITodoServiceService_IRemoveTodo extends grpc.MethodDefinition<todo_pb.Id, todo_pb.Empty> {
    path: string; // "/todo.TodoService/RemoveTodo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.Id>;
    requestDeserialize: grpc.deserialize<todo_pb.Id>;
    responseSerialize: grpc.serialize<todo_pb.Empty>;
    responseDeserialize: grpc.deserialize<todo_pb.Empty>;
}
interface ITodoServiceService_IEditTodoTitle extends grpc.MethodDefinition<todo_pb.EditTodoTitleRequest, todo_pb.Empty> {
    path: string; // "/todo.TodoService/EditTodoTitle"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.EditTodoTitleRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.EditTodoTitleRequest>;
    responseSerialize: grpc.serialize<todo_pb.Empty>;
    responseDeserialize: grpc.deserialize<todo_pb.Empty>;
}
interface ITodoServiceService_IEditTodoDescription extends grpc.MethodDefinition<todo_pb.EditTodoDescriptionRequest, todo_pb.Empty> {
    path: string; // "/todo.TodoService/EditTodoDescription"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.EditTodoDescriptionRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.EditTodoDescriptionRequest>;
    responseSerialize: grpc.serialize<todo_pb.Empty>;
    responseDeserialize: grpc.deserialize<todo_pb.Empty>;
}
interface ITodoServiceService_IAddTodoItem extends grpc.MethodDefinition<todo_pb.AddTodoItemRequest, todo_pb.Id> {
    path: string; // "/todo.TodoService/AddTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.AddTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.AddTodoItemRequest>;
    responseSerialize: grpc.serialize<todo_pb.Id>;
    responseDeserialize: grpc.deserialize<todo_pb.Id>;
}
interface ITodoServiceService_IRemoveTodoItem extends grpc.MethodDefinition<todo_pb.RemoveTodoItemRequest, todo_pb.Empty> {
    path: string; // "/todo.TodoService/RemoveTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.RemoveTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.RemoveTodoItemRequest>;
    responseSerialize: grpc.serialize<todo_pb.Empty>;
    responseDeserialize: grpc.deserialize<todo_pb.Empty>;
}
interface ITodoServiceService_IToggleTodoItem extends grpc.MethodDefinition<todo_pb.ToggleTodoItemRequest, todo_pb.Empty> {
    path: string; // "/todo.TodoService/ToggleTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.ToggleTodoItemRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.ToggleTodoItemRequest>;
    responseSerialize: grpc.serialize<todo_pb.Empty>;
    responseDeserialize: grpc.deserialize<todo_pb.Empty>;
}
interface ITodoServiceService_IEditTodoItem extends grpc.MethodDefinition<todo_pb.EditTodoItemContentRequest, todo_pb.Empty> {
    path: string; // "/todo.TodoService/EditTodoItem"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<todo_pb.EditTodoItemContentRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.EditTodoItemContentRequest>;
    responseSerialize: grpc.serialize<todo_pb.Empty>;
    responseDeserialize: grpc.deserialize<todo_pb.Empty>;
}

export const TodoServiceService: ITodoServiceService;

export interface ITodoServiceServer {
    listTodos: grpc.handleUnaryCall<todo_pb.ListTodosRequest, todo_pb.ListTodosResponse>;
    listTodoItems: grpc.handleUnaryCall<todo_pb.ListTodoItemsRequest, todo_pb.ListTodoItemsResponse>;
    addTodo: grpc.handleUnaryCall<todo_pb.AddTodoRequest, todo_pb.Id>;
    removeTodo: grpc.handleUnaryCall<todo_pb.Id, todo_pb.Empty>;
    editTodoTitle: grpc.handleUnaryCall<todo_pb.EditTodoTitleRequest, todo_pb.Empty>;
    editTodoDescription: grpc.handleUnaryCall<todo_pb.EditTodoDescriptionRequest, todo_pb.Empty>;
    addTodoItem: grpc.handleUnaryCall<todo_pb.AddTodoItemRequest, todo_pb.Id>;
    removeTodoItem: grpc.handleUnaryCall<todo_pb.RemoveTodoItemRequest, todo_pb.Empty>;
    toggleTodoItem: grpc.handleUnaryCall<todo_pb.ToggleTodoItemRequest, todo_pb.Empty>;
    editTodoItem: grpc.handleUnaryCall<todo_pb.EditTodoItemContentRequest, todo_pb.Empty>;
}

export interface ITodoServiceClient {
    listTodos(request: todo_pb.ListTodosRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todo_pb.ListTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodos(request: todo_pb.ListTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    listTodoItems(request: todo_pb.ListTodoItemsRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    listTodoItems(request: todo_pb.ListTodoItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    listTodoItems(request: todo_pb.ListTodoItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    addTodo(request: todo_pb.AddTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    addTodo(request: todo_pb.AddTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    addTodo(request: todo_pb.AddTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    removeTodo(request: todo_pb.Id, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTodo(request: todo_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTodo(request: todo_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoTitle(request: todo_pb.EditTodoTitleRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoTitle(request: todo_pb.EditTodoTitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoTitle(request: todo_pb.EditTodoTitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoDescription(request: todo_pb.EditTodoDescriptionRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoDescription(request: todo_pb.EditTodoDescriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoDescription(request: todo_pb.EditTodoDescriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    addTodoItem(request: todo_pb.AddTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    addTodoItem(request: todo_pb.AddTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    addTodoItem(request: todo_pb.AddTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    removeTodoItem(request: todo_pb.RemoveTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTodoItem(request: todo_pb.RemoveTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    removeTodoItem(request: todo_pb.RemoveTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    toggleTodoItem(request: todo_pb.ToggleTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    toggleTodoItem(request: todo_pb.ToggleTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    toggleTodoItem(request: todo_pb.ToggleTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoItem(request: todo_pb.EditTodoItemContentRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoItem(request: todo_pb.EditTodoItemContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    editTodoItem(request: todo_pb.EditTodoItemContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class TodoServiceClient extends grpc.Client implements ITodoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listTodos(request: todo_pb.ListTodosRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todo_pb.ListTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodos(request: todo_pb.ListTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodosResponse) => void): grpc.ClientUnaryCall;
    public listTodoItems(request: todo_pb.ListTodoItemsRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public listTodoItems(request: todo_pb.ListTodoItemsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public listTodoItems(request: todo_pb.ListTodoItemsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListTodoItemsResponse) => void): grpc.ClientUnaryCall;
    public addTodo(request: todo_pb.AddTodoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    public addTodo(request: todo_pb.AddTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    public addTodo(request: todo_pb.AddTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    public removeTodo(request: todo_pb.Id, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTodo(request: todo_pb.Id, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTodo(request: todo_pb.Id, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoTitle(request: todo_pb.EditTodoTitleRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoTitle(request: todo_pb.EditTodoTitleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoTitle(request: todo_pb.EditTodoTitleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoDescription(request: todo_pb.EditTodoDescriptionRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoDescription(request: todo_pb.EditTodoDescriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoDescription(request: todo_pb.EditTodoDescriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public addTodoItem(request: todo_pb.AddTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    public addTodoItem(request: todo_pb.AddTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    public addTodoItem(request: todo_pb.AddTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Id) => void): grpc.ClientUnaryCall;
    public removeTodoItem(request: todo_pb.RemoveTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTodoItem(request: todo_pb.RemoveTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public removeTodoItem(request: todo_pb.RemoveTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public toggleTodoItem(request: todo_pb.ToggleTodoItemRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public toggleTodoItem(request: todo_pb.ToggleTodoItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public toggleTodoItem(request: todo_pb.ToggleTodoItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoItem(request: todo_pb.EditTodoItemContentRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoItem(request: todo_pb.EditTodoItemContentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
    public editTodoItem(request: todo_pb.EditTodoItemContentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.Empty) => void): grpc.ClientUnaryCall;
}
