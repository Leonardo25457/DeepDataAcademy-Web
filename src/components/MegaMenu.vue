<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, computed } from "vue";

const props = withDefaults(
  defineProps<{
    open: boolean;
    anchorEl?: HTMLElement | null;
    headerTopClass?: string;
  }>(),
  { headerTopClass: "top-16" }
);

const emit = defineEmits<{
  (e: "update:open", v: boolean): void;
  (e: "menu-enter"): void;
  (e: "menu-leave"): void;
  (e: "request-close"): void;
}>();

const isOpen = computed(() => props.open);
const topPx = ref<number | null>(null);

function measureTop() {
  if (props.anchorEl) {
    const rect = props.anchorEl.getBoundingClientRect();
    topPx.value = Math.round(rect.bottom);
  } else {
    topPx.value = null;
  }
}

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") emit("request-close");
}

function onWinChange() {
  measureTop();
}

watch(() => props.anchorEl, measureTop);

onMounted(() => {
  measureTop();
  window.addEventListener("resize", onWinChange, { passive: true });
  window.addEventListener("scroll", onWinChange, { passive: true });
  document.addEventListener("keydown", onKey);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onWinChange);
  window.removeEventListener("scroll", onWinChange);
  document.removeEventListener("keydown", onKey);
});
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-show="isOpen"
        id="mega-root"
        class="fixed inset-x-0 z-[60]"
        :style="topPx !== null ? { top: `${topPx}px` } : undefined"
        :class="topPx === null ? headerTopClass : ''"
        @mouseenter="$emit('menu-enter')"
        @mouseleave="$emit('menu-leave')"
        style="pointer-events: none"
      >
        <div class="mx-auto container px-4" style="pointer-events: auto">
          <div
            class="rounded-xl bg-white text-slate-800 shadow-2xl ring-1 ring-black/5 overflow-hidden"
            role="menu"
            aria-label="Menú de cursos y programas"
          >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <section>
                <header class="flex items-center gap-2 font-semibold mb-2">
                  <span aria-hidden="true">📦</span>
                  <span>Especializaciones</span>
                </header>
                <ul class="space-y-1 text-sm">
                  <li>
                    <RouterLink
                      class="link"
                      to="/especializaciones/desarrollo-software"
                      >Desarrollo de Software</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="link"
                      to="/especializaciones/cloud-computing"
                      >Cloud Computing</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="link"
                      to="/especializaciones/data-engineer"
                      >Data Engineer </RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink
                      class="link"
                      to="/especializaciones/ciberseguridadt"
                      >Ciberseguridad</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link" to="/especializaciones/ml-engineer"
                      >ML Engineer</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link font-medium" to="/especializaciones"
                      >Más…</RouterLink
                    >
                  </li>
                </ul>
              </section>

              <section>
                <header class="flex items-center gap-2 font-semibold mb-2">
                  <span aria-hidden="true">📚</span>
                  <span>Cursos</span>
                </header>
                <ul class="space-y-1 text-sm">
                  <li>
                    <RouterLink class="link" to="/cursos/python"
                      >Fundamentos de Python</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link" to="/cursos/gcp"
                      >Google Cloud computing</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link" to="/cursos/azure"
                      >Azure fundamentals</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link" to="/cursos/ia"
                      >IA Generativa</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link font-medium" to="/cursos"
                      >Más…</RouterLink
                    >
                  </li>
                </ul>
              </section>

              <section>
                <header class="flex items-center gap-2 font-semibold mb-2">
                  <span aria-hidden="true">🆓</span>
                  <span>Cursos Gratuitos</span>
                </header>
                <ul class="space-y-1 text-sm">
                  <li>
                    <RouterLink class="link" to="/gratis/hadoop"
                      >Apache Hadoop</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link" to="/gratis/matematica-ml"
                      >Matemática para Machine Learning</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link" to="/gratis/nlp"
                      >Procesamiento de Lenguaje Natural</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link font-medium" to="/gratis"
                      >Más…</RouterLink
                    >
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
@reference "../assets/tailwind.css";

.link {
  @apply text-slate-700 hover:text-slate-900 hover:underline;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.12s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
