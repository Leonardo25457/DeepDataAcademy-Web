<template>
  <!-- CONTENEDOR FIJO ÚNICO -->
  <div
    class="fixed z-[70]"
    :class="position === 'right' ? 'right-5 md:right-7' : 'left-5 md:left-7'"
    style="bottom: 22px"
  >
    <!-- ICONO -->
    <button
      type="button"
      class="pointer-events-auto select-none focus:outline-none relative block z-[80] cursor-pointer"
      aria-label="Abrir chat de asesoría"
      @click="toggle"
      :style="{ width: avatarPx, height: avatarPx }"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <img
        :src="avatarSrc"
        :width="currentAvatar"
        :height="currentAvatar"
        alt=""
        class="rounded-full select-none animate-float shadow-avatar-strong"
        draggable="false"
        :style="{ width: avatarPx, height: avatarPx }"
      />

      <!-- Globito (solo cerrado) -->
      <transition name="bubble-fade">
        <div
          v-if="!isOpen && isHover"
          class="bubble bubble--pill shadow-bubble absolute top-1/2 -translate-y-1/2 flex items-center"
          :class="isNarrow ? 'bubble--sm' : ''"
          :style="bubbleSideStyle"
        >
          <p class="bubble__text">
            ¡Contacta con una <strong>asesora académica!</strong>
          </p>
          <span class="bubble__nub" :class="nubClass" />
        </div>
      </transition>
    </button>

    <!-- PANEL -->
    <transition name="chat-pop">
      <section
        v-show="isOpen"
        class="absolute z-[60] w-[92vw] rounded-[22px] overflow-hidden"
        :class="[position === 'right' ? 'right-0' : 'left-0']"
        :style="[{ bottom: panelOverlapPx }, panelBoxStyle]"
        role="dialog"
        aria-modal="true"
        aria-label="Asesora académica"
      >
        <div
          class="relative rounded-[22px] overflow-hidden border border-black/5 shadow-[0_16px_36px_rgba(2,6,23,.18)] bg-white"
        >
          <!-- Header -->
          <div class="relative h-[52px] bg-[#1060FF] text-white">
            <div class="absolute -left-8 -top-8 w-24 h-24 rounded-full bg-white/10"></div>
            <div class="absolute left-0 right-0 bottom-0 h-[1px] bg-white/20"></div>
            <div class="relative h-full px-3.5 flex items-center gap-2.5">
              <div
                class="w-9 h-9 rounded-xl bg-white/20 grid place-items-center ring-1 ring-white/30 font-black"
              >
                D
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <h3 class="text-[14px] font-extrabold leading-tight truncate">
                    {{ title }}
                  </h3>
                  <span
                    class="inline-flex items-center gap-1 h-[20px] px-1.5 rounded-full bg-emerald-400/25 ring-1 ring-white/30 leading-none"
                  >
                    <span class="w-2 h-2 rounded-full bg-emerald-300"></span>
                    <span class="text-[10px]">En línea</span>
                  </span>
                </div>
                <p class="text-[10px] leading-tight text-white/90 truncate">
                  {{ brand }}
                </p>
              </div>
              <div class="ml-auto flex items-center gap-1">
                <button class="icon-btn" @click="isOpen = false" aria-label="Minimizar">▾</button>
                <button class="icon-btn" @click="isOpen = false" aria-label="Cerrar">✕</button>
              </div>
            </div>
          </div>

          <!-- Body -->
          <div class="bg-[#F2F4F7]">
            <div class="overflow-y-auto" :style="innerScrollStyle">
              <div class="px-3 pt-3" :style="panelInnerPadStyle">
                <div
                  class="bg-white rounded-[14px] ring-1 ring-black/5 shadow-[0_5px_12px_rgba(2,6,23,.06)] p-3"
                >
                  <p class="text-[12px] leading-relaxed text-slate-800">
                    ¡Hola! 🚀 Queremos ayudarte a dar el próximo gran paso en tu
                    carrera. Déjanos tus datos y una asesora te contactará para
                    guiarte. ¡Hablemos!
                  </p>
                </div>

                <form class="mt-3 space-y-2.5" @submit.prevent="startConversation">
                  <label class="input-wrap h-10">
                    <svg class="i" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm7 7a7 7 0 0 0-14 0"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <input
                      v-model.trim="form.name"
                      type="text"
                      required
                      placeholder="Ingresa tu nombre completo"
                      autocomplete="name"
                    />
                  </label>

                  <label class="input-wrap h-10">
                    <svg class="i" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 7.5 10.7 13a2 2 0 0 0 2.6 0L21 7.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <input
                      v-model.trim="form.email"
                      type="email"
                      required
                      placeholder="Ingresa tu correo electrónico"
                      autocomplete="email"
                    />
                  </label>

                  <div class="flex gap-2">
                    <label class="input-wrap h-10 basis-[42%]">
                      <svg class="i" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M16 2H8a2 2 0 0 0-2 2v16l6-3 6 3V4a2 2 0 0 0-2-2Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <select v-model="form.country">
                        <option value="+51">🇵🇪 +51</option>
                        <option value="+57">🇨🇴 +57</option>
                        <option value="+56">🇨🇱 +56</option>
                        <option value="+52">🇲🇽 +52</option>
                        <option value="+34">🇪🇸 +34</option>
                      </select>
                    </label>

                    <label class="input-wrap h-10 flex-1">
                      <svg class="i" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm6 18h.01"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <input
                        v-model.trim="form.phone"
                        type="tel"
                        inputmode="numeric"
                        placeholder="Tu teléfono"
                        required
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    style="cursor: pointer"
                    class="w-full h-10 rounded-full px-5 font-bold text-white bg-gradient-to-r from-[#1060FF] via-[#2D7BFF] to-[#4F9DFF]
                           shadow-[0_8px_16px_rgba(16,96,255,.26)] hover:-translate-y-0.5 hover:shadow-[0_12px_18px_rgba(16,96,255,.34)]
                           active:translate-y-[1px] active:shadow-md transition text-[13.5px]
                           disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {{ isSubmitting ? "Abriendo WhatsApp..." : "Iniciar conversación" }}
                  </button>

                  <p v-if="error" class="text-[11px] text-red-600 mt-2">
                    {{ error }}
                  </p>

                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onBeforeUnmount } from "vue";

