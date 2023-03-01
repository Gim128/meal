<template>
  <div class="p-8">
    <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="search meals"
        @change="searchMeals"
      />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">

      <router-link to="/">
        <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
      </router-link>
      
      <div class="p-3">
        <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>

        <p class="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi quam pariatur dolores molestias odit veritatis provident assumenda corporis itaque magni suscipit, ipsa id! Error doloribus itaque nam aspernatur quia.</p>

        <div class="p-3 flex items-center justify-between">
          <a :href="meal.strMeal" target="_blank"
          class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors">
            YouTube
          </a>
          
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import { computed } from '@vue/reactivity';
import { ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';

  const route = useRoute();
  const keyword = ref('');
  const meals = computed(()=> store.state.searchMeals)

  function searchMeals(){
   store.dispatch('searchMeals', keyword.value)
  }

  onMounted(() => {
    keyword.value = route.params.name
  })

</script>

<style>
</style>