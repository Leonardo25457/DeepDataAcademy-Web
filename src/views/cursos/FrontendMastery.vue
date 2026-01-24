<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-[#050508] text-slate-800 dark:text-slate-200 transition-colors duration-300"
  >
    <!-- HERO -->
    <section class="relative pt-20 pb-12 overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]
               bg-violet-500/20 dark:bg-violet-500/15 blur-[120px] rounded-full
               pointer-events-none -z-10"
      ></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        

        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Maestría en <br class="hidden md:block" />
          <span class="text-gradient drop-shadow-sm">Desarrollo Web Frontend</span>
        </h1>

        <p
          class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construye interfaces asombrosas y aplicaciones web de alto rendimiento.
          Domina el stack moderno con
          <span class="text-slate-900 dark:text-white font-medium"
            >Vue 3, TypeScript y Tailwind CSS</span
          >.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full
                   bg-gradient-to-r from-violet-600 to-indigo-600
                   hover:from-violet-500 hover:to-indigo-500
                   text-white font-semibold text-base transition
                   shadow-lg shadow-violet-600/25 hover:shadow-violet-600/35
                   transform hover:-translate-y-0.5
                   flex items-center justify-center gap-2"
          >
            Inscribirse ahora
            <span class="material-icons-round text-sm">arrow_forward</span>
          </a>

          <a
            href="#syllabus"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full
                   border border-slate-300 dark:border-white/20
                   hover:bg-slate-100 dark:hover:bg-white/10
                   text-slate-700 dark:text-white font-medium text-base transition
                   backdrop-blur-sm"
          >
            Ver Syllabus
          </a>
        </div>

        <div class="border-y border-slate-200 dark:border-white/10 py-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >12</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Semanas</span
              >
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >10+</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Proyectos Reales</span
              >
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >1:1</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Mentoría</span
              >
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >100%</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Certificación</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="syllabus" class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              class="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider
                     text-indigo-600 dark:text-indigo-400
                     bg-indigo-100 dark:bg-indigo-500/10 rounded uppercase"
            >
              Experiencia de Usuario Superior
            </div>

            <h2
              class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Construye el <br />
              <span class="text-gradient">futuro de la web.</span>
            </h2>

            <p
              class="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed"
            >
              Metodología enfocada en proyectos para dominar herramientas reales
              de la industria. Aprenderás a crear componentes reutilizables,
              gestionar estados complejos y optimizar el rendimiento para una UX
              premium.
            </p>

            <div class="grid sm:grid-cols-2 gap-4">
              <div
                class="p-5 rounded-xl bg-white dark:bg-[#0f1016]
                       border border-slate-200 dark:border-white/10
                       hover:border-violet-500/50 dark:hover:border-violet-500/50
                       transition group"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20
                         flex items-center justify-center text-blue-600 dark:text-blue-400
                         mb-4 group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-round">widgets</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Componentes Modernos
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Composition API, slots, emit y patrones para componentes
                  reutilizables.
                </p>
              </div>

              <div
                class="p-5 rounded-xl bg-white dark:bg-[#0f1016]
                       border border-slate-200 dark:border-white/10
                       hover:border-violet-500/50 dark:hover:border-violet-500/50
                       transition group"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-500/20
                         flex items-center justify-center text-violet-700 dark:text-violet-300
                         mb-4 group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-round">architecture</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Arquitectura Escalable
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Rutas, layouts, stores y buenas prácticas para apps grandes.
                </p>
              </div>
            </div>
          </div>

          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-20
                     group-hover:opacity-40 transition duration-1000"
            ></div>

            <div
              class="code-theme relative rounded-xl overflow-hidden
                     bg-white dark:bg-slate-900
                     border border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              <div
                class="flex items-center gap-2 px-4 py-3
                       bg-slate-50 dark:bg-slate-800/50
                       border-b border-slate-200 dark:border-white/5"
              >
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="ml-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                  FeatureCard.vue
                </div>
              </div>

              <div class="p-6 overflow-x-auto custom-scrollbar bg-white dark:bg-[#0f111a]">
                <pre class="font-mono text-sm leading-relaxed"><code>
<span class="ln">01</span><span class="token-tag">&lt;</span><span class="token-tag">script</span> <span class="token-attr">setup</span> <span class="token-attr">lang</span><span class="token-op">=</span><span class="token-string">"ts"</span><span class="token-tag">&gt;</span>
<span class="ln">02</span><span class="token-keyword">import</span> <span class="token-punct">{</span> <span class="token-function">computed</span> <span class="token-punct">}</span> <span class="token-keyword">from</span> <span class="token-string">'vue'</span><span class="token-punct">;</span>
<span class="ln">03</span>
<span class="ln">04</span><span class="token-keyword">type</span> <span class="token-type">Props</span> <span class="token-op">=</span> <span class="token-punct">{</span>
<span class="ln">05</span>  <span class="token-ident">title</span><span class="token-punct">:</span> <span class="token-type">string</span><span class="token-punct">;</span>
<span class="ln">06</span>  <span class="token-ident">desc</span><span class="token-punct">:</span> <span class="token-type">string</span><span class="token-punct">;</span>
<span class="ln">07</span>  <span class="token-ident">variant</span><span class="token-punct">?:</span> <span class="token-type">'primary'</span> <span class="token-op">|</span> <span class="token-type">'ghost'</span><span class="token-punct">;</span>
<span class="ln">08</span><span class="token-punct">}</span><span class="token-punct">;</span>
<span class="ln">09</span>
<span class="ln">10</span><span class="token-keyword">const</span> <span class="token-ident">props</span> <span class="token-op">=</span> <span class="token-function">defineProps</span><span class="token-punct">&lt;</span><span class="token-type">Props</span><span class="token-punct">&gt;</span><span class="token-punct">()</span><span class="token-punct">;</span>
<span class="ln">11</span>
<span class="ln">12</span><span class="token-keyword">const</span> <span class="token-ident">classes</span> <span class="token-op">=</span> <span class="token-function">computed</span><span class="token-punct">(</span><span class="token-punct">()</span> <span class="token-op">=&gt;</span> <span class="token-punct">{</span>
<span class="ln">13</span>  <span class="token-keyword">return</span> <span class="token-punct">[</span>
<span class="ln">14</span>    <span class="token-string">'p-6 rounded-xl border transition'</span><span class="token-punct">,</span>
<span class="ln">15</span>    <span class="token-ident">props</span><span class="token-punct">.</span><span class="token-ident">variant</span> <span class="token-op">===</span> <span class="token-string">'primary'</span>
<span class="ln">16</span>      <span class="token-op">?</span> <span class="token-string">'bg-slate-900 text-white border-white/10'</span>
<span class="ln">17</span>      <span class="token-op">:</span> <span class="token-string">'bg-white text-slate-900 border-slate-200'</span><span class="token-punct">,</span>
<span class="ln">18</span>  <span class="token-punct">]</span><span class="token-punct">;</span>
<span class="ln">19</span><span class="token-punct">}</span><span class="token-punct">)</span><span class="token-punct">;</span>
<span class="ln">20</span><span class="token-tag">&lt;/</span><span class="token-tag">script</span><span class="token-tag">&gt;</span>
<span class="ln">21</span>
<span class="ln">22</span><span class="token-tag">&lt;</span><span class="token-tag">template</span><span class="token-tag">&gt;</span>
<span class="ln">23</span>  <span class="token-tag">&lt;</span><span class="token-tag">div</span> <span class="token-attr">:class</span><span class="token-op">=</span><span class="token-string">"classes"</span><span class="token-tag">&gt;</span>
<span class="ln">24</span>    <span class="token-tag">&lt;</span><span class="token-tag">h3</span> <span class="token-attr">class</span><span class="token-op">=</span><span class="token-string">"text-xl font-bold"</span><span class="token-tag">&gt;</span><span class="token-punct">&#123;&#123;</span> <span class="token-ident">title</span> <span class="token-punct">&#125;&#125;</span><span class="token-tag">&lt;/</span><span class="token-tag">h3</span><span class="token-tag">&gt;</span>
<span class="ln">25</span>    <span class="token-tag">&lt;</span><span class="token-tag">p</span> <span class="token-attr">class</span><span class="token-op">=</span><span class="token-string">"mt-2 text-slate-500 dark:text-slate-300"</span><span class="token-tag">&gt;</span>
<span class="ln">26</span>      <span v-pre class="token-punct">{{</span> <span class="token-ident">desc</span> <span v-pre class="token-punct">}}</span>
<span class="ln">27</span>    <span class="token-tag">&lt;/</span><span class="token-tag">p</span><span class="token-tag">&gt;</span>
<span class="ln">28</span>  <span class="token-tag">&lt;/</span><span class="token-tag">div</span><span class="token-tag">&gt;</span>
<span class="ln">29</span><span class="token-tag">&lt;/</span><span class="token-tag">template</span><span class="token-tag">&gt;</span>
                </code></pre>
              </div>
            </div>
          </div>
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
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

.code-theme {
  --ln: #94a3b8;
  --comment: #64748b;

  --kw: #7c3aed;
  --fn: #2563eb;
  --type: #0ea5e9;
  --ident: #0f172a;

  --tag: #db2777;
  --attr: #0284c7;

  --str: #16a34a;
  --num: #d97706;

  --op: #334155;
  --punct: #64748b;
}

.dark .code-theme {
  --ln: #64748b;
  --comment: #7c8798;

  --kw: #c084fc;
  --fn: #60a5fa;
  --type: #38bdf8;
  --ident: #e5e7eb;

  --tag: #f472b6;
  --attr: #38bdf8;

  --str: #4ade80;
  --num: #fbbf24;

  --op: #cbd5e1;
  --punct: #94a3b8;
}

.ln {
  color: var(--ln);
  display: inline-block;
  width: 2.2rem;
  user-select: none;
  margin-right: 0.75rem;
  text-align: right;
}

.token-comment {
  color: var(--comment);
  font-style: italic;
}
.token-keyword {
  color: var(--kw);
  font-weight: 800;
}
.token-function {
  color: var(--fn);
  font-weight: 700;
}
.token-type {
  color: var(--type);
  font-weight: 700;
}
.token-ident {
  color: var(--ident);
}

.token-tag {
  color: var(--tag);
  font-weight: 700;
}
.token-attr {
  color: var(--attr);
  font-weight: 700;
}

.token-string {
  color: var(--str);
}
.token-number {
  color: var(--num);
  font-weight: 700;
}

.token-op {
  color: var(--op);
  font-weight: 800;
}
.token-punct {
  color: var(--punct);
}

.text-gradient {
  background: linear-gradient(to right, #a78bfa, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
