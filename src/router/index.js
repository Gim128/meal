import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealsByName from '../views/MealsByName.vue';
import mealDetails from '../views/MealDetails.vue';
import MealsByLetter from '../views/MealsByIngredients.vue';
import MealsByIngredients from '../views/MealsByIngredients.vue';

const routes = [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/by-name/:name?",
          name: "byName",
          component: MealsByName,
        },
        {
          path: "/by-letter/:letter?",
          name: "byLetter",
          component: MealsByLetter,
        },
        {
          path: "/by-ingredients/:ingredients?",
          name: "byIngredients",
          component: MealsByIngredients,
        },
        {
          path: "/meal/:id",
          name: "mealDetails",
          component: mealDetails,
        }
      ]
    },
    {
      path:"/guest",
      component: GuestLayout
    }
    
    // {
    //   path: "/letter/:letter",
    //   name: "byLetter",
    //   component: MenuList,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;