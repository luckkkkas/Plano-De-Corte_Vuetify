// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Roupeiro from '@/views/Roupeiro.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Roupeiro', name: 'Roupeiro', component: Roupeiro }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
