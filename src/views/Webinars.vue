<template>
  <main>
    <section class="py-14">
      <div class="container">
        <p class="pill">En vivo cada semana</p>
        <h2 class="text-2xl font-semibold mt-1">Webinars y eventos</h2>
        <p class="sub">Charlas prácticas con demos y Q&A.</p>

        <div class="grid-3 mt-6">
          <article class="card" v-for="w in webinars" :key="w.id">
            <h3 class="font-semibold text-lg">{{ w.title }}</h3>
            <p class="sub">{{ w.description }}</p>
            <p class="meta">{{ new Date(w.start).toLocaleString() }}</p>
            <div class="mt-2"><Countdown :target="w.start" /></div>
            <RouterLink class="btn btn-primary mt-3" :to="`/webinar/${w.id}`">Registrarme</RouterLink>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import Countdown from '../components/Countdown.vue'
import webinars from '../data/webinars'
</script>
