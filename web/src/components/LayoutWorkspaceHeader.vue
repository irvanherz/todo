<script setup lang="ts">
import { Calendar, Home, Menu, Package2, Search, Star, Sun } from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useWorkspaceStore } from '@/stores/workspace'
import { computed } from 'vue'
import LayoutWorkspaceHeaderAuthInfo from './LayoutWorkspaceHeaderAuthInfo.vue'

interface LayoutWorkspaceHeaderProps {
  workspaceId: number
  activeMenuId?: string
}

const props = defineProps<LayoutWorkspaceHeaderProps>()
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
  <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
    <Sheet>
      <SheetTrigger as-child>
        <Button
          variant="outline"
          size="icon"
          class="shrink-0 md:hidden"
        >
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="flex flex-col">
        <nav class="grid gap-2 text-lg font-medium">
          <a
            href="#"
            class="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Todo</span>
          </a>
          <template v-for="menu in menus" :key="menu.id">
            <RouterLink 
              :to="`/workspaces/${props.workspaceId}/${menu.id}`" 
              :class="'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ' + (menu.id === props.activeMenuId ? ' bg-muted text-foreground' : 'text-muted-foreground')"
            >
              <component :is="menu.icon" class="h-5 w-5" />
              {{ menu.title }} 
              <template v-if="menu.extra">
                <Badge class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {{ menu.extra }}
                </Badge>
              </template>
            </RouterLink>
          </template>
        </nav>
        <div class="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our
                support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" class="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
    <div class="w-full flex-1">
      <form>
        <div class="relative">
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tasks..."
            class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </form>
    </div>
    <LayoutWorkspaceHeaderAuthInfo />
  </header>
</template>