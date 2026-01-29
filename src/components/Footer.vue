<!-- src/components/Footer.vue -->
<template>
  <footer
    class="relative overflow-hidden pt-24 pb-12 bg-slate-50 text-slate-700 dark:bg-slate-950 dark:text-slate-300"
  >
    <!-- Top gradient line -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- ✅ 3 columnas balanceadas -->
      <div class="grid gap-12 mb-16 lg:grid-cols-3">
        <!-- Brand -->
        <div>

          <div class="mb-4">
            <RouterLink to="/" class="flex items-center gap-3">
              <!-- Logo -->
              <img
                src="/img/Icon_academy.png"
                alt="StackLab Academy"
                class="h-10 w-10 rounded-xl object-contain shadow-lg shadow-indigo-500/20"
                draggable="false"
              />

              <!-- Texto -->
              <div class="text-xl font-extrabold tracking-tight leading-none">
                <span class="text-slate-900 dark:text-white">StackLab</span>
                <span
                  class="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500"
                >
                  Academy
                </span>
              </div>
            </RouterLink>
          </div>

          <p
            class="text-sm mb-6 leading-relaxed text-slate-600 dark:text-slate-500"
          >
            Formando la próxima generación de ingenieros de datos y
            desarrolladores de élite con metodología 100% práctica.
          </p>

          <div class="flex gap-4">
            <!-- Facebook -->
            <a
              class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white border border-slate-200 text-slate-500 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
              href="#"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>

            <!-- LinkedIn -->
            <a
              class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white border border-slate-200 text-slate-500 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
              href="#"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>

            <!-- YouTube -->
            <a
              class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white border border-slate-200 text-slate-500 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
              href="#"
              aria-label="YouTube"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Programs -->
        <div>
          <h4 class="font-bold mb-6 text-slate-900 dark:text-white">
            Programas
          </h4>
          <ul class="space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <RouterLink
                class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                to="/cursos/PythonDataScience"
              >
                PythonDataScience
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                to="/cursos/FrontendMastery"
              >
                Desarrollo Web
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                to="/cursos/SQLMastery"
              >
                SQL Mastery
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                to="/cursos/AzureFundamentals"
              >
                Azure Fundamentals
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                to="/cursos/LinuxAdmin"
              >
                Linux Administration
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-bold mb-6 text-slate-900 dark:text-white">
            Compañía
          </h4>
          <ul class="space-y-4 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <!-- <a class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" href="#">
                Sobre nosotros
              </a> -->
              <RouterLink
                class="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                to="/nosotros"
              >
                Sobre Nosotros
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-slate-200 text-slate-500 dark:border-slate-900 dark:text-slate-600"
      >
        <p>© {{ year }} DeepData Academy. Todos los derechos reservados.</p>

        <div class="flex gap-6">
          <a
            class="hover:text-slate-900 dark:hover:text-white transition-colors"
            href="#"
            >Privacidad</a
          >
          <a
            class="hover:text-slate-900 dark:hover:text-white transition-colors"
            href="#"
            >Términos</a
          >
          <a
            class="hover:text-slate-900 dark:hover:text-white transition-colors"
            href="#"
            >Cookies</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
