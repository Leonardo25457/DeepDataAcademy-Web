<template>
  <article class="card">
    <p class="pill w-max">{{ tag }}</p>
    <h3 class="font-semibold text-lg mt-1">{{ title }}</h3>
    <p class="sub mt-1">{{ desc }}</p>
    <ul class="list-disc pl-6 mt-2">
      <li v-for="(f,i) in features" :key="i">{{ f }}</li>
    </ul>
    <div class="flex gap-2 mt-3">
      <RouterLink class="btn btn-primary" to="/#cta">Inscribirme</RouterLink>
      <a class="btn btn-ghost" href="#">Ver temario</a>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ tag: string; title: string; desc: string; features: string[] }>()
</script>
