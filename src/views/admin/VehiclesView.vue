<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

// Mock data para veículos
const vehicles = ref([
  {
    id: 1,
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2012,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ThiW9ghM8LlOc-Fbm_8AAgIp91uNXqkuFw&s',
    fuel: 'Gasolina',
    transmission: 'Automático',
    consumption: '11.5',
    luggage: 513,
    status: 'available'
  },
  {
    id: 2,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    image: 'https://grupovierci.brightspotcdn.com/dims4/default/d1b88cf/2147483647/strip/true/crop/1200x675+0+78/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-grupo-vierci.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fadjuntos%2F161%2Fimagenes%2F009%2F733%2F0009733440.jpg',
    fuel: 'Flex',
    transmission: 'Automático',
    consumption: '13.2',
    luggage: 470,
    status: 'rented'
  },
  {
    id: 3,
    brand: 'Chevrolet',
    model: 'Onix',
    year: 2021,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9E1U_9RKWsyYCdcMiGSmZBeyPpIZz1zJQQ&s',
    fuel: 'Flex',
    transmission: 'Manual',
    consumption: '14.8',
    luggage: 300,
    status: 'available'
  },
  {
    id: 4,
    brand: 'Honda',
    model: 'Civic',
    year: 2019,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhYGOy4mlQsaqeefodUrGogJOodMGtnJ4wQ&s',
    fuel: 'Gasolina',
    transmission: 'Automático CVT',
    consumption: '12.3',
    luggage: 519,
    status: 'maintenance'
  }
])

function getStatusColor(status: string) {
  switch(status) {
    case 'available': return 'bg-green-100 text-green-800'
    case 'rented': return 'bg-blue-100 text-blue-800'
    case 'maintenance': return 'bg-orange-100 text-orange-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

function getStatusText(status: string) {
  return t(`admin.vehicleStatus.${status}`)
}
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFC]">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ t('navAdmin.vehicles') }}</h1>
          <p class="text-gray-600">{{ t('admin.vehicles.description') }}</p>
        </div>
        <RouterLink 
          to="/admin/vehicles/new"
          class="px-6 py-3 bg-[#600010] text-white rounded-lg font-semibold hover:bg-[#800020] transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          <span class="hidden md:inline">{{ t('admin.vehicles.addNew') }}</span>
          
        </RouterLink>
      </div>

      <!-- Vehicles List -->
      <div class="space-y-4">
        <div 
          v-for="vehicle in vehicles" 
          :key="vehicle.id"
          class="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div class="flex flex-col md:flex-row">
            <!-- Image Section -->
            <div class="md:w-80 h-48 md:h-auto bg-gray-100 flex-shrink-0">
              <img 
                :src="vehicle.image" 
                :alt="`${vehicle.brand} ${vehicle.model}`"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Content Section -->
            <div class="flex-1 p-6">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-1">
                    {{ vehicle.brand }} {{ vehicle.model }} {{ vehicle.year }}
                  </h3>
                  <span 
                    :class="getStatusColor(vehicle.status)"
                    class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {{ getStatusText(vehicle.status) }}
                  </span>
                </div>
                <div class="flex gap-2">
                  <RouterLink 
                    :to="`/admin/vehicles/edit/${vehicle.id}`"
                    class="p-2 text-gray-600 hover:text-[#600010] hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </RouterLink>
                  <button class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Vehicle Specifications -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <!-- Fuel -->
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">{{ t('admin.vehicles.fuel') }}</p>
                    <p class="text-sm font-semibold text-gray-900">{{ vehicle.fuel }}</p>
                  </div>
                </div>

                <!-- Transmission -->
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">{{ t('admin.vehicles.transmission') }}</p>
                    <p class="text-sm font-semibold text-gray-900">{{ vehicle.transmission }}</p>
                  </div>
                </div>

                <!-- Consumption -->
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">{{ t('admin.vehicles.consumption') }}</p>
                    <p class="text-sm font-semibold text-gray-900">{{ vehicle.consumption }} km/L</p>
                  </div>
                </div>

                <!-- Luggage -->
                <div class="flex items-center gap-2">
                  <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">{{ t('admin.vehicles.luggage') }}</p>
                    <p class="text-sm font-semibold text-gray-900">{{ vehicle.luggage }}L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
