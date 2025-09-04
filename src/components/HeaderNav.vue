<template>
  <header
    ref="headerRoot"
    class="sticky top-0 z-50 bg-[#0a2a52] text-white/90 border-b border-white/10"
  >
    <div class="mx-auto container grid grid-cols-[auto_1fr_auto] items-center gap-3 h-16">
      <!-- Izquierda -->
      <RouterLink to="/" class="flex items-center gap-2 no-underline">
        <span
          class="w-9 h-9 rounded-xl text-white grid place-items-center font-extrabold shadow-mdx"
          style="background: linear-gradient(145deg, #005187, #4d82bc)"
        >D</span>
        <span class="font-black tracking-tight text-white">DeepData Academy</span>
      </RouterLink>

      <!-- Centro -->
      <nav class="hidden md:flex justify-center items-center gap-1">
        <!-- Wrapper del botón (hover/focus controlan el estado) -->
        <div
          ref="menuWrap"
          class="relative"
          @mouseenter="openHover"
          @mouseleave="closeHover"
          @focusin="onFocusIn"
          @focusout="onFocusOut"
        >
          <button
            class="nav-link"
            @click="toggle"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            aria-controls="mega-cursos"
          >
            Cursos y programas ▾
          </button>
        </div>

        <RouterLink class="nav-link" to="/empresas">Empresas ▾</RouterLink>
        <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
        <RouterLink class="nav-link" to="/webinars">Webinars</RouterLink>
        <RouterLink class="nav-link" to="/ebooks">Ebooks</RouterLink>
        <RouterLink class="nav-link" to="/gratis">Cursos gratis</RouterLink>
      </nav>

      <!-- Derecha -->
      <div class="hidden md:flex items-center gap-2">
        <a class="btn btn-ghost px-3 py-1.5 bg-white/10 text-white border-white/20 hover:bg-white/20" href="#">
          Iniciar sesión
        </a>
        <a class="btn rounded-full px-3 py-1.5 font-extrabold bg-amber-600 hover:bg-amber-700 text-white shadow-mdx" href="#">
          Regístrate
        </a>
      </div>

      <!-- Burger móvil -->
      <button
        class="md:hidden border border-white/20 rounded-xl px-2 py-1 bg-white/10 text-white justify-self-end"
        @click="open = !open"
        aria-label="Abrir menú"
      >
        ☰
      </button>
    </div>

    <!-- Mobile -->
    <div class="md:hidden" v-show="open">
      <div class="container">
        <div class="border-t border-white/10"></div>
        <div class="grid gap-1 py-2">
          <RouterLink class="mobile-link" to="/cursos" @click="open = false">Cursos y programas</RouterLink>
          <RouterLink class="mobile-link" to="/empresas" @click="open = false">Empresas</RouterLink>
          <RouterLink class="mobile-link" to="/blog" @click="open = false">Blog</RouterLink>
          <RouterLink class="mobile-link" to="/webinars" @click="open = false">Webinars</RouterLink>
          <RouterLink class="mobile-link" to="/ebooks" @click="open = false">Ebooks</RouterLink>
          <RouterLink class="mobile-link" to="/gratis" @click="open = false">Cursos gratis</RouterLink>
          <div class="flex gap-2 pt-2">
            <a class="btn btn-ghost" href="#">Iniciar sesión</a>
            <a class="btn btn-primary" href="#">Regístrate</a>
          </div>
        </div>
      </div>
    </div>

    <!-- MegaMenu teletransportado (posicionado justo debajo del header) -->
    <MegaMenu
      :open="menuOpen"
      :anchor-el="headerRoot"
      @menu-enter="openHover"
      @menu-leave="closeHover"
      @request-close="menuOpen = false"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import MegaMenu from "../components/MegaMenu.vue";

const open = ref(false);
const menuOpen = ref(false);
const menuWrap = ref<HTMLElement | null>(null);
const headerRoot = ref<HTMLElement | null>(null);

let closeTimer: number | null = null;
const clearCloseTimer = () => { if (closeTimer) { window.clearTimeout(closeTimer); closeTimer = null; } };

const openHover = () => { clearCloseTimer(); menuOpen.value = true; };
const closeHover = () => { clearCloseTimer(); closeTimer = window.setTimeout(() => (menuOpen.value = false), 120); };

const onFocusIn = () => { clearCloseTimer(); menuOpen.value = true; };
const onFocusOut = (e: FocusEvent) => {
  const next = e.relatedTarget as Node | null;
  if (!menuWrap.value || (next && menuWrap.value.contains(next))) return;
  closeHover();
};

const toggle = () => { clearCloseTimer(); menuOpen.value = !menuOpen.value; };

/** Cerrar con click afuera (ignorando clicks dentro del MegaMenu teletransportado) */
const onDocPointerDown = (e: PointerEvent | MouseEvent) => {
  const target = e.target as Node;
  const megaRoot = document.getElementById("mega-root"); // definido en MegaMenu.vue
  // No cerrar si el click ocurrió dentro del mega
  if (megaRoot && megaRoot.contains(target)) return;
  // No cerrar si el click ocurrió dentro del botón/wrapper
  if (menuWrap.value && menuWrap.value.contains(target)) return;
  // En cualquier otro caso, cerrar
  menuOpen.value = false;
};

/** Cerrar con Esc */
const onDocKey = (e: KeyboardEvent) => { if (e.key === "Escape") menuOpen.value = false; };

onMounted(() => {
  document.addEventListener("pointerdown", onDocPointerDown, true);
  document.addEventListener("keydown", onDocKey);
});
onBeforeUnmount(() => {
  document.removeEventListener("pointerdown", onDocPointerDown, true);
  document.removeEventListener("keydown", onDocKey);
});
</script>

<style scoped>
.nav-link {
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 150ms, color 150ms;
}
.nav-link:hover { background-color: rgba(255, 255, 255, 0.1); }

.mobile-link {
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
}
.mobile-link:hover { background-color: rgba(255, 255, 255, 0.1); }

.router-link-active:not(.btn) { color: #fff; }
</style>
