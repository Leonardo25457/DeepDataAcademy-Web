<template>
  <section id="lead-form" class="bg-white dark:bg-slate-950">
    <div
      class="container grid md:grid-cols-[1.15fr_.85fr] items-center gap-10 py-16"
    >
      <div class="text-slate-900 dark:text-slate-50">
        <!-- Badge (evita depender de .badge si no tiene dark) -->
        <span
          class="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold
                 bg-slate-100 text-slate-700
                 dark:bg-white/10 dark:text-slate-200"
        >
          Formación Tech
        </span>

        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
          Formando profesionales en las tecnologías más demandadas
        </h1>

        <p class="mt-3 text-slate-600 dark:text-slate-300">
          Aprende Desarrollo Web, Data Engineering, Cloud y Ciberseguridad con proyectos reales,
          mentores y comunidad.
        </p>

        <div class="flex gap-3 mt-6">
          <!-- Botón primario -->
          <RouterLink
            to="/cursos"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold
                   bg-indigo-600 text-white shadow-sm
                   hover:bg-indigo-500 active:bg-indigo-700
                   dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:active:bg-indigo-600"
          >
            Ver rutas
          </RouterLink>

          <!-- Botón secundario -->
          <RouterLink
            to="/gratis"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold
                   border border-slate-300 text-slate-900 bg-white
                   hover:bg-slate-50
                   dark:bg-transparent dark:text-slate-50 dark:border-white/20 dark:hover:bg-white/10"
          >
            Cursos gratis
          </RouterLink>
        </div>
      </div>

      <!-- Card/Form -->
      <aside
        class="rounded-2xl p-6 border shadow-lg
               bg-white/70 backdrop-blur
               border-slate-200
               dark:bg-white/5 dark:border-white/10"
      >
        <LeadForm />
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import LeadForm from "../components/LeadForm.vue";
</script>
