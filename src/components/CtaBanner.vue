<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-20 relative z-20 transition-colors duration-300">
    <div
      class="bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-500 p-12 rounded-[2.5rem]
         shadow-2xl shadow-indigo-500/30 dark:shadow-indigo-500/20
         flex flex-col md:flex-row items-center justify-between
         gap-8 border border-white/10 relative overflow-hidden"
    >
      <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

      <div class="text-center md:text-left relative z-10">
        <h3 class="text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Aprende hoy, <br /> lidera el mañana.
        </h3>
        <p class="text-indigo-100 text-lg max-w-lg">
          Únete a la próxima cohorte y construye el portafolio profesional que te mereces.
        </p>
      </div>

      <a
        class="relative z-10 bg-white text-indigo-600 px-10 py-5 rounded-2xl font-extrabold text-lg
               hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
        :href="whatsAppUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Unete a nuestra Comunidad
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const WHATSAPP_NUMBER = "51970110199"; 

const message = `Hola, ¿Me pueden dar más información?`;

const whatsAppUrl = computed(() => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});
</script>
