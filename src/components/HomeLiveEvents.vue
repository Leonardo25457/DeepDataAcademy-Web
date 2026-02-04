<template>
  <section
    ref="sectionRef"  
    class="py-24 relative isolate overflow-hidden border-t transition-colors duration-300
           bg-white/30 dark:bg-white/0 backdrop-blur-[2px]
           border-slate-200 dark:border-slate-800/50"
  >
    <!-- Blobs / glow background -->
    <div
      class="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none
             bg-indigo-500/10 dark:bg-purple-900/20 mix-blend-multiply dark:mix-blend-screen"
    />
    <div
      class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none
             bg-sky-500/10 dark:bg-blue-900/20 mix-blend-multiply dark:mix-blend-screen"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          <span class="text-gradient">Descubre Nuestros Bootcamps</span>
        </h2>
        <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300/80">
          Accede a especializaciones diseñadas para impulsar tu carrera.
          Elige el camino que más se adapte a ti y empieza hoy.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="w in bootcamps"
          :key="w.id"
          class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden
                 group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300
                 flex flex-col h-full"
        >
          <!-- Imagen -->
          <div class="aspect-video relative overflow-hidden">
            <img
              :alt="w.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              :src="w.image"
            />

            <!-- ✅ Badge horas (tipo ejemplo 72 Hrs.) -->
            <div class="absolute top-3 left-3 z-10">
              <span
                class="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1
                       bg-slate-950/80 text-white text-[11px] font-extrabold
                       border border-white/15 backdrop-blur"
              >
                {{ (w.hours ?? 72) }} Hrs.
              </span>
            </div>

            <!-- Badge categoría -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6"
            >
              <span
                class="bg-indigo-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide"
              >
                {{ w.badge ?? "Especialización" }}
              </span>
            </div>
          </div>

          <!-- Cuerpo -->
          <div class="p-6 flex flex-col flex-1">
            <h3
              class="text-lg font-bold text-slate-900 dark:text-white leading-snug min-h-[3.25rem]"
            >
              {{ w.title }}
            </h3>

            <p class="text-sm text-slate-600 dark:text-slate-400 mt-3 min-h-[3.75rem]">
              {{ w.description }}
            </p>

            <!-- ✅ Precio -->
            <div class="mt-4 flex items-center justify-between">
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400"
              >
                Precio
              </span>
              <span class="text-lg font-extrabold text-slate-900 dark:text-white">
                S/. {{ (w.price ?? 300) }}
              </span>
            </div>

            <!-- Parte inferior -->
            <div class="mt-auto pt-6">
              <div class="min-h-[76px]">
                <CountdownStrip :target="w.start" :now="now" />
              </div>

              <!-- ✅ Botones -->
              <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <!-- Inscribirse -> WhatsApp -->
                <a
                  :href="buildWhatsappHref(
                    `Hola, quiero inscribirme al bootcamp: ${w.title}. ¿Me brindan mayor información, por favor?`
                  )"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex justify-center items-center gap-2
                         bg-indigo-600 hover:bg-indigo-700 text-white
                         py-3.5 rounded-xl font-bold transition-colors text-sm"
                >
                  Inscribirse
                  <span class="material-icons-round text-[18px]">arrow_forward</span>
                </a>

                <!-- Detalle -> RouterLink -->
                <RouterLink
                  :to="detailTo(w)"
                  class="w-full inline-flex justify-center items-center gap-2
                         bg-white/90 hover:bg-white text-slate-900
                         dark:bg-white/10 dark:hover:bg-white/15 dark:text-white
                         py-3.5 rounded-xl font-bold border border-slate-200 dark:border-white/15
                         transition-colors text-sm"
                >
                  Detalle
                  <span class="material-icons-round text-[18px]">open_in_new</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import CountdownStrip from "../components/CountdownStrip.vue";
import bootcampsRaw from "../data/bootcamps";


type BootcampItem = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  start: string;

  badge?: string;
  hours?: number;
  price?: number;
  to?: string;
  slug?: string;
};

const now = ref(Date.now());
let timer: number | null = null;

const sectionRef = ref<HTMLElement | null>(null);
let io: IntersectionObserver | null = null;

function startTick() {
  if (timer) return;
  timer = window.setInterval(() => (now.value = Date.now()), 1000);
}
function stopTick() {
  if (!timer) return;
  window.clearInterval(timer);
  timer = null;
}

const bootcamps = bootcampsRaw as BootcampItem[];

const WHATSAPP_NUMBER = "51970110199";

function buildWhatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function detailTo(w: BootcampItem) {
  // Prioridad: w.to -> /bootcamps/:slug -> /bootcamps/:id
  if (w.to) return w.to;
  if (w.slug) return `/bootcamps/${w.slug}`;
  return `/bootcamps/${w.id}`;
}

onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      const isVisible = entries.some((e) => e.isIntersecting);
      if (isVisible) startTick();
      else stopTick();
    },
    { threshold: 0.12 }
  );

  if (sectionRef.value) io.observe(sectionRef.value);
});

onUnmounted(() => {
  stopTick();
  io?.disconnect();
});

</script>

<style scoped>
/* Título gradiente */
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #4f46e5, #7c3aed, #2563eb);
}
:global(.dark) .text-gradient {
  background-image: linear-gradient(to right, #818cf8, #a78bfa, #60a5fa);
}
</style>
