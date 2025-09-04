<template>
  <section class="top-ribbon relative w-full text-white overflow-hidden">
    <!-- Fondo a dos columnas en desktop -->
    <div class="topribbon-bg absolute inset-0 z-0">
      <div class="bg-left"></div>
      <div class="bg-right"></div>
    </div>

    <!-- Contenedor local: pegamos a la izquierda en lg (pl-0) y dejamos respiración a la derecha -->
    <div class="container relative z-10 min-h-[var(--ribbon-h)] py-4 lg:py-6 flex items-center lg:pl-0 lg:pr-8">
      <div class="w-full">
        <!-- Si lo quieres aún MÁS a la izquierda en pantallas grandes, añade 2xl:-ml-2 aquí -->
        <div class="min-w-0 2xl:-ml-50">
          <h2 class="leading-[1.05] font-black uppercase tracking-tight text-3xl md:text-4xl lg:text-5xl drop-shadow-sm">
            <span class="text-white block">Desarrolla una Web</span>
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-primary-500">
              Estilo Crunchyroll
            </span>
          </h2>

          <div class="mt-3 flex flex-wrap items-center gap-3">
            <div class="bg-white/95 text-primary-900 rounded-full px-3 py-1.5 shadow-mdx flex items-center gap-2">
              <span>📅</span>
              <span class="font-semibold">Evento online</span>
              <span class="font-black text-xs bg-primary-200 text-primary-900 rounded-full px-2 py-0.5">GRATUITO</span>
            </div>

            <a
              href="#"
              class="inline-flex items-center justify-center rounded-full px-6 py-2.5 font-extrabold bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lgx hover:translate-y-[-1px] transition"
            >
              ¡Inscríbete ahora!
            </a>
          </div>

          <p class="mt-2 text-white/90 flex items-center gap-2 font-semibold">
            <span>🗓</span> <span>12 al 15 de Setiembre</span>
          </p>

          <div class="mt-4">
            <CountdownLarge :target="target" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountdownLarge from "./CountdownLarge.vue";
const target = "2025-09-12T19:00:00-05:00";
</script>

<style scoped>
/* Necesario para que @apply y utilidades de Tailwind funcionen dentro del <style scoped> en v4 */
@reference "../assets/tailwind.css";

/* Altura y base del ribbon */
.top-ribbon {
  --ribbon-h: clamp(160px, 16vw, 260px);
  position: relative;
  overflow: hidden;
}

/* Fondo modular a dos columnas (desktop) */
.topribbon-bg {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1fr 1.4fr; /* más espacio para la imagen derecha */
  width: 100%;
  height: 100%;
  z-index: 0;
}
.bg-left {
  background: url("/img/fondo-izquierda.jpg") left center / cover no-repeat;
  background-color: #005187;
}
.bg-right {
  background: url("/img/crunchy-girl3.jpg") center center / cover no-repeat;
  background-color: #0a2a52;
}

/* Responsive: en móvil una sola imagen + overlay para legibilidad */
@media (max-width: 1024px) {
  .topribbon-bg {
    display: block;
    background: url("/img/crunchy-girl3.jpg") center center / cover no-repeat;
  }
  .bg-left,
  .bg-right {
    display: none;
  }
  .top-ribbon::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 42, 90, 0.7);
    z-index: 1;
  }
  .top-ribbon .container {
    position: relative;
    z-index: 2;
  }
}
</style>
