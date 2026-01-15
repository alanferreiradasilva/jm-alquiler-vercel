<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t, setLocale, locale } = useI18n()

const mobileOpen = ref(false)
const langDropdownOpen = ref(false)
const availableLangs = ['ES', 'EN', 'PT'] as const

const langDropdownRef = ref<HTMLElement | null>(null)
const langDropdownMobileRef = ref<HTMLElement | null>(null)
const mobileMenuRef = ref<HTMLElement | null>(null)
const mobileToggleRef = ref<HTMLElement | null>(null)

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}
function closeMobile() {
  mobileOpen.value = false
}
function toggleLangDropdown() {
  langDropdownOpen.value = !langDropdownOpen.value
}
function selectLang(lang: string) {
  setLocale(lang as 'ES' | 'EN' | 'PT')
  langDropdownOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as Node
  
  if (langDropdownRef.value && !langDropdownRef.value.contains(target) &&
      langDropdownMobileRef.value && !langDropdownMobileRef.value.contains(target)) {
    langDropdownOpen.value = false
  }
  
  if (mobileToggleRef.value && !mobileToggleRef.value.contains(target) &&
      mobileMenuRef.value && !mobileMenuRef.value.contains(target)) {
    mobileOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="bg-[#1a1a1a] border-b border-gray-800 px-8 py-4 shadow-lg">
    <div class="max-w-[1400px] mx-auto flex items-center justify-between relative">
      <!-- Logo e Brand -->
      <RouterLink to="/admin" class="flex items-center gap-3 group">
        <div class="bg-[#D4AF37] p-2 rounded-lg">
          <svg class="w-6 h-6 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
        <div class="flex flex-col hidden md:block">
          <span class="text-white text-xl font-bold leading-tight">JM Admin</span>
          <span class="text-[#D4AF37] text-xs font-semibold tracking-wider">DASHBOARD</span>
        </div>
      </RouterLink>
      
      <!-- Navigation Links (desktop) -->
      <div class="flex items-center gap-8 hidden md:flex">
        <RouterLink to="/admin" class="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium">
          {{ t('navAdmin.dashboard') }}
        </RouterLink>
        <RouterLink to="/admin/vehicles" class="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium">
          {{ t('navAdmin.vehicles') }}
        </RouterLink>
        <RouterLink to="/admin/contracts" class="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium">
          {{ t('navAdmin.contracts') }}
        </RouterLink>
        <RouterLink to="/admin/reports" class="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium">
          {{ t('navAdmin.reports') }}
        </RouterLink>
      </div>

      <!-- User Section (desktop) -->
      <div class="flex items-center gap-4 hidden md:flex">
        <!-- Language Dropdown -->
        <div class="relative" ref="langDropdownRef">
          <button 
            @click="toggleLangDropdown"
            class="w-10 h-10 bg-[#D4AF37] text-[#1a1a1a] font-bold text-sm rounded hover:bg-[#c9a332] transition-colors flex items-center justify-center cursor-pointer"
          >
            {{ locale }}
          </button>
          <div 
            v-if="langDropdownOpen" 
            class="absolute right-0 mt-2 w-10 bg-[#2a2a2a] border border-[#D4AF37] rounded shadow-lg overflow-hidden z-10"
          >
            <button 
              v-for="lang in availableLangs" 
              :key="lang"
              @click="selectLang(lang)"
              class="w-full py-2 text-center text-white text-sm hover:bg-[#D4AF37] hover:text-[#1a1a1a] transition-colors font-medium cursor-pointer"
            >
              {{ lang }}
            </button>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center overflow-hidden">
            <span class="text-[#1a1a1a] text-sm font-bold">A</span>
          </div>
          <span class="text-white text-sm font-medium">alan</span>
        </div>
        
        <RouterLink 
          to="/" 
          class="px-6 py-1.5 bg-[#D4AF37]/10 border-2 border-[#D4AF37] text-[#D4AF37] rounded hover:bg-[#D4AF37] hover:text-[#1a1a1a] transition-all text-sm font-semibold"
        >
          {{ t('navAdmin.exit') }}
        </RouterLink>
      </div>

      <!-- Mobile: hamburger -->
      <div class="md:hidden flex items-center gap-2">
        <!-- Language Dropdown (Mobile) -->
        <div class="relative" ref="langDropdownMobileRef">
          <button 
            @click="toggleLangDropdown"
            class="w-10 h-10 bg-[#D4AF37] text-[#1a1a1a] font-bold text-sm rounded hover:bg-[#c9a332] transition-colors flex items-center justify-center cursor-pointer"
          >
            {{ locale }}
          </button>
          <div 
            v-if="langDropdownOpen" 
            class="absolute right-0 mt-2 w-10 bg-[#2a2a2a] border border-[#D4AF37] rounded shadow-lg overflow-hidden z-10"
          >
            <button 
              v-for="lang in availableLangs" 
              :key="lang"
              @click="selectLang(lang)"
              class="w-full py-2 text-center text-white text-sm hover:bg-[#D4AF37] hover:text-[#1a1a1a] transition-colors font-medium cursor-pointer"
            >
              {{ lang }}
            </button>
          </div>
        </div>
        
        <button ref="mobileToggleRef" @click="toggleMobile" aria-label="Abrir menu" class="p-2 rounded-md text-gray-200 hover:bg-[#2a2a2a]">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu (vertical) -->
      <div v-if="mobileOpen" ref="mobileMenuRef" class="absolute right-6 top-full mt-2 w-56 bg-[#2a2a2a] border border-gray-700 rounded-lg shadow-lg z-50 md:hidden">
        <nav class="flex flex-col p-3 gap-2 text-center">
          <RouterLink @click="closeMobile" to="/admin" class="text-gray-300 px-3 py-2 rounded hover:bg-[#1a1a1a]">{{ t('navAdmin.dashboard') }}</RouterLink>
          <RouterLink @click="closeMobile" to="/admin/vehicles" class="text-gray-300 px-3 py-2 rounded hover:bg-[#1a1a1a]">{{ t('navAdmin.vehicles') }}</RouterLink>
          <RouterLink @click="closeMobile" to="/admin/contracts" class="text-gray-300 px-3 py-2 rounded hover:bg-[#1a1a1a]">{{ t('navAdmin.contracts') }}</RouterLink>
          <RouterLink @click="closeMobile" to="/admin/reports" class="text-gray-300 px-3 py-2 rounded hover:bg-[#1a1a1a]">{{ t('navAdmin.reports') }}</RouterLink>
          <div class="border-t border-gray-700 my-2"></div>
          <RouterLink @click="closeMobile" to="/" class="text-[#D4AF37] px-3 py-2 rounded hover:bg-[#1a1a1a] font-medium">{{ t('navAdmin.exit') }}</RouterLink>
        </nav>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar Admin styles */
</style>
