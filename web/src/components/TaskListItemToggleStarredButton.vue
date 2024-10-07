<script setup lang="ts">
import { useMutationTaskUpdate } from '@/lib/useMutationTaskUpdate';
import { Task } from '@/types/Task';
import { StarIcon } from 'lucide-vue-next';
import { Toggle } from './ui/toggle';

interface TaskListItemToggleCompleteButtonProps {
  task: Task
}

const props = defineProps<TaskListItemToggleCompleteButtonProps>()

const updater = useMutationTaskUpdate()

const handleChangeStarred = (starred) => {
  updater.mutate({
    data: {
      id: props.task.id,
      starred
    }
  })
}
</script>

<template>
  <Toggle
    variant="outline"
    @update:pressed="handleChangeStarred"
    :default-value="props.task.starred"
    @click.stop
  >
    <StarIcon :fill="task.starred ? '#FFF' : ''" />
  </Toggle>
</template>