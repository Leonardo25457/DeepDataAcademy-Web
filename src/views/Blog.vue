<template>
  <main>
    <section class="py-14">
      <div class="container">
        <p class="pill">Del blog</p>
        <h2 class="text-2xl font-semibold mt-1">Ideas y guías</h2>
        <div class="grid-3 mt-6">
          <article class="card" v-for="p in posts" :key="p.slug">
            <h3 class="font-semibold text-lg">{{ p.title }}</h3>
            <p class="sub">{{ p.excerpt }}</p>
            <RouterLink class="btn btn-ghost mt-2" :to="`/blog/${p.slug}`">Leer</RouterLink>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import posts from '../data/posts'
</script>
