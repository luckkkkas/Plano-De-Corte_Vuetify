// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Roupeiro from '@/views/Roupeiro.vue';
import Banheiro from '@/views/Banheiro.vue';
import Modulado from '@/views/Modulado.vue';
import Cozinha from '@/views/CozinhaRow.vue';
import Plus from '@/views/Plus.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Roupeiro', name: 'Roupeiro', component: Roupeiro },
  { path: '/Banheiro', name: 'Banheiro', component: Banheiro},
  { path: '/Modulado', name: 'Modulado', component: Modulado},
  { path: '/Plus', name: 'Plus', component: Plus},
  { path: '/Cozinha', name: 'Cozinha', component: Cozinha}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
