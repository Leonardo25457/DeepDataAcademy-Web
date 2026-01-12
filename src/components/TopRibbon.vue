<template>
  <section
    class="hero"
    tabindex="0"
    role="region"
    aria-roledescription="carousel"
    :aria-label="`Carrusel: ${current.title} ${current.highlight}`"
    @mouseenter="pause"
    @mouseleave="resume"
    @focusin="pause"
    @focusout="resume"
    @keydown.left.prevent="prev(true)"
    @keydown.right.prevent="next(true)"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <!-- Slides / Background -->
    <div class="hero__slides" aria-hidden="true">
      <div
        v-for="(s, i) in slides"
        :key="s.id"
        class="hero__slide"
        :class="{ 'is-active': i === active }"
        :style="slideVars(s)"
      >
        <div class="hero__bg"></div>
        <div class="hero__decor"></div>

        <img
          v-if="s.image"
          class="hero__art"
          :class="{ 'is-hidden': imgOk[s.id] === false }"
          :src="s.image"
          :alt="`${s.title} ${s.highlight}`"
          :loading="i === active ? 'eager' : 'lazy'"
          decoding="async"
          :style="{ objectPosition: s.heroPos ?? '72% 50%' }"
          @error="imgOk[s.id] = false"
        />
      </div>
    </div>

    <!-- Overlay / scrim -->
    <div class="hero__scrim" aria-hidden="true"></div>

    <!-- Content -->
    <div class="hero__container">
      <div class="hero__grid">
        <div class="hero__content">
          <div class="hero__top">
            <div class="hero__chips">
              <span class="chip">
                <span class="chip-ico">🎓</span>
                <span class="chip-txt">{{ current.kicker }}</span>
              </span>

              <span v-if="current.badge" class="badge">{{
                current.badge
              }}</span>
            </div>

            <h2 class="hero__title">
              <span class="t1">{{ current.title }}</span>
              <span class="t2">{{ current.highlight }}</span>
            </h2>

            <p v-if="current.desc" class="hero__desc">
              {{ current.desc }}
            </p>

            <ul v-if="current.points?.length" class="hero__bullets">
              <li v-for="p in current.points" :key="p">
                <span class="dot"></span>
                <span>{{ p }}</span>
              </li>
            </ul>
          </div>

          <div class="hero__bottom">
            <div class="hero__meta">
              <p class="hero__date">
                <span>🗓</span>
                <span>{{ eventRange }}</span>
              </p>

              <div class="hero__actions">
                <a :href="current.ctaHref" class="cta">{{ current.ctaText }}</a>

                <a
                  v-if="current.secondaryCtaText"
                  :href="current.secondaryCtaHref"
                  class="cta-secondary"
                >
                  {{ current.secondaryCtaText }}
                </a>
              </div>
            </div>

            <div
              class="hero__countdown"
              role="group"
              aria-label="Cuenta regresiva del evento"
            >
              <div class="count-item">
                <div class="count-label">Días</div>
                <div class="count-value">{{ countdown.days }}</div>
              </div>
              <div class="sep">:</div>
              <div class="count-item">
                <div class="count-label">Horas</div>
                <div class="count-value">{{ countdown.hours }}</div>
              </div>
              <div class="sep">:</div>
              <div class="count-item">
                <div class="count-label">Minutos</div>
                <div class="count-value">{{ countdown.minutes }}</div>
              </div>
              <div class="sep">:</div>
              <div class="count-item">
                <div class="count-label">Segundos</div>
                <div class="count-value">{{ countdown.seconds }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero__right-spacer" aria-hidden="true"></div>
      </div>
    </div>

    <!-- Controls -->
    <div class="hero__controls" aria-label="Controles del carrusel">
      <button
        type="button"
        class="nav-btn"
        @click="prev(true)"
        aria-label="Anterior"
      >
        ‹
      </button>

      <div class="dots" role="tablist" aria-label="Selector de workshop">
        <button
          v-for="(s, i) in slides"
          :key="s.id + '-dot'"
          type="button"
          class="dotbtn"
          :class="{ active: i === active }"
          @click="go(i, true)"
          :aria-label="`Ir a: ${s.title} - ${s.highlight}`"
          :aria-current="i === active ? 'true' : 'false'"
        />
      </div>

      <button
        type="button"
        class="nav-btn"
        @click="next(true)"
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";

type Slide = {
  id: string;
  title: string;
  highlight: string;
  kicker: string;
  badge?: string;
  desc?: string;
  points?: string[];
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: string;
  heroPos?: string;
  bg: string;
  accent?: string;
  target?: string;
  imgRight?: string;
};

const fallbackTarget = "2026-02-15T19:00:00-05:00";
const eventRange = "12 al 15 de Setiembre";

const slides: Slide[] = [
  {
    id: "crunchy",
    title: "DESARROLLO WEB",
    highlight: "CLONA PLATAFORMAS TIPO CRUNCHYROLL",
    kicker: "Workshop online",
    badge: "GRATUITO",
    desc: "Construye una landing y secciones tipo plataforma, con UI moderna, responsive y componentes reutilizables.",
    points: [
      "Aprende con una demo real",
      "UI responsive + componentes",
      "Buenas prácticas de front-end",
    ],
    ctaText: "¡Inscríbete ahora!",
    ctaHref: "#cta",
    secondaryCtaText: "Ver detalles",
    secondaryCtaHref: "#workshops",
    image: "/img/crunchy-girl3.jpg",
    heroPos: "78% 52%",
    imgRight: "2%",
    bg: "linear-gradient(110deg, #043a66 0%, #063e6f 38%, #071a2f 100%)",
    accent: "#BFE3FF",
    target: fallbackTarget,
  },
  {
    id: "vision",
    title: "VISIÓN ARTIFICIAL CON PYTHON",
    highlight: "IA EN ACCIÓN",
    kicker: "Workshop online",
    badge: "NUEVO",
    desc: "Detección, extracción y automatización: verás casos reales y resultados visibles.",
    points: [
      "Computer Vision práctico",
      "Python + casos reales",
      "Resultados medibles",
    ],
    ctaText: "Ver temario",
    ctaHref: "#workshops",
    image: "/img/workshop-vision.jpg",
    heroPos: "66% 50%",
    imgRight: "4%",
    bg: "linear-gradient(110deg, #053a5b 0%, #0a4c7a 40%, #061b2e 100%)",
    accent: "#9DE1FF",
    target: fallbackTarget,
  },
  {
    id: "terminal",
    title: "AUTOMATIZA TU TERMINAL",
    highlight: "COMO UN PRO",
    kicker: "Workshop online",
    desc: "Atajos, alias, scripts y flujo de trabajo para ir más rápido, con menos fricción.",
    points: ["Aliases + funciones", "Scripts útiles", "Flujo de trabajo pro"],
    ctaText: "Quiero aprender",
    ctaHref: "#workshops",
    image: "/img/workshop-terminal.jpg",
    heroPos: "68% 52%",
    imgRight: "4%",
    bg: "linear-gradient(110deg, #083b63 0%, #0b3f78 42%, #071a2f 100%)",
    accent: "#A7D8FF",
    target: fallbackTarget,
  },
  {
    id: "azure",
    title: "DESPLIEGA EN AZURE",
    highlight: "COMO EN LA INDUSTRIA",
    kicker: "Workshop online",
    desc: "Deploy, entornos y buenas prácticas: estructura profesional para producción sin drama.",
    points: ["Deploy real", "Entornos", "Buenas prácticas"],
    ctaText: "Reservar cupo",
    ctaHref: "#cta",
    image: "/img/workshop-azure.jpg",
    heroPos: "68% 50%",
    imgRight: "4%",
    bg: "linear-gradient(110deg, #073a5e 0%, #0b4e86 45%, #061b2e 100%)",
    accent: "#B6E3FF",
    target: fallbackTarget,
  },
  {
    id: "sql",
    title: "SQL DE PELÍCULA",
    highlight: "DATOS QUE CUENTAN HISTORIAS",
    kicker: "Workshop online",
    desc: "Joins, ventanas y patrones para analítica real: consultas que cuentan historias.",
    points: ["Joins y ventanas", "Patrones útiles", "Analítica real"],
    ctaText: "Ver detalles",
    ctaHref: "#workshops",
    image: "/img/workshop-sql.jpg",
    heroPos: "66% 50%",
    imgRight: "4%",
    bg: "linear-gradient(110deg, #053455 0%, #083b6c 45%, #061728 100%)",
    accent: "#BFE3FF",
    target: fallbackTarget,
  },
];

const active = ref(0);
const current = computed(() => slides[active.value]);
const imgOk = reactive<Record<string, boolean | undefined>>({});

function slideVars(s: Slide) {
  return {
    "--bg": s.bg,
    "--accent": s.accent ?? "#BFE3FF",
    "--imgRight": s.imgRight ?? "4%",
  } as Record<string, string>;
}

/* Autoplay (más controlable con timeout) */
const AUTOPLAY_MS = 6500;
let autoplayId: number | null = null;
const paused = ref(false);

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

function stopAutoplay() {
  if (autoplayId) window.clearTimeout(autoplayId);
  autoplayId = null;
}

function scheduleAutoplay() {
  stopAutoplay();
  if (paused.value) return;
  if (prefersReducedMotion()) return;

  autoplayId = window.setTimeout(() => {
    next(false);
    scheduleAutoplay();
  }, AUTOPLAY_MS);
}

function pause() {
  paused.value = true;
  stopAutoplay();
}

function resume() {
  paused.value = false;
  scheduleAutoplay();
}

function go(i: number, user = false) {
  active.value = i;
  if (user) scheduleAutoplay();
}

function next(user = false) {
  active.value = (active.value + 1) % slides.length;
  if (user) scheduleAutoplay();
}

function prev(user = false) {
  active.value = (active.value - 1 + slides.length) % slides.length;
  if (user) scheduleAutoplay();
}

/* Swipe */
let touchX = 0;
function onTouchStart(e: TouchEvent) {
  touchX = e.changedTouches[0]?.clientX ?? 0;
}
function onTouchEnd(e: TouchEvent) {
  const endX = e.changedTouches[0]?.clientX ?? 0;
  const dx = endX - touchX;
  if (Math.abs(dx) < 50) return;
  dx < 0 ? next(true) : prev(true);
}

/* Countdown (computed a partir de "now") */
const now = ref(Date.now());
let clockId: number | null = null;

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

const countdown = computed(() => {
  const targetRaw = current.value.target ?? fallbackTarget;
  const target = new Date(targetRaw).getTime();

  let diff = Math.max(0, target - now.value);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  return {
    days: pad2(days),
    hours: pad2(hours),
    minutes: pad2(minutes),
    seconds: pad2(seconds),
  };
});

function onVisibilityChange() {
  if (document.hidden) pause();
  else resume();
}

onMounted(() => {
  scheduleAutoplay();
  clockId = window.setInterval(() => (now.value = Date.now()), 1000);
  document.addEventListener("visibilitychange", onVisibilityChange);
});

onBeforeUnmount(() => {
  stopAutoplay();
  if (clockId) window.clearInterval(clockId);
  document.removeEventListener("visibilitychange", onVisibilityChange);
});
</script>

<style scoped>
/* ===== Base ===== */
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  color: #fff;
  isolation: isolate;
  min-height: 340px;
  height: clamp(340px, 22vw, 400px);
}

