<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Package2 } from 'lucide-vue-next';
import LayoutStdHeaderAuthInfo from './LayoutStdHeaderAuthInfo.vue';

const menus = [
  { id: 'home', name: 'Home', url: '/' },
  { id: 'workspaces', name: 'Workspaces', url: '/workspaces' },
  { id: 'docs', name: 'Documentations', url: '/docs' },
]

</script>

<template>
  <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
    <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <a href="#" class="flex items-center gap-2 text-lg font-semibold md:text-base">
        <Package2 class="h-6 w-6" />
        <span class="sr-only">Todo</span>
      </a>
      <template v-for="menu in menus" :key="menu.id">
        <RouterLink :to="menu.url" class="text-foreground transition-colors hover:text-foreground">
          {{ menu.name }}
        </RouterLink>
      </template>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button
          variant="outline"
          size="icon"
          class="shrink-0 md:hidden"
        >
          <Menu class="h-5 w-5" />
          <span class="sr-only">
            Toggle navigation menu
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Todo</span>
          </a>
          <template v-for="menu in menus" :key="menu.id">
            <RouterLink :to="menu.url" class="text-muted-foreground hover:text-foreground">
              {{ menu.name }}
            </RouterLink>
          </template>
        </nav>
      </SheetContent>
    </Sheet>
    <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <div class="ml-auto flex-1 sm:flex-initial" />
      <LayoutStdHeaderAuthInfo />
    </div>
  </header>
</template>