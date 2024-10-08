import { defineStore } from "pinia";
import { ref } from "vue";

interface AuthUser {
    id: number
    email: string
    username: string
    firstName: string
    lastName: string
}

export type AuthStatus = 'authenticated' | 'unauthenticated'

export interface AuthState {
    status: AuthStatus | null,
    accessToken: string | null
    refreshToken: string | null
    user: AuthUser | null
}

export const useAuthStore = defineStore('auth', () => {
    const status = ref<AuthStatus>(null);
    const accessToken = ref<string | null>(null);
    const refreshToken = ref<string | null>(null);
    const user = ref<AuthUser | null>(null);

    function setAuth(v: Partial<AuthState>) {
        if (v.status !== undefined) status.value = v.status;
        if (v.accessToken !== undefined) accessToken.value = v.accessToken || null;
        if (v.refreshToken !== undefined) refreshToken.value = v.refreshToken || null;
        if (v.user !== undefined) user.value = v.user || null;
    }

    return { status, accessToken, refreshToken, user, setAuth }
})

export type UseAuthStore = ReturnType<typeof useAuthStore>