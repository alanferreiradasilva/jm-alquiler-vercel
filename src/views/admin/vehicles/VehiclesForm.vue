<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const isEditMode = ref(false)
const vehicleId = ref<string | null>(null)

// Form data
const formData = ref({
  brand: '',
  model: '',
  year: new Date().getFullYear(),
  image: '',
  fuel: 'Gasolina',
  transmission: 'Automático',
  consumption: '',
  luggage: '',
  status: 'available'
})

// Fuel options
const fuelOptions = ['Gasolina', 'Diesel', 'Flex', 'Eléctrico', 'Híbrido']
const transmissionOptions = ['Manual', 'Automático', 'Automático CVT', 'Semi-automático']
const statusOptions = ['available', 'rented', 'maintenance']

const isSubmitting = ref(false)

onMounted(() => {
  vehicleId.value = route.params.id as string
  isEditMode.value = !!vehicleId.value
  
  if (isEditMode.value) {
    // Mock load data for edit mode
    loadVehicleData(vehicleId.value)
  }
})

function loadVehicleData(id: string) {
  // Mock data loading - in production, this would fetch from API
  formData.value = {
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2012,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ThiW9ghM8LlOc-Fbm_8AAgIp91uNXqkuFw&s',
    fuel: 'Gasolina',
    transmission: 'Automático',
    consumption: '11.5',
    luggage: '513',
    status: 'available'
  }
}

async function handleSubmit() {
  isSubmitting.value = true
  
  try {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log(isEditMode.value ? 'Updating vehicle:' : 'Creating vehicle:', formData.value)
    
    // Navigate back to vehicles list
    router.push('/admin/vehicles')
  } catch (error) {
    console.error('Error saving vehicle:', error)
  } finally {
    isSubmitting.value = false
  }
}

function handleCancel() {
  router.push('/admin/vehicles')
}
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFC]">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="mb-8">
        <button 
          @click="handleCancel"
          class="flex items-center gap-2 text-gray-600 hover:text-[#600010] mb-4 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          {{ t('admin.vehicles.backToList') }}
        </button>
        <h1 class="text-4xl font-bold text-gray-900 mb-2">
          {{ isEditMode ? t('admin.vehicles.editVehicle') : t('admin.vehicles.newVehicle') }}
        </h1>
        <p class="text-gray-600">
          {{ isEditMode ? t('admin.vehicles.editDescription') : t('admin.vehicles.newDescription') }}
        </p>
      </div>

      <!-- Form Card -->
      <form @submit.prevent="handleSubmit" class="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div class="p-6 space-y-6">
          
          <!-- Vehicle Information Section -->
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('admin.vehicles.basicInfo') }}</h3>
            <div class="grid md:grid-cols-2 gap-4">
              
              <!-- Brand -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('admin.vehicles.brand') }} <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.brand"
                  type="text" 
                  required
                  :placeholder="t('admin.vehicles.brandPlaceholder')"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
                />
              </div>

              <!-- Model -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('admin.vehicles.model') }} <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.model"
                  type="text" 
                  required
                  :placeholder="t('admin.vehicles.modelPlaceholder')"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
                />
              </div>

              <!-- Year -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('admin.vehicles.year') }} <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model.number="formData.year"
                  type="number" 
                  required
                  :min="1990"
                  :max="new Date().getFullYear() + 1"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
                />
              </div>

              <!-- Status -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('admin.vehicles.statusLabel') }} <span class="text-red-500">*</span>
                </label>
                <select 
                  v-model="formData.status"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
                >
                  <option v-for="status in statusOptions" :key="status" :value="status">
                    {{ t(`admin.vehicleStatus.${status}`) }}
                  </option>
                </select>
              </div>

            </div>
          </div>

          <!-- Specifications Section -->
          <div class="pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('admin.vehicles.specifications') }}</h3>
            <div class="grid md:grid-cols-2 gap-4">
              
              <!-- Fuel -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('admin.vehicles.fuel') }} <span class="text-red-500">*</span>
                </label>
                <select 
                  v-model="formData.fuel"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
                >
                  <option v-for="fuel in fuelOptions" :key="fuel" :value="fuel">
                    {{ fuel }}
                  </option>
                </select>
              </div>

              <!-- Transmission -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('admin.vehicles.transmission') }} <span class="text-red-500">*</span>
                </label>
                <select 
                  v-model="formData.transmission"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
                >
                  <option v-for="trans in transmissionOptions" :key="trans" :value="trans">
                    {{ trans }}
                  </option>
                </select>
              </div>

              <!-- Consumption -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('admin.vehicles.consumption') }} (km/L) <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.consumption"
                  type="text" 
                  required
                  placeholder="11.5"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
                />
              </div>

              <!-- Luggage Capacity -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ t('admin.vehicles.luggage') }} (L) <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.luggage"
                  type="number" 
                  required
                  placeholder="513"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
                />
              </div>

            </div>
          </div>

          <!-- Image Section -->
          <div class="pt-6 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ t('admin.vehicles.imageSection') }}</h3>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ t('admin.vehicles.imageUrl') }} <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.image"
                type="url" 
                required
                :placeholder="t('admin.vehicles.imageUrlPlaceholder')"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#600010] focus:border-transparent outline-none transition-all"
              />
              <p class="text-xs text-gray-500 mt-1">{{ t('admin.vehicles.imageUrlHelper') }}</p>
            </div>

            <!-- Image Preview -->
            <div v-if="formData.image" class="mt-4">
              <p class="text-sm font-medium text-gray-700 mb-2">{{ t('admin.vehicles.preview') }}</p>
              <div class="w-64 h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <img 
                  :src="formData.image" 
                  :alt="`${formData.brand} ${formData.model}`"
                  class="w-full h-full object-cover"
                  @error="(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Error'"
                />
              </div>
            </div>
          </div>

        </div>

        <!-- Form Actions -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex items-center justify-end gap-3">
          <button 
            type="button"
            @click="handleCancel"
            class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {{ t('admin.vehicles.cancel') }}
          </button>
          <button 
            type="submit"
            :disabled="isSubmitting"
            class="px-6 py-2 bg-[#600010] text-white rounded-lg font-semibold hover:bg-[#800020] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <svg v-if="isSubmitting" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isSubmitting ? t('admin.vehicles.saving') : (isEditMode ? t('admin.vehicles.update') : t('admin.vehicles.create')) }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if needed */
</style>
