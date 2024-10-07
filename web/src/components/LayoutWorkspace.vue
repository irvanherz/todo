<script setup lang="ts">

import LayoutWorkspaceAside from './LayoutWorkspaceAside.vue';
import LayoutWorkspaceHeader from './LayoutWorkspaceHeader.vue';

interface LayoutWorkspaceProps {
  workspaceId: number
  activeMenuId?: string
  contentClass?: string
}
const props = defineProps<LayoutWorkspaceProps>()
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <LayoutWorkspaceAside :workspace-id="props.workspaceId" :active-menu-id="props.activeMenuId" />
    <div class="flex flex-col">
      <LayoutWorkspaceHeader :workspace-id="props.workspaceId" :active-menu-id="props.activeMenuId" />
      <main :class="props.contentClass">
        <slot />
      </main>
    </div>
  </div>
</template>