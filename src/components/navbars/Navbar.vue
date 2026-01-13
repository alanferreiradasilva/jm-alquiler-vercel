<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const mobileOpen = ref(false)
function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}
function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <nav class="bg-[#21070C] px-8 py-4">
    <div class="max-w-[1400px] mx-auto flex items-center justify-between relative">
      <!-- Logo e Brand -->
      <RouterLink to="/" class="flex items-center gap-3 group">
        <div class="bg-[#d4af37] p-2 rounded">
          <svg class="w-6 h-6 text-[#3d1319]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        </div>
        <div class="flex flex-col hidden md:block">
          <span class="text-white text-xl font-bold leading-tight">JM Alquiler</span>
          <span class="text-[#d4af37] text-xs font-semibold tracking-wider">PREMIUM</span>
        </div>
      </RouterLink>
      
      <!-- Navigation Links (desktop) -->
      <div class="flex items-center gap-8 hidden md:flex">
        <RouterLink :to="{ name: 'home', hash: '#fleet' }" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">
          Flota
        </RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#servicios' }" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">
          Servicios
        </RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#contact' }" class="text-gray-300 hover:text-white transition-colors text-sm font-medium">
          Contacto
        </RouterLink>
      </div>

      <!-- User Section (desktop) -->
      <div class="flex items-center gap-4 hidden md:flex">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
            <span class="text-white text-sm font-medium">A</span>
          </div>
          <span class="text-white text-sm">alan</span>
        </div>
        
        <RouterLink 
          to="/admin" 
          class="px-6 py-1.5 border-2 border-[#d4af37] text-[#d4af37] rounded hover:bg-[#d4af37] hover:text-[#3d1319] transition-all text-sm font-semibold"
        >
          Admin
        </RouterLink>

      </div>

      <!-- Mobile: hamburger -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMobile" aria-label="Abrir menu" class="p-2 rounded-md text-gray-200 hover:bg-[#2a0f12]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu (vertical) -->
      <div v-if="mobileOpen" class="absolute right-6 top-full mt-2 w-56 bg-[#21070C] border border-[#321012] rounded-lg shadow-lg z-50 md:hidden">
        <nav class="flex flex-col p-3 gap-2 text-center">
          <RouterLink @click="closeMobile" :to="{ name: 'home', hash: '#fleet' }" class="text-gray-300 px-3 py-2 rounded hover:bg-[#2a0f12]">Flota</RouterLink>
          <RouterLink @click="closeMobile" :to="{ name: 'home', hash: '#services' }" class="text-gray-300 px-3 py-2 rounded hover:bg-[#2a0f12]">Servicios</RouterLink>
          <RouterLink @click="closeMobile" :to="{ name: 'home', hash: '#contact' }" class="text-gray-300 px-3 py-2 rounded hover:bg-[#2a0f12]">Contacto</RouterLink>
          <RouterLink @click="closeMobile" to="#" class="text-gray-300 px-3 py-2 rounded hover:bg-[#2a0f12]">Profile</RouterLink>
          <RouterLink @click="closeMobile" to="/admin" class="text-gray-300 px-3 py-2 rounded hover:bg-[#2a0f12]">Admin</RouterLink>
        </nav>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Tailwind CSS será usado, sem estilos customizados necessários */
</style>
