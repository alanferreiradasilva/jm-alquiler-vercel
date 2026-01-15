<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFC]">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ t('admin.title') }}</h1>
        <p class="text-gray-600">{{ t('admin.description') }}</p>
      </div>

      <!-- Cards Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Vehicles Card -->
        <RouterLink 
          to="/admin/vehicles" 
          class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 group"
        >
          <div class="w-14 h-14 bg-[#600010]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#600010]/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
              <circle cx="7" cy="17" r="2"/>
              <path d="M9 17h6"/>
              <circle cx="17" cy="17" r="2"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('admin.vehicles.title') }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ t('admin.vehicles.description') }}</p>
          <div class="flex items-center text-[#600010] font-medium text-sm group-hover:gap-2 transition-all">
            {{ t('admin.manage') }}
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </RouterLink>

        <!-- Contracts Card -->
        <RouterLink 
          to="/admin/contracts" 
          class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 group"
        >
          <div class="w-14 h-14 bg-[#600010]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#600010]/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('admin.contracts.title') }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ t('admin.contracts.description') }}</p>
          <div class="flex items-center text-[#600010] font-medium text-sm group-hover:gap-2 transition-all">
            {{ t('admin.manage') }}
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </RouterLink>

        <!-- Reports Card -->
        <RouterLink 
          to="/admin/reports" 
          class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 group"
        >
          <div class="w-14 h-14 bg-[#600010]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#600010]/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('admin.reports.title') }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ t('admin.reports.description') }}</p>
          <div class="flex items-center text-[#600010] font-medium text-sm group-hover:gap-2 transition-all">
            {{ t('admin.manage') }}
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </RouterLink>
      </div>

      <!-- Stats Section -->
      <div class="grid md:grid-cols-4 gap-4 mt-8">
        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <p class="text-gray-600 text-sm mb-1">{{ t('admin.stats.totalVehicles') }}</p>
          <p class="text-3xl font-bold text-gray-900">12</p>
        </div>
        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <p class="text-gray-600 text-sm mb-1">{{ t('admin.stats.activeContracts') }}</p>
          <p class="text-3xl font-bold text-gray-900">8</p>
        </div>
        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <p class="text-gray-600 text-sm mb-1">{{ t('admin.stats.availableVehicles') }}</p>
          <p class="text-3xl font-bold text-gray-900">4</p>
        </div>
        <div class="bg-white rounded-lg border border-gray-200 p-4">
          <p class="text-gray-600 text-sm mb-1">{{ t('admin.stats.monthlyRevenue') }}</p>
          <p class="text-3xl font-bold text-gray-900">R$ 15.6k</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
