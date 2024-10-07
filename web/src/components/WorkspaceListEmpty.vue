<script setup lang="ts">
import Button from './ui/button/Button.vue';
import WorkspaceAddButton from './WorkspaceAddButton.vue';

const emit = defineEmits({
  created(_payload: object) {
    return true
  }
})

</script>

<template>
  <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
    <div class="flex flex-col items-center gap-1 text-center">
      <h3 class="text-2xl font-bold tracking-tight">
        You have no workspaces
      </h3>
      <p class="text-sm text-muted-foreground">
        You can start managing your tasks as soon as you create one.
      </p>
      <WorkspaceAddButton @created="c => emit('created', c)">
        <Button class="mt-4">
          Add Workspace
        </Button>
      </WorkspaceAddButton>
    </div>
  </div>
</template>