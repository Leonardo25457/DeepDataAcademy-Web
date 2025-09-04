<template>
  <main>
    <section class="py-14">
      <div class="container">
        <p class="pill">Rutas formativas</p>
        <h2 class="text-2xl font-semibold mt-1">Todos los programas</h2>
        <p class="sub">Elige la ruta que mejor encaja con tu objetivo.</p>
        <div class="grid-3 mt-6">
          <CardCourse v-for="c in courses" :key="c.id" :tag="c.tag" :title="c.title" :desc="c.desc" :features="c.features" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import CardCourse from '../components/CardCourse.vue'
import courses from '../data/courses'
</script>
