<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const isEditMode = ref(false)
const isLoading = ref(false)
const imageError = ref(false)

// Form data
const formData = ref({
  clientName: '',
  clientEmail: '',
  clientPhone: '',
  clientDocument: '',
  vehicle: '',
  startDate: '',
  endDate: '',
  dailyRate: 0,
  totalValue: 0,
  status: 'active' as 'active' | 'completed' | 'cancelled',
  notes: ''
})

// Mock vehicles list for selection
const vehicles = ref([
  { id: 1, name: 'Hyundai Tucson 2012', dailyRate: 195 },
  { id: 2, name: 'Toyota Corolla 2020', dailyRate: 200 },
  { id: 3, name: 'Honda Civic 2019', dailyRate: 180 },
  { id: 4, name: 'Chevrolet Onix 2021', dailyRate: 150 },
  { id: 5, name: 'Ford EcoSport 2018', dailyRate: 160 }
])

onMounted(() => {
  if (route.params.id) {
    isEditMode.value = true
    loadContractData(Number(route.params.id))
  }
})

// Calculate total value based on dates and daily rate
function calculateTotal() {
  if (formData.value.startDate && formData.value.endDate && formData.value.dailyRate > 0) {
    const start = new Date(formData.value.startDate)
    const end = new Date(formData.value.endDate)
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    
    if (days > 0) {
      formData.value.totalValue = days * formData.value.dailyRate
    }
  }
}

// Update daily rate when vehicle changes
function onVehicleChange() {
  const selectedVehicle = vehicles.value.find(v => v.name === formData.value.vehicle)
  if (selectedVehicle) {
    formData.value.dailyRate = selectedVehicle.dailyRate
    calculateTotal()
  }
}

// Mock function to load contract data for editing
function loadContractData(id: number) {
  // Simulate API call
  setTimeout(() => {
    // Mock data based on ID
    formData.value = {
      clientName: 'Carlos Mendes',
      clientEmail: 'carlos.mendes@email.com',
      clientPhone: '+55 11 98765-4321',
      clientDocument: '123.456.789-00',
      vehicle: 'Hyundai Tucson 2012',
      startDate: '2026-01-10',
      endDate: '2026-01-20',
      dailyRate: 195,
      totalValue: 1950,
      status: 'active',
      notes: 'Cliente preferencial, solicita veículo limpo e revisado.'
    }
  }, 300)
}

function handleCancel() {
  router.push('/admin/contracts')
}

async function handleSubmit() {
  // Basic validation
  if (!formData.value.clientName || !formData.value.clientEmail || 
      !formData.value.clientPhone || !formData.value.vehicle || 
      !formData.value.startDate || !formData.value.endDate) {
    alert(t('admin.contracts.form.fillRequired'))
    return
  }

  // Validate end date is after start date
  if (new Date(formData.value.endDate) <= new Date(formData.value.startDate)) {
    alert(t('admin.contracts.form.invalidDates'))
    return
  }

  isLoading.value = true

  // Simulate API call
  setTimeout(() => {
    isLoading.value = false
    console.log('Contract saved:', formData.value)
    router.push('/admin/contracts')
  }, 1000)
}
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFC]">
    <div class="max-w-5xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="mb-8">
        <RouterLink 
          to="/admin/contracts"
          class="inline-flex items-center text-gray-600 hover:text-[#600010] mb-4 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          {{ t('admin.contracts.form.backToList') }}
        </RouterLink>
        
        <h1 class="text-4xl font-bold text-gray-900 mb-2">
          {{ isEditMode ? t('admin.contracts.form.editContract') : t('admin.contracts.form.newContract') }}
        </h1>
        <p class="text-gray-600">
          {{ isEditMode ? t('admin.contracts.form.editDescription') : t('admin.contracts.form.newDescription') }}
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Client Information Section -->
        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            {{ t('admin.contracts.form.clientInfo') }}
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Client Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.clientName') }} <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.clientName"
                type="text" 
                required
                :placeholder="t('admin.contracts.form.clientNamePlaceholder')"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
              />
            </div>

            <!-- Client Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.clientEmail') }} <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.clientEmail"
                type="email" 
                required
                :placeholder="t('admin.contracts.form.clientEmailPlaceholder')"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
              />
            </div>

            <!-- Client Phone -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.clientPhone') }} <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.clientPhone"
                type="tel" 
                required
                :placeholder="t('admin.contracts.form.clientPhonePlaceholder')"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
              />
            </div>

            <!-- Client Document -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.clientDocument') }}
              </label>
              <input 
                v-model="formData.clientDocument"
                type="text" 
                :placeholder="t('admin.contracts.form.clientDocumentPlaceholder')"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <!-- Rental Details Section -->
        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            {{ t('admin.contracts.form.rentalDetails') }}
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Vehicle Selection -->
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.vehicle') }} <span class="text-red-500">*</span>
              </label>
              <select 
                v-model="formData.vehicle"
                @change="onVehicleChange"
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="" disabled>{{ t('admin.contracts.form.selectVehicle') }}</option>
                <option v-for="vehicle in vehicles" :key="vehicle.id" :value="vehicle.name">
                  {{ vehicle.name }} - R$ {{ vehicle.dailyRate }}/{{ t('admin.contracts.form.day') }}
                </option>
              </select>
            </div>

            <!-- Start Date -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.startDate') }} <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.startDate"
                @change="calculateTotal"
                type="date" 
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
              />
            </div>

            <!-- End Date -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.endDate') }} <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.endDate"
                @change="calculateTotal"
                type="date" 
                required
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
              />
            </div>

            <!-- Daily Rate -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.dailyRate') }}
              </label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                <input 
                  v-model="formData.dailyRate"
                  @input="calculateTotal"
                  type="number" 
                  step="0.01"
                  readonly
                  class="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 outline-none"
                />
              </div>
            </div>

            <!-- Total Value -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.totalValue') }}
              </label>
              <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                <input 
                  v-model="formData.totalValue"
                  type="number" 
                  step="0.01"
                  readonly
                  class="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 font-semibold outline-none"
                />
              </div>
            </div>

            <!-- Status -->
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.status') }}
              </label>
              <select 
                v-model="formData.status"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="active">{{ t('admin.contractStatus.active') }}</option>
                <option value="completed">{{ t('admin.contractStatus.completed') }}</option>
                <option value="cancelled">{{ t('admin.contractStatus.cancelled') }}</option>
              </select>
            </div>

            <!-- Notes -->
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.contracts.form.notes') }}
              </label>
              <textarea 
                v-model="formData.notes"
                rows="4"
                :placeholder="t('admin.contracts.form.notesPlaceholder')"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center justify-end gap-4 pt-4">
          <button 
            type="button"
            @click="handleCancel"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            {{ t('admin.contracts.form.cancel') }}
          </button>
          <button 
            type="submit"
            :disabled="isLoading"
            class="px-6 py-3 bg-[#600010] text-white rounded-lg font-semibold hover:bg-[#800020] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <svg v-if="isLoading" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? t('admin.contracts.form.saving') : (isEditMode ? t('admin.contracts.form.update') : t('admin.contracts.form.create')) }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
