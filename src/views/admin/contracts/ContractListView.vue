<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

interface Contract {
  id: number
  clientName: string
  vehicle: string
  startDate: string
  endDate: string
  value: number
  status: 'active' | 'completed' | 'cancelled'
}

// Mock data for contracts - sorted by most recent
const allContracts = ref<Contract[]>([
  {
    id: 1,
    clientName: 'Carlos Mendes',
    vehicle: 'Hyundai Tucson 2012',
    startDate: '2026-01-10',
    endDate: '2026-01-20',
    value: 1950,
    status: 'active'
  },
  {
    id: 2,
    clientName: 'Maria Silva',
    vehicle: 'Toyota Corolla 2020',
    startDate: '2026-01-08',
    endDate: '2026-01-15',
    value: 1400,
    status: 'active'
  },
  {
    id: 3,
    clientName: 'João Santos',
    vehicle: 'Honda Civic 2019',
    startDate: '2026-01-05',
    endDate: '2026-01-12',
    value: 1260,
    status: 'active'
  },
  {
    id: 4,
    clientName: 'Ana Rodriguez',
    vehicle: 'Chevrolet Onix 2021',
    startDate: '2025-12-28',
    endDate: '2026-01-04',
    value: 1050,
    status: 'completed'
  },
  {
    id: 5,
    clientName: 'Pedro Gonzalez',
    vehicle: 'Ford EcoSport 2018',
    startDate: '2025-12-25',
    endDate: '2026-01-02',
    value: 1200,
    status: 'completed'
  },
  {
    id: 6,
    clientName: 'Laura Martinez',
    vehicle: 'Hyundai Tucson 2012',
    startDate: '2025-12-20',
    endDate: '2025-12-27',
    value: 1365,
    status: 'completed'
  },
  {
    id: 7,
    clientName: 'Roberto Lima',
    vehicle: 'Toyota Corolla 2020',
    startDate: '2025-12-15',
    endDate: '2025-12-22',
    value: 1400,
    status: 'completed'
  },
  {
    id: 8,
    clientName: 'Carla Ferreira',
    vehicle: 'Honda Civic 2019',
    startDate: '2025-12-10',
    endDate: '2025-12-18',
    value: 1440,
    status: 'completed'
  },
  {
    id: 9,
    clientName: 'Miguel O\'Connor',
    vehicle: 'Chevrolet Onix 2021',
    startDate: '2025-12-05',
    endDate: '2025-12-12',
    value: 1050,
    status: 'completed'
  },
  {
    id: 10,
    clientName: 'Patricia Brown',
    vehicle: 'Ford EcoSport 2018',
    startDate: '2025-12-01',
    endDate: '2025-12-08',
    value: 1200,
    status: 'completed'
  },
  {
    id: 11,
    clientName: 'Fernando Ramos',
    vehicle: 'Hyundai Tucson 2012',
    startDate: '2025-11-25',
    endDate: '2025-12-02',
    value: 1365,
    status: 'completed'
  },
  {
    id: 12,
    clientName: 'Sofia Alvarez',
    vehicle: 'Toyota Corolla 2020',
    startDate: '2025-11-20',
    endDate: '2025-11-27',
    value: 1400,
    status: 'cancelled'
  }
])

// Filters
const clientFilter = ref('')
const vehicleFilter = ref('')
const startDateFilter = ref('')
const endDateFilter = ref('')

// Filtered contracts
const filteredContracts = computed(() => {
  return allContracts.value.filter(contract => {
    // Client name filter (startsWith)
    if (clientFilter.value && !contract.clientName.toLowerCase().startsWith(clientFilter.value.toLowerCase())) {
      return false
    }
    
    // Vehicle filter (includes)
    if (vehicleFilter.value && !contract.vehicle.toLowerCase().includes(vehicleFilter.value.toLowerCase())) {
      return false
    }
    
    // Start date filter
    if (startDateFilter.value && contract.startDate < startDateFilter.value) {
      return false
    }
    
    // End date filter
    if (endDateFilter.value && contract.endDate > endDateFilter.value) {
      return false
    }
    
    return true
  })
})

function clearFilters() {
  clientFilter.value = ''
  vehicleFilter.value = ''
  startDateFilter.value = ''
  endDateFilter.value = ''
}

