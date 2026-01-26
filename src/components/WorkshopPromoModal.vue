<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[9999]"
        role="dialog"
        aria-modal="true"
        aria-label="Promoción de Workshops"
      >
        <!-- Backdrop (NO cierra al click) -->
        <div class="absolute inset-0 bg-slate-950/70 backdrop-blur-md"></div>

        <!-- Center wrapper -->
        <div
          class="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
        >
          <div
            class="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800/70 shadow-2xl"
            @click.stop
          >
            <!-- Header -->
            <div
              class="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-200/60 dark:border-slate-800/60"
            >
              <div class="flex items-center gap-2">
                <span class="material-icons-round text-indigo-500"
                  >campaign</span
                >
                <p class="font-semibold text-slate-900 dark:text-white">
                  Workshops DeepData Academy
                </p>
              </div>

              <button
                class="p-2 rounded-full cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                @click="close"
                aria-label="Cerrar"
                title="Cerrar"
              >
                <span class="material-icons-round">close</span>
              </button>
            </div>

            <!-- Body -->
            <div class="p-3 sm:p-4">
              <!-- Imagen -->
              <a
                v-if="href"
                :href="href"
                target="_blank"
                rel="noopener"
                class="block"
              >
                <img
                  :src="imageSrc"
                  :alt="alt"
                  class="w-full h-auto rounded-xl border border-slate-200/60 dark:border-slate-800/60"
                  loading="lazy"
                />
              </a>

              <img
                v-else
                :src="imageSrc"
                :alt="alt"
                class="w-full h-auto rounded-xl border border-slate-200/60 dark:border-slate-800/60"
                loading="lazy"
              />

              <!-- Footer acciones -->
              <div
                class="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2"
              >
                <button
                  v-if="href"
                  type="button"
                  class="px-4 py-2.5 rounded-xl cursor-pointer bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold text-center"
                  @click.prevent
                >
                  Ver detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, onBeforeUnmount } from "vue";

type Props = {
  modelValue: boolean;
  imageSrc: string;
  alt?: string;
  href?: string;
};

const props = withDefaults(defineProps<Props>(), {
  alt: "Flyer de workshops",
  href: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", v: boolean): void;
  (e: "closed"): void;
}>();

const modelValue = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emit("update:modelValue", v),
});

function lockBodyScroll(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  document.body.style.overflow = locked ? "hidden" : "";
}

function close() {
  modelValue.value = false;
  emit("closed");
}

watch(
  () => modelValue.value,
  (v) => lockBodyScroll(v),
  { immediate: true },
);

// Asegura liberar scroll si el componente se desmonta mientras estaba abierto
onBeforeUnmount(() => lockBodyScroll(false));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
