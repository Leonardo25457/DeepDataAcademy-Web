<template>
  <div>
    <TopRibbon />
    <HeaderNav />
    <RouterView />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import TopRibbon from "./components/TopRibbon.vue"
import HeaderNav from "./components/HeaderNav.vue";
import FooterBar from "./components/Footer.vue";
</script>
