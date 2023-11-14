import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: "Login",
    component: () => import("../views/Registro/Login.vue"),
    meta: {
      name: "Login",
    },
  },
  {
    path: '/cadastro',
    name: "Cadastro", 
    component: () => import("../views/Registro/Cadastro.vue"),
    meta: {
      name: "Cadastro",
    },
  },
  {
    path: '/api',
    name: "api",
    component: () => import("../views/TesteApi.vue"),
    meta: {
      name: "api",
    },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;