import { createApp } from 'vue'
import App from './App.vue'

window.history.pushState(null, '', null)
window.addEventListener('popstate', function () {
  window.history.pushState(null, '', null)
  return
})

createApp(App).mount('#app')
