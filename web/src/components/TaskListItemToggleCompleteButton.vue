<script setup lang="ts">
import { useMutationTaskUpdate } from '@/lib/useMutationTaskUpdate';
import { Task } from '@/types/Task';
import { Checkbox } from './ui/checkbox';

interface TaskListItemToggleCompleteButtonProps {
  task: Task
}

const props = defineProps<TaskListItemToggleCompleteButtonProps>()

const updater = useMutationTaskUpdate()

const handleChangeCompleteStatus = (e) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const status: any = e ? 'COMPLETED' : 'OPEN'
  updater.mutate({
    data: {
      id: props.task.id,
      status
    }
  })
}
</script>

<template>
  <Checkbox :default-checked="task.status === 'COMPLETED'" @update:checked="handleChangeCompleteStatus" @click.stop />
</template>