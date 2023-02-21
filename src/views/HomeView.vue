<template>
  <div class="flex flex-col p-7">
    <div>
      
    </div>

    <div class="flex gap-2 mt-2 justify-center">
      <router-link
        v-for="letter in letters"
        :key="letter"
        to="{name: 'byLetter', params: {letter}}"
      >
        {{ letter }}
      </router-link>
    </div>

    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

// const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>

