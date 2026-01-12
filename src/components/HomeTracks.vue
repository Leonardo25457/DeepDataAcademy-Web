<template>
  <section class="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span class="text-indigo-500 font-bold text-sm uppercase tracking-widest block mb-3">Rutas de Formación</span>
          <h2 class="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            Stacks tecnológicos <span class="text-indigo-500">demandados</span>
          </h2>
        </div>

        <RouterLink class="text-indigo-500 font-bold flex items-center gap-2 hover:gap-3 transition-all group" to="/cursos">
          Ver todas las rutas
          <span class="material-icons-round group-hover:translate-x-1 transition-transform">east</span>
        </RouterLink>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="c in cards"
          :key="c.title"
          class="group bg-white dark:bg-slate-900 p-1 rounded-2xl border border-slate-200/70 dark:border-slate-700/40 hover:shadow-2xl transition"
        >
          <div class="bg-white dark:bg-[#111625] h-full p-8 rounded-xl relative overflow-hidden">
            <div
              class="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"
              :class="c.blob"
            ></div>

            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10"
              :class="c.iconBox"
            >
              <span class="material-icons-round text-3xl">{{ c.icon }}</span>
            </div>

            <h3 class="text-xl font-bold mb-3 dark:text-white relative z-10">{{ c.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-8 relative z-10 text-sm leading-relaxed">
              {{ c.desc }}
            </p>

            <div class="flex gap-4 relative z-10 border-t border-slate-100 dark:border-slate-800 pt-6">
              <img v-for="logo in c.logos" :key="logo.alt" :alt="logo.alt" class="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" :src="logo.src" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Logo = { alt: string; src: string };
type Card = {
  title: string;
  desc: string;
  icon: string;
  blob: string;
  iconBox: string;
  logos: Logo[];
};

const cards: Card[] = [
  {
    title: "Frontend Moderno",
    desc: "Domina React, Tailwind CSS y arquitecturas modernas para crear interfaces de alto rendimiento y UX superior.",
    icon: "code",
    blob: "bg-orange-500/10",
    iconBox: "bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400",
    logos: [
      { alt: "React", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaWlagbJI7VcOsHDqt06TnXoW4oDid0lb9msw5p44edGdDXCaWXhoR-bjGDMtD8E3cyupC91EvuHg3iuxV_lulC0be44auMSnFTZQ3I9SldY8Ro45bM8NuchdUg88hgIgBQB9Dmi3BnsV6OcCo2p2AabWcOzbUF_ZQ7p6LAEnXNco_aNJkloB5u8GiNn0Llpc1kMaQQZYW7Vdg4KOMB8PrtRcWfITNrKoPHWE12OYaobvFRxopxSlBkCzlWrchw0O5xeXRdbpFCQ" },
      { alt: "Tailwind", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBIUgwEWVaUMqMwW-jG92x5PKOxK7AUsAD-TJZnkfsZ380mm8aJ4UC94nLO6SGdcXsGoSeuUbn8xWb1MR16whcunTKBDGTGahbogzIzwL-repWvsedrZZoXlpqrYVZDolrHynxiOj1evQ2wl6hmWDpPt7eZ3uryglr03UkapThWGN5bkOc7jnzwBRn9uUyqC0P1FViVcar--D5S5VNJaVKdX0AXzjc66OBQIcFcD24GAmAsuuo4LdVhoYWaUp8CD0REtmGLkHL7g" },
      { alt: "TypeScript", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVmG_ssMRUdz2hsTTT7wmEXRsivWbiA29gKeiQOZCEabFRMLO1qnGzSNSZgvokulsRTMTIYKYRhL0SHI4qUtKxMR0IXLuc6hPtgoT9W6dfDcZX1TXqKtfZoG12TXn0yDeeKikrosGsDV7xL86-Mbo82cGAyn3WVeDagLRhmR5EtECVPiBUCKNqe4r1QJ_AhhUr1Q_UrzjAXonGtiSLpcre_JRdNQip3NhoZad0jtVVGMXZmveBc7A0s5q3mLyzfy5gjEz1ADcKWw" },
    ],
  },
  {
    title: "Data Engineering",
    desc: "Aprende a gestionar pipelines de datos masivos con Python, SQL y las herramientas de Big Data más usadas.",
    icon: "storage",
    blob: "bg-blue-500/10",
    iconBox: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400",
    logos: [
      { alt: "Python", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_CpNRE0iEqGPwAkuO6SFqkxgMLyh8m-2zMMgRyTSvWW94E4Qz4ZOkuujFDedyOjOo2n2ZLB6AIX07AXsUW4TPYiQiJnWmcQYxc4d2se0zRTQtug0IiUYQRj94XvDzX7wFZ5t65wJ7ESAK4AGFvt8P5ao3_021dV-zCaE-XsFumkeOijAmfIdyBk011TTIh4ZkobH1pyANRuwWSqiY-Tji5urXWX-01bT38n6PApaPusTTTNTTtLvPuOKZu71p8MWKmKtVcUVoPw" },
      { alt: "PostgreSQL", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnsRtlOQaXpyZRZZJlsC_WS5r3RcWd5rqzAqUb4YJ-r_aVBV2LSUmUnC3T7Ym-VVqv2tcQ4SzowuhRWPO6VXMA9OJIakS1LgZXRvfgeQgutV-txtWW4_4s2WQ5XSpTB7-Pr4QLf0pSgEZbl53uddG8QIX8fx1eZPJMPo_2q82wRxF2pdD6LriKbzLbAVLsVr8lhuq_FX6ddspOyvSA977xJ5ndjFzAFjHroHVwi2p0f5Pbi7LyPz0qw8tZT0TLXTlqNx5LIwFe_Q" },
      { alt: "Docker", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHbntSKloQJBd3e_vbhm2z29lsrL_wqxpP8PHx1xlHvKod7LE6EpVWxAeJl8TzKQaYq01bjzvtPcyUCbyXqlk-If-Mw9kRmUS2xM28IUkMi-0X4AoF5tArQd7ort6K0GZKdlhVTjqubWYkF-q01Al0_5pEMVdKUHH4FyUoHWh8n4GGZrR4xs5ef9-axV3Q5Ikp6IwK2CDAk1pbQyir6ewyrHGPl814L1PCtyvXHOtyVcLyiHZ7BjiPTasWtmTt7ZJI_8JsgJCgVg" },
    ],
  },
  {
    title: "Cloud Architect",
    desc: "Escala aplicaciones globalmente usando AWS, Azure y despliegues serverless modernos y seguros.",
    icon: "cloud_queue",
    blob: "bg-purple-500/10",
    iconBox: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400",
    logos: [
      { alt: "AWS", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbInZ6HKowLP04ZNAw3irhiyRtDyVk1zPH0bkGng3vQn80yLcT6G2bnFh4qwv0tUH_DzXORORxmObFpqN2Smy6Eqj_DSOAzO44yizHomNM8Yhd5QKTgCtB8hf0oq0tMolohNG2BHhiMGGrqngsuB4iGKNVlX2fkC0OmsO_qeDbHyje1zvLCLdxNBhg9PxihISNaLN_QpOsDOl2wR-IFFhtYSGvtSQEYr6ccy0dGkT7l9xvq75g_A6iq597WyUZ7yPzbjoVJDMtNA" },
      { alt: "Azure", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLBWwIUZ8H5FZ3PdrD7XjoDwZCEXRzSv0TpHdc8SCftBRxeYpIq8Iai16A90JuLP3MLOiBISW0Jko7c1qELkGxXvjzyR5gG2zJvrj7NLHjqx2SuRENAmgnjQy331a8BmuRlBw7NzWPUH1Egq5c0reasIdudpnpkyAdU2_IJVH_C1fmNCv-wgbZ9MHcIqcXaj8Km5ZV89bQhKOlBUtU9LCGmqJ40IrIgFSmOZLDkxyQSdYByhRgx6p474O38ehyThAWbdmGgOzduQ" },
      { alt: "Kubernetes", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApFS_214eHp0ndNWAL_CHbXD8Nasi3nKeB3Gq_9Xz6hC0csXk4o0DJIDVKbH10cXm76nF81S7LUVdKHglCt67Y69PYDt4h7t5slj9gPrgdy3sFgZIOfV4ANhv4ufwGzyvJnnGeth1Vj_6dGWsrvelTNRU_g0KOvAviqJvffbrMiwpntf-PL37L5vbkc4SquWQ-mmEj_JPTDB5NW-Wj73bMkKfB5MVAPl00cW_7FK-yaXoUqG31f9FNi5bQY2Pte46srHbvGQXtXw" },
    ],
  },
];
</script>
