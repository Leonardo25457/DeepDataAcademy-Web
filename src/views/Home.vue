<!-- src/views/Home.vue -->
<template>
  <main>
    <HeroCarousel />
    <HeroLead />

    <HomeTracks />
    <!-- <HomeTestimonials /> -->
    <HomeLiveEvents />
    <HomeResources />
    <CtaBanner />

    <!-- Widget flotante de asesoría -->
    <AdvisorWidget
      position="right"
      whatsapp="51999999999"
      brand="DeepData Academy"
      title="Asesora Académica"
    />
  </main>
</template>

<script setup lang="ts">
import HeroLead from "../components/HeroLead.vue";
import AdvisorWidget from "../components/AdvisorWidget.vue";

import HomeTracks from "../components/HomeTracks.vue";
// import HomeTestimonials from "../components/HomeTestimonials.vue";
import HomeLiveEvents from "../components/HomeLiveEvents.vue";
import HomeResources from "../components/HomeResources.vue";
import CtaBanner from "../components/CtaBanner.vue";
import HeroCarousel from "../components/HeroCarousel.vue";
</script>
