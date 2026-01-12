<template>
  <div class="grid grid-cols-4 gap-2 mb-6 text-slate-800 dark:text-slate-200">
    <div class="bg-slate-100 dark:bg-slate-800/80 p-2 rounded-lg text-center">
      <span class="block font-bold text-lg">{{ dd }}</span>
      <span class="text-[10px] text-slate-500 uppercase font-bold">Días</span>
    </div>
    <div class="bg-slate-100 dark:bg-slate-800/80 p-2 rounded-lg text-center">
      <span class="block font-bold text-lg">{{ hh }}</span>
      <span class="text-[10px] text-slate-500 uppercase font-bold">H</span>
    </div>
    <div class="bg-slate-100 dark:bg-slate-800/80 p-2 rounded-lg text-center">
      <span class="block font-bold text-lg">{{ mm }}</span>
      <span class="text-[10px] text-slate-500 uppercase font-bold">M</span>
    </div>
    <div class="bg-slate-100 dark:bg-slate-800/80 p-2 rounded-lg text-center">
      <span class="block font-bold text-lg">{{ ss }}</span>
      <span class="text-[10px] text-slate-500 uppercase font-bold">S</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps<{ target: string | Date }>();

const now = ref(Date.now());
let timer: number | null = null;

onMounted(() => {
  timer = window.setInterval(() => (now.value = Date.now()), 1000);
});
onBeforeUnmount(() => {
  if (timer) window.clearInterval(timer);
});

function toDate(v: string | Date) {
  return v instanceof Date ? v : new Date(v);
}
function clamp0(n: number) {
  return n < 0 ? 0 : n;
}
function pad2(n: number) {
  return String(n).padStart(2, "0");
}

const parts = computed(() => {
  const t = toDate(props.target).getTime();
  const diff = clamp0(t - now.value);

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
