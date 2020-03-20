// package: todo
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Todo extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Todo.AsObject;
    static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Todo;
    static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
    export type AsObject = {
        id: string,
        title: string,
        description: string,
    }
}

export class TodoItem extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTodoid(): string;
    setTodoid(value: string): void;

    getContent(): string;
    setContent(value: string): void;

    getDone(): boolean;
    setDone(value: boolean): void;

    getCreated(): number;
    setCreated(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TodoItem.AsObject;
    static toObject(includeInstance: boolean, msg: TodoItem): TodoItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TodoItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TodoItem;
    static deserializeBinaryFromReader(message: TodoItem, reader: jspb.BinaryReader): TodoItem;
}

export namespace TodoItem {
    export type AsObject = {
        id: string,
        todoid: string,
        content: string,
        done: boolean,
        created: number,
    }
}

export class Id extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
    export type AsObject = {
        id: string,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class ListTodosRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodosRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodosRequest): ListTodosRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodosRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodosRequest;
    static deserializeBinaryFromReader(message: ListTodosRequest, reader: jspb.BinaryReader): ListTodosRequest;
}

export namespace ListTodosRequest {
    export type AsObject = {
    }
}

export class ListTodosResponse extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Todo>;
    setItemsList(value: Array<Todo>): void;
    addItems(value?: Todo, index?: number): Todo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodosResponse): ListTodosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodosResponse;
    static deserializeBinaryFromReader(message: ListTodosResponse, reader: jspb.BinaryReader): ListTodosResponse;
}

export namespace ListTodosResponse {
    export type AsObject = {
        itemsList: Array<Todo.AsObject>,
    }
}

export class ListTodoItemsRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodoItemsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodoItemsRequest): ListTodoItemsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodoItemsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodoItemsRequest;
    static deserializeBinaryFromReader(message: ListTodoItemsRequest, reader: jspb.BinaryReader): ListTodoItemsRequest;
}

export namespace ListTodoItemsRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListTodoItemsResponse extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<TodoItem>;
    setItemsList(value: Array<TodoItem>): void;
    addItems(value?: TodoItem, index?: number): TodoItem;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTodoItemsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListTodoItemsResponse): ListTodoItemsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTodoItemsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTodoItemsResponse;
    static deserializeBinaryFromReader(message: ListTodoItemsResponse, reader: jspb.BinaryReader): ListTodoItemsResponse;
}

export namespace ListTodoItemsResponse {
    export type AsObject = {
        itemsList: Array<TodoItem.AsObject>,
    }
}

export class AddTodoRequest extends jspb.Message { 
    getTitle(): string;
    setTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTodoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddTodoRequest): AddTodoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTodoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTodoRequest;
    static deserializeBinaryFromReader(message: AddTodoRequest, reader: jspb.BinaryReader): AddTodoRequest;
}

export namespace AddTodoRequest {
    export type AsObject = {
        title: string,
    }
}

export class EditTodoTitleRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTitle(): string;
    setTitle(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditTodoTitleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EditTodoTitleRequest): EditTodoTitleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditTodoTitleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditTodoTitleRequest;
    static deserializeBinaryFromReader(message: EditTodoTitleRequest, reader: jspb.BinaryReader): EditTodoTitleRequest;
}

export namespace EditTodoTitleRequest {
    export type AsObject = {
        id: string,
        title: string,
    }
}

export class EditTodoDescriptionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditTodoDescriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EditTodoDescriptionRequest): EditTodoDescriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditTodoDescriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditTodoDescriptionRequest;
    static deserializeBinaryFromReader(message: EditTodoDescriptionRequest, reader: jspb.BinaryReader): EditTodoDescriptionRequest;
}

export namespace EditTodoDescriptionRequest {
    export type AsObject = {
        id: string,
        description: string,
    }
}

export class AddTodoItemRequest extends jspb.Message { 
    getTodoid(): string;
    setTodoid(value: string): void;

    getContent(): string;
    setContent(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddTodoItemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddTodoItemRequest): AddTodoItemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddTodoItemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddTodoItemRequest;
    static deserializeBinaryFromReader(message: AddTodoItemRequest, reader: jspb.BinaryReader): AddTodoItemRequest;
}

export namespace AddTodoItemRequest {
    export type AsObject = {
        todoid: string,
        content: string,
    }
}

export class RemoveTodoItemRequest extends jspb.Message { 
    getTodoid(): string;
    setTodoid(value: string): void;

    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveTodoItemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveTodoItemRequest): RemoveTodoItemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveTodoItemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveTodoItemRequest;
    static deserializeBinaryFromReader(message: RemoveTodoItemRequest, reader: jspb.BinaryReader): RemoveTodoItemRequest;
}

export namespace RemoveTodoItemRequest {
    export type AsObject = {
        todoid: string,
        id: string,
    }
}

export class ToggleTodoItemRequest extends jspb.Message { 
    getTodoid(): string;
    setTodoid(value: string): void;

    getId(): string;
    setId(value: string): void;

    getDone(): boolean;
    setDone(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToggleTodoItemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ToggleTodoItemRequest): ToggleTodoItemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToggleTodoItemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToggleTodoItemRequest;
    static deserializeBinaryFromReader(message: ToggleTodoItemRequest, reader: jspb.BinaryReader): ToggleTodoItemRequest;
}

export namespace ToggleTodoItemRequest {
    export type AsObject = {
        todoid: string,
        id: string,
        done: boolean,
    }
}

export class EditTodoItemContentRequest extends jspb.Message { 
    getTodoid(): string;
    setTodoid(value: string): void;

    getId(): string;
    setId(value: string): void;

    getContent(): string;
    setContent(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditTodoItemContentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EditTodoItemContentRequest): EditTodoItemContentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditTodoItemContentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditTodoItemContentRequest;
    static deserializeBinaryFromReader(message: EditTodoItemContentRequest, reader: jspb.BinaryReader): EditTodoItemContentRequest;
}

export namespace EditTodoItemContentRequest {
    export type AsObject = {
        todoid: string,
        id: string,
        content: string,
    }
}
