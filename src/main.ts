/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import router from './router/index'; // Importa o router

const app = createApp(App)
app.use(router); // Use o router
registerPlugins(app)

app.mount('#app')
