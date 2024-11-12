import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/Home.vue';
import CreateComponent from './components/Create.vue'
import SourcesComponent from './components/Sources.vue'


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
  {
    path: '/sources',
    component: SourcesComponent
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});


export default router;
