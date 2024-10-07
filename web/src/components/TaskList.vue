<script setup lang="ts">
import { useWorkspaceStore } from '@/stores/workspace';
import { computed } from 'vue';
import TaskListItem from './TaskListItem.vue';

interface TaskListProps {
  workspaceId: number
  type: string
}

const props = defineProps<TaskListProps>()
const store = useWorkspaceStore(props.workspaceId)
const tasks = computed(() => {
  // const now = dayjs();
  const list = [...(store.workspace?.tasks || [])]
  list.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  if (props.type === 'today') {
    return list.filter(task => task.committedAt && !task.completedAt)
  } else if(props.type === 'important') {
    return list.filter(task => task.starred && !task.completedAt)
  } else if(props.type === 'planned') {
    return list.filter(task => task.dueAt && !task.completedAt)
  } else if(props.type === 'tasks') {
    return list.filter(task => !task.completedAt && !task.completedAt)
  } else if(props.type === 'completed') {
    return list.filter(task => task.completedAt)
  } else {
    return []
  }
})

</script>

<template>
  <div class="grid grid-cols-1 gap-2">
    <template v-for="(task) in tasks" :key="task.id">
      <TaskListItem :task="task" />
    </template>
  </div>
</template>