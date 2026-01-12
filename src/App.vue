<template>
  <div
    class="min-h-screen font-[Plus_Jakarta_Sans] bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300"
  >
    <div
      class="fixed inset-0 pointer-events-none hidden dark:block opacity-[0.14] bg-grid-pattern"
    ></div>

    <HeaderNav />
    <main>
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from "./components/HeaderNav.vue";
import FooterBar from "./components/Footer.vue";
</script>

<style>
.dark .bg-grid-pattern {
  background-image: linear-gradient(
      to right,
      rgba(148, 163, 184, 0.14) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.14) 1px, transparent 1px);
  background-size: 40px 40px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 5%,
    black 40%,
    black 70%,
    transparent 95%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 5%,
    black 40%,
    black 70%,
    transparent 95%
  );
}
</style>
