<template>
  <section class="hero">
    <div class="container grid md:grid-cols-[1.15fr_.85fr] items-center gap-10 py-16">
      <div>
        <span class="badge">Formación Tech </span>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mt-2">Formando profesionales en las tecnologías más demandadas</h1>
        <p class="text-black-50/90 mt-3">Aprende Desarrollo Web, Data Engineering, Cloud y Ciberseguridad con proyectos reales, mentores y comunidad.</p>
        <div class="flex gap-3 mt-4">
          <RouterLink to="/cursos" class="btn btn-primary">Ver rutas</RouterLink>
          <RouterLink to="/gratis" class="btn btn-ghost">Cursos gratis</RouterLink>
        </div>

        <ul class="flex flex-wrap gap-3 mt-6">
          <li class="border border-white/40 rounded-xl px-3 py-2 bg-white/10"><strong class="block text-lg">+1,200</strong><span>alumnos</span></li>
          <li class="border border-white/40 rounded-xl px-3 py-2 bg-white/10"><strong class="block text-lg">+100</strong><span>proyectos</span></li>
          <li class="border border-white/40 rounded-xl px-3 py-2 bg-white/10"><strong class="block text-lg">+50</strong><span>webinars</span></li>
        </ul>
      </div>

      <aside class="glass p-5">
        <!-- <img class="rounded-xl shadow-smx" :src="banner" alt="Banner DeepData" /> -->
        <LeadForm class="mt-3" />
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import LeadForm from '../components/LeadForm.vue'
// const banner = 'https://github.com/user-attachments/assets/78f789d9-4795-4704-8397-7c6dad390945'
</script>
