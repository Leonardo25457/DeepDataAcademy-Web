<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-[#050508] text-slate-800 dark:text-slate-200 transition-colors duration-300"
  >
    <!-- HERO -->
    <section class="relative pt-20 pb-12 overflow-hidden">
      <!-- Glow -->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/20 dark:bg-sky-500/15 blur-[120px] rounded-full pointer-events-none -z-10"
      ></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <!-- Title -->
        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Certificación <br class="hidden md:block" />
          <span class="text-gradient drop-shadow-sm">Azure Fundamentals</span>
        </h1>

        <!-- Subtitle -->
        <p
          class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Comienza tu viaje en la nube. Domina conceptos clave, servicios
          principales, seguridad, privacidad y soporte de Microsoft Azure para
          aprobar el examen
          <span class="text-slate-900 dark:text-white font-medium">AZ-900</span>
          con confianza.
        </p>

        <!-- CTAs -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-base transition shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Inscribirse ahora
            <span class="material-icons-round text-sm">arrow_forward</span>
          </a>

          <a
            href="#syllabus"
            class="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-white font-medium text-base transition backdrop-blur-sm"
          >
            Ver Syllabus
          </a>
        </div>

        <!-- Stats -->
        <div class="border-y border-slate-200 dark:border-white/10 py-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >8</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
              >
                Semanas
              </span>
            </div>

            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >100%</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
              >
                Labs Prácticos
              </span>
            </div>

            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >5+</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
              >
                Simulacros AZ-900
              </span>
            </div>

            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >AZ-900</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
              >
                Certificación
              </span>
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
              class="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-500/10 rounded uppercase"
            >
              Fundamentos Cloud
            </div>

            <h2
              class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Domina el futuro con la <br />
              <span class="text-gradient">nube de Microsoft.</span>
            </h2>

            <p
              class="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed"
            >
              No solo te preparamos para un examen. Entenderás la arquitectura
              global de Azure, los modelos de servicio (IaaS, PaaS, SaaS) y cómo
              las empresas modernas escalan de manera segura y eficiente en una
              red global.
            </p>

            <div class="grid sm:grid-cols-2 gap-4">
              <div
                class="p-5 rounded-xl bg-white dark:bg-[#0f1016] border border-slate-200 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition group"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-500/20 flex items-center justify-center text-sky-700 dark:text-sky-400 mb-4 group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-round">security</span>
                </div>
                <h3
                  class="text-lg font-bold text-slate-900 dark:text-white mb-2"
                >
                  Seguridad Cloud
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Identidad (Entra ID), gobernanza, cumplimiento y defensa en
                  profundidad.
                </p>
              </div>

              <div
                class="p-5 rounded-xl bg-white dark:bg-[#0f1016] border border-slate-200 dark:border-white/10 hover:border-sky-500/50 dark:hover:border-sky-500/50 transition group"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-700 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-round">public</span>
                </div>
                <h3
                  class="text-lg font-bold text-slate-900 dark:text-white mb-2"
                >
                  Arquitectura Global
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Regiones, Zonas de disponibilidad y alta disponibilidad en
                  escala.
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Azure Portal Mock -->
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
            ></div>

            <div
              class="relative rounded-xl overflow-hidden shadow-2xl h-[420px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
            >
              <!-- Top Bar -->
              <div
                class="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-white/5 backdrop-blur-sm"
              >
                <div class="flex items-center gap-3">
                  <div class="w-4 h-4 text-sky-600 dark:text-sky-500">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"
                      />
                    </svg>
                  </div>
                  <span
                    class="text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Azure Portal
                  </span>
                  <span class="text-xs text-slate-300 dark:text-slate-600"
                    >/</span
                  >
                  <span class="text-xs text-slate-500 dark:text-slate-400"
                    >Dashboard</span
                  >
                </div>

                <div class="flex gap-2">
                  <div
                    class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"
                  ></div>
                  <div
                    class="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"
                  ></div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6 relative h-full portal-bg flex gap-6">
                <!-- Left Nav -->
                <div
                  class="w-10 flex flex-col gap-4 border-r border-slate-200 dark:border-white/5 pr-4 items-center pt-2"
                >
                  <div class="w-6 h-6 rounded nav-item">
                    <span class="material-icons-round text-sm">grid_view</span>
                  </div>
                  <div class="w-6 h-6 rounded nav-item nav-active">
                    <span class="material-icons-round text-sm">dns</span>
                  </div>
                  <div class="w-6 h-6 rounded nav-item">
                    <span class="material-icons-round text-sm"
                      >monitor_heart</span
                    >
                  </div>
                  <div class="w-6 h-6 rounded nav-item">
                    <span class="material-icons-round text-sm">lock</span>
                  </div>
                </div>

                <!-- Cards -->
                <div class="flex-1 relative">
                  <div
                    class="text-xs mb-4 uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-500"
                  >
                    Active Resources
                  </div>

                  <div class="grid grid-cols-2 gap-4 relative z-10">
                    <!-- Card 1 -->
                    <div
                      class="glass-panel p-3 rounded-lg flex items-start gap-3 relative overflow-hidden group/card"
                    >
                      <div class="hover-sheen"></div>
                      <div
                        class="w-8 h-8 rounded bg-blue-500/15 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0"
                      >
                        <span class="material-icons-round text-sm"
                          >storage</span
                        >
                      </div>
                      <div>
                        <div
                          class="text-xs font-medium text-slate-800 dark:text-slate-200"
                        >
                          SQL Database
                        </div>
                        <div
                          class="text-[10px] text-green-600 dark:text-green-400 flex items-center gap-1 mt-1"
                        >
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-green-500"
                          ></span>
                          Online
                        </div>
                        <div
                          class="text-[10px] text-slate-500 dark:text-slate-500 mt-1"
                        >
                          East US 2
                        </div>
                      </div>
                    </div>

                    <!-- Card 2 -->
                    <div
                      class="glass-panel p-3 rounded-lg flex items-start gap-3 relative overflow-hidden group/card"
                    >
                      <div class="hover-sheen"></div>
                      <div
                        class="w-8 h-8 rounded bg-purple-500/15 dark:bg-purple-500/20 flex items-center justify-center text-purple-700 dark:text-purple-400 flex-shrink-0"
                      >
                        <span class="material-icons-round text-sm"
                          >computer</span
                        >
                      </div>
                      <div>
                        <div
                          class="text-xs font-medium text-slate-800 dark:text-slate-200"
                        >
                          Virtual Machine
                        </div>
                        <div
                          class="text-[10px] text-green-600 dark:text-green-400 flex items-center gap-1 mt-1"
                        >
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-green-500"
                          ></span>
                          Running
                        </div>
                        <div
                          class="text-[10px] text-slate-500 dark:text-slate-500 mt-1"
                        >
                          West Europe
                        </div>
                      </div>
                    </div>

                    <!-- Card 3 -->
                    <div
                      class="glass-panel p-3 rounded-lg flex items-start gap-3 relative overflow-hidden group/card col-span-2"
                    >
                      <div class="hover-sheen"></div>
                      <div
                        class="w-8 h-8 rounded bg-orange-500/15 dark:bg-orange-500/20 flex items-center justify-center text-orange-700 dark:text-orange-400 flex-shrink-0"
                      >
                        <span class="material-icons-round text-sm"
                          >cloud_queue</span
                        >
                      </div>

                      <div class="flex-1">
                        <div class="flex justify-between items-start">
                          <div
                            class="text-xs font-medium text-slate-800 dark:text-slate-200"
                          >
                            App Service Plan
                          </div>
                          <div
                            class="text-[10px] text-slate-500 dark:text-slate-400"
                          >
                            85% Load
                          </div>
                        </div>

                        <div
                          class="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden"
                        >
                          <div
                            class="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full w-[85%]"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Connections overlay -->
                  <div
                    class="absolute inset-0 pointer-events-none opacity-35 dark:opacity-20 z-0"
                  >
                    <svg
                      class="w-full h-full text-sky-500"
                      style="animation: pulseLine 4s ease-in-out infinite"
                    >
                      <line
                        stroke="currentColor"
                        stroke-width="1"
                        x1="10%"
                        x2="90%"
                        y1="20%"
                        y2="80%"
                      ></line>
                      <line
                        stroke="currentColor"
                        stroke-width="1"
                        x1="90%"
                        x2="10%"
                        y1="20%"
                        y2="80%"
                      ></line>
                      <circle
                        cx="10%"
                        cy="20%"
                        fill="currentColor"
                        r="2"
                      ></circle>
                      <circle
                        cx="90%"
                        cy="80%"
                        fill="currentColor"
                        r="2"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer
      class="bg-slate-100 dark:bg-black pt-16 pb-8 border-t border-slate-200 dark:border-white/10"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <div
                class="w-6 h-6 rounded bg-sky-500 flex items-center justify-center text-white font-bold text-xs"
              >
                D
              </div>
              <span class="font-bold text-base text-slate-900 dark:text-white"
                >DeepData</span
              >
            </div>

            <p class="text-sm text-slate-500 dark:text-slate-400">
              Formando la próxima generación de ingenieros de datos y
              desarrolladores de élite con metodología 100% práctica.
            </p>

            <div class="flex gap-4">
              <a
                href="#"
                class="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white hover:bg-sky-500 hover:text-white transition"
              >
                <span class="material-icons-round text-sm"
                  >alternate_email</span
                >
              </a>

              <a
                href="#"
                class="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-white hover:bg-sky-500 hover:text-white transition"
              >
                <span class="material-icons-round text-sm">work</span>
              </a>
            </div>
          </div>

          <div>
            <h4
              class="text-xs font-bold uppercase text-slate-900 dark:text-white tracking-wider mb-6"
            >
              Programas
            </h4>
            <ul class="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a
                  class="hover:text-sky-600 dark:hover:text-sky-400 transition"
                  href="#"
                  >Data Engineer</a
                >
              </li>
              <li>
                <a
                  class="inline-block px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white text-xs font-medium"
                  href="#"
                >
                  Azure Cloud
                </a>
              </li>
              <li>
                <a
                  class="hover:text-sky-600 dark:hover:text-sky-400 transition"
                  href="#"
                  >Frontend Developer</a
                >
              </li>
              <li>
                <a
                  class="hover:text-sky-600 dark:hover:text-sky-400 transition"
                  href="#"
                  >SQL Mastery</a
                >
              </li>
              <li>
                <a
                  class="hover:text-sky-600 dark:hover:text-sky-400 transition"
                  href="#"
                  >Ciberseguridad</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4
              class="text-xs font-bold uppercase text-slate-900 dark:text-white tracking-wider mb-6"
            >
              Compañía
            </h4>
            <ul class="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a
                  class="hover:text-sky-600 dark:hover:text-sky-400 transition"
                  href="#"
                  >Sobre nosotros</a
                >
              </li>
              <li>
                <a
                  class="hover:text-sky-600 dark:hover:text-sky-400 transition"
                  href="#"
                  >Webinars</a
                >
              </li>
              <li>
                <a
                  class="hover:text-sky-600 dark:hover:text-sky-400 transition"
                  href="#"
                  >Bolsa de trabajo</a
                >
              </li>
              <li>
                <a
                  class="hover:text-sky-600 dark:hover:text-sky-400 transition"
                  href="#"
                  >Blog</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h4
              class="text-xs font-bold uppercase text-slate-900 dark:text-white tracking-wider mb-6"
            >
              Newsletter
            </h4>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Recibe las últimas noticias y ofertas exclusivas directamente.
            </p>

            <form class="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo"
                class="flex-1 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 placeholder-slate-400"
              />
              <button
                type="submit"
                class="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition"
              >
                <span class="material-icons-round text-lg">send</span>
              </button>
            </form>
          </div>
        </div>

        <div
          class="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-xs text-slate-500 dark:text-slate-500">
            © 2026 DeepData Academy. Todos los derechos reservados.
          </p>
          <div class="flex gap-6">
            <a
              class="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
              href="#"
            >
              Privacidad
            </a>
            <a
              class="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
              href="#"
            >
              Términos
            </a>
            <a
              class="text-xs text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
              href="#"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "../../composables/useTheme";
useTheme(); // usa tu gestión global (clase .dark en <html>)
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(to right, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Portal background light/dark */
.portal-bg {
  background: #ffffff;
}
.dark .portal-bg {
  background: #0f111a;
}

/* Glass panel adaptativo */
.glass-panel {
  position: relative;
  background: rgba(248, 250, 252, 0.75);
  border: 1px solid rgba(2, 132, 199, 0.12);
  backdrop-filter: blur(12px);
  transition:
    background 200ms ease,
    border-color 200ms ease;
}
.dark .glass-panel {
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(56, 189, 248, 0.12);
}

/* Sheen hover */
.hover-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(14, 165, 233, 0.08), transparent);
  transform: translateY(100%);
  transition: transform 450ms ease;
  pointer-events: none;
}
.group\/card:hover .hover-sheen {
  transform: translateY(0%);
}

/* Nav icons in mock */
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.04);
  color: #64748b;
}
.dark .nav-item {
  background: rgba(255, 255, 255, 0.06);
  color: #94a3b8;
}
.nav-active {
  background: rgba(14, 165, 233, 0.16);
  color: #0284c7;
}
.dark .nav-active {
  background: rgba(14, 165, 233, 0.18);
  color: #38bdf8;
}

@keyframes pulseLine {
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 0.75;
  }
}
</style>
