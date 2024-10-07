/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateWorkspace($data: CreateWorkspaceInput!) {\n    createWorkspace(data: $data) {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateWorkspaceDocument,
    "\n  mutation CreateTask($data: CreateTaskInput!) {\n    created: createTask(data: $data) {\n      id\n      workspaceId\n      title\n      description\n      starred\n      priority\n      status\n      committedAt\n      completedAt\n      dueAt\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateTaskDocument,
    "\n  mutation Mutation($data: UpdateTaskInput!) {\n    updated: updateTask(data: $data) {\n      id\n      workspaceId\n      title\n      description\n      starred\n      priority\n      status\n      committedAt\n      completedAt\n      dueAt\n      createdAt\n      updatedAt\n    }\n  }\n": types.MutationDocument,
    "\n    query Workspace($workspaceId: Int!) {\n      workspace(id: $workspaceId) {\n        id\n        name\n        description\n        createdAt\n        updatedAt\n        tasks {\n          id\n          workspaceId\n          title\n          description\n          starred\n          priority\n          status\n          committedAt\n          completedAt\n          dueAt\n          createdAt\n          updatedAt\n        }\n      }\n    }\n": types.WorkspaceDocument,
    "\n  mutation login($data: AuthLoginInput!) {\n    loginUser(data: $data) {\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        password\n        createdAt\n        updatedAt\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.LoginDocument,
    "\n  mutation RegisterUser($data: AuthRegisterInput!) {\n    registerUser(data: $data) {\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        password\n        createdAt\n        updatedAt\n      }\n      accessToken\n      refreshToken\n    }\n  }\n": types.RegisterUserDocument,
    "\n  query Workspaces {\n    workspaces {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n": types.WorkspacesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateWorkspace($data: CreateWorkspaceInput!) {\n    createWorkspace(data: $data) {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateWorkspace($data: CreateWorkspaceInput!) {\n    createWorkspace(data: $data) {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTask($data: CreateTaskInput!) {\n    created: createTask(data: $data) {\n      id\n      workspaceId\n      title\n      description\n      starred\n      priority\n      status\n      committedAt\n      completedAt\n      dueAt\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTask($data: CreateTaskInput!) {\n    created: createTask(data: $data) {\n      id\n      workspaceId\n      title\n      description\n      starred\n      priority\n      status\n      committedAt\n      completedAt\n      dueAt\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Mutation($data: UpdateTaskInput!) {\n    updated: updateTask(data: $data) {\n      id\n      workspaceId\n      title\n      description\n      starred\n      priority\n      status\n      committedAt\n      completedAt\n      dueAt\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation Mutation($data: UpdateTaskInput!) {\n    updated: updateTask(data: $data) {\n      id\n      workspaceId\n      title\n      description\n      starred\n      priority\n      status\n      committedAt\n      completedAt\n      dueAt\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Workspace($workspaceId: Int!) {\n      workspace(id: $workspaceId) {\n        id\n        name\n        description\n        createdAt\n        updatedAt\n        tasks {\n          id\n          workspaceId\n          title\n          description\n          starred\n          priority\n          status\n          committedAt\n          completedAt\n          dueAt\n          createdAt\n          updatedAt\n        }\n      }\n    }\n"): (typeof documents)["\n    query Workspace($workspaceId: Int!) {\n      workspace(id: $workspaceId) {\n        id\n        name\n        description\n        createdAt\n        updatedAt\n        tasks {\n          id\n          workspaceId\n          title\n          description\n          starred\n          priority\n          status\n          committedAt\n          completedAt\n          dueAt\n          createdAt\n          updatedAt\n        }\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($data: AuthLoginInput!) {\n    loginUser(data: $data) {\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        password\n        createdAt\n        updatedAt\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation login($data: AuthLoginInput!) {\n    loginUser(data: $data) {\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        password\n        createdAt\n        updatedAt\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RegisterUser($data: AuthRegisterInput!) {\n    registerUser(data: $data) {\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        password\n        createdAt\n        updatedAt\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation RegisterUser($data: AuthRegisterInput!) {\n    registerUser(data: $data) {\n      user {\n        id\n        username\n        email\n        firstName\n        lastName\n        password\n        createdAt\n        updatedAt\n      }\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Workspaces {\n    workspaces {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query Workspaces {\n    workspaces {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;