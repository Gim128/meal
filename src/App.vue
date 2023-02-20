<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-5"
      >
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link
          to="/"
          class="
            px-2
            inline-flex
            items-center
            transition-colors
            h-full
            hover:bg-green-100
          "
        >
          Search Meals
        </router-link>
        <router-link
          to="/"
          class="
            px-2
            inline-flex
            items-center
            transition-colors
            h-full
            hover:bg-green-100
          "
        >
          Search by name
        </router-link>
        <router-link
          to="/"
          class="
            px-2
            inline-flex
            items-center
            transition-colors
            h-full
            hover:bg-green-100
          "
        >
          Search by ingredients
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
