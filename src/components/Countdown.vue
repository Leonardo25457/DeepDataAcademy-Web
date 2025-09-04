<template>
  <div class="flex items-center gap-2" role="timer" :aria-label="`Cuenta regresiva al ${targetReadable}`">
    <div v-for="(v,l) in time" :key="l" class="bg-white border border-blue-100 rounded-xl px-3 py-2 text-center min-w-[64px]">
      <strong class="block text-lg">{{ v }}</strong><span class="text-sm text-textc-700">{{ l }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps<{ target: string }>()
const time = ref<{ D:string; H:string; M:string; S:string }>({ D:'00', H:'00', M:'00', S:'00' })
let id: number | undefined
const targetDate = computed(() => new Date(props.target))
const targetReadable = computed(() => targetDate.value.toLocaleString())

function tick(){
  const now = new Date().getTime()
  let diff = Math.max(0, targetDate.value.getTime() - now)
  const D = Math.floor(diff / 86400000); diff -= D*86400000
  const H = Math.floor(diff / 3600000);  diff -= H*3600000
  const M = Math.floor(diff / 60000);    diff -= M*60000
  const S = Math.floor(diff / 1000)
  time.value = { D: String(D).padStart(2,'0'), H: String(H).padStart(2,'0'), M: String(M).padStart(2,'0'), S: String(S).padStart(2,'0') }
}
onMounted(()=>{ tick(); id = window.setInterval(tick, 1000) })
onBeforeUnmount(()=> id && clearInterval(id))
</script>