.hero__slides {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: scale(1.01);
  transition: opacity 520ms ease, transform 520ms ease;
  will-change: opacity, transform;
}

.hero__slide.is-active {
  opacity: 1;
  transform: scale(1);
}

.hero__bg {
  position: absolute;
  inset: 0;
  background: var(--bg);
}

.hero__decor {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      900px 380px at 14% 18%,
      rgba(255, 255, 255, 0.1),
      transparent 60%
    ),
    radial-gradient(
      680px 320px at 78% 14%,
      rgba(0, 200, 255, 0.12),
      transparent 62%
    );
}

.hero__scrim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    90deg,
    rgba(5, 45, 85, 0.96) 0%,
    rgba(5, 45, 85, 0.86) 40%,
    rgba(5, 45, 85, 0.58) 52%,
    rgba(5, 45, 85, 0.2) 70%,
    transparent 88%
  );
  pointer-events: none;
}

.hero__art {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  right: 0;

  object-fit: cover;
  pointer-events: none;
  opacity: 0.98;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 18%);
  mask-image: linear-gradient(90deg, transparent 0%, #000 18%);

  filter: drop-shadow(0 16px 34px rgba(0, 0, 0, 0.25));
}

.hero__art.is-hidden {
  display: none;
}

.hero__container {
  position: relative;
  z-index: 2;
  height: 100%;

  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  align-items: stretch;

  padding: 24px clamp(12px, 1.6vw, 20px) 96px;
}

