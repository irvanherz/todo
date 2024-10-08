<script setup lang="ts">
import { useMutationTaskUpdate } from '@/lib/useMutationTaskUpdate';
import { Task } from '@/types/Task';
import { toTypedSchema } from '@vee-validate/zod';
import { SubmissionHandler, useForm } from 'vee-validate';
import { computed, ref, watch } from 'vue';
import { TaskFormSchema } from './lib/TaskFormSchema';
import TaskForm from './TaskForm.vue';
import TaskListItemToggleCommittedButton from './TaskListItemToggleCommittedButton.vue';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { toast } from './ui/toast';

interface TaskListItemSheetProps {
  task: Task
}
const props = defineProps<TaskListItemSheetProps>()
const emit = defineEmits({
  updated(_payload: object) {
    return true
  }
})
const form = useForm({
  validationSchema: toTypedSchema(TaskFormSchema)
})
const initialFormValues = computed(() => ({
  ...props.task,
  isCommitted: !!props.task.committedAt,
}))
const open = ref(false)

watch([open, initialFormValues], ([a, b]) => {
  if(!a) return
  form.resetForm()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form.setValues(b as any)
})

const updater = useMutationTaskUpdate()

const handleSubmitOk: SubmissionHandler = async (values) => {
  try {
    const input = {
      ...values,
      id: props.task.id,
    }
    const result = await updater.mutate({
      data: input
    })
    const data = result.data.updated
    emit('updated', data)
    open.value = false
    toast({
      title: 'Success',
      description: "Task updated",
    });
  } catch (error) {
    toast({
      title: 'Error',
      description: error.message,
    });
  }
};

const handleSubmitError = () => {
  toast({
    title: 'Validation Error',
    description: 'Please check your form and try again.',
  });
}

const handleSubmit = form.handleSubmit(handleSubmitOk, handleSubmitError)

</script>

<template>
  <Sheet v-model:open="open">
    <SheetTrigger><slot /></SheetTrigger>
    <SheetContent class="max-w-[400px] w-full h-full flex flex-col">
      <SheetHeader class="">
        <SheetTitle>Update Task</SheetTitle>
      </SheetHeader>
      <div class="flex-1 border-t py-4 space-y-4">
        <TaskListItemToggleCommittedButton :task="props.task" />
        <TaskForm :form="form" />
      </div>
      <div class="flex gap-2">
        <Button variant="destructive" class="flex-1">
          Delete
        </Button>
        <Button class="flex-1" @click="handleSubmit">
          Save Changes
        </Button>
      </div>
    </SheetContent>
  </Sheet>
</template>