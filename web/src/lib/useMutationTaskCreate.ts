import { graphql } from "@/gql"
import { useMutation } from "@vue/apollo-composable"

const creaateTaskMutationDocument = graphql(/* GraphQL */ `
  mutation CreateTask($data: CreateTaskInput!) {
    created: createTask(data: $data) {
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

export function useMutationTaskCreate() {
  const mut = useMutation(creaateTaskMutationDocument)
  return mut
}
