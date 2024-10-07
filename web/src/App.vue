<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';
import { useColorMode } from '@vueuse/core';
import { RouterView } from 'vue-router';
import TheAuthContext from './components/TheAuthContext.vue';
import { useAuthStore } from './stores/auth';

useColorMode({initialValue: 'dark'});
const auth = useAuthStore();
auth.$subscribe((_mutation, state) => {
  localStorage.setItem('auth', JSON.stringify(state))
})

</script>

<template>
  <TheAuthContext>
    <RouterView />
  </TheAuthContext>
  <Toaster />
</template>

<style scoped></style>
