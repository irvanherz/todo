<script setup lang="ts">
import LayoutAuth from '@/components/LayoutAuth.vue';
import Button from '@/components/ui/button/Button.vue';
</script>

<template>
  <LayoutAuth>
    <div className="flex flex-col items-center justify-center bg-background p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        404
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button @click="$router.back()">
        Go back home
      </Button>
    </div>
  </LayoutAuth>
</template>