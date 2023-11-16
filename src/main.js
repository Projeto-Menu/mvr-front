import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router/index';
import input from './input.css'

const app = createApp(App)
app.use(PrimeVue);
app.use(router);
app.mount('#app');