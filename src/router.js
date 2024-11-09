import { createRouter, createWebHistory } from 'vue-router'; 
import App from './App.vue'; // Import App.vue

const routes = [
  {
    path: '/',
    component: App, // Use App as the layout
     
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;