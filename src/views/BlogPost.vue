<template>
  <main>
    <section class="py-14">
      <div class="container" v-if="post">
        <p class="pill">Artículo</p>
        <h1 class="text-3xl font-bold mt-1">{{ post.title }}</h1>
        <article class="card mt-3 prose max-w-none" v-html="post.content"></article>
        <RouterLink class="btn btn-ghost mt-3" to="/blog">← Volver al blog</RouterLink>
      </div>

      <div class="container" v-else>
        <p class="pill">Artículo</p>
        <h2 class="text-2xl font-semibold">No encontrado</h2>
        <RouterLink class="btn btn-ghost mt-2" to="/blog">Volver al blog</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import posts from '../data/posts'
const { params } = useRoute()
const post = computed(() => posts.find(p => p.slug === params.slug))
</script>