function getStatusColor(status: string) {
  switch(status) {
    case 'active': return 'bg-green-100 text-green-800'
    case 'completed': return 'bg-blue-100 text-blue-800'
    case 'cancelled': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function formatCurrency(value: number) {
  return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFC]">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ t('navAdmin.contracts') }}</h1>
          <p class="text-gray-600">{{ t('admin.contracts.description') }}</p>
        </div>
        <RouterLink
          to="/admin/contracts/new"
          class="px-6 py-3 bg-[#600010] text-white rounded-lg font-semibold hover:bg-[#800020] transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          {{ t('admin.contracts.addNew') }}
        </RouterLink>
      </div>

      <!-- Filters Card -->
      <div class="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
            </svg>
            {{ t('admin.contracts.filters') }}
          </h3>
          <button 
            @click="clearFilters"
            class="text-sm text-gray-600 hover:text-[#600010] font-medium transition-colors"
          >
            {{ t('admin.contracts.clearFilters') }}
          </button>
        </div>

        <div class="grid md:grid-cols-4 gap-4">
          <!-- Client Name Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              {{ t('admin.contracts.clientName') }}
            </label>
            <input 
              v-model="clientFilter"
              type="text" 
              :placeholder="t('admin.contracts.searchClient')"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
            />
          </div>

          <!-- Vehicle Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              {{ t('admin.contracts.vehicle') }}
            </label>
            <input 
              v-model="vehicleFilter"
              type="text" 
              :placeholder="t('admin.contracts.searchVehicle')"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
            />
          </div>

          <!-- Start Date Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              {{ t('admin.contracts.dateFrom') }}
            </label>
            <input 
              v-model="startDateFilter"
              type="date" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
            />
          </div>

          <!-- End Date Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              {{ t('admin.contracts.dateTo') }}
            </label>
            <input 
              v-model="endDateFilter"
              type="date" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        <!-- Results count -->
        <div class="mt-4 pt-4 border-t border-gray-200">
          <p class="text-sm text-gray-600">
            {{ t('admin.contracts.showing') }} 
            <span class="font-semibold text-gray-900">{{ filteredContracts.length }}</span> 
            {{ t('admin.contracts.of') }} 
            <span class="font-semibold text-gray-900">{{ allContracts.length }}</span> 
            {{ t('admin.contracts.contracts') }}
          </p>
        </div>
      </div>

      <!-- Table Card -->
      <div class="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {{ t('admin.contracts.clientName') }}
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {{ t('admin.contracts.vehicle') }}
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {{ t('admin.contracts.period') }}
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {{ t('admin.contracts.value') }}
                </th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {{ t('admin.contracts.status') }}
                </th>
                <th class="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  {{ t('admin.contracts.actions') }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr 
                v-for="contract in filteredContracts" 
                :key="contract.id"
                class="hover:bg-gray-50 transition-colors"
              >
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-10 h-10 rounded-full bg-[#600010]/10 flex items-center justify-center flex-shrink-0">
                      <span class="text-[#600010] font-semibold text-sm">
                        {{ contract.clientName.split(' ').map(n => n[0]).join('').substring(0, 2) }}
                      </span>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-semibold text-gray-900">{{ contract.clientName }}</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-gray-900">{{ contract.vehicle }}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">
                    <div class="flex items-center gap-1">
                      <span>{{ formatDate(contract.startDate) }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span>{{ formatDate(contract.endDate) }}</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <p class="text-sm font-semibold text-gray-900">{{ formatCurrency(contract.value) }}</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span 
                    :class="getStatusColor(contract.status)"
                    class="inline-flex px-3 py-1 text-xs font-semibold rounded-full"
                  >
                    {{ t(`admin.contractStatus.${contract.status}`) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right">
                  <div class="flex items-center justify-end gap-2">
                    <RouterLink
                      :to="`/admin/contracts/edit/${contract.id}`"
                      class="p-2 text-gray-600 hover:text-[#600010] hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                    </RouterLink>
                    <button class="p-2 text-gray-600 hover:text-[#600010] hover:bg-gray-100 rounded-lg transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Empty state -->
          <div v-if="filteredContracts.length === 0" class="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <p class="text-gray-500 text-lg font-medium">{{ t('admin.contracts.noResults') }}</p>
            <p class="text-gray-400 text-sm mt-1">{{ t('admin.contracts.tryDifferentFilters') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
