import { createApp } from 'vue'
import App from './App.vue'
import { syncState } from './storage'
import { startCurrentDateTimer } from './time'

import './assets/main.css'

syncState()

startCurrentDateTimer()

document.addEventListener('visibilitychange', (): void =>
  syncState(document.visibilityState === 'visible')
)

createApp(App).mount('#app')
