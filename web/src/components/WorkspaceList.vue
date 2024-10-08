<script setup lang="ts">
import { PlusIcon, Settings } from 'lucide-vue-next';
import Button from './ui/button/Button.vue';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import CardFooter from './ui/card/CardFooter.vue';
import WorkspaceAddButton from './WorkspaceAddButton.vue';


interface WorkspaceListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  workspaces: any[]
}
const props = defineProps<WorkspaceListProps>()
</script>

<template>
  <div class="columns-1 md:columns-2 lg:columns-3 gap-0">
    <template v-for="workspace in props.workspaces" :key="workspace.id">
      <div class="break-inside-avoid p-2">
        <Card class="bg-primary-foreground">
          <CardHeader class="space-y-2">
            <CardTitle>{{ workspace.name }}</CardTitle>
            <CardDescription class="text-base/relaxed">
              {{ workspace.description }}
            </CardDescription>
          </CardHeader>
          <CardFooter class="flex gap-2">
            <RouterLink :to="`/workspaces/${workspace.id}`" class="flex-1">
              <Button class="w-full">
                <EyeIcon
                  class="mr-2 h-4 w-4"
                /> View Tasks
              </Button>
            </RouterLink>
            <Button class="flex-none" variant="outline" size="icon">
              <Settings class="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </template>
    <div class="text-center break-inside-avoid p-2">
      <Card class="">
        <CardHeader>
          <CardTitle>Add New</CardTitle>
          <CardDescription>Create new workspace</CardDescription>
        </CardHeader>
        <CardFooter>
          <WorkspaceAddButton>
            <Button class="w-full">
              <PlusIcon class="mr-2 h-4 w-4" /> New
            </Button>
          </WorkspaceAddButton>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>