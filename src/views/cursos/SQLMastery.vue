<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-[#050508] text-slate-800 dark:text-slate-200 transition-colors duration-300"
  >
    <!-- HERO -->
    <section class="relative pt-20 pb-12 overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[520px]
               bg-violet-500/20 dark:bg-violet-500/15 blur-[140px] rounded-full
               pointer-events-none -z-10"
      ></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <!-- <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full
                 border border-violet-500/30 bg-violet-500/10
                 text-violet-700 dark:text-violet-300
                 text-xs font-semibold tracking-wide mb-8"
        >
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          NUEVA COHORTE: ABRIL 2026
        </div> -->

        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Maestría en <br class="hidden md:block" />
          <span class="text-gradient drop-shadow-sm">SQL y Bases de Datos</span>
        </h1>

        <p
          class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Domina el lenguaje universal de los datos. Desde el diseño relacional
          y optimización de queries hasta arquitecturas complejas con
          <span class="text-slate-900 dark:text-white font-medium"
            >SQL, MySQL y Cloud DBs</span
          >.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            class="w-full sm:w-auto px-8 py-3.5 rounded-full
                   bg-gradient-to-r from-violet-600 to-indigo-600
                   hover:from-violet-500 hover:to-indigo-500
                   text-white font-semibold text-base transition
                   shadow-lg hover:shadow-glow transform hover:-translate-y-0.5
                   flex items-center justify-center gap-2"
            href="#"
          >
            Inscribirse ahora
            <span class="material-icons-round text-sm">arrow_forward</span>
          </a>

          <a
            class="w-full sm:w-auto px-8 py-3.5 rounded-full
                   border border-slate-300 dark:border-white/20
                   hover:bg-slate-100 dark:hover:bg-white/10
                   text-slate-700 dark:text-white font-medium text-base transition
                   backdrop-blur-sm"
            href="#syllabus"
          >
            Ver Syllabus
          </a>
        </div>

        <div class="border-y border-slate-200 dark:border-white/10 py-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >10</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Semanas</span
              >
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >8+</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Proyectos SQL</span
              >
            </div>
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >1:1</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Mentores Expertos</span
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
          <!-- Left -->
          <div>
            <div
              class="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider
                     text-indigo-600 dark:text-indigo-400
                     bg-indigo-100 dark:bg-indigo-500/10 rounded uppercase"
            >
              Experiencia Premium
            </div>

            <h2
              class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Dominarás el <br />
              <span class="text-gradient">lenguaje de los datos.</span>
            </h2>

            <p
              class="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed"
            >
              Nuestra metodología práctica te lleva más allá de un simple
              <span class="font-mono text-slate-900 dark:text-white"
                >SELECT *</span
              >. Aprenderás a escribir consultas eficientes, diseñar esquemas
              escalables y administrar bases de datos en entornos de producción.
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
                         flex items-center justify-center
                         text-blue-600 dark:text-blue-400 mb-4
                         group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-outlined">speed</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Optimización
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Query Plans, indexación avanzada y tuning para alto rendimiento.
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
                         flex items-center justify-center
                         text-violet-700 dark:text-violet-300 mb-4
                         group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-outlined">schema</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Modelado Relacional
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Normalización, relaciones complejas e integridad de datos.
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Code Window -->
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl blur opacity-20
                     group-hover:opacity-40 transition duration-1000"
            ></div>

            <!-- 👇 IMPORTANTE: wrapper para variables de tema -->
            <div
              class="sql-theme relative rounded-xl overflow-hidden
                     bg-white dark:bg-slate-900
                     border border-slate-200 dark:border-slate-800
                     shadow-2xl"
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
                  analysis.sql
                </div>
              </div>

              <div class="p-6 overflow-x-auto custom-scrollbar bg-white dark:bg-[#0f111a]">
                <pre class="font-mono text-sm leading-relaxed"><code>
<span class="ln">01</span><span class="token-comment">-- Calculate Customer Lifetime Value</span>
<span class="ln">02</span><span class="token-keyword">WITH</span> <span class="token-type">UserSpend</span> <span class="token-keyword">AS</span> <span class="token-punct">(</span>
<span class="ln">03</span>  <span class="token-keyword">SELECT</span>
<span class="ln">04</span>    <span class="token-ident">user_id</span><span class="token-punct">,</span>
<span class="ln">05</span>    <span class="token-function">SUM</span><span class="token-punct">(</span><span class="token-ident">amount</span><span class="token-punct">)</span> <span class="token-keyword">AS</span> <span class="token-ident">total_spent</span><span class="token-punct">,</span>
<span class="ln">06</span>    <span class="token-function">COUNT</span><span class="token-punct">(</span><span class="token-ident">order_id</span><span class="token-punct">)</span> <span class="token-keyword">AS</span> <span class="token-ident">order_count</span>
<span class="ln">07</span>  <span class="token-keyword">FROM</span> <span class="token-table">orders</span>
<span class="ln">08</span>  <span class="token-keyword">WHERE</span> <span class="token-ident">status</span> <span class="token-op">=</span> <span class="token-string">'completed'</span>
<span class="ln">09</span>  <span class="token-keyword">GROUP</span> <span class="token-keyword">BY</span> <span class="token-ident">user_id</span>
<span class="ln">10</span><span class="token-punct">)</span>
<span class="ln">11</span>
<span class="ln">12</span><span class="token-keyword">SELECT</span>
<span class="ln">13</span>  <span class="token-ident">u</span><span class="token-punct">.</span><span class="token-ident">name</span><span class="token-punct">,</span>
<span class="ln">14</span>  <span class="token-ident">u</span><span class="token-punct">.</span><span class="token-ident">email</span><span class="token-punct">,</span>
<span class="ln">15</span>  <span class="token-ident">s</span><span class="token-punct">.</span><span class="token-ident">total_spent</span><span class="token-punct">,</span>
<span class="ln">16</span>  <span class="token-keyword">CASE</span>
<span class="ln">17</span>    <span class="token-keyword">WHEN</span> <span class="token-ident">s</span><span class="token-punct">.</span><span class="token-ident">total_spent</span> <span class="token-op">&gt;</span> <span class="token-number">1000</span> <span class="token-keyword">THEN</span> <span class="token-string">'VIP'</span>
<span class="ln">18</span>    <span class="token-keyword">ELSE</span> <span class="token-string">'Standard'</span>
<span class="ln">19</span>  <span class="token-keyword">END</span> <span class="token-keyword">AS</span> <span class="token-ident">tier</span>
<span class="ln">20</span><span class="token-keyword">FROM</span> <span class="token-table">users</span> <span class="token-ident">u</span>
<span class="ln">21</span><span class="token-keyword">JOIN</span> <span class="token-type">UserSpend</span> <span class="token-ident">s</span> <span class="token-keyword">ON</span> <span class="token-ident">u</span><span class="token-punct">.</span><span class="token-ident">id</span> <span class="token-op">=</span> <span class="token-ident">s</span><span class="token-punct">.</span><span class="token-ident">user_id</span>
<span class="ln">22</span><span class="token-keyword">ORDER</span> <span class="token-keyword">BY</span> <span class="token-ident">s</span><span class="token-punct">.</span><span class="token-ident">total_spent</span> <span class="token-keyword">DESC</span><span class="token-punct">;</span>
                </code></pre>
              </div>
            </div>
            <!-- avatar eliminado -->
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
/* Scrollbar */
.custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
.dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }

