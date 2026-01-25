<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-[#050508] text-slate-800 dark:text-slate-200 transition-colors duration-300"
  >
    <!-- HERO -->
    <section class="relative pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden">
      <!-- Glow (responsive) -->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2
               w-[min(900px,92vw)] h-[520px]
               bg-emerald-500/20 dark:bg-emerald-500/15
               blur-[140px] rounded-full pointer-events-none -z-10"
      ></div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <!-- Title -->
        <h1
          class="text-balance font-extrabold tracking-tight text-slate-900 dark:text-white
                 mb-5 sm:mb-6 leading-[1.06]
                 text-4xl sm:text-5xl md:text-7xl"
        >
          Maestría en
          <span class="hidden md:block"></span>

          <span class="title-gradient inline-block">
            Python y Ciencia de Datos
          </span>
        </h1>

        <!-- Subtitle -->
        <p
          class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400
                 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1"
        >
          El lenguaje más demandado del mundo. Domina el stack moderno de datos:
          <span class="text-slate-900 dark:text-white font-medium">
            Pandas, NumPy, Scikit-Learn
          </span>
          y despliega modelos de IA en producción.
        </p>

        <!-- CTA -->
        <div class="flex items-center justify-center gap-4 mb-12 sm:mb-16">
          <a
            class="px-7 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600
                   hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm sm:text-base
                   transition shadow-lg hover:shadow-glow transform hover:-translate-y-0.5
                   inline-flex items-center justify-center gap-2"
            href="#"
          >
            Inscribirse ahora
            <span class="material-icons-round text-sm">arrow_forward</span>
          </a>
        </div>

        <!-- Stats -->
        <div class="border-y border-slate-200 dark:border-white/10 py-7 sm:py-8">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white">12</span>
              <span class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1">
                Semanas
              </span>
            </div>

            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white">5</span>
              <span class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1">
                Proyectos
              </span>
            </div>

            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white">1:1</span>
              <span class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1">
                Mentoría
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <!-- FIX: más compacto en mobile -->
    <section id="syllabus" class="py-10 sm:py-14 lg:py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- FIX: min-w-0 para evitar overflow raro -->
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start lg:items-center min-w-0">
          <!-- Left -->
          <div class="min-w-0">
            <div
              class="inline-block px-3 py-1 mb-4 sm:mb-6 text-[11px] sm:text-xs font-bold tracking-wider
                     text-emerald-700 dark:text-emerald-400
                     bg-emerald-100 dark:bg-emerald-500/10
                     rounded uppercase"
            >
              Stack Tecnológico Completo
            </div>

            <h2
              class="text-balance text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white
                     mb-4 sm:mb-6 leading-tight"
            >
              Automatiza y escala
              <span class="hidden sm:inline"><br /></span>
              <span class="title-gradient inline-block">con el poder de Python</span>
            </h2>

            <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-lg mb-5 sm:mb-8 leading-relaxed">
              Pasa de scripts básicos a arquitecturas de datos robustas. Aprenderás a manipular millones de
              registros, crear visualizaciones impactantes y construir pipelines de Machine Learning que
              resuelven problemas reales de negocio.
            </p>

            <!-- FIX: cards más compactas en mobile + 1 columna -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div
                class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0f1016]
                       border border-slate-200 dark:border-white/10
                       hover:border-emerald-500/50 dark:hover:border-emerald-500/50
                       transition group"
              >
                <div
                  class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20
                         flex items-center justify-center text-emerald-700 dark:text-emerald-300
                         mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-round text-[18px] sm:text-[20px]">analytics</span>
                </div>

                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                  Análisis de Datos
                </h3>

                <p class="text-[13px] sm:text-sm text-slate-500 dark:text-slate-400">
                  Domina Pandas y Matplotlib para extraer insights valiosos de datasets complejos.
                </p>
              </div>

              <div
                class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0f1016]
                       border border-slate-200 dark:border-white/10
                       hover:border-emerald-500/50 dark:hover:border-emerald-500/50
                       transition group"
              >
                <div
                  class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20
                         flex items-center justify-center text-amber-700 dark:text-amber-300
                         mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-round text-[18px] sm:text-[20px]">smart_toy</span>
                </div>

                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                  Inteligencia Artificial
                </h3>

                <p class="text-[13px] sm:text-sm text-slate-500 dark:text-slate-400">
                  Implementa Machine Learning con Scikit-Learn y despliega soluciones en producción.
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Code Window -->
          <!-- FIX: w-full + max-w para mobile, mt para separar de las cards -->
          <div class="relative group mt-6 sm:mt-8 lg:mt-0 w-full max-w-[520px] lg:max-w-none mx-auto min-w-0">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl blur
                     opacity-20 group-hover:opacity-35 transition duration-1000"
            ></div>

            <div
              class="relative rounded-2xl overflow-hidden border shadow-2xl"
              :class="[
                'bg-white border-slate-200',
                'dark:bg-slate-900 dark:border-slate-800',
              ]"
            >
              <!-- Top bar -->
              <div
                class="flex items-center gap-2 px-4 py-3 border-b"
                :class="[
                  'bg-slate-50 border-slate-200',
                  'dark:bg-slate-800/50 dark:border-white/5',
                ]"
              >
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div class="ml-4 text-xs font-mono text-slate-500 truncate">
                  model_training.py
                </div>
              </div>

              <!-- Code body -->
              <div
                class="p-4 sm:p-6 overflow-x-auto custom-scrollbar"
                :class="['bg-white', 'dark:bg-[#0f111a]']"
              >
                <pre
                  class="font-mono text-[11px] sm:text-sm leading-relaxed"
                  :class="['text-slate-800', 'dark:text-slate-200']"
                ><code v-pre :class="['code', 'code-light', 'dark:code-dark']">
