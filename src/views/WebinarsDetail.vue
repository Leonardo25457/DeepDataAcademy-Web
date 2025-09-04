<template>
  <main>
    <section class="py-14">
      <div class="container" v-if="w">
        <p class="pill">Webinar</p>
        <h1 class="text-3xl font-bold mt-1">{{ w.title }}</h1>
        <p class="sub">{{ w.description }}</p>
        <p class="meta">Empieza: {{ new Date(w.start).toLocaleString() }}</p>

        <div class="mt-3"><Countdown :target="w.start" /></div>

        <div class="cta-band mt-5">
          <div>
            <h3 class="text-xl font-semibold">Regístrate gratis</h3>
            <p class="sub">Recibe el link del evento y el material del taller.</p>
          </div>
          <!-- MAQUETADO únicamente -->
          <form class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <input class="rounded-xl border border-blue-200 px-3 py-2" type="text" placeholder="Tu nombre" />
            <input class="rounded-xl border border-blue-200 px-3 py-2" type="email" placeholder="Tu email" />
            <button type="button" class="btn btn-primary">Reservar</button>
          </form>
        </div>
      </div>

      <div class="container" v-else>
        <p class="pill">Webinar</p>
        <h2 class="text-2xl font-semibold">No encontrado</h2>
        <RouterLink class="btn btn-ghost mt-2" to="/webinars">Volver a Webinars</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Countdown from '../components/Countdown.vue'
import webinars from '../data/webinars'

const { params } = useRoute()
const w = computed(() => webinars.find(x => x.id === params.id))
</script>
