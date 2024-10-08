<script setup lang="ts">
import { Task } from '@/types/Task';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import TaskListItemSheet from './TaskListItemSheet.vue';
import TaskListItemToggleCompleteButton from './TaskListItemToggleCompleteButton.vue';
import TaskListItemToggleStarredButton from './TaskListItemToggleStarredButton.vue';
import { Badge } from './ui/badge';
import Card from './ui/card/Card.vue';
dayjs.extend(relativeTime);

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
        <div>
          {{ props.task.title }} 
          <Badge v-if="props.task.dueAt" variant="destructive" class="text-xs ml-2">
            Deadline {{ dayjs(props.task.dueAt).fromNow() }}
          </Badge>
        </div>
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