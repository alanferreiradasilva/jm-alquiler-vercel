<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()

// Mock data for reports
const monthlyRevenue = ref([
  { month: 'Jan', value: 12500 },
  { month: 'Feb', value: 15800 },
  { month: 'Mar', value: 14200 },
  { month: 'Apr', value: 18900 },
  { month: 'May', value: 21300 },
  { month: 'Jun', value: 19800 },
])

const clientsByCountry = ref([
  { country: 'Paraguay', value: 45, color: '#D4AF37' },
  { country: 'Brasil', value: 28, color: '#600010' },
  { country: 'Argentina', value: 15, color: '#8b1538' },
  { country: 'Irlanda', value: 7, color: '#4CAF50' },
  { country: 'USA', value: 5, color: '#2196F3' },
])

const topVehicles = ref([
  { name: 'Hyundai Tucson', rentals: 42 },
  { name: 'Toyota Corolla', rentals: 38 },
  { name: 'Honda Civic', rentals: 31 },
  { name: 'Chevrolet Onix', rentals: 25 },
  { name: 'Ford EcoSport', rentals: 19 },
])

const occupancyRate = ref([
  { month: 'Jan', rate: 68 },
  { month: 'Feb', rate: 72 },
  { month: 'Mar', rate: 65 },
  { month: 'Apr', rate: 78 },
  { month: 'May', rate: 85 },
  { month: 'Jun', rate: 82 },
])

const maxRevenue = Math.max(...monthlyRevenue.value.map(m => m.value))
const maxRentals = Math.max(...topVehicles.value.map(v => v.rentals))
const totalClients = clientsByCountry.value.reduce((sum, c) => sum + c.value, 0)
</script>

