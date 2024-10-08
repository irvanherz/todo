<script setup lang="ts">
import { Bell, Calendar, Home, Package2, Star, Sun } from 'lucide-vue-next';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useWorkspaceStore } from '@/stores/workspace';
import { computed } from 'vue';

interface LayoutWorkspaceAsideProps {
  workspaceId: number
  activeMenuId?: string
}

const props = defineProps<LayoutWorkspaceAsideProps>()
const workspaceStore = useWorkspaceStore(props.workspaceId)
const menus = computed(() => {
  return [
    { id: 'today', title: 'Today', icon: Sun, extra: workspaceStore.taskSummary.numCommitted },
    { id: 'important', title: 'Important', icon: Star, extra: workspaceStore.taskSummary.numStarred },
    { id: 'planned', title: 'Planned', icon: Calendar, extra: workspaceStore.taskSummary.numUpcoming },
    { id: 'tasks', title: 'All Tasks', icon: Home, extra: workspaceStore.taskSummary.numTasks },
    { id: 'completed', title: 'Completed', icon: Home, extra: workspaceStore.taskSummary.numCompletedTasks },
  ]
})

</script>

<template>
  <div class="hidden border-r bg-muted/40 md:block">
    <div class="flex h-full max-h-screen flex-col gap-2 sticky top-0">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <a href="/" class="flex items-center gap-2 font-semibold">
          <Package2 class="h-6 w-6" />
          <span class="">Todo</span>
        </a>
        <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
          <Bell class="h-4 w-4" />
          <span class="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
          <template v-for="menu in menus" :key="menu.id">
            <RouterLink 
              :to="`/workspaces/${props.workspaceId}/${menu.id}`" 
              :class="'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ' + (menu.id === props.activeMenuId ? ' bg-muted text-primary' : 'text-muted-foreground')"
            >
              <component :is="menu.icon" class="h-4 w-4" />
              {{ menu.title }}
              <template v-if="menu.extra">
                <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {{ menu.extra }}
                </Badge>
              </template>
            </RouterLink>
          </template>
        </nav>
      </div>
      <div class="mt-auto p-4">
        <Button size="sm" class="w-full">
          Upgrade
        </Button>
      </div>
    </div>
  </div>
</template>