const props = withDefaults(
  defineProps<{
    brand?: string;
    title?: string;
    position?: "right" | "left";
    avatarSrc?: string;
    avatarSize?: number;
    avatarSizeSm?: number;
    bubbleResponsiveBp?: number;
    panelWidth?: number;
    panelWidthSm?: number;
    panelHeight?: number;
    panelHeightSm?: number;
  }>(),
  {
    brand: "DeepData Academy",
    title: "Asesora Académica",
    position: "right",
    avatarSrc: "/img/dda_girl_icon_transparent_256.png",
    avatarSize: 140,
    avatarSizeSm: 92,
    bubbleResponsiveBp: 520,
    panelWidth: 310,
    panelWidthSm: 320,
    panelHeight: 500,
    panelHeightSm: 440,
  }
);

const isOpen = ref(false);
const isHover = ref(false);
const isNarrow = ref(false);

const isSubmitting = ref(false);
const error = ref<string | null>(null);

interface FormState {
  name: string;
  email: string;
  country: string;
  phone: string;
}
const form = reactive<FormState>({
  name: "",
  email: "",
  country: "+51",
  phone: "",
});

/* Responsive */
const currentAvatar = computed(() => (isNarrow.value ? props.avatarSizeSm : props.avatarSize));
const avatarPx = computed(() => `${currentAvatar.value}px`);

/* Panel responsive (ANCHO/ALTO) */
const currentPanelWidth = computed(() => (isNarrow.value ? props.panelWidthSm : props.panelWidth));
const currentPanelHeight = computed(() => (isNarrow.value ? props.panelHeightSm : props.panelHeight));

/* Solape y reserva */
const panelOverlap = computed(() => Math.round(currentAvatar.value * 0.26));
const panelOverlapPx = computed(() => `${panelOverlap.value}px`);
const panelBottomReserve = computed(() => Math.round(currentAvatar.value * 0.4));
const panelInnerPadStyle = computed(() => ({
  paddingBottom: `${panelBottomReserve.value}px`,
}));

/* Alturas internas */
const headerHeight = 52;
const panelBoxStyle = computed(() => ({
  maxWidth: `${currentPanelWidth.value}px`,
  maxHeight: `${currentPanelHeight.value}px`,
}));
const innerScrollStyle = computed(() => ({
  maxHeight: `${Math.max(currentPanelHeight.value - headerHeight, 200)}px`,
}));

