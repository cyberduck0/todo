import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};






export type Mutation = {
   __typename?: 'Mutation';
  addTodo: Todo;
  addTodoItem: TodoItem;
  editTodo: Todo;
  editTodoItem: TodoItem;
  removeTodo?: Maybe<Scalars['Boolean']>;
  removeTodoItem?: Maybe<Scalars['Boolean']>;
};


export type MutationAddTodoArgs = {
  title: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
};


export type MutationAddTodoItemArgs = {
  todoId: Scalars['String'];
  content: Scalars['String'];
};


export type MutationEditTodoArgs = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};


export type MutationEditTodoItemArgs = {
  todoId: Scalars['String'];
  id: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  index?: Maybe<Scalars['Float']>;
};


export type MutationRemoveTodoArgs = {
  id: Scalars['String'];
};


export type MutationRemoveTodoItemArgs = {
  todoId: Scalars['String'];
  id: Scalars['String'];
};

export type PaginatedTodos = {
   __typename?: 'PaginatedTodos';
  items: Array<Todo>;
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  total: Scalars['Int'];
};

export type Query = {
   __typename?: 'Query';
  todo?: Maybe<Todo>;
  todos?: Maybe<PaginatedTodos>;
};


export type QueryTodoArgs = {
  id: Scalars['String'];
};


export type QueryTodosArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Todo = {
   __typename?: 'Todo';
  id: Scalars['ID'];
  title: Scalars['String'];
  comment: Scalars['String'];
  items: Array<TodoItem>;
};

export type TodoItem = {
   __typename?: 'TodoItem';
  id: Scalars['ID'];
  todoId: Scalars['ID'];
  content: Scalars['String'];
  done: Scalars['Boolean'];
  created: Scalars['String'];
  index: Scalars['Float'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  assignedTodos: Array<Todo>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Todo: ResolverTypeWrapper<Todo>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  TodoItem: ResolverTypeWrapper<TodoItem>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  PaginatedTodos: ResolverTypeWrapper<PaginatedTodos>,
  Mutation: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Todo: Todo,
  ID: Scalars['ID'],
  TodoItem: TodoItem,
  Boolean: Scalars['Boolean'],
  Float: Scalars['Float'],
  Int: Scalars['Int'],
  PaginatedTodos: PaginatedTodos,
  Mutation: {},
  User: User,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<QueryTodoArgs, 'id'>>,
  todos?: Resolver<Maybe<ResolversTypes['PaginatedTodos']>, ParentType, ContextType, RequireFields<QueryTodosArgs, never>>,
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Todo']>, { __typename: 'Todo' } & Pick<ParentType, 'id'>, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  items?: Resolver<Array<ResolversTypes['TodoItem']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TodoItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoItem'] = ResolversParentTypes['TodoItem']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['TodoItem']>, { __typename: 'TodoItem' } & Pick<ParentType, 'id'>, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  todoId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  done?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  created?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  index?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type PaginatedTodosResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedTodos'] = ResolversParentTypes['PaginatedTodos']> = {
  items?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>,
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationAddTodoArgs, 'title'>>,
  addTodoItem?: Resolver<ResolversTypes['TodoItem'], ParentType, ContextType, RequireFields<MutationAddTodoItemArgs, 'todoId' | 'content'>>,
  editTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationEditTodoArgs, 'id'>>,
  editTodoItem?: Resolver<ResolversTypes['TodoItem'], ParentType, ContextType, RequireFields<MutationEditTodoItemArgs, 'todoId' | 'id'>>,
  removeTodo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveTodoArgs, 'id'>>,
  removeTodoItem?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRemoveTodoItemArgs, 'todoId' | 'id'>>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['User']>, { __typename: 'User' } & Pick<ParentType, 'id'>, ContextType>,

  assignedTodos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>,
  Todo?: TodoResolvers<ContextType>,
  TodoItem?: TodoItemResolvers<ContextType>,
  PaginatedTodos?: PaginatedTodosResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
