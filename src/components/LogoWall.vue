<template>
  <section class="bg-blue-50/50">
    <div class="container py-10">
      <p class="pill">Aliados</p>
      <h2 class="text-2xl font-semibold mt-1">Empresas y comunidades que confían</h2>
      <div class="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-5">
        <a
          v-for="(l, i) in logos"
          :key="i"
          :href="l.href || '#'"
          target="_blank"
          rel="noopener"
          class="bg-white border border-blue-100 rounded-xl grid place-items-center h-[68px] px-3 grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition"
        >
          <img :src="l.src" :alt="l.alt" class="max-h-10 max-w-[90%]" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}
defineProps<{ logos: LogoItem[] }>();
</script>
