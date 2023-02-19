import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import MenuList from '../views/MenuList.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
      path: "/letter/:letter",
      name: "byLetter",
      component: MenuList,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;