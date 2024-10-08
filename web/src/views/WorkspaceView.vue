<script setup lang="ts">
import LayoutWorkspace from '@/components/LayoutWorkspace.vue';
import TaskAddCard from '@/components/TaskAddCard.vue';
import TaskList from '@/components/TaskList.vue';
import { useWorkspaceStore } from '@/stores/workspace';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const workspaceId = computed(() => +route.params.id)
const activeMenuId = computed(() => route.params.sectionId as string || 'today')
const store = useWorkspaceStore(workspaceId.value)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const afterTaskCreated = (task: any) => {
  store.appendTask(task)
}
</script>
<template>
  <LayoutWorkspace content-class="flex flex-1 flex-col gap-2 p-4" :workspace-id="workspaceId" :active-menu-id="activeMenuId">
    <TaskAddCard @created="afterTaskCreated" :type="activeMenuId as any" />
    <TaskList :workspace-id="workspaceId" :type="activeMenuId" />
  </LayoutWorkspace>
</template>