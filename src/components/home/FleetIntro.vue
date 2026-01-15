<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="fleet" class="bg-[#fff] py-24 px-6">
    <div class="max-w-[1400px] mx-auto px-8 text-center">
      <!-- Section Badge -->
      <div class="mb-4">
        <span class="text-[#d4af37] text-sm font-semibold tracking-wider uppercase">
          {{ t('home.fleetIntro.badge') }}
        </span>
      </div>

      <!-- Section Title -->
      <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        {{ t('home.fleetIntro.title') }}
      </h2>

      <!-- Section Description -->
      <div class="max-w-3xl mx-auto space-y-2">
        <p class="text-gray-600 text-lg leading-relaxed">
          {{ t('home.fleetIntro.description1') }}
        </p>
        <p class="text-gray-600 text-lg leading-relaxed">
          {{ t('home.fleetIntro.description2') }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
