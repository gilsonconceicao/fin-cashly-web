import { createApp, onMounted } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router/router';

import moment from '@/lib/moment'
import 'moment/locale/pt-br';
moment.locale('pt-br');

createApp(App)
    .use(router)
    .mount('#app');