/* ✅ Paleta LIGHT aplicada al wrapper (funciona con scoped) */
.sql-theme {
  --ln: #94a3b8;
  --comment: #64748b;

  --kw: #7c3aed;        /* violet */
  --fn: #2563eb;        /* blue */
  --type: #0ea5e9;      /* sky */
  --table: #0f766e;     /* teal */

  --ident: #0f172a;     /* slate-900 */
  --str: #16a34a;       /* green */
  --num: #d97706;       /* amber */

  --op: #334155;        /* slate-700 */
  --punct: #64748b;     /* slate-500 */
}

/* ✅ Paleta DARK al wrapper */
.dark .sql-theme {
  --ln: #64748b;
  --comment: #7c8798;

  --kw: #c084fc;        /* violet */
  --fn: #60a5fa;        /* blue */
  --type: #38bdf8;      /* sky */
  --table: #34d399;     /* emerald */

  --ident: #e5e7eb;     /* zinc-200 */
  --str: #4ade80;       /* green */
  --num: #fbbf24;       /* amber */

  --op: #cbd5e1;
  --punct: #94a3b8;
}

/* Line numbers */
.ln {
  color: var(--ln);
  display: inline-block;
  width: 2.2rem;
  user-select: none;
  margin-right: 0.75rem;
  text-align: right;
}

/* Tokens */
.token-comment { color: var(--comment); font-style: italic; }
.token-keyword { color: var(--kw); font-weight: 800; letter-spacing: 0.2px; }
.token-function { color: var(--fn); font-weight: 700; }
.token-type { color: var(--type); font-weight: 700; }
.token-table { color: var(--table); font-weight: 700; }
.token-ident { color: var(--ident); }
.token-string { color: var(--str); }
.token-number { color: var(--num); font-weight: 700; }
.token-op { color: var(--op); font-weight: 800; }
.token-punct { color: var(--punct); }

/* Gradient title */
.text-gradient {
  background: linear-gradient(to right, #a78bfa, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
