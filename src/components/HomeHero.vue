<template>
  <section class="hero-gradient relative overflow-hidden py-16 lg:py-24 min-h-[85vh] flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center transition-opacity duration-500 ease-in-out">
        <!-- Left -->
        <div>
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 mb-8 backdrop-blur-sm shadow-sm"
          >
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span class="text-xs font-bold uppercase tracking-wider">Workshop Online • Próximamente</span>
          </div>

          <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900 dark:text-white">
            Clona plataformas <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400">
              tipo Crunchyroll
            </span>
          </h1>

          <p class="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            Construye una landing y secciones tipo plataforma con UI moderna, responsive y componentes reutilizables utilizando las últimas tecnologías del mercado.
          </p>

          <div class="flex flex-wrap gap-4 mb-12">
            <a
              href="#"
              class="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-indigo-500/30"
            >
              ¡Inscríbete ahora!
              <span class="material-icons-round text-sm">rocket_launch</span>
            </a>

            <RouterLink
              to="/webinars"
              class="bg-white dark:bg-white text-slate-900 px-8 py-4 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
            >
              Ver detalles
            </RouterLink>
          </div>

          <CountdownStripV2 :target="target" />
        </div>

        <!-- Right -->
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>

          <div
            class="relative rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-2xl bg-black aspect-square flex items-center justify-center transform group-hover:rotate-1 transition-transform duration-500"
          >
            <img
              alt="3D Trophy Illustration"
              class="w-4/5 h-auto object-contain drop-shadow-2xl z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUcpDorVORH9DoEkvXb_kLdio9PRvS6RVHNpPRfWHzAoob8gJMj4so0bMl_RlM0BR1JYTi8ls96ifvcz_MVVfIUYsVFmE1kLuj79Pinf01p5A0zVhKrEMkvkWLO1G-RT64HEQ4tp6jxccQvs2kVTJ3I5FqJE8Y3-kUahOjg174TlFSwJJmnEvmrXachgbGPJh8vnUzka_KtXNg4vJVg39Wi9PZ7SA_ZWy4GW0ucLTAAZLlwsKWXFoFqhTlC32jklXu4X7A4KIHww"
            />

            <div class="absolute bottom-8 left-8 bg-slate-900/60 p-4 rounded-xl shadow-lg border border-white/10 flex items-center gap-3 backdrop-blur-xl z-20">
              <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                <span class="material-icons-round">check</span>
              </div>
              <div>
                <p class="text-[10px] font-bold uppercase text-slate-400">Status</p>
                <p class="font-bold text-white text-sm leading-tight">Certificación<br />Incluida</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dots -->
      <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        <button class="w-12 h-1.5 rounded-full bg-indigo-500 transition-all" aria-label="slide active"></button>
        <button class="w-2 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-indigo-500/50 transition-all" aria-label="slide"></button>
        <button class="w-2 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-indigo-500/50 transition-all" aria-label="slide"></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountdownStripV2 from "./CountdownStrip.vue";

// Cambia este target a tu fecha real (ISO)
const target = "2026-02-01T19:00:00-05:00";
</script>

<style scoped>
.hero-gradient {
  background:
    radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 40%),
    radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.10), transparent 40%);
}
</style>
