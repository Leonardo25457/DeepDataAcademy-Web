<template>
  <section class="py-24 bg-white dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 border-b border-slate-100 dark:border-slate-800 pb-8">
        <span class="text-indigo-500 font-bold text-sm uppercase tracking-widest block mb-2">Recursos</span>
        <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">Ebooks y plantillas gratuitas</h2>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="r in resources"
          :key="r.title"
          class="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow group"
        >
          <div
            class="w-full aspect-[3/4] bg-white dark:bg-slate-800 rounded-xl mb-4 flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:border-indigo-500/50 transition-colors"
          >
            <span class="material-icons-round text-5xl text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors">
              {{ r.icon }}
            </span>
          </div>

          <h4 class="font-bold mb-1 dark:text-white text-lg">{{ r.title }}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">{{ r.desc }}</p>

          <button class="text-indigo-500 text-sm font-bold flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400">
            Descargar <span class="material-icons-round text-sm">download</span>
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Resource = { title: string; desc: string; icon: string };

const resources: Resource[] = [
  { title: "Guía SQL", desc: "Joins, CTEs y ejercicios.", icon: "auto_stories" },
  { title: "Ruta Data", desc: "Roadmap 2026.", icon: "route" },
  { title: "Power BI", desc: "Plantillas de negocio.", icon: "dashboard" },
  { title: "Regex Cheat", desc: "Patrones de limpieza.", icon: "terminal" },
];
</script>
