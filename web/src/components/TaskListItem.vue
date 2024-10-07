<script setup lang="ts">
import { Task } from '@/types/Task';
import TaskListItemSheet from './TaskListItemSheet.vue';
import TaskListItemToggleCompleteButton from './TaskListItemToggleCompleteButton.vue';
import TaskListItemToggleStarredButton from './TaskListItemToggleStarredButton.vue';
import Card from './ui/card/Card.vue';

interface TaskListItemProps {
  task: Task
}

const props = defineProps<TaskListItemProps>()
</script>

<template>
  <TaskListItemSheet :task="props.task">
    <Card class="p-4 flex items-center gap-4 text-left">
      <div class="flex-0">
        <TaskListItemToggleCompleteButton :task="props.task" />
      </div>
      <div class="flex-1">
        <div>{{ props.task.title }}</div>
        <div class="text-sm text-muted-foreground">
          {{ props.task.description }}
        </div>
      </div>
      <div class="flex-none">
        <TaskListItemToggleStarredButton :task="props.task" />
      </div>
    </Card>    
  </TaskListItemSheet>
</template>