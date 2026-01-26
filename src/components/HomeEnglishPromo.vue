<template>
  <section class="py-16 sm:py-20 bg-white dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-10 sm:mb-12 text-center md:text-left">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 mb-3"
        >
          Eleva tu carrera profesional.
        </h2>

        <p
          class="text-slate-600 dark:text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl"
        >
          La herramienta definitiva para devs globales. Domina el stack de
          comunicación que las empresas de USA demandan.
        </p>
      </div>

      <!-- Card -->
      <div class="grid grid-cols-1 gap-6 sm:gap-8">
        <div class="neon-card rounded-3xl overflow-hidden">
          <div class="flex flex-col md:flex-row min-h-[520px]">
            <!-- Image -->
            <div
              class="relative md:w-2/5 min-h-[260px] md:min-h-full overflow-hidden"
            >
              <img
                :src="leftImage"
                alt="Estudiante aprendiendo en ambiente cinematográfico"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              <!-- Color wash -->
              <div
                class="absolute inset-0 bg-gradient-to-tr from-violet-600/18 via-transparent to-sky-500/14 dark:from-violet-500/22 dark:to-sky-400/18"
              ></div>

              <!-- Vignette -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/35 dark:from-black/55 dark:via-black/25 dark:to-black/60"
              ></div>
            </div>

            <!-- Content -->
            <div
              class="relative md:w-3/5 p-7 sm:p-9 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white/85 via-white/70 to-slate-50/70 dark:from-slate-900/75 dark:via-slate-900/60 dark:to-slate-950/55 backdrop-blur-md"
            >
              <!-- Badges (top right) -->
              <div class="absolute top-6 right-6 flex gap-3">
                <div
                  class="w-10 h-10 rounded-xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/70 dark:border-white/12 ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span class="text-xl">🇺🇸</span>
                </div>

                <div
                  class="w-10 h-10 rounded-xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/70 dark:border-white/12 ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    class="material-icons-round text-violet-600 dark:text-violet-300"
                  >
                    translate
                  </span>
                </div>
              </div>

              <div class="space-y-6">
                
                <span
                  class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-700 dark:bg-violet-300/12 dark:border-violet-200/30 dark:text-violet-100 text-[11px] font-extrabold tracking-[0.18em] uppercase"
                >
                  Promoción exclusiva
                </span>

                <h3
                  class="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.08] text-slate-900 dark:text-slate-50"
                >
                  Obtén
                  <span class="text-gradient"
                    >Gratis el Curso Intensivo de Inglés</span
                  >
                </h3>

                
                <p
                  class="text-slate-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed"
                >
                  Domina el idioma universal del código. Accede automáticamente
                  al inscribirte en cualquier Bootcamp de DeepData.
                </p>

                <div class="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                  <button
                    type="button"
                    class="inline-flex cursor-pointer items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-violet-600 to-sky-500 hover:opacity-95 transition-transform transform hover:scale-[1.02] shadow-lg shadow-violet-500/25 dark:shadow-violet-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
                    @click="emit('view-bootcamps')"
                  >
                    Ver Cursos
                    <span class="material-icons-round text-base"
                      >arrow_forward</span
                    >
                  </button>
                </div>

                <!-- Small perks -->
                <div class="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    class="rounded-2xl px-4 py-3 bg-white/90 dark:bg-slate-900/45 border border-slate-200/80 dark:border-white/12 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-md"
                  >
                    <p
                      class="text-sm font-semibold text-slate-900 dark:text-slate-50"
                    >
                      Inglés técnico para entrevistas
                    </p>
                    <p
                      class="text-xs text-slate-600 dark:text-slate-200/90 mt-0.5"
                    >
                      Práctica enfocada en entrevistas y comunicación diaria.
                    </p>
                  </div>

                  <div
                    class="rounded-2xl px-4 py-3 bg-white/90 dark:bg-slate-900/45 border border-slate-200/80 dark:border-white/12 ring-1 ring-black/5 dark:ring-white/10 backdrop-blur-md"
                  >
                    <p
                      class="text-sm font-semibold text-slate-900 dark:text-slate-50"
                    >
                      Acceso inmediato al inscribirte
                    </p>
                    <p
                      class="text-xs text-slate-600 dark:text-slate-200/90 mt-0.5"
                    >
                      Se habilita automáticamente con tu matrícula.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- /content -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "view-bootcamps"): void;
}>();

const leftImage = "/img/estudiando-anime.png";
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.neon-card {
  position: relative;
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 18px 60px -30px rgba(99, 102, 241, 0.45);
  backdrop-filter: blur(16px);
}

.neon-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 0.6),
    rgba(59, 130, 246, 0.6)
  );
  border-radius: inherit;
  z-index: -1;
  opacity: 0.2;
}
</style>
