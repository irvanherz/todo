<script setup lang="ts">
import { AuthState, useAuthStore } from '@/stores/auth';

const prevAuthJson = localStorage.getItem('auth');
const prevAuth: AuthState = prevAuthJson ? JSON.parse(prevAuthJson) : {
  status: 'authenticated',
  accessToken: null,
  refreshToken: null,
  user: null,
};
console.log('prevAuth', prevAuth);
const auth = useAuthStore();
auth.setAuth(prevAuth);
</script>

<template>
  <template v-if="!!auth.status">
    <slot />
  </template>
  <template v-else>
    <div>Loading...</div>
  </template>
</template>