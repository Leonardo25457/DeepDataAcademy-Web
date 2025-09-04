<template>
  <div
    class="flex items-end gap-2 sm:gap-3 select-none"
    role="timer"
    :aria-label="`Cuenta regresiva al ${readable}`"
  >
    <template v-for="(b, i) in boxes" :key="b.label">
      <!-- Grupo: etiqueta arriba + caja -->
      <div class="text-center">
        <div class="text-[10px] sm:text-xs mb-1 font-semibold opacity-90">
          {{ b.label }}
        </div>
        <div
          class="rounded-2xl bg-white text-primary-900 shadow-mdx border border-white/40 min-w-[60px] sm:min-w-[72px] px-3 py-2 grid place-items-center"
        >
          <span
            class="text-2xl sm:text-3xl font-black tabular-nums leading-none transition-transform duration-200 ease-out hover:scale-105"
          >
            {{ b.value }}
          </span>
        </div>
      </div>
      <!-- Dos puntos entre bloques -->
      <div v-if="i < boxes.length - 1" class="pb-2 sm:pb-3">
        <span class="text-2xl sm:text-3xl font-black text-white/90">:</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
const props = defineProps<{ target: string }>();
const targetDate = computed(() => new Date(props.target));
const readable = computed(() => targetDate.value.toLocaleString());

const boxes = ref([
  { label: "Días", value: "00" },
  { label: "Horas", value: "00" },
  { label: "Minutos", value: "00" },
  { label: "Segundos", value: "00" },
]);

let id: number | undefined;
function tick() {
  const now = Date.now();
  let diff = Math.max(0, targetDate.value.getTime() - now);
  const d = Math.floor(diff / 86400000);
  diff -= d * 86400000;
  const h = Math.floor(diff / 3600000);
  diff -= h * 3600000;
  const m = Math.floor(diff / 60000);
  diff -= m * 60000;
  const s = Math.floor(diff / 1000);
  boxes.value[0].value = String(d).padStart(2, "0");
  boxes.value[1].value = String(h).padStart(2, "0");
  boxes.value[2].value = String(m).padStart(2, "0");
  boxes.value[3].value = String(s).padStart(2, "0");
}
onMounted(() => {
  tick();
  id = window.setInterval(tick, 1000);
});
onBeforeUnmount(() => id && clearInterval(id));
</script>
