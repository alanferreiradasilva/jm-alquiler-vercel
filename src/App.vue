<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/navbars/Navbar.vue'
import NavbarAdmin from './components/navbars/NavbarAdmin.vue'

const route = useRoute()

const isAdminRoute = computed(() => {
  return route.path.startsWith('/admin')
})
</script>

<template>
  <header>
    <NavbarAdmin v-if="isAdminRoute" />
    <Navbar v-else />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
