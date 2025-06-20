import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Убедись, что путь правильный

createApp(App)
  .use(router) // Важно: роутер должен быть подключен здесь
  .mount('#app')