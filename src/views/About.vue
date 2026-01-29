<!-- src/views/About.vue -->
<template>
  <main class="flex-1">
    <!-- Hero -->
    <!-- Hero -->
    <section
      class="relative flex min-h-[520px] flex-col items-center justify-center px-4 py-20 text-center overflow-hidden bg-slate-50 dark:bg-transparent border-b border-slate-200/60 dark:border-slate-800/60"
    >
      <!-- Glow decorativo (no imagen) -->
      <div
        class="absolute -top-24 right-[-120px] w-[520px] h-[520px] rounded-full blur-3xl opacity-60 -z-10 bg-indigo-500/20 dark:bg-indigo-500/15"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-28 left-[-140px] w-[520px] h-[520px] rounded-full blur-3xl opacity-60 -z-10 bg-violet-500/20 dark:bg-violet-500/10"
        aria-hidden="true"
      />

      <div class="relative z-10 max-w-4xl flex flex-col gap-6 items-center">
        <span
          class="inline-flex items-center rounded-full bg-violet-600/10 px-4 py-1.5 text-xs font-extrabold text-violet-700 dark:text-violet-200 uppercase tracking-wider backdrop-blur-sm border border-violet-500/20 dark:border-violet-500/30"
        >
          Sobre Nosotros
        </span>

        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white"
        >
          Impulsando el
          <br class="hidden md:block" />
          <span
            class="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent"
          >
            Futuro Tecnológico
          </span>
        </h1>

        <p
          class="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          Empoderando a la próxima generación de científicos de datos y líderes
          tecnológicos con educación de vanguardia y una comunidad global.
        </p>
      </div>
    </section>

    <!-- Misión -->
    <section class="py-16 px-4 md:px-10 lg:px-20">
      <div class="mx-auto max-w-[1280px]">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div class="flex-1 flex flex-col gap-6">
            <h2
              class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight"
            >
              Nuestra Misión:
              <br />
              <span class="text-indigo-600 dark:text-indigo-400"
                >Cerrar la brecha</span
              >
              entre teoría y realidad.
            </h2>

            <div
              class="flex flex-col gap-4 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed"
            >
              <p>
                En DeepData Academy, existimos para transformar la educación
                tecnológica. Observamos una desconexión crítica entre lo que se
                enseña en las aulas académicas y las habilidades ágiles que
                demanda la industria moderna.
              </p>
              <p>
                Nuestra respuesta es un ecosistema de aprendizaje inmersivo,
                donde la teoría se encuentra con la práctica desde el día uno.
                No solo formamos programadores; formamos solucionadores de
                problemas listos para innovar.
              </p>
            </div>

            <div class="pt-4">
              <RouterLink
                to="#"
                class="group inline-flex w-fit items-center justify-center gap-2 rounded-full h-12 px-6 bg-slate-900/90 hover:bg-slate-900 text-white text-sm font-bold transition-all border border-white/10"
              >
                <span>Conoce al equipo</span>
                <span
                  class="material-icons-round text-base transition-transform group-hover:translate-x-1"
                >
                  arrow_forward
                </span>
              </RouterLink>
            </div>
          </div>

          <div class="flex-1 w-full">
            <div
              class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl shadow-indigo-500/10 group border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-slate-950/30 backdrop-blur-md"
            >
              <!-- glow / overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-violet-500/10 z-10 mix-blend-overlay pointer-events-none"
                aria-hidden="true"
              />

              <!-- ✅ Imagen real -->
              <img
                src="/img/about_Onepiece.png"
                alt="DeepData Academy - About"
                class="absolute inset-0 w-full h-full object-cover object-[center_55%] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="py-20 px-4 md:px-10">
      <div class="mx-auto max-w-[1280px]">
        <div class="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <h2
            class="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Nuestros Valores
          </h2>
          <p class="text-slate-600 dark:text-slate-300">
            Los principios fundamentales que guían cada línea de código que
            escribimos y cada lección que impartimos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <article
            v-for="v in values"
            :key="v.title"
            class="group relative flex flex-col gap-6 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md p-8 transition-all hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
            >
              <span class="material-icons-round text-3xl">{{ v.icon }}</span>
            </div>

            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {{ v.title }}
              </h3>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ v.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const values = [
  {
    icon: "lightbulb",
    title: "Innovación Constante",
    description:
      "No nos conformamos con lo establecido. Buscamos nuevas formas de resolver problemas complejos y empujar los límites.",
  },
  {
    icon: "terminal",
    title: "Aprendizaje Práctico",
    description:
      "Creemos en aprender haciendo. Proyectos reales, código funcional y retos directos de la industria.",
  },
  {
    icon: "public",
    title: "Comunidad Global",
    description:
      "El talento no tiene fronteras. Conectamos mentores, estudiantes y empresas en una red global de colaboración.",
  },
];
</script>
