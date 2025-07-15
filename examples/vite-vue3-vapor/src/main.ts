import { createApp, vaporInteropPlugin } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).use(vaporInteropPlugin).mount('#app')
