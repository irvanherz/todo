<script setup lang="ts">
import { useMutationTaskUpdate } from '@/lib/useMutationTaskUpdate';
import { Task } from '@/types/Task';
import { CalendarIcon } from 'lucide-vue-next';
import { Toggle } from './ui/toggle';

interface TaskListItemToggleCommittedButtonProps {
  task: Task
}

const props = defineProps<TaskListItemToggleCommittedButtonProps>()

const updater = useMutationTaskUpdate()

const handleChangeCommitted = (yes) => {
  const committedAt = yes ? new Date() : null;
  updater.mutate({
    data: {
      id: props.task.id,
      committedAt
    }
  })
}
</script>

<template>
  <Toggle
    variant="outline"
    class="w-full"
    @update:pressed="handleChangeCommitted"
    :default-value="!!props.task.committedAt"
    @click.stop
  >
    <CalendarIcon class="w-4 h-4 mr-2" /> {{ props.task.committedAt ? 'Added to Today' : 'Add to Today' }}
  </Toggle>
</template>