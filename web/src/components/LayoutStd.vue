<script setup lang="ts">
import LayoutStdHeader from './LayoutStdHeader.vue';

interface LayoutStdProps {
  contentClass?: string
}

const props = defineProps<LayoutStdProps>()

</script>

<template>
  <div v-bind="$attrs" class="flex min-h-screen w-full flex-col">
    <LayoutStdHeader />
    <main :class="props.contentClass">
      <slot />
    </main>
  </div>
</template>