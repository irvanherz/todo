import { graphql } from "@/gql";
import { Task } from "@/types/Task";
import { useQuery } from "@vue/apollo-composable";
import { defineStore, } from "pinia";
import { computed, ref, watchEffect } from "vue";


const workspaceAndTasksQueryDoc = graphql(/* GraphQL */ `
    query Workspace($workspaceId: Int!) {
      workspace(id: $workspaceId) {
        id
        name
        description
        createdAt
        updatedAt
        tasks {
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
    }
`)
  
export function useWorkspaceStore(id: number) {
    return defineStore(`workspace#${id}`, () => {
      const workspaceId = ref(id);
  
      // Execute the GraphQL query using the workspaceId
      const { result, loading, error, refetch } = useQuery(workspaceAndTasksQueryDoc, {
        workspaceId: workspaceId.value
      });
  
    //   const workspace = computed(() => result.value?.workspace as Workspace | undefined);
      const workspace = ref(null as typeof result.value['workspace']);
      const taskSummary = computed(() => {
        return {
          numCommitted: workspace.value?.tasks.filter((t) => t.committedAt && !t.completedAt).length || 0,
          numStarred: workspace.value?.tasks.filter((t) => t.starred && !t.completedAt).length || 0,
          numUpcoming: workspace.value?.tasks.filter((t) => t.dueAt && !t.completedAt).length || 0,
          numTasks: workspace.value?.tasks.filter((t) => !t.completedAt).length || 0,
          numCompletedTasks: workspace.value?.tasks.filter((t) => t.completedAt).length || 0,
        }
      });
  
      watchEffect(() => {
        if (result.value && result.value.workspace) {
          workspace.value = result.value.workspace;
        }
      });

      function appendTask(t: Task) {
        console.log('appendTask', t, workspace.value);
        if (!workspace.value) return;
         
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        workspace.value = {...workspace.value, tasks: [...workspace.value.tasks, t] } as any;
      }
      return {
        workspace,
        taskSummary,
        loading,
        error,
        refetch,
        appendTask
      };
    })();
  }
export type UseWorkspaceStore = ReturnType<typeof useWorkspaceStore>