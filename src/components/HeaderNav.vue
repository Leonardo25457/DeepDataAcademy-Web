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
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500"
              >Academy</span
            >
          </div>
        </RouterLink>

        <!-- Links (Desktop) -->
        <div class="hidden md:flex items-center gap-8">
          <div class="relative group">
            <button
              class="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 rounded"
              aria-haspopup="true"
            >
              Cursos y Programas
              <span class="material-icons-round text-sm">expand_more</span>
            </button>

            <div
              class="absolute left-0 top-full h-4 w-[600px] hidden group-hover:block group-focus-within:block"
              aria-hidden="true"
            ></div>

            <!-- Panel -->
            <div
              class="absolute left-0 top-full mt-2 w-[600px] hidden group-hover:block group-focus-within:block"
            >
              <div
                class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-2xl grid grid-cols-3 gap-6"
              >
                <div>
                  <h4
                    class="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-4"
                  >
                    Especializaciones
                  </h4>
                  <ul
                    class="space-y-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <li>
                      <RouterLink
                        to="/cursos/PythonDataScience"
                        class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        Python Data Science
                      </RouterLink>
                    </li>

                    <li>
                      <RouterLink
                        to="/cursos/FrontendMastery"
                        class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        Desarrollo Web
                      </RouterLink>
                    </li>

                    <li>
                      <RouterLink
                        to="/cursos/SQLMastery"
                        class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        SQL Mastery
                      </RouterLink>
                    </li>

                    <li>
                      <RouterLink
                        to="/cursos/AzureFundamentals"
                        class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        Azure Fundamentals
                      </RouterLink>
                    </li>

                    <li>
                      <RouterLink
                        to="/cursos/LinuxAdmin"
                        class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        Linux Administration
                      </RouterLink>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4
                    class="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-4"
                  >
                    Cursos
                  </h4>
                  <ul
                    class="space-y-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <li
                      class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Python Pro
                    </li>
                    <li
                      class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Azure
                    </li>
                    <li
                      class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      IA Generativa
                    </li>
                  </ul>
                </div>

                <div>
                  <h4
                    class="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-4"
                  >
                    Gratuitos
                  </h4>
                  <ul
                    class="space-y-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <li
                      class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Intro a SQL
                    </li>
                    <li
                      class="hover:text-indigo-500 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Git &amp; GitHub
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2 sm:gap-4">
          <!-- Theme -->
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

          <!-- Hamburger (Mobile) -->
          <button
            class="md:hidden p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            @click="openMenu"
            aria-label="Abrir menú"
            title="Menú"
          >
            <span class="material-icons-round">menu</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ✅ Mobile Fullscreen Menu (Teleport to body) -->
    <Teleport to="body">
      <transition name="fade">
        <div v-if="isMenuOpen" class="fixed inset-0 z-[9999]">
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            @click="closeMenu"
          ></div>

          <!-- Panel full screen -->
          <div
            class="absolute inset-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
          >
            <!-- Top bar inside panel -->
            <div
              class="h-20 px-4 sm:px-6 flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60"
            >
              <RouterLink to="/" class="flex items-center gap-2" @click="closeMenu">
                <div
                  class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-extrabold flex items-center justify-center shadow-lg shadow-indigo-500/20"
                >
                  D
                </div>
                <div
                  class="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white"
                >
                  DeepData
                  <span
                    class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500"
                    >Academy</span
                  >
                </div>
              </RouterLink>

              <div class="flex items-center gap-2">
                <button
                  class="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  @click="toggleTheme"
                  aria-label="Cambiar tema"
                >
                  <span class="material-icons-round">
                    {{ isDark ? "light_mode" : "dark_mode" }}
                  </span>
                </button>

                <button
                  class="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  @click="closeMenu"
                  aria-label="Cerrar menú"
                  title="Cerrar"
                >
                  <span class="material-icons-round">close</span>
                </button>
              </div>
            </div>

            <!-- Content -->
            <div class="px-4 sm:px-6 py-6 overflow-y-auto h-[calc(100vh-5rem)]">
              <!-- Accordion: Cursos y Programas -->
              <div
                class="rounded-2xl border border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/40 shadow-xl"
              >
                <button
                  class="w-full flex items-center justify-between px-4 py-4 rounded-2xl text-left"
                  @click="isCoursesOpen = !isCoursesOpen"
                  :aria-expanded="isCoursesOpen"
                  aria-controls="mobile-courses-panel"
                >
                  <div class="flex items-center gap-2">
                    <span class="material-icons-round text-indigo-500">school</span>
                    <span class="font-semibold text-slate-900 dark:text-white"
                      >Cursos y Programas</span
                    >
                  </div>
                  <span class="material-icons-round text-slate-500 dark:text-slate-400">
                    {{ isCoursesOpen ? "expand_less" : "expand_more" }}
                  </span>
                </button>

                <transition name="collapse">
                  <div
                    id="mobile-courses-panel"
                    v-show="isCoursesOpen"
                    class="px-4 pb-4"
                  >
                    <div class="pt-2">
                      <h4
                        class="text-[11px] font-bold uppercase tracking-wider text-indigo-500 mb-3"
                      >
                        Especializaciones
                      </h4>
                      <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>
                          <RouterLink
                            to="/cursos/PythonDataScience"
                            class="mobile-link"
                            @click="closeMenu"
                          >
                            Python Data Science
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/cursos/FrontendMastery"
                            class="mobile-link"
                            @click="closeMenu"
                          >
                            Desarrollo Web
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/cursos/SQLMastery"
                            class="mobile-link"
                            @click="closeMenu"
                          >
                            SQL Mastery
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/cursos/AzureFundamentals"
                            class="mobile-link"
                            @click="closeMenu"
                          >
                            Azure Fundamentals
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink
                            to="/cursos/LinuxAdmin"
                            class="mobile-link"
                            @click="closeMenu"
                          >
                            Linux Administration
                          </RouterLink>
                        </li>
                      </ul>
                    </div>

                    <div class="pt-6">
                      <h4
                        class="text-[11px] font-bold uppercase tracking-wider text-indigo-500 mb-3"
                      >
                        Cursos
                      </h4>
                      <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li><span class="mobile-link cursor-pointer">Python Pro</span></li>
                        <li><span class="mobile-link cursor-pointer">Azure</span></li>
                        <li><span class="mobile-link cursor-pointer">IA Generativa</span></li>
                      </ul>
                    </div>

                    <div class="pt-6">
                      <h4
                        class="text-[11px] font-bold uppercase tracking-wider text-indigo-500 mb-3"
                      >
                        Gratuitos
                      </h4>
                      <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li><span class="mobile-link cursor-pointer">Intro a SQL</span></li>
                        <li><span class="mobile-link cursor-pointer">Git &amp; GitHub</span></li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </div>

              <!-- ❌ Webinars / Ebooks removidos en mobile -->
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { useTheme } from "../composables/useTheme";

const { isDark, toggleTheme } = useTheme();

const isMenuOpen = ref(false);
const isCoursesOpen = ref(true);

function openMenu() {
  isMenuOpen.value = true;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function lockBodyScroll(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  document.body.style.overflow = locked ? "hidden" : "";
}

watch(isMenuOpen, (v) => lockBodyScroll(v));

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && isMenuOpen.value) closeMenu();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));
</script>

<style scoped>
/* Mobile link style */
.mobile-link {
  display: block;
  padding: 0.65rem 0.75rem;
  border-radius: 0.75rem;
  transition: background-color 0.2s, color 0.2s;
}
.mobile-link:hover {
  background: rgba(99, 102, 241, 0.12);
  color: rgb(99, 102, 241);
}
:global(.dark) .mobile-link:hover {
  background: rgba(99, 102, 241, 0.18);
  color: white;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Collapse transition */
.collapse-enter-active,
.collapse-leave-active {
  transition: max-height 0.22s ease, opacity 0.22s ease;
}
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
}
.collapse-enter-to,
.collapse-leave-from {
  max-height: 1200px;
  opacity: 1;
}
</style>
