<template>
  <main>
    <section class="py-14">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" v-if="w">
        <p
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 mb-5 backdrop-blur-sm shadow-sm text-xs font-bold uppercase tracking-wider"
        >
          Webinar • {{ w.badge }}
        </p>

        <h1
          class="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white"
        >
          {{ w.title }}
        </h1>

        <p class="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">
          {{ w.description }}
        </p>

        <div class="mt-6">
          <CountdownStrip :target="w.start" />
        </div>

        <div
          class="mt-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between"
        >
          <div>
            <h3 class="text-xl font-extrabold text-slate-900 dark:text-white">
              Regístrate gratis
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mt-1">
              Recibe el link del evento y el material del taller.
            </p>
          </div>

          <!-- MAQUETADO únicamente -->
          <form class="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              class="w-full sm:w-56 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/40"
              type="text"
              placeholder="Tu nombre"
            />
            <input
              class="w-full sm:w-64 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/40"
              type="email"
              placeholder="Tu email"
            />
            <button
              type="button"
              class="inline-flex justify-center rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-6 py-3 transition-colors"
            >
              Reservar
            </button>
          </form>
        </div>

        <RouterLink
          class="inline-flex mt-6 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          to="/webinars"
        >
          ← Volver a Webinars
        </RouterLink>
      </div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" v-else>
        <p class="pill">Webinar</p>
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-white">
          No encontrado
        </h2>
        <RouterLink class="btn btn-ghost mt-2" to="/webinars"
          >Volver a Webinars</RouterLink
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import CountdownStrip from "../components/CountdownStrip.vue";
import webinars from "../data/webinars";

const route = useRoute();
const id = computed(() => String(route.params.id ?? ""));

const w = computed(() => webinars.find((x) => x.id === id.value));
</script>
