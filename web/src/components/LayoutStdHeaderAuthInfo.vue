<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/stores/auth';
import { CircleUser } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import Button from './ui/button/Button.vue';

const auth = useAuthStore();
const router = useRouter()

const handleLogout = () => {
  auth.$patch({ status: 'unauthenticated', accessToken: null, refreshToken: null, user: null });
  router.push('/')
}

</script>

<template>
  <template v-if="auth.status === 'authenticated'">   
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="icon" class="rounded-full">
          <CircleUser class="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div class="text-xs text-muted-foreground">
            Welcome
          </div>
          <div class="font-bold text-base">
            {{ auth.user.firstName }} {{ auth.user.lastName }}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="handleLogout">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </template>
  <template v-else>
    <div class="flex gap-2">
      <RouterLink to="/auth/login">
        <Button variant="secondary" size="sm">
          Sign in
        </Button>
      </RouterLink>
      <RouterLink to="/auth/register">
        <Button variant="default" size="sm">
          Sign up
        </Button>
      </RouterLink>
    </div>
  </template>
</template>