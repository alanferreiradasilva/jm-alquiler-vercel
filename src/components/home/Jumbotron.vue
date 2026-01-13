<script setup lang="ts">
</script>

<template>
  <section class="relative bg-gradient-to-br from-[#6b2c35] to-[#3d1319] overflow-hidden">
    <div class="max-w-[1400px] mx-auto px-8 py-16 lg:py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6">
          <!-- Badge -->
          <div class="inline-block">
            <span class="px-6 py-2 bg-[#d4af37]/20 border border-[#d4af37] rounded-full text-[#d4af37] text-sm font-medium">
              Experiencia Premium en Alquiler
            </span>
          </div>

          <!-- Hero Title -->
          <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Conduce con<br>
            <span class="text-[#d4af37]">Elegancia</span> y<br>
            Confianza
          </h1>

          <!-- Description -->
          <p class="text-gray-300 text-lg leading-relaxed max-w-xl">
            Descubre nuestra exclusiva flota de vehículos. Servicio personalizado, precios transparentes y la mejor experiencia en alquiler de la región.
          </p>

          <!-- Pricing Cards -->
          <div class="flex flex-wrap gap-4 pt-4">
            <!-- Card 1 -->
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[140px]">
              <p class="text-[#d4af37] text-xs mb-1">Desde</p>
              <p class="text-white text-2xl font-bold">R$ 195/día</p>
            </div>

            <!-- Card 2 -->
            <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 min-w-[180px]">
              <p class="text-[#d4af37] text-xs mb-1">Cotización</p>
              <p class="text-white text-xl font-bold">1 BRL = Gs. 1,226,455</p>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-4">
            <RouterLink 
              to="/flota" 
              class="inline-flex items-center gap-2 bg-[#8b1538] hover:bg-[#a01843] text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Ver Flota
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </RouterLink>
          </div>

          <!-- Features -->
          <div class="flex flex-wrap gap-6 pt-8">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span class="text-white font-medium">4.9 Rating</span>
            </div>

            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-white font-medium">Seguro Incluido</span>
            </div>

            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              <span class="text-white font-medium">24/7 Soporte</span>
            </div>
          </div>
        </div>

        <!-- Right Content - Car Image -->
        <div class="relative lg:block">
          <div class="relative z-10">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ThiW9ghM8LlOc-Fbm_8AAgIp91uNXqkuFw&s" 
              alt="Hyundai Tucson" 
              class="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
          <!-- Decorative gradient circle -->
          <div class="absolute inset-0 bg-gradient-radial from-[#d4af37]/10 to-transparent blur-3xl -z-0"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom gradient for radial effect */
</style>
