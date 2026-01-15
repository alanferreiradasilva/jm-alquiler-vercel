<template>
    <section id="services" class="py-24 bg-[#FAFBFC]" data-testid="services-section">
        <div class="max-w-7xl mx-auto px-6" bis_skin_checked="1">
            <div class="text-center mb-16" style="opacity: 1; transform: none;" bis_skin_checked="1">
                <span class="text-[#D4AF37] text-sm font-medium tracking-widest uppercase">{{ t('home.services.badge') }}</span>
                <h2 class="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">{{ t('home.services.title') }}</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-8" bis_skin_checked="1">
                <div class="bg-white p-8 rounded-lg border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300" style="opacity: 1; transform: none;" bis_skin_checked="1">
                    <div class="w-14 h-14 bg-[#600010]/10 rounded-lg flex items-center justify-center mb-6" bis_skin_checked="1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield text-[#600010]" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                    </div>
                    <h3 class="font-display text-xl font-bold text-gray-900 mb-3">{{ t('home.services.insurance.title') }}</h3>
                    <p class="text-gray-600">{{ t('home.services.insurance.description') }}</p>
                </div>
                <div class="bg-white p-8 rounded-lg border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300" style="opacity: 1; transform: none;" bis_skin_checked="1">
                    <div class="w-14 h-14 bg-[#600010]/10 rounded-lg flex items-center justify-center mb-6" bis_skin_checked="1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock text-[#600010]" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <h3 class="font-display text-xl font-bold text-gray-900 mb-3">{{ t('home.services.fastProcess.title') }}</h3>
                    <p class="text-gray-600">{{ t('home.services.fastProcess.description') }}</p>
                </div>
                <div class="bg-white p-8 rounded-lg border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300" style="opacity: 1; transform: none;" bis_skin_checked="1">
                    <div class="w-14 h-14 bg-[#600010]/10 rounded-lg flex items-center justify-center mb-6" bis_skin_checked="1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car text-[#600010]" aria-hidden="true">
                            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                            <circle cx="7" cy="17" r="2"></circle>
                            <path d="M9 17h6"></path>
                            <circle cx="17" cy="17" r="2"></circle>
                        </svg>
                    </div>
                    <h3 class="font-display text-xl font-bold text-gray-900 mb-3">{{ t('home.services.premiumFleet.title') }}</h3>
                    <p class="text-gray-600">{{ t('home.services.premiumFleet.description') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>