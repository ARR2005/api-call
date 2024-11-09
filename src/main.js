import { createApp } from 'vue';
import App from './App.vue';
import ValorantApi from './assets/Valorant-api.vue';
import './assets/styles.css';
import router from './router';

const app = createApp(App);
app.component('ValorantApi', ValorantApi); // Register the ValorantApi component globally
app.use(router).mount('#app'); // Use the router and mount the app