<template>
  <div class="min-h-screen bg-[#FAFBFC]">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">{{ t('navAdmin.reports') }}</h1>
        <p class="text-gray-600">{{ t('admin.reports.description') }}</p>
      </div>

      <!-- Reports Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        
        <!-- Monthly Revenue Chart -->
        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-bold text-gray-900">{{ t('admin.reports.monthlyRevenue') }}</h3>
              <p class="text-sm text-gray-500">{{ t('admin.reports.last6Months') }}</p>
            </div>
            <div class="w-12 h-12 bg-[#600010]/10 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          
          <div class="space-y-3">
            <div v-for="item in monthlyRevenue" :key="item.month" class="flex items-center gap-3">
              <span class="text-sm font-medium text-gray-600 w-10">{{ item.month }}</span>
              <div class="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden">
                <div 
                  class="h-full bg-gradient-to-r from-[#600010] to-[#8b1538] rounded-lg transition-all duration-500"
                  :style="{ width: `${(item.value / maxRevenue) * 100}%` }"
                ></div>
              </div>
              <span class="text-sm font-bold text-gray-900 w-20 text-right">R$ {{ (item.value / 1000).toFixed(1) }}k</span>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-200">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">{{ t('admin.reports.total') }}</span>
              <span class="text-xl font-bold text-[#600010]">R$ {{ (monthlyRevenue.reduce((sum, m) => sum + m.value, 0) / 1000).toFixed(1) }}k</span>
            </div>
          </div>
        </div>

        <!-- Clients by Country Chart -->
        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-bold text-gray-900">{{ t('admin.reports.clientsByCountry') }}</h3>
              <p class="text-sm text-gray-500">{{ t('admin.reports.distribution') }}</p>
            </div>
            <div class="w-12 h-12 bg-[#600010]/10 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>

          <div class="space-y-3">
            <div v-for="item in clientsByCountry" :key="item.country" class="flex items-center gap-3">
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">{{ item.country }}</span>
                  <span class="text-sm font-bold text-gray-900">{{ item.value }}%</span>
                </div>
                <div class="h-6 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    class="h-full rounded-full transition-all duration-500"
                    :style="{ width: `${item.value}%`, backgroundColor: item.color }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-200">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">{{ t('admin.reports.totalClients') }}</span>
              <span class="text-xl font-bold text-[#600010]">{{ totalClients }}</span>
            </div>
          </div>
        </div>

        <!-- Top Rented Vehicles -->
        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-bold text-gray-900">{{ t('admin.reports.topVehicles') }}</h3>
              <p class="text-sm text-gray-500">{{ t('admin.reports.mostRented') }}</p>
            </div>
            <div class="w-12 h-12 bg-[#600010]/10 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <path d="M9 17h6"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
          </div>

          <div class="space-y-4">
            <div v-for="(vehicle, index) in topVehicles" :key="vehicle.name" class="flex items-center gap-4">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                :class="index === 0 ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-600'"
              >
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <p class="text-sm font-semibold text-gray-900">{{ vehicle.name }}</p>
                <div class="flex items-center gap-2 mt-1">
                  <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-[#600010] rounded-full transition-all duration-500"
                      :style="{ width: `${(vehicle.rentals / maxRentals) * 100}%` }"
                    ></div>
                  </div>
                  <span class="text-xs font-medium text-gray-500">{{ vehicle.rentals }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Occupancy Rate -->
        <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-bold text-gray-900">{{ t('admin.reports.occupancyRate') }}</h3>
              <p class="text-sm text-gray-500">{{ t('admin.reports.fleetUtilization') }}</p>
            </div>
            <div class="w-12 h-12 bg-[#600010]/10 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#600010]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>

          <!-- Line Chart SVG -->
          <div class="relative h-48 mb-4">
            <svg class="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
              <!-- Grid lines -->
              <line v-for="i in 5" :key="`grid-${i}`" 
                x1="0" :y1="i * 30" x2="300" :y2="i * 30" 
                stroke="#e5e7eb" stroke-width="1" 
              />
              
              <!-- Line path -->
              <polyline
                :points="occupancyRate.map((item, index) => 
                  `${(index * 60)},${150 - (item.rate * 1.5)}`
                ).join(' ')"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              
              <!-- Area under line -->
              <polygon
                :points="`0,150 ${occupancyRate.map((item, index) => 
                  `${(index * 60)},${150 - (item.rate * 1.5)}`
                ).join(' ')} 300,150`"
                fill="url(#areaGradient)"
              />
              
              <!-- Data points -->
              <circle
                v-for="(item, index) in occupancyRate"
                :key="`point-${index}`"
                :cx="index * 60"
                :cy="150 - (item.rate * 1.5)"
                r="4"
                fill="#600010"
                stroke="white"
                stroke-width="2"
              />
              
              <!-- Gradients -->
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#600010;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#600010;stop-opacity:0.2" />
                  <stop offset="100%" style="stop-color:#600010;stop-opacity:0" />
                </linearGradient>
              </defs>
            </svg>
            
            <!-- X-axis labels -->
            <div class="absolute bottom-0 left-0 right-0 flex justify-between px-1">
              <span v-for="item in occupancyRate" :key="`label-${item.month}`" class="text-xs text-gray-500">
                {{ item.month }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div class="text-center">
              <p class="text-xs text-gray-500 mb-1">{{ t('admin.reports.average') }}</p>
              <p class="text-lg font-bold text-gray-900">{{ Math.round(occupancyRate.reduce((sum, m) => sum + m.rate, 0) / occupancyRate.length) }}%</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500 mb-1">{{ t('admin.reports.highest') }}</p>
              <p class="text-lg font-bold text-[#600010]">{{ Math.max(...occupancyRate.map(m => m.rate)) }}%</p>
            </div>
            <div class="text-center">
              <p class="text-xs text-gray-500 mb-1">{{ t('admin.reports.lowest') }}</p>
              <p class="text-lg font-bold text-gray-600">{{ Math.min(...occupancyRate.map(m => m.rate)) }}%</p>
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
