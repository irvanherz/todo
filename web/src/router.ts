import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from './stores/auth'
import AuthLoginView from './views/AuthLoginView.vue'
import AuthRegisterView from './views/AuthRegisterView.vue'
import HomeView from './views/HomeView.vue'
import NotFoundView from './views/NotFoundView.vue'
import ProfileView from './views/ProfileView.vue'
import WorkspacesView from './views/WorkspacesView.vue'
import WorkspaceView from './views/WorkspaceView.vue'


const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/profile', component: ProfileView, meta: { require: 'authenticated' } },
  { path: '/workspaces', component: WorkspacesView, meta: { require: 'authenticated' } },
  { path: '/workspaces/:id', component: WorkspaceView, meta: { require: 'authenticated' } },
  { path: '/workspaces/:id/:sectionId(today|important|planned|tasks|completed)', component: WorkspaceView, meta: { require: 'authenticated' } },
  { path: '/auth/login', component: AuthLoginView, meta: { require: 'unauthenticated' }  },
  { path: '/auth/register', component: AuthRegisterView, meta: { require: 'unauthenticated' }  },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const auth = useAuthStore();
  if (to.meta.require === 'unauthenticated' && auth.status === 'authenticated') {
    next({ path: '/' })
  } else if (to.meta.require === 'authenticated' && auth.status === 'unauthenticated') {
    next({ path: '/auth/login', query: { redir: to.fullPath } })
  } else {
    next()
  }
})