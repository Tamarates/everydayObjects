import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/Home.vue';
import CreateComponent from './components/Create.vue'


const routes = [
  {
    path: '/Home',
    alias:'/',
    component: HomeComponent
  },
  {
    path: '/create',
    component: CreateComponent
  },
  // {
  //   path: '/searchfleet',
  //   component: SearchFleet
  // },
  // {
  //   path: '/servers_monitor',
  //   component: ServersMonitor
  // },
  // {
  //   path: '/login',
  //   component: LoginComponent
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Cambiar process por import.meta.env
  routes
});


export default router;
