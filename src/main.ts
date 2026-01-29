import { createApp, onMounted } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router/router';
import { Toaster } from './components/ui/sonner';
import 'vue-sonner/style.css'
document.documentElement.classList.add('dark')

createApp(App)
  .use(router)
  .component('Toaster', Toaster)
  .mount('#app');
