<template>
  <main>
    <section
      class="py-24 relative bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/50"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span
            class="bg-indigo-500/10 text-indigo-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4"
          >
            En vivo cada semana
          </span>

          <h2
            class="text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white"
          >
            Webinars y eventos
          </h2>

          <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Desarrollo Web, SQL, Linux, Python e IA con Machine Learning y Azure
            fundamentals.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="w in webinars"
            :key="w.id"
            class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full"
          >
            <!-- Imagen fija -->
            <div class="aspect-video relative overflow-hidden">
              <img
                :alt="w.title"
                class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                :src="w.image"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6"
              >
                <span
                  class="bg-indigo-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                >
                  {{ w.badge }}
                </span>
              </div>
            </div>

            <!-- Cuerpo: flex-col para uniformidad -->
            <div class="p-6 flex flex-col flex-1">
              <h3
                class="text-lg font-bold text-slate-900 dark:text-white leading-snug min-h-[3.25rem]"
              >
                {{ w.title }}
              </h3>

              <!-- Reserva altura para que no cambie el CTA -->
              <p
                class="text-sm text-slate-600 dark:text-slate-400 mt-3 min-h-[3.75rem]"
              >
                {{ w.description }}
              </p>

              <!-- Bloque inferior SIEMPRE abajo -->
              <div class="mt-auto pt-6">
                <!-- Si tu CountdownStrip cambia de alto, esto lo estabiliza -->
                <div class="min-h-[76px]">
                  <CountdownStrip :target="w.start" />
                </div>

                <RouterLink
                  class="mt-5 w-full inline-flex justify-center bg-slate-900 dark:bg-indigo-500 text-white py-3.5 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-indigo-600 transition-colors text-sm"
                  :to="`/webinar/${w.id}`"
                >
                  Registrarme Gratis
                </RouterLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import CountdownStrip from "../components/CountdownStrip.vue";
import webinars from "../data/webinars";
</script>
