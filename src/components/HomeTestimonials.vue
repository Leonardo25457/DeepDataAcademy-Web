<template>
  <section class="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-[10%] left-[-5%] w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <span class="text-indigo-500 font-bold text-sm uppercase tracking-widest block mb-3">Comunidad</span>
        <h2 class="text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          Lo que dicen nuestros
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">alumnos</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Profesionales que transformaron su carrera con nuestra metodología.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="t in testimonials"
          :key="t.name"
          class="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative group hover:border-indigo-500/30 transition-colors"
          :class="t.featured ? 'shadow-xl dark:shadow-none' : ''"
        >
          <div class="absolute -top-6 left-8 bg-white dark:bg-slate-800 p-1 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm">
            <img :alt="t.name" class="w-12 h-12 rounded-full object-cover" :src="t.avatar" />
          </div>

          <div class="mt-6">
            <div class="flex text-yellow-400 mb-4 text-sm">
              <span class="material-icons-round" v-for="i in 5" :key="i">{{ i <= t.stars ? "star" : "star_half" }}</span>
            </div>

            <p class="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">
              "{{ t.quote }}"
            </p>

            <div class="flex items-center justify-between border-t border-slate-200 dark:border-slate-700/50 pt-4">
              <div>
                <h4 class="font-bold text-slate-900 dark:text-white">{{ t.name }}</h4>
                <p class="text-xs text-indigo-500 font-medium">{{ t.role }}</p>
              </div>
              <img :alt="t.badgeAlt" class="w-6 h-6 grayscale opacity-50" :class="t.invertDark ? 'dark:invert' : ''" :src="t.badge" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type T = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  stars: number; // 0..5
  featured?: boolean;
  badge: string;
  badgeAlt: string;
  invertDark?: boolean;
};

const testimonials: T[] = [
  {
    name: "Sofía M.",
    role: "Jr. Data Engineer",
    stars: 5,
    quote: "Gracias a la ruta de Data Engineering conseguí mi primer trabajo remoto en una startup de USA. La profundidad del contenido y los proyectos prácticos son inigualables.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqXImbVqBXSc5Op5OkARU8qjMgp0GsJtKN5s1AT9g18jZWX7wIATfTBuo9QNUi8GY-RKFeF3ceEFVwvTOJx_SlFgU3uKDOaKdoIWrTcPKNLuasi8Jdk6GiHUIcBQtzihCYucZcVJAKgFUA5ezc13tw1qePzyMXnXve731vL9FjWF7uBG_kk2H3lA0byylcn2tf_AjTQhuhBCeYlkYIz4lJ8hU_wtl7tJyK3nq_slPHVtaK0_XMkkDO1-1QK93uhWFslCPnWuzF_Q",
    badge: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_CpNRE0iEqGPwAkuO6SFqkxgMLyh8m-2zMMgRyTSvWW94E4Qz4ZOkuujFDedyOjOo2n2ZLB6AIX07AXsUW4TPYiQiJnWmcQYxc4d2se0zRTQtug0IiUYQRj94XvDzX7wFZ5t65wJ7ESAK4AGFvt8P5ao3_021dV-zCaE-XsFumkeOijAmfIdyBk011TTIh4ZkobH1pyANRuwWSqiY-Tji5urXWX-01bT38n6PApaPusTTTNTTtLvPuOKZu71p8MWKmKtVcUVoPw",
    badgeAlt: "Python",
  },
  {
    name: "Carlos R.",
    role: "Cloud Architect",
    stars: 4,
    featured: true,
    quote: "La certificación de Cloud Architecture me permitió ascender en mi empresa. Los laboratorios prácticos en AWS son exactamente lo que necesitaba para entender la teoría.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOcOigk9zjX0uhAo8f4ALf7em1cg-Gox-2Ym8cmcSDHeHOK7DWOdmVdwqiJHuwCDUEg0-gVvTWRlBut3shid2ggccwNY4CV60LXYjSbAukin-LFkWgxyZGUQSfo5iYDyGImPhxTCGqsuPb63j4kQu6IChCraFXjEbTjA6iOZyXOb9LtSpOQcnfNNoe6f3ustmb-Ncj0IFktRLeYFXqiYOOVF8dHSeCXMoU19s0YV3G_rOjStyegHWC4b-Sn15PETZjJMjju54r4A",
    badge: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbInZ6HKowLP04ZNAw3irhiyRtDyVk1zPH0bkGng3vQn80yLcT6G2bnFh4qwv0tUH_DzXORORxmObFpqN2Smy6Eqj_DSOAzO44yizHomNM8Yhd5QKTgCtB8hf0oq0tMolohNG2BHhiMGGrqngsuB4iGKNVlX2fkC0OmsO_qeDbHyje1zvLCLdxNBhg9PxihISNaLN_QpOsDOl2wR-IFFhtYSGvtSQEYr6ccy0dGkT7l9xvq75g_A6iq597WyUZ7yPzbjoVJDMtNA",
    badgeAlt: "AWS",
    invertDark: true,
  },
  {
    name: "Elena T.",
    role: "Frontend Developer",
    stars: 5,
    quote: "Venía de un background no técnico y el bootcamp de Frontend fue la puerta de entrada perfecta. La comunidad es súper activa y ayuda mucho.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Y1QT4TJvFZ0KkDWB3etvJpncsY2d8ZAJFm1AMP15VzB4kQFzJbKm7WIoj3Ctl6o6UthxemdDNCfyBNrnArxd18opoVyatXIfHhrDW3E52uBUTxPCmRCBdmeTLHcX77ALQnHntn2cx5y7uAoz4E2v4ISkwERNfh-mu3xpdKVbX7F_DQvfFWujoxh6QYaFqfeyauz6_3KMmMx-QtBUkO72njzfJDPoTM21HBeJoPY1MMKSpvV2_rKkdSnOpO5EC2-3iAHB--P2Nw",
    badge: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaWlagbJI7VcOsHDqt06TnXoW4oDid0lb9msw5p44edGdDXCaWXhoR-bjGDMtD8E3cyupC91EvuHg3iuxV_lulC0be44auMSnFTZQ3I9SldY8Ro45bM8NuchdUg88hgIgBQB9Dmi3BnsV6OcCo2p2AabWcOzbUF_ZQ7p6LAEnXNco_aNJkloB5u8GiNn0Llpc1kMaQQZYW7Vdg4KOMB8PrtRcWfITNrKoPHWE12OYaobvFRxopxSlBkCzlWrchw0O5xeXRdbpFCQ",
    badgeAlt: "React",
  },
];
</script>
