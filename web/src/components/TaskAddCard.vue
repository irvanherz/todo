<script setup lang="ts">
import { useMutationTaskCreate } from '@/lib/useMutationTaskCreate';
import dayjs from 'dayjs';
import { ArrowRight, CalendarIcon, PlusIcon, StarIcon } from 'lucide-vue-next';
import { SubmissionHandler } from 'vee-validate';
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { toast } from './ui/toast';
import { Calendar } from './ui/v-calendar';

const route = useRoute()
const workspaceId = computed(() => +route.params.id)

const emit = defineEmits({
  created(_payload: object) {
    return true
  }
})

const create = useMutationTaskCreate()

const handleSubmit: SubmissionHandler = async () => {
  try {
    const result = await create.mutate({
      data: {
        workspaceId: workspaceId.value,
        ...task,
      }
    })
    const data = result.data.created
    emit('created', data)
    Object.assign(task, {
      title: '',
      description: '',
      starred: false,
      dueAt: null,
    })
  } catch (error) {
    toast({
      title: 'Error',
      description: error.message,
    });
  }
};

const task = reactive({
  title: '',
  description: '',
  starred: false,
  dueAt: null,
})
const canSubmit = computed(() => !!task.title)

</script>
<template>
  <Card class="divide-y">
    <div class="p-2">
      <div class="relative w-full items-center">
        <Input
          type="text"
          placeholder="Add a new task"
          class="pl-10"
          :model-value="task.title"
          @update:model-value="task.title = $event as string"
          @keydown.enter="handleSubmit"
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <PlusIcon class="size-6 text-muted-foreground" />
        </span>
      </div>
    </div>
    <div class="p-2 flex">
      <div class="flex-1 space-x-2">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline" size="xs">
              <CalendarIcon class="w-4 h-4 mr-2" />{{ task.dueAt ? dayjs(task.dueAt).format('YYYY-MM-DD HH:mm:ss') : "Select due" }}
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar v-model="task.dueAt" mode="datetime" />
          </PopoverContent>
        </Popover>
        
        <Button
          variant="outline"
          size="xs"
          type="button"
          @click="task.starred = !task.starred"
        >
          <StarIcon fill="#FFF" class="w-4 h-4" v-if="task.starred" />
          <StarIcon class="w-4 h-4" v-if="!task.starred" />
        </Button>
      </div>
      <div class="flex-none">
        <Button
          size="xs"
          :disabled="!canSubmit"
          typw="'button'"
          @click="handleSubmit"
        >
          New <ArrowRight class="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  </Card>
</template>