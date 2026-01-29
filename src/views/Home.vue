<!-- src/views/Home.vue -->
<template>
  <main>
    <HeroCarousel />
    <HomeEnglishPromo />
    <!-- <HeroLead /> -->

    <HomeLiveEvents />
    <CtaBanner />

    <!-- Widget flotante de asesoría -->
    <AdvisorWidget
      position="right"
      whatsapp="51999999999"
      brand="DeepData Academy"
      title="Asesora Académica"
    />

     <!-- Modal Promo -->
    <WorkshopPromoModal
      v-model="isPromoOpen"
      :image-src="promoImg"
      alt="Únete a nuestros workshops - DeepData Academy"
      href="https://deepdataacademy.edu"  
      storage-key="deepdata_workshops_feb_modal_hidden"
    />

  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// import HeroLead from "../components/HeroLead.vue";
import AdvisorWidget from "../components/AdvisorWidget.vue";

// import HomeTracks from "../components/HomeTracks.vue";
// import HomeTestimonials from "../components/HomeTestimonials.vue";
import HomeLiveEvents from "../components/HomeLiveEvents.vue";
// import HomeResources from "../components/HomeResources.vue";
import CtaBanner from "../components/CtaBanner.vue";
import HeroCarousel from "../components/HeroCarousel.vue";
import WorkshopPromoModal from "../components/WorkshopPromoModal.vue";
import HomeEnglishPromo from "../components/HomeEnglishPromo.vue";


const promoImg = "/img/Modal.png";
const isPromoOpen = ref(false);


onMounted(() => {
  isPromoOpen.value = true; 
});

// onMounted(() => {
//   const key = "deepdata_workshops_feb_modal_hidden";
//   const alreadyHidden = localStorage.getItem(key) === "1";
//   if (!alreadyHidden) isPromoOpen.value = true;
// });
</script>
