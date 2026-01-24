<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-[#050508] text-slate-800 dark:text-slate-200 transition-colors duration-300"
  >
    

    <!-- HERO -->
    <section class="relative pt-20 pb-12 overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10"
      ></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        

        <h1
          class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
        >
          Administración de <br class="hidden md:block" />
          <span class="text-gradient drop-shadow-sm">Sistemas Linux</span>
        </h1>

        <p
          class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Domina la infraestructura del mundo real. Desde la línea de comandos
          hasta la orquestación de contenedores, conviértete en el
          <span class="text-slate-900 dark:text-white font-medium">SysAdmin</span>
          que las empresas tecnológicas necesitan.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold text-base transition shadow-lg hover:shadow-glow transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            href="#"
          >
            Inscribirse ahora
            <span class="material-icons-outlined text-sm">arrow_forward</span>
          </a>

          <a
            class="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-white font-medium text-base transition backdrop-blur-sm"
            href="#"
          >
            Ver Syllabus
          </a>
        </div>

        <div class="border-y border-slate-200 dark:border-white/10 py-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >8</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Semanas</span
              >
            </div>

            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >50+</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Laboratorios Cloud</span
              >
            </div>

            <div class="flex flex-col items-center">
              <span class="text-3xl font-bold text-slate-900 dark:text-white"
                >Pro</span
              >
              <span
                class="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 mt-1"
                >Terminal</span
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
    <section class="py-20 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left -->
          <div>
            <div
              class="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 rounded uppercase"
            >
              Fundamentos DevOps
            </div>

            <h2
              class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Domina el núcleo de la <br />
              <span class="text-gradient">infraestructura moderna</span>
            </h2>

            <p
              class="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed"
            >
              Linux es el sistema operativo que mueve Internet. Aprenderás a
              gestionar servidores, configurar redes, securizar entornos y
              automatizar flujos de trabajo con la potencia de Bash y
              herramientas nativas.
            </p>

            <div class="grid sm:grid-cols-2 gap-4">
              <div
                class="p-5 rounded-xl bg-white dark:bg-[#0f1016] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition group"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-outlined"
                    >admin_panel_settings</span
                  >
                </div>
                <h3
                  class="text-lg font-bold text-slate-900 dark:text-white mb-2"
                >
                  Seguridad de Sistemas
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Gestión de usuarios, permisos (chmod/chown), configuración de
                  firewall (UFW/iptables) y SSH.
                </p>
              </div>

              <div
                class="p-5 rounded-xl bg-white dark:bg-[#0f1016] border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition group"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform"
                >
                  <span class="material-icons-outlined">terminal</span>
                </div>
                <h3
                  class="text-lg font-bold text-slate-900 dark:text-white mb-2"
                >
                  Automatización Bash
                </h3>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Scripting avanzado, tuberías (pipes), cron jobs y manipulación
                  de texto con grep/sed/awk.
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Terminal -->
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"
            ></div>

            <div
              class="relative rounded-xl overflow-hidden bg-black border border-slate-800 shadow-2xl"
            >
              <div
                class="flex items-center gap-2 px-4 py-3 bg-[#1e1e1e] border-b border-white/5"
              >
                <div class="flex gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div class="ml-4 text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span class="material-icons-outlined text-xs">home</span>
                  student@deepdata-srv: ~
                </div>
              </div>

              <div
                class="p-6 overflow-x-auto custom-scrollbar bg-black font-mono text-sm leading-relaxed min-h-[320px]"
              >
                <!-- cmd 1 -->
                <div class="mb-4">
                  <div class="flex items-center gap-2 text-slate-300">
                    <span class="text-green-400 font-bold">student@deepdata-srv</span
                    >:<span class="text-blue-400 font-bold">~</span
                    >$ <span class="cmd" v-text="dockerCmd"></span>
                  </div>

                  <div class="text-slate-400 mt-1">
                    CONTAINER ID&nbsp;&nbsp;&nbsp;IMAGE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS<br />
                    a1b2c3d4e5f6&nbsp;&nbsp;&nbsp;nginx:latest&nbsp;&nbsp;&nbsp;Up 2 hours<br />
                    f9e8d7c6b5a4&nbsp;&nbsp;&nbsp;postgres:14&nbsp;&nbsp;&nbsp;&nbsp;Up 2 hours
                  </div>
                </div>

                <!-- cmd 2 -->
                <div class="mb-4">
                  <div class="flex items-center gap-2 text-slate-300">
                    <span class="text-green-400 font-bold">student@deepdata-srv</span
                    >:<span class="text-blue-400 font-bold">~</span
                    >$ <span class="cmd">grep -r "ERROR" /var/log/syslog | tail -n 2</span>
                  </div>

                  <div class="text-slate-400 mt-1">
                    Oct 12 10:00:01 srv kernel: [123.456] EXT4-fs (sda1): ERROR reading block 512<br />
                    Oct 12 10:00:05 srv sshd[1234]: error: PAM: Authentication failure
                  </div>
                </div>

                <!-- cmd 3 -->
                <div class="mb-4">
                  <div class="flex items-center gap-2 text-slate-300">
                    <span class="text-green-400 font-bold">student@deepdata-srv</span
                    >:<span class="text-blue-400 font-bold">~</span
                    >$ <span class="cmd">./deploy.sh --env=prod</span>
                  </div>

                  <div class="text-slate-400 mt-1">
                    <span class="text-blue-400">[INFO]</span> Starting deployment sequence...<br />
                    <span class="text-blue-400">[INFO]</span> Pulling latest changes from git...<br />
                    <span class="text-green-400">[SUCCESS]</span> Build completed in 2.4s<br />
                    <span class="text-blue-400">[INFO]</span> Restarting services...
                  </div>
                </div>

                <!-- prompt -->
                <div class="flex items-center gap-2 text-slate-300">
                  <span class="text-green-400 font-bold">student@deepdata-srv</span
                  >:<span class="text-blue-400 font-bold">~</span
                  >$ <span class="inline-block w-2.5 h-5 bg-slate-400 cursor-blink"></span>
                </div>
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

// Evita conflicto con Vue: {{.ID}} etc (Go template de Docker)
const dockerCmd =
  'docker ps --format "table {{.ID}}\\t{{.Image}}\\t{{.Status}}"';
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
  background: #334155;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

.text-gradient {
  background: linear-gradient(to right, #60a5fa, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

/* leve glow on hover */
.hover\:shadow-glow:hover {
  box-shadow: 0 0 80px -20px rgba(59, 130, 246, 0.5);
}

/* Terminal cmd text */
.cmd {
  color: #ffffff;
}
</style>
