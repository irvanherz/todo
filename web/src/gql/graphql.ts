/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AuthLoginInput = {
  password: Scalars['String']['input'];
  usernameOrEmail: Scalars['String']['input'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AuthResult = {
  __typename?: 'AuthResult';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type CreateListInput = {
  /** desc */
  description: Scalars['String']['input'];
  /** User name */
  title: Scalars['String']['input'];
};

export type CreateTaskInput = {
  /** Due date */
  committedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** desc */
  description: Scalars['String']['input'];
  /** Due date */
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** desc */
  priority?: InputMaybe<Scalars['String']['input']>;
  /** desc */
  starred?: InputMaybe<Scalars['Boolean']['input']>;
  /** desc */
  status?: TaskStatus;
  /** User name */
  title: Scalars['String']['input'];
  workspaceId: Scalars['Int']['input'];
};

export type CreateUserInput = {
  /** email */
  email: Scalars['String']['input'];
  /** fullName */
  fullName: Scalars['String']['input'];
  /** pass */
  password: Scalars['String']['input'];
  /** User name */
  username: Scalars['String']['input'];
};

export type CreateWorkspaceInput = {
  /** desc */
  description?: InputMaybe<Scalars['String']['input']>;
  /** User name */
  name: Scalars['String']['input'];
};

export type List = {
  __typename?: 'List';
  /** User created at */
  createdAt: Scalars['DateTime']['output'];
  /** desc */
  description: Scalars['String']['output'];
  /** User id */
  id: Scalars['Int']['output'];
  tasks: Array<Task>;
  /** User name */
  title: Scalars['String']['output'];
  /** User updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createList: List;
  createTask: Task;
  createUser: User;
  createWorkspace: Workspace;
  loginUser: AuthResult;
  registerUser: AuthResult;
  removeList: List;
  removeTask: Task;
  removeUser: User;
  removeWorkspace: Workspace;
  updateList: List;
  updateTask: Task;
  updateUser: User;
  updateWorkspace: Workspace;
};


export type MutationCreateListArgs = {
  data: CreateListInput;
};


export type MutationCreateTaskArgs = {
  data: CreateTaskInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationCreateWorkspaceArgs = {
  data: CreateWorkspaceInput;
};


export type MutationLoginUserArgs = {
  data: AuthLoginInput;
};


export type MutationRegisterUserArgs = {
  data: AuthRegisterInput;
};


export type MutationRemoveListArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTaskArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveWorkspaceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateListArgs = {
  data: UpdateListInput;
};


export type MutationUpdateTaskArgs = {
  data: UpdateTaskInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationUpdateWorkspaceArgs = {
  data: UpdateWorkspaceInput;
};

export type Query = {
  __typename?: 'Query';
  list: List;
  lists: Array<List>;
  me: User;
  task: Task;
  tasks: Array<Task>;
  user: User;
  users: Array<User>;
  workspace: Workspace;
  workspaces: Array<Workspace>;
};


export type QueryListArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWorkspaceArgs = {
  id: Scalars['Int']['input'];
};

export type Task = {
  __typename?: 'Task';
  /** Due date */
  committedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Due date */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User created at */
  createdAt: Scalars['DateTime']['output'];
  /** desc */
  description: Scalars['String']['output'];
  /** Due date */
  dueAt?: Maybe<Scalars['DateTime']['output']>;
  /** User id */
  id: Scalars['Int']['output'];
  /** desc */
  priority?: Maybe<TaskPriority>;
  /** desc */
  starred: Scalars['Boolean']['output'];
  /** desc */
  status: TaskStatus;
  /** User name */
  title: Scalars['String']['output'];
  /** User updated at */
  updatedAt: Scalars['DateTime']['output'];
  /** User id */
  workspaceId: Scalars['Int']['output'];
};

export enum TaskPriority {
  High = 'HIGH',
  Low = 'LOW',
  Normal = 'NORMAL',
  Urgent = 'URGENT'
}

export enum TaskStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
}

export type UpdateListInput = {
  /** desc */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** User name */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaskInput = {
  /** Due date */
  committedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** desc */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Due date */
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Int']['input'];
  /** desc */
  priority?: InputMaybe<Scalars['String']['input']>;
  /** desc */
  starred?: InputMaybe<Scalars['Boolean']['input']>;
  /** desc */
  status?: InputMaybe<TaskStatus>;
  /** User name */
  title?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInput = {
  /** email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** fullName */
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** pass */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User name */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkspaceInput = {
  /** desc */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** User name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  /** User created at */
  createdAt: Scalars['DateTime']['output'];
  /** email */
  email: Scalars['String']['output'];
  /** firstName */
  firstName: Scalars['String']['output'];
  /** User id */
  id: Scalars['Int']['output'];
  /** lastName */
  lastName: Scalars['String']['output'];
  /** pass */
  password: Scalars['String']['output'];
  /** User updated at */
  updatedAt: Scalars['DateTime']['output'];
  /** User name */
  username: Scalars['String']['output'];
};

export type Workspace = {
  __typename?: 'Workspace';
  /** User created at */
  createdAt: Scalars['DateTime']['output'];
  /** desc */
  description: Scalars['String']['output'];
  /** User id */
  id: Scalars['Int']['output'];
  /** User name */
  name: Scalars['String']['output'];
  tasks: Array<Task>;
  /** User updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateWorkspaceMutationVariables = Exact<{
  data: CreateWorkspaceInput;
}>;


export type CreateWorkspaceMutation = { __typename?: 'Mutation', createWorkspace: { __typename?: 'Workspace', id: number, name: string, description: string, createdAt: any, updatedAt: any } };

export type CreateTaskMutationVariables = Exact<{
  data: CreateTaskInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', created: { __typename?: 'Task', id: number, workspaceId: number, title: string, description: string, starred: boolean, priority?: TaskPriority | null, status: TaskStatus, committedAt?: any | null, completedAt?: any | null, dueAt?: any | null, createdAt: any, updatedAt: any } };

export type MutationMutationVariables = Exact<{
  data: UpdateTaskInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', updated: { __typename?: 'Task', id: number, workspaceId: number, title: string, description: string, starred: boolean, priority?: TaskPriority | null, status: TaskStatus, committedAt?: any | null, completedAt?: any | null, dueAt?: any | null, createdAt: any, updatedAt: any } };

export type WorkspaceQueryVariables = Exact<{
  workspaceId: Scalars['Int']['input'];
}>;


export type WorkspaceQuery = { __typename?: 'Query', workspace: { __typename?: 'Workspace', id: number, name: string, description: string, createdAt: any, updatedAt: any, tasks: Array<{ __typename?: 'Task', id: number, workspaceId: number, title: string, description: string, starred: boolean, priority?: TaskPriority | null, status: TaskStatus, committedAt?: any | null, completedAt?: any | null, dueAt?: any | null, createdAt: any, updatedAt: any }> } };

export type LoginMutationVariables = Exact<{
  data: AuthLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'AuthResult', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, username: string, email: string, firstName: string, lastName: string, password: string, createdAt: any, updatedAt: any } } };

export type RegisterUserMutationVariables = Exact<{
  data: AuthRegisterInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'AuthResult', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: number, username: string, email: string, firstName: string, lastName: string, password: string, createdAt: any, updatedAt: any } } };

export type WorkspacesQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkspacesQuery = { __typename?: 'Query', workspaces: Array<{ __typename?: 'Workspace', id: number, name: string, description: string, createdAt: any, updatedAt: any }> };


export const CreateWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateWorkspaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;
export const CreateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaskInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"starred"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"committedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTaskInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"updated"},"name":{"kind":"Name","value":"updateTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"starred"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"committedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const WorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Workspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"starred"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"committedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"dueAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<WorkspaceQuery, WorkspaceQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const WorkspacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Workspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<WorkspacesQuery, WorkspacesQueryVariables>;