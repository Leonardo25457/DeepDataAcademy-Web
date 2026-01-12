<template>
  <section
    class="py-24 relative bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span
          class="bg-indigo-500/10 text-indigo-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4"
        >
          Agenda Semanal
        </span>
        <h2
          class="text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white"
        >
          Eventos en Vivo
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Sesiones interactivas exclusivas para profundizar tus conocimientos.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="e in events"
          :key="e.title"
          class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
        >
          <div class="aspect-video relative overflow-hidden">
            <img
              :alt="e.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              :src="e.image"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6"
            >
              <span
                class="bg-indigo-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide"
              >
                {{ e.badge }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold mb-4 dark:text-white">
              {{ e.title }}
            </h3>

            <CountdownGridV2 :target="e.target" />

            <RouterLink
              class="w-full inline-flex justify-center bg-slate-900 dark:bg-indigo-500 text-white py-3.5 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-indigo-600 transition-colors text-sm"
              :to="{ path: '/', hash: '#lead-form' }"
            >
              Registrarme Gratis
            </RouterLink>
          </div>
        </article>
      </div>

      <div class="mt-12 text-center">
        <RouterLink
          to="/webinars"
          class="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white inline-flex"
        >
          Ver calendario completo
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountdownGridV2 from "./CountdownGrid.vue";

type EventCard = {
  title: string;
  badge: string;
  image: string;
  target: string;
  to: string;
};

const events: EventCard[] = [
  {
    title: "Power BI vs Excel: Análisis avanzado de datos",
    badge: "Próximo martes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Y1QT4TJvFZ0KkDWB3etvJpncsY2d8ZAJFm1AMP15VzB4kQFzJbKm7WIoj3Ctl6o6UthxemdDNCfyBNrnArxd18opoVyatXIfHhrDW3E52uBUTxPCmRCBdmeTLHcX77ALQnHntn2cx5y7uAoz4E2v4ISkwERNfh-mu3xpdKVbX7F_DQvfFWujoxh6QYaFqfeyauz6_3KMmMx-QtBUkO72njzfJDPoTM21HBeJoPY1MMKSpvV2_rKkdSnOpO5EC2-3iAHB--P2Nw",
    target: "2026-01-20T19:00:00-05:00",
    to: "/webinars",
  },
  {
    title: "Prompt Engineering para analistas de datos",
    badge: "Sábado especial",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqXImbVqBXSc5Op5OkARU8qjMgp0GsJtKN5s1AT9g18jZWX7wIATfTBuo9QNUi8GY-RKFeF3ceEFVwvTOJx_SlFgU3uKDOaKdoIWrTcPKNLuasi8Jdk6GiHUIcBQtzihCYucZcVJAKgFUA5ezc13tw1qePzyMXnXve731vL9FjWF7uBG_kk2H3lA0byylcn2tf_AjTQhuhBCeYlkYIz4lJ8hU_wtl7tJyK3nq_slPHVtaK0_XMkkDO1-1QK93uhWFslCPnWuzF_Q",
    target: "2026-01-24T10:00:00-05:00",
    to: "/webinars",
  },
  {
    title: "Pipeline E2E: De SQL a Machine Learning",
    badge: "Próximo jueves",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOcOigk9zjX0uhAo8f4ALf7em1cg-Gox-2Ym8cmcSDHeHOK7DWOdmVdwqiJHuwCDUEg0-gVvTWRlBut3shid2ggccwNY4CV60LXYjSbAukin-LFkWgxyZGUQSfo5iYDyGImPhxTCGqsuPb63j4kQu6IChCraFXjEbTjA6iOZyXOb9LtSpOQcnfNNoe6f3ustmb-Ncj0IFktRLeYFXqiYOOVF8dHSeCXMoU19s0YV3G_rOjStyegHWC4b-Sn15PETZjJMjju54r4A",
    target: "2026-01-29T19:00:00-05:00",
    to: "/webinars",
  },
];
</script>
