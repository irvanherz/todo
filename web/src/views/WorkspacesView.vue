<script setup lang="ts">
import LayoutStd from '@/components/LayoutStd.vue';
import WorkspaceList from '@/components/WorkspaceList.vue';
import WorkspaceListEmpty from '@/components/WorkspaceListEmpty.vue';
import { graphql } from '@/gql';
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';


const workspacesQueryDoc = graphql(/* GraphQL */ `
  query Workspaces {
    workspaces {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`)

const { loading, result } = useQuery(workspacesQueryDoc)
const workspaces = computed(() => result?.value?.workspaces || [])

</script>
<template>
  <LayoutStd content-class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <div class="flex flex-col items-start">
      <h1 class="text-lg font-semibold md:text-2xl">
        My Workspaces
      </h1>
      <h2 class="text-sm text-muted-foreground md:text-base">
        Manage my workspaces. Create, edit, and delete workspaces.
      </h2>
    </div>
    <template v-if="loading">
      <div class="flex flex-col items-center justify-center">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-foreground" />
        <p class="text-sm text-muted-foreground mt-4">
          Loading workspaces...
        </p>
      </div>
    </template>
    <template v-else-if="workspaces.length">
      <WorkspaceList :workspaces="workspaces" />
    </template>
    <template v-else>
      <WorkspaceListEmpty />
    </template>
  </LayoutStd>
</template>