.hero__grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

@media (min-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    align-items: stretch;
  }
  .hero__right-spacer {
    display: block;
  }
}

.hero__right-spacer {
  display: none;
}

.hero__content {
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 12px;
}

.hero__top {
  display: grid;
  gap: 12px;
}

.hero__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.hero__title {
  margin: 0;
  margin-top: 6px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1.03;
  text-wrap: balance;
}

.t1 {
  display: block;
  font-size: clamp(18px, 2.2vw, 28px);
}

.t2 {
  display: block;
  margin-top: 4px;
  font-size: clamp(18px, 1.7vw, 28px);
  color: var(--accent);
}

.hero__desc {
  margin: 0;
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  line-height: 1.55;
  max-width: 66ch;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hero__bullets {
  display: none;
}

.hero__bullets li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.hero__bullets .dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  margin-top: 7px;
  background: rgba(255, 255, 255, 0.56);
  flex: 0 0 auto;
}

.hero__bottom {
  margin-top: 0;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.hero__date {
  margin: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 850;
  font-size: 14px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 0.72rem 1.1rem;
  font-weight: 950;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.22),
    rgba(255, 255, 255, 0.1)
  );
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
  transition: transform 150ms ease, background 150ms ease;
  text-decoration: none;
  color: #fff;
}
.cta:hover {
  transform: translateY(-1px);
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.28),
    rgba(255, 255, 255, 0.12)
  );
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 0.72rem 1rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.94);
  background: rgba(0, 0, 0, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(10px);
  text-decoration: none;
}

.hero__countdown {
  margin-top: 6px;
  margin-bottom: 22px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;

  max-width: 560px;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(12px);
}

.count-item {
  display: grid;
  gap: 4px;
  text-align: center;
}

.count-label {
  font-size: 11px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.78);
}

.count-value {
  min-width: 56px;
  padding: 9px 10px;
  border-radius: 12px;
  font-weight: 950;
  font-size: 22px;
  line-height: 1;
  background: rgba(255, 255, 255, 0.96);
  color: rgba(10, 42, 82, 0.95);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
}

.sep {
  font-weight: 950;
  opacity: 0.75;
  margin-bottom: 6px;
}

/* Chips */
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.42rem 0.74rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.92);
  color: rgba(10, 42, 82, 0.95);
}
.chip-txt {
  font-weight: 950;
  font-size: 0.88rem;
}
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.62rem;
  border-radius: 9999px;
  font-weight: 950;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  background: rgba(188, 225, 255, 0.95);
  color: rgba(10, 42, 82, 0.95);
}

/* ===== Controls ===== */
.hero__controls {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 34px;
  z-index: 3;
  display: flex;
  gap: 12px;
  align-items: center;
}

.nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  font-weight: 950;
  font-size: 20px;
  line-height: 1;
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.dots {
  display: flex;
  gap: 10px;
  align-items: center;
}

.dotbtn {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: width 180ms ease, background 180ms ease;
  cursor: pointer;
}
.dotbtn.active {
  width: 22px;
  background: rgba(255, 255, 255, 0.92);
}

@media (max-width: 1024px) {
  .hero__container {
    max-width: 1200px;
    padding-bottom: 86px;
  }

  .hero__art {
    left: 0;
    width: 100%;
    opacity: 0.16;
    -webkit-mask-image: none;
    mask-image: none;
  }

  .hero__scrim {
    background: linear-gradient(
      180deg,
      rgba(5, 45, 85, 0.86) 0%,
      rgba(5, 45, 85, 0.66) 62%,
      rgba(5, 45, 85, 0.46) 100%
    );
  }

  .count-value {
    min-width: 50px;
    font-size: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__slide {
    transition: none;
  }
  .cta {
    transition: none;
  }
  .dotbtn {
    transition: none;
  }
}
</style>