/* Globo */
const bubbleSideStyle = computed(() =>
  props.position === "right" ? { right: "calc(100% + 10px)" } : { left: "calc(100% + 10px)" }
);
const nubClass = computed(() => (props.position === "right" ? "bubble__nub--left" : "bubble__nub--right"));

function toggle() {
  isOpen.value = !isOpen.value;
}

function normalizePhone(country: string, phone: string) {
  // country: "+51" -> "51"
  const cc = country.replace(/\D/g, "");
  const num = phone.replace(/\D/g, "");
  return `+${cc} ${num}`;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function startConversation() {
  error.value = null;

  if (!form.name) {
    error.value = "Ingresa tu nombre.";
    return;
  }
  if (!form.email || !isValidEmail(form.email)) {
    error.value = "Ingresa un correo válido.";
    return;
  }
  if (!form.phone) {
    error.value = "Ingresa tu teléfono.";
    return;
  }

  isSubmitting.value = true;

  const WHATSAPP_NUMBER = "51930783601";

  const phonePretty = normalizePhone(form.country, form.phone);

  const message =
    `Hola, deseo recibir información.\n\n` +
    `Nombre: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Teléfono: ${phonePretty}\n\n` +
    `Enviado desde el widget de la web.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");

  // cerrar widget
  isOpen.value = false;

  // limpiar
  form.name = "";
  form.email = "";
  form.phone = "";

  setTimeout(() => {
    isSubmitting.value = false;
  }, 350);
}

/* Detectar móvil/desktop */
let mm: MediaQueryList | null = null;
let handler: ((e: MediaQueryListEvent) => void) | null = null;

onMounted(() => {
  mm = window.matchMedia(`(max-width: ${props.bubbleResponsiveBp}px)`);
  const apply = (m: MediaQueryList | MediaQueryListEvent) => {
    isNarrow.value = (m as MediaQueryList).matches ?? (m as MediaQueryListEvent).matches;
  };
  apply(mm);
  handler = (e) => apply(e);
  mm.addEventListener("change", handler);
});
onBeforeUnmount(() => {
  if (mm && handler) mm.removeEventListener("change", handler);
});
</script>

<style scoped>
@reference "../assets/tailwind.css";

/* Animación icono */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.animate-float {
  animation: float 2.2s ease-in-out infinite;
}

/* Transiciones */
.chat-pop-enter-active,
.chat-pop-leave-active {
  transition: transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease;
  transform-origin: bottom right;
}
.chat-pop-enter-from,
.chat-pop-leave-to {
  transform: translateY(10px) scale(0.98);
  opacity: 0;
}
.bubble-fade-enter-active,
.bubble-fade-leave-active {
  transition: opacity 0.12s ease;
}
.bubble-fade-enter-from,
.bubble-fade-leave-to {
  opacity: 0;
}

.shadow-avatar-strong {
  box-shadow: 0 14px 28px rgba(2, 6, 23, 0.32);
}

.icon-btn {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 9999px;
  color: white;
  transition: background 0.15s ease;
}
.icon-btn:hover {
  background: rgba(255, 255, 255, 0.18);
}

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 9999px;
  padding: 0 10px 0 36px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
}
.input-wrap .i {
  width: 15px;
  height: 15px;
  color: #64748b;
  position: absolute;
  left: 12px;
}
.input-wrap input,
.input-wrap select {
  width: 100%;
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 13px;
  color: #0f172a;
}
.input-wrap input::placeholder {
  color: rgba(2, 6, 23, 0.45);
}

/* Globito */
.bubble {
  min-width: 210px;
  max-width: 280px;
  background: #fff;
  border: 1px solid rgba(12, 42, 87, 0.08);
  border-radius: 16px;
  padding: 10px 14px;
  color: #0b2a57;
}
.bubble--sm {
  min-width: 190px;
  max-width: 230px;
  padding: 9px 12px;
}
.bubble__text {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.15;
}
.bubble--sm .bubble__text {
  font-size: 12.5px;
}
.bubble__text strong {
  font-weight: 800;
}
.bubble__nub {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 6px 12px rgba(2, 6, 23, 0.14), 0 2px 4px rgba(2, 6, 23, 0.1);
  border: 1px solid rgba(12, 42, 87, 0.1);
}
.bubble__nub--left {
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
}
.bubble__nub--right {
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
