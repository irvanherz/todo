import VueApolloComponents from '@vue/apollo-components'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { apolloClient, apolloProvider } from './apollo'
import App from './App.vue'
import './assets/index.css'
import { router } from './router'

const pinia = createPinia()
const app = createApp(App)

app
    .use(pinia)
    .use(router)
    .use(apolloProvider)
    .use(VueApolloComponents)
    .provide(DefaultApolloClient, apolloClient)
    .mount('#app')
