<template>
  <div
    class="w-full bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/50 backdrop-blur-md rounded-2xl shadow-lg dark:shadow-none"
  >
    <div
      class="grid grid-cols-4 divide-x divide-slate-200 dark:divide-slate-700/60"
    >
      <div class="text-center px-2 sm:px-4 py-4 sm:py-5 min-w-0">
        <span
          class="block text-[28px] sm:text-3xl font-bold tabular-nums text-slate-900 dark:text-white leading-none"
        >
          {{ dd }}
        </span>
        <span
          class="mt-1 block text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold leading-none"
        >
          Días
        </span>
      </div>

      <div class="text-center px-2 sm:px-4 py-4 sm:py-5 min-w-0">
        <span
          class="block text-[28px] sm:text-3xl font-bold tabular-nums text-slate-900 dark:text-white leading-none"
        >
          {{ hh }}
        </span>
        <span
          class="mt-1 block text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold leading-none"
        >
          Horas
        </span>
      </div>

      <div class="text-center px-2 sm:px-4 py-4 sm:py-5 min-w-0">
        <span
          class="block text-[28px] sm:text-3xl font-bold tabular-nums text-slate-900 dark:text-white leading-none"
        >
          {{ mm }}
        </span>
        <span
          class="mt-1 block text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold leading-none"
        >
          Minutos
        </span>
      </div>

      <div class="text-center px-2 sm:px-4 py-4 sm:py-5 min-w-0">
        <span
          class="block text-[28px] sm:text-3xl font-bold tabular-nums text-slate-900 dark:text-white leading-none"
        >
          {{ ss }}
        </span>
        <span
          class="mt-1 block text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold leading-none"
        >
          Segundos
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  target: string | Date;
  now?: number; // ✅ nuevo (timestamp en ms)
}>();

function toDate(v: string | Date) {
  return v instanceof Date ? v : new Date(v);
}
function clamp0(n: number) {
  return n < 0 ? 0 : n;
}
function pad2(n: number) {
  return String(n).padStart(2, "0");
}

const nowMs = computed(() => props.now ?? Date.now());

const parts = computed(() => {
  const t = toDate(props.target).getTime();
  const diff = clamp0(t - nowMs.value);

  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  return { days, hours, minutes, seconds };
});

const dd = computed(() => String(parts.value.days));
const hh = computed(() => pad2(parts.value.hours));
const mm = computed(() => pad2(parts.value.minutes));
const ss = computed(() => pad2(parts.value.seconds));
</script>
