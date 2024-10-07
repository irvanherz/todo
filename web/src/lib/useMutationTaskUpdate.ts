import { graphql } from "@/gql"
import { useMutation } from "@vue/apollo-composable"

const updateTaskMutationDocument = graphql(/* GraphQL */ `
  mutation Mutation($data: UpdateTaskInput!) {
    updated: updateTask(data: $data) {
      id
      workspaceId
      title
      description
      starred
      priority
      status
      committedAt
      completedAt
      dueAt
      createdAt
      updatedAt
    }
  }
`)

export function useMutationTaskUpdate() {
  const mut = useMutation(updateTaskMutationDocument)
  return mut
}