<span class="ln">01</span><span class="token-keyword">import</span> <span class="token-ident">pandas</span> <span class="token-keyword">as</span> <span class="token-ident">pd</span>
<span class="ln">02</span><span class="token-keyword">import</span> <span class="token-ident">matplotlib</span>.<span class="token-ident">pyplot</span> <span class="token-keyword">as</span> <span class="token-ident">plt</span>
<span class="ln">03</span><span class="token-keyword">from</span> <span class="token-ident">sklearn</span>.<span class="token-ident">model_selection</span> <span class="token-keyword">import</span> <span class="token-ident">train_test_split</span>
<span class="ln">04</span>
<span class="ln">05</span><span class="token-comment"># Load financial dataset for analysis</span>
<span class="ln">06</span><span class="token-ident">df</span> <span class="token-operator">=</span> <span class="token-ident">pd</span>.<span class="token-function">read_csv</span>(<span class="token-string">'financial_growth.csv'</span>)
<span class="ln">07</span>
<span class="ln">08</span><span class="token-comment"># Calculate ROI and trends</span>
<span class="ln">09</span><span class="token-ident">df</span>[<span class="token-string">'roi_index'</span>] <span class="token-operator">=</span> <span class="token-ident">df</span>[<span class="token-string">'revenue'</span>] <span class="token-operator">/</span> <span class="token-ident">df</span>[<span class="token-string">'cost'</span>]
<span class="ln">10</span><span class="token-ident">monthly_trend</span> <span class="token-operator">=</span> <span class="token-ident">df</span>.<span class="token-function">groupby</span>(<span class="token-string">'month'</span>)[<span class="token-string">'roi_index'</span>].<span class="token-function">mean</span>()
<span class="ln">11</span>
<span class="ln">12</span><span class="token-comment"># Visualize prediction model results</span>
<span class="ln">13</span><span class="token-ident">plt</span>.<span class="token-function">figure</span>(<span class="token-ident">figsize</span><span class="token-operator">=</span>(<span class="token-number">10</span>, <span class="token-number">6</span>))
<span class="ln">14</span><span class="token-ident">plt</span>.<span class="token-function">plot</span>(<span class="token-ident">monthly_trend</span>, <span class="token-ident">color</span><span class="token-operator">=</span><span class="token-string">'#10b981'</span>, <span class="token-ident">linewidth</span><span class="token-operator">=</span><span class="token-number">2</span>)
<span class="ln">15</span><span class="token-ident">plt</span>.<span class="token-function">title</span>(<span class="token-string">'AI Projected Growth 2026'</span>)
<span class="ln">16</span><span class="token-ident">plt</span>.<span class="token-function">grid</span>(<span class="token-keyword">True</span>, <span class="token-ident">alpha</span><span class="token-operator">=</span><span class="token-number">0.3</span>)
<span class="ln">17</span><span class="token-ident">plt</span>.<span class="token-function">show</span>()
</code></pre>
              </div>
            </div>
          </div>
          <!-- /Right -->
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "../../composables/useTheme";
useTheme();
</script>

<style scoped>
/* Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

/* Line numbers */
.ln {
  display: inline-block;
  width: 2.2rem;
  margin-right: 0.75rem;
  color: #94a3b8;
  user-select: none;
  text-align: right;
}
@media (max-width: 420px) {
  .ln {
    width: 1.7rem;
    margin-right: 0.55rem;
  }
}

/* Base code spacing */
.code {
  display: block;
  white-space: pre;
}

/* Light theme tokens */
.code-light .token-keyword {
  color: #7c3aed;
  font-weight: 700;
}
.code-light .token-function {
  color: #0ea5e9;
}
.code-light .token-string {
  color: #16a34a;
}
.code-light .token-number {
  color: #f59e0b;
}
.code-light .token-comment {
  color: #64748b;
  font-style: italic;
}
.code-light .token-operator {
  color: #0f766e;
}
.code-light .token-ident {
  color: #0f172a;
}

/* Dark theme tokens */
.code-dark .token-keyword {
  color: #fbbf24;
  font-weight: 800;
}
.code-dark .token-function {
  color: #4ade80;
}
.code-dark .token-string {
  color: #bef264;
}
.code-dark .token-number {
  color: #facc15;
}
.code-dark .token-comment {
  color: #64748b;
  font-style: italic;
}
.code-dark .token-operator {
  color: #2dd4bf;
}
.code-dark .token-ident {
  color: #e2e8f0;
}

/* Title gradient */
.title-gradient {
  display: inline-block;
  line-height: 1.08;
  padding-bottom: 0.12em;
  margin-bottom: -0.12em;

  color: transparent;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  background-image: linear-gradient(to right, #0f766e, #16a34a, #0284c7);
  filter: drop-shadow(0 10px 26px rgba(2, 132, 199, 0.10));
}
:global(.dark) .title-gradient {
  background-image: linear-gradient(to right, #ffffff, #4ade80, #bef264);
  filter: drop-shadow(0 0 18px rgba(74, 222, 128, 0.24));
}

/* Button glow */
:global(.hover\:shadow-glow:hover) {
  box-shadow: 0 0 80px -20px rgba(124, 58, 237, 0.45);
}
</style>
