<template>
  <section id="contact" class="bg-[#070707] py-24 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid gap-12 lg:grid-cols-2 items-start">
        <!-- Left: Contact info -->
        <div class="text-left">
          <span class="text-[#D4AF37] text-sm font-semibold tracking-wider uppercase">CONTACTO</span>
          <h2 class="text-4xl lg:text-5xl font-bold mt-4 mb-4">¿Listo para comenzar?</h2>
          <p class="text-gray-400 max-w-xl mb-8">Contáctanos para reservas especiales, cotizaciones para empresas o cualquier consulta.</p>

          <ul class="space-y-6">
            <li class="flex items-start gap-4">
                <a href="https://wa.me/5950991681191" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div class="w-12 h-12 bg-[#25D366]/20 rounded-lg flex items-center justify-center" bis_skin_checked="1">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 text-[#25D366]" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                        </svg>
                    </div>
                    <div bis_skin_checked="1">
                        <p class="text-white/50 text-sm">WhatsApp</p>
                        <p class="text-white font-medium">+595 991 681 191</p>
                    </div>
                </a>
              <!-- <div class="w-12 h-12 rounded-md bg-green-700 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8l-.1.2a8.89 8.89 0 0 1-1.6 2.4l-.2.2a8.49 8.49 0 0 1-4 2.4 8.36 8.36 0 0 1-5.6-.6L3 20l1.7-4.8A8.43 8.43 0 0 1 6.9 12 8.5 8.5 0 0 1 21 11.5z"/></svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">WhatsApp</div>
                <div class="text-white font-semibold">+595 991 681 191</div>
              </div> -->
            </li>

            <li class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-md bg-[#3b2a00] flex items-center justify-center text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">Ubicación</div>
                <div class="text-white font-semibold">Asunción, Paraguay</div>
              </div>
            </li>

            <li class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-md bg-[#3b2a00] flex items-center justify-center text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <div class="text-sm text-gray-400">Horario</div>
                <div class="text-white font-semibold">Lun-Vie: 8-17h | Sáb-Dom: 8-12h</div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: Contact form -->
        <div>
          <div class="bg-[#0b0b0b] border border-gray-800 rounded-xl p-6 shadow-inner">
            <h3 class="text-xl font-semibold text-white mb-4">Envíanos un mensaje</h3>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <input type="text" v-model="name" placeholder="Nombre" class="w-full bg-[#0f0f0f] border border-gray-800 rounded px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              <input type="email" v-model="email" placeholder="Email" class="w-full bg-[#0f0f0f] border border-gray-800 rounded px-4 py-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              <textarea v-model="message" rows="5" placeholder="Mensaje" class="w-full bg-[#0f0f0f] border border-gray-800 rounded px-4 py-3 text-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"></textarea>
              <button type="submit" class="w-full bg-[#D4AF37] text-[#121212] font-medium py-3 rounded">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function handleSubmit() {
  // placeholder: aqui você pode integrar envio real
  console.log('Enviar', { name: name.value, email: email.value, message: message.value })
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
/* Small visual adjustments can go here if needed */
</style>
