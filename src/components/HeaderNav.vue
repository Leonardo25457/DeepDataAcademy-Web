<!-- src/components/HeaderNav.vue -->
<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/70 backdrop-blur-md"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="h-20 flex items-center justify-between">
        <!-- Brand -->
        <RouterLink to="/" class="flex items-center gap-2">
          <div
            class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-extrabold flex items-center justify-center shadow-lg shadow-indigo-500/20"
          >
            D
          </div>
          <div class="text-xl font-extrabold tracking-tight">
            DeepData
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">Academy</span>
          </div>
        </RouterLink>

        <!-- Links -->
        <div class="hidden md:flex items-center gap-8">
          <!-- ✅ Dropdown mejorado -->
          <div class="relative group">
            <button
              class="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 rounded"
              aria-haspopup="true"
            >
              Cursos y Programas
              <span class="material-icons-round text-sm">expand_more</span>
            </button>

            <!-- ✅ Puente invisible para que NO se cierre al cruzar el gap -->
            <div
              class="absolute left-0 top-full h-4 w-[600px] hidden group-hover:block group-focus-within:block"
              aria-hidden="true"
            ></div>

            <!-- Panel -->
            <div
              class="absolute left-0 top-full mt-2 w-[600px] hidden
                     group-hover:block group-focus-within:block"
            >
              <div
                class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl grid grid-cols-3 gap-6"
              >
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-4">Especializaciones</h4>
                  <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">Desarrollo de Software</li>
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">Cloud Computing</li>
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">Data Engineering</li>
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">Ciberseguridad</li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-4">Cursos</h4>
                  <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">Python Pro</li>
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">Azure</li>
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">IA Generativa</li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-4">Gratuitos</h4>
                  <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">Intro a SQL</li>
                    <li class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer">Git &amp; GitHub</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <RouterLink to="/webinars" class="font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">
            Webinars
          </RouterLink>
          <RouterLink to="/ebooks" class="font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">
            Ebooks
          </RouterLink>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <button
            class="p-2 rounded-full text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            @click="toggleTheme"
            aria-label="Cambiar tema"
            :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          >
            <span class="material-icons-round">
              {{ isDark ? "light_mode" : "dark_mode" }}
            </span>
          </button>

          <RouterLink
            to="/cursos"
            class="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-500 hover:to-indigo-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Acceder
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useTheme } from "../composables/useTheme";
const { isDark, toggleTheme } = useTheme();
</script>
