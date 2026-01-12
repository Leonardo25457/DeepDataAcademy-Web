<!-- src/components/HeroCarousel.vue -->
<template>
  <section
    class="hero-gradient relative overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-14 lg:py-7 lg:min-h-[65vh] flex items-start lg:items-center"
    tabindex="0"
    role="region"
    aria-roledescription="carousel"
    :aria-label="`Carrusel de workshops. Slide ${active + 1} de ${slides.length}: ${current.title} ${current.highlight}`"
    @mouseenter="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="resume"
    @keydown.left.prevent="prev(true)"
    @keydown.right.prevent="next(true)"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <Transition name="fade-slide" mode="out-in">
        <div
          :key="current.id"
          class="grid lg:grid-cols-2 gap-7 sm:gap-10 lg:gap-12 items-start lg:items-center"
        >
          <!-- Left -->
          <div class="order-1 min-w-0 text-center lg:text-left">
            <div
              class="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 mb-5 sm:mb-7 backdrop-blur-sm shadow-sm"
            >
              <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Workshop Online • Próximamente
              </span>
            </div>

            <h1
              class="min-w-0 mx-auto lg:mx-0 max-w-[26ch] sm:max-w-none
                     text-3xl sm:text-5xl lg:text-7xl font-extrabold
                     leading-[1.06] tracking-tight text-slate-900 dark:text-white
                     mb-4 sm:mb-6 whitespace-normal break-words"
            >
              <span class="block w-full whitespace-normal break-words">
                {{ current.title }}
              </span>

              <span
                class="block w-full whitespace-normal break-words
                       text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400"
              >
                {{ current.highlight }}
              </span>
            </h1>

            <p
              class="text-[15px] sm:text-lg text-slate-600 dark:text-slate-400
                     mb-6 sm:mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {{ current.description }}
            </p>

            <div
              class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10
                     justify-center lg:justify-start"
            >
              <!-- ✅ WhatsApp -->
              <a
                :href="current.primaryHref"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:w-auto justify-center bg-indigo-500 hover:bg-indigo-600 text-white
                       px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold inline-flex items-center gap-2
                       transition-transform sm:hover:scale-105 shadow-lg shadow-indigo-500/30"
              >
                {{ current.primaryLabel }}
                <span class="material-icons-round text-sm">rocket_launch</span>
              </a>

              <RouterLink
                :to="current.secondaryTo"
                class="w-full sm:w-auto justify-center bg-white dark:bg-white text-slate-900
                       px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold border border-slate-200
                       hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center"
              >
                {{ current.secondaryLabel }}
              </RouterLink>
            </div>

            <div class="max-w-xl mx-auto lg:mx-0">
              <CountdownStrip :target="current.target" class="w-full" />
            </div>
          </div>

          <!-- Right -->
          <div class="relative group order-2 min-w-0 w-full mt-6 sm:mt-8 lg:mt-0">
            <div
              class="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-indigo-500 to-blue-500
                     rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700"
            ></div>

            <div
              class="relative mx-auto w-full max-w-[320px] sm:max-w-[460px] lg:max-w-none
                     rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden
                     border border-slate-200/50 dark:border-white/10 shadow-2xl
                     transform lg:group-hover:rotate-1 transition-transform duration-500"
              :style="{ aspectRatio: currentAspect }"
            >
              <img
                :alt="`Ilustración: ${current.title} ${current.highlight}`"
                :src="current.image"
                class="absolute inset-0 w-full h-full object-contain select-none scale-[1.02] sm:scale-[1.03]"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </Transition>

      <!-- Dots -->
      <div class="mt-6 sm:mt-9 lg:mt-12 flex justify-center gap-3">
        <button
          v-for="(s, i) in slides"
          :key="s.id"
          type="button"
          :class="dotClass(i)"
          :aria-label="`Ir al slide ${i + 1}: ${s.title} ${s.highlight}`"
          :aria-current="i === active ? 'true' : 'false'"
          @click="go(i, true)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import CountdownStrip from "./CountdownStrip.vue";

type Slide = {
  id: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  target: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryTo: string;
};

const WHATSAPP_NUMBER = "51930783601";

function buildWhatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const slides: Slide[] = [
  {
    id: "crunchy",
    title: "Clona plataformas",
    highlight: "tipo Crunchyroll",
    description:
      "Construye una landing y secciones tipo plataforma con UI moderna, responsive y componentes reutilizables utilizando las últimas tecnologías del mercado.",
    image: "/img/workshop_web.png",
    target: "2026-03-05T19:00:00-05:00",
    primaryLabel: "¡Inscríbete ahora!",
    primaryHref: buildWhatsappHref(
      "Hola, quiero inscribirme al workshop: Clona plataformas tipo Crunchyroll. ¿Me brindan información, por favor?"
    ),
    secondaryLabel: "Ver detalles",
    secondaryTo: "/webinars",
  },
  {
    id: "vision",
    title: "Visión Artificial",
    highlight: "con Python • IA en acción",
    description:
      "Detecta, clasifica y entiende imágenes con pipelines reales. Modelos, métricas y despliegue práctico.",
    image: "/img/deteccion_objetos.png",
    target: "2026-03-05T19:00:00-05:00",
    primaryLabel: "¡Inscríbete ahora!",
    primaryHref: buildWhatsappHref(
      "Hola, quiero inscribirme al workshop: Visión Artificial con Python • IA en acción. ¿Me brindan información, por favor?"
    ),
    secondaryLabel: "Ver detalles",
    secondaryTo: "/webinars",
  },
  {
    id: "terminal",
    title: "Automatiza tu terminal",
    highlight: "como un PRO",
    description:
      "Domina scripts, productividad y automatización: aliases, pipes, herramientas y flujos que te ahorran horas.",
    image: "/img/scripts_terminal.png",
    target: "2026-03-05T19:00:00-05:00",
    primaryLabel: "¡Inscríbete ahora!",
    primaryHref: buildWhatsappHref(
      "Hola, quiero inscribirme al workshop: Automatiza tu terminal como un PRO. ¿Me brindan información, por favor?"
    ),
    secondaryLabel: "Ver detalles",
    secondaryTo: "/webinars",
  },
  {
    id: "azure",
    title: "Despliega en Azure",
    highlight: "como en la industria",
    description:
      "CI/CD, contenedores, secretos, observabilidad y buenas prácticas para desplegar como un equipo senior.",
    image: "/img/workshop_web.png",
    target: "2026-03-05T19:00:00-05:00",
    primaryLabel: "¡Inscríbete ahora!",
    primaryHref: buildWhatsappHref(
      "Hola, quiero inscribirme al workshop: Despliega en Azure como en la industria. ¿Me brindan información, por favor?"
    ),
    secondaryLabel: "Ver detalles",
    secondaryTo: "/webinars",
  },
  {
    id: "sql",
    title: "SQL de película:",
    highlight: "Datos que cuentan historias",
    description:
      "Consultas potentes, joins, ventanas, performance y storytelling con datos para análisis que impresionan.",
    image: "/img/netflix_db.png",
    target: "2026-03-05T19:00:00-05:00",
    primaryLabel: "¡Inscríbete ahora!",
    primaryHref: buildWhatsappHref(
      "Hola, quiero inscribirme al workshop: SQL de película: Datos que cuentan historias. ¿Me brindan información, por favor?"
    ),
    secondaryLabel: "Ver detalles",
    secondaryTo: "/webinars",
  },
];

const active = ref(0);
const current = computed(() => slides[active.value]);

/** Aspect Ratio por imagen */
const aspectById = ref<Record<string, string>>({});

const currentAspect = computed(() => {
  return aspectById.value[current.value.id] ?? "4 / 5";
});

function preloadAspects() {
  slides.forEach((s) => {
    const img = new Image();
    img.src = s.image;
    img.onload = () => {
      aspectById.value[s.id] = `${img.naturalWidth} / ${img.naturalHeight}`;
    };
  });
}

/** Autoplay */
const AUTOPLAY_MS = 8000;
let intervalId: number | null = null;

function start() {
  stop();
  intervalId = window.setInterval(() => next(false), AUTOPLAY_MS);
}
function stop() {
  if (intervalId != null) window.clearInterval(intervalId);
  intervalId = null;
}
function pause() {
  stop();
}
function resume() {
  start();
}

function go(i: number, user = false) {
  active.value = (i + slides.length) % slides.length;
  if (user) start();
}
function next(user = false) {
  go(active.value + 1, user);
}
function prev(user = false) {
  go(active.value - 1, user);
}

function dotClass(i: number) {
  return i === active.value
    ? "w-10 sm:w-12 h-2 rounded-full bg-indigo-500 transition-all"
    : "w-3 h-2 rounded-full bg-slate-300 dark:bg-slate-700 hover:bg-indigo-500/50 transition-all";
}

/** Swipe */
const touchX = ref<number | null>(null);

function onTouchStart(e: TouchEvent) {
  touchX.value = e.changedTouches?.[0]?.clientX ?? null;
}
function onTouchEnd(e: TouchEvent) {
  if (touchX.value == null) return;
  const endX = e.changedTouches?.[0]?.clientX ?? touchX.value;
  const dx = endX - touchX.value;

  if (Math.abs(dx) > 40) {
    if (dx < 0) next(true);
    else prev(true);
  }
  touchX.value = null;
}

onMounted(() => {
  preloadAspects();
  start();
});

onUnmounted(() => {
  stop();
});
</script>

<style scoped>
.hero-gradient {
  background: radial-gradient(
      circle at top right,
      rgba(99, 102, 241, 0.15),
      transparent 40%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(139, 92, 246, 0.1),
      transparent 40%
    );
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 320ms ease, transform 320ms ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (prefers-reduced-motion: reduce) {
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: none;
  }
}
</style>
