<template>
  <section
    class="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- =========================
           HEADER
      ========================== -->
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-6 gap-4"
      >
        <div class="max-w-3xl">
          <span
            class="text-indigo-500 font-bold text-sm uppercase tracking-widest block mb-3"
          >
            Cursos de Formación
          </span>

          <h2
            class="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Tu siguiente nivel empieza 
            <span class="text-indigo-500">aquí</span>
          </h2>

          <p class="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
            " Sumérgete en la tecnología que más te gusta, inicia tu nuevo
            camino y descubrirás lo Grandioso que es "
          </p>
        </div>

        <!-- <RouterLink
          class="text-indigo-500 font-bold flex items-center gap-2 hover:gap-3 transition-all group"
          to="/cursos"
        >
          Ver todas las rutas
          <span
            class="material-icons-round group-hover:translate-x-1 transition-transform"
            >east</span
          >
        </RouterLink> -->
      </div>

      <!-- =========================
           CONTROLS
      ========================== -->
      <!-- <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div class="flex items-center gap-2">
          <button type="button" class="ctrl-btn" @click="toggleAnimation">
            {{ isAnimating ? "⏸️ Pausar" : "▶️ Reanudar" }}
          </button>

          <button type="button" class="ctrl-btn" @click="resetPosition">
            🔄 Reset
          </button>

          <button type="button" class="ctrl-btn" @click="changeDirection">
            ↔️ Dirección
          </button>
        </div>

        <div class="speed-pill">
          Velocidad:
          <span class="font-extrabold tabular-nums">{{
            Math.round(velocity)
          }}</span>
          px/s
        </div>
      </div> -->

      <!-- =========================
           STREAM
      ========================== -->
      <div ref="containerEl" class="stream-container">
        <!-- Fondo partículas -->
        <canvas
          ref="particleCanvasEl"
          class="particle-canvas"
          aria-hidden="true"
        ></canvas>

        <!-- Scanner -->
        <canvas
          ref="scannerCanvasEl"
          class="scanner-canvas"
          aria-hidden="true"
        ></canvas>

        <!-- Fallback -->
        <div
          v-show="!scannerReady"
          class="scanner-line-fallback"
          aria-hidden="true"
        ></div>

        <!-- Cards line -->
        <div
          ref="cardLineEl"
          class="card-line"
          :class="{ dragging: isDragging }"
          @mousedown="startDrag"
          @touchstart.passive="startDragTouch"
          @wheel.prevent="onWheel"
        >
          <div
            v-for="(c, idx) in loopCards"
            :key="`${c.title}-${idx}`"
            class="card-wrapper"
          >
            <!-- =========================
                 CARD (NORMAL)  -> background image + overlay legible
            ========================== -->
            <div
              class="card card-normal"
              :style="{
                '--bg': `url(${c.image})`,
                '--bgpos': c.bgPos ?? 'center',
                '--bgsize': c.bgSize ?? 'cover',
              }"
            >
              <div class="card-info">
                <!-- TOP -->
                <div class="card-top">
                  <div class="card-badges">
                    <!-- <span class="badge">{{ c.badge }}</span> -->
                    <!-- <span class="badge badge-soft">{{ c.level }}</span> -->
                    <!-- <span class="badge badge-soft">{{ c.duration }}</span> -->
                  </div>
                </div>

                <!-- BOTTOM -->
                <div class="card-bottom">
                  <h3 class="card-title" :title="c.title">{{ c.title }}</h3>

                  <p class="card-desc">{{ c.description }}</p>

                  <div class="card-outcome">
                    <span class="outcome-dot" aria-hidden="true"></span>
                    <span class="outcome-text">{{ c.outcome }}</span>
                  </div>

                  <div class="card-footnote">Proyecto publicable</div>
                </div>
              </div>
            </div>

            <!-- =========================
                 ASCII overlay (escaneado)
            ========================== -->
            <div class="card card-ascii" aria-hidden="true">
              <pre class="ascii-content">{{
                asciiByIndex[idx % asciiByIndex.length]
              }}</pre>
            </div>

            <!-- scan pulse -->
            <div
              v-if="scanPulseIndex === idx"
              class="scan-effect"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-sm text-slate-500 dark:text-slate-400">
        Tip: arrastra el carrusel con el mouse o el dedo. La línea central
        “escanea” y revela el overlay.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";

type Card = {
  title: string;
  description: string;
  outcome: string;
  badge: string;
  level: string;
  duration: string;
  image: string;
  bgPos?: string;
  bgSize?: string;
};

/* =========================
   CARDS (tus rutas)
========================= */
const cards: Card[] = [
  {
    title: "Desarrollo Web: Landing Pro con Vue",
    description:
      "Componentes sólidos, responsive y performance.",
    outcome: "Landing premium lista para producción (deploy + SEO básico).",
    badge: "Web",
    level: "Intermedio → Pro",
    duration: "3–4 semanas",
    image: "/img/card_web.png",
    bgPos: "center",
    bgSize: "cover",
  },
  {
    title: "Python + IA: Pipeline end-to-end con Machine Learning",
    description:
      "De datos a modelo: limpieza, features, entrenamiento.",
    outcome: "Pipeline completo + Notebook/API reproducible.",
    badge: "IA",
    level: "Intermedio",
    duration: "4–6 semanas",
    image: "/img/card_python.png",
    bgPos: "center",
    bgSize: "cover",
  },
  {
    title: "Linux: Terminal, permisos, procesos y scripting esencial",
    description:
      "Comandos clave, permisos, pipes, procesos, logs y bash práctico.",
    outcome: "Kit de scripts útiles + workflow pro en terminal.",
    badge: "Linux",
    level: "Fundamentos",
    duration: "2–3 semanas",
    image: "/img/card_linux.png",
    bgPos: "center",
    bgSize: "cover",
  },
  {
    title: "Azure Fundamentals (AZ-900): Ruta rápida y enfocada",
    description:
      "Cloud basics para examen: servicios, costos, gobernanza.",
    outcome: "Mapa mental + simulacros + checklist AZ-900.",
    badge: "Cloud",
    level: "Intro",
    duration: "1–2 semanas",
    image: "/img/card_azure.png",
    bgPos: "center 10%",
    bgSize: "cover",
  },
  {
    title: "SQL: Consultas sólidas (JOINs, GROUP BY, Window Functions)",
    description:
      "SQL que escala: agregaciones, CTEs, consultas limpias.",
    outcome: "Ejercicios resueltos + queries tipo entrevista.",
    badge: "SQL",
    level: "Fundamentos → Intermedio",
    duration: "2–4 semanas",
    image: "/img/card_sql.png",
    bgPos: "center",
    bgSize: "cover",
  },
];

const MULT = 8;
const loopCards = computed(() => {
  const out: Card[] = [];
  for (let i = 0; i < MULT; i++) out.push(...cards);
  return out;
});

/* =========================
   CONSTANTES LAYOUT
========================= */
const CARD_W = 400;
const GAP = 60;
const LINE_PAD = 0;

/* =========================
   ASCII (overlay)
========================= */
const asciiByIndex = ref<string[]>([]);

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function pick<T>(arr: T[]) {
  return arr[randInt(0, arr.length - 1)];
}

function generateCode(width: number, height: number) {
  const header = [
    "// compiled preview • scanner demo",
    "/* generated for visual effect – not executed */",
    "const SCAN_WIDTH = 8;",
    "const FADE_ZONE = 35;",
    "const MAX_PARTICLES = 2500;",
    "const TRANSITION = 0.05;",
  ];

  const helpers = [
    "function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }",
    "function lerp(a, b, t) { return a + (b - a) * t; }",
    "const now = () => performance.now();",
    "function rng(min, max) { return Math.random() * (max - min) + min; }",
  ];

  const particleBlock = (idx: number) => [
    `class Particle${idx} {`,
    "  constructor(x, y, vx, vy, r, a) {",
    "    this.x = x; this.y = y;",
    "    this.vx = vx; this.vy = vy;",
    "    this.r = r; this.a = a;",
    "  }",
    "  step(dt) { this.x += this.vx * dt; this.y += this.vy * dt; }",
    "}",
  ];

  const scannerBlock = [
    "const scanner = {",
    "  x: Math.floor(window.innerWidth / 2),",
    "  width: SCAN_WIDTH,",
    "  glow: 3.5,",
    "};",
    "",
    "function drawParticle(ctx, p) {",
    "  ctx.globalAlpha = clamp(p.a, 0, 1);",
    "  ctx.drawImage(gradient, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);",
    "}",
  ];

  const loopBlock = [
    "function tick(t) {",
    "  // requestAnimationFrame(tick);",
    "  const dt = 0.016;",
    "  // update & render",
    "}",
  ];

  const misc = [
    "const state = { intensity: 1.2, particles: MAX_PARTICLES };",
    "const bounds = { w: window.innerWidth, h: 300 };",
    "const gradient = document.createElement('canvas');",
    "const ctx = gradient.getContext('2d');",
    "ctx.globalCompositeOperation = 'lighter';",
    "// ascii overlay is masked with a 3-phase gradient",
  ];

  const lib: string[] = [];
  header.forEach((l) => lib.push(l));
  helpers.forEach((l) => lib.push(l));
  for (let b = 0; b < 3; b++) particleBlock(b).forEach((l) => lib.push(l));
  scannerBlock.forEach((l) => lib.push(l));
  loopBlock.forEach((l) => lib.push(l));
  misc.forEach((l) => lib.push(l));

  for (let i = 0; i < 40; i++) {
    const n1 = randInt(1, 9);
    const n2 = randInt(10, 99);
    lib.push(`const v${i} = (${n1} + ${n2}) * 0.${randInt(1, 9)};`);
  }
  for (let i = 0; i < 20; i++) {
    lib.push(`if (state.intensity > ${1 + (i % 3)}) { scanner.glow += 0.01; }`);
  }

  let flow = lib.join(" ").replace(/\s+/g, " ").trim();
  const totalChars = width * height;
  while (flow.length < totalChars + width) flow += " " + pick(lib);

  let out = "";
  let offset = 0;
  for (let row = 0; row < height; row++) {
    let line = flow.slice(offset, offset + width);
    if (line.length < width) line += " ".repeat(width - line.length);
    out += line + (row < height - 1 ? "\n" : "");
    offset += width;
  }
  return out;
}

function seedAscii() {
  const cardW = 400;
  const cardH = 250;
  const charW = 6;
  const lineH = 13;
  const width = Math.floor(cardW / charW);
  const height = Math.floor(cardH / lineH);

  const poolSize = Math.min(70, loopCards.value.length);
  asciiByIndex.value = Array.from({ length: poolSize }, () =>
    generateCode(width, height)
  );
}

/* =========================
   STREAM ENGINE (cards)
========================= */
const containerEl = ref<HTMLElement | null>(null);
const cardLineEl = ref<HTMLElement | null>(null);

const position = ref(0);
const velocity = ref(120);
const direction = ref(-1);

const isAnimating = ref(true);
const isDragging = ref(false);

let rafId = 0;
let lastTime = 0;

let lastPointerX = 0;
let pointerVelocity = 0;

const friction = 0.95;
const minVelocity = 30;

let containerWidth = 0;
let lineWidth = 0;

const scanPulseIndex = ref<number | null>(null);
const scanningActive = ref(false);

function calculateDimensions() {
  const container = containerEl.value;
  const line = cardLineEl.value;
  if (!container || !line) return;

  containerWidth = container.offsetWidth;

  const count = line.querySelectorAll(".card-wrapper").length;
  lineWidth = count * CARD_W + (count - 1) * GAP + LINE_PAD * 2;
}

function loopWrap() {
  if (position.value < -lineWidth) position.value = containerWidth;
  else if (position.value > containerWidth) position.value = -lineWidth;
}

function applyPosition() {
  const line = cardLineEl.value;
  if (!line) return;
  line.style.transform = `translateX(${position.value}px)`;
  updateClippingAndPulse();
}

function setStartAlignedToScanner() {
  position.value = containerWidth / 2 - CARD_W / 2 - LINE_PAD;
  loopWrap();
  applyPosition();
}

function getScannerBounds() {
  const container = containerEl.value;
  if (!container) return { left: 0, right: 0, localX: 0 };

  const rect = container.getBoundingClientRect();
  const scannerWidth = 8;
  const scannerX = rect.left + rect.width / 2;

  return {
    left: scannerX - scannerWidth / 2,
    right: scannerX + scannerWidth / 2,
    localX: rect.width / 2,
  };
}

function updateClippingAndPulse() {
  const line = cardLineEl.value;
  const container = containerEl.value;
  if (!line || !container) return;

  const { left: scannerLeft, right: scannerRight } = getScannerBounds();

  scanPulseIndex.value = null;
  let anyScanning = false;

  const wrappers = Array.from(
    line.querySelectorAll<HTMLElement>(".card-wrapper")
  );
  wrappers.forEach((wrapper, idx) => {
    const rect = wrapper.getBoundingClientRect();
    const cardLeft = rect.left;
    const cardRight = rect.right;
    const cardW = rect.width;

    const normal = wrapper.querySelector<HTMLElement>(".card-normal");
    const ascii = wrapper.querySelector<HTMLElement>(".card-ascii");
    if (!normal || !ascii) return;

    if (cardLeft < scannerRight && cardRight > scannerLeft) {
      anyScanning = true;

      const intersectLeft = Math.max(scannerLeft - cardLeft, 0);
      const intersectRight = Math.min(scannerRight - cardLeft, cardW);

      const normalClipRight = (intersectLeft / cardW) * 100;
      const asciiClipLeft = (intersectRight / cardW) * 100;

      normal.style.setProperty("--clip-right", `${normalClipRight}%`);
      ascii.style.setProperty("--clip-left", `${asciiClipLeft}%`);

      if (!wrapper.hasAttribute("data-scanned") && intersectLeft > 0) {
        wrapper.setAttribute("data-scanned", "true");
        scanPulseIndex.value = idx;

        window.setTimeout(() => {
          wrapper.removeAttribute("data-scanned");
          if (scanPulseIndex.value === idx) scanPulseIndex.value = null;
        }, 600);
      }
    } else {
      if (cardRight < scannerLeft) {
        normal.style.setProperty("--clip-right", "100%");
        ascii.style.setProperty("--clip-left", "100%");
      } else if (cardLeft > scannerRight) {
        normal.style.setProperty("--clip-right", "0%");
        ascii.style.setProperty("--clip-left", "0%");
      }
      wrapper.removeAttribute("data-scanned");
    }
  });

  scanningActive.value = anyScanning;
  setScannerScanning(anyScanning);
}

function animate(t: number) {
  const dt = lastTime ? (t - lastTime) / 1000 : 0;
  lastTime = t;

  if (isAnimating.value && !isDragging.value) {
    if (velocity.value > minVelocity) velocity.value *= friction;
    else velocity.value = Math.max(minVelocity, velocity.value);

    position.value += velocity.value * direction.value * dt;
    loopWrap();
    applyPosition();
  }

  rafId = requestAnimationFrame(animate);
}

/* Drag mouse */
function startDrag(e: MouseEvent) {
  e.preventDefault();
  isDragging.value = true;
  isAnimating.value = false;

  lastPointerX = e.clientX;
  pointerVelocity = 0;

  document.addEventListener("mousemove", onDrag, { passive: false });
  document.addEventListener("mouseup", endDrag, { passive: true });

  document.body.style.userSelect = "none";
  document.body.style.cursor = "grabbing";
}

function onDrag(e: MouseEvent) {
  if (!isDragging.value) return;
  e.preventDefault();

  const dx = e.clientX - lastPointerX;
  position.value += dx;
  pointerVelocity = dx * 60;
  lastPointerX = e.clientX;

  loopWrap();
  applyPosition();
}

function endDrag() {
  if (!isDragging.value) return;

  isDragging.value = false;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", endDrag);

  if (Math.abs(pointerVelocity) > minVelocity) {
    velocity.value = Math.abs(pointerVelocity);
    direction.value = pointerVelocity > 0 ? 1 : -1;
  } else {
    velocity.value = 120;
  }

  isAnimating.value = true;
  document.body.style.userSelect = "";
  document.body.style.cursor = "";
}

/* Drag touch */
function startDragTouch(e: TouchEvent) {
  if (!e.touches?.[0]) return;
  const t = e.touches[0];

  isDragging.value = true;
  isAnimating.value = false;

  lastPointerX = t.clientX;
  pointerVelocity = 0;

  document.addEventListener("touchmove", onDragTouch, { passive: false });
  document.addEventListener("touchend", endDragTouch, { passive: true });
}

function onDragTouch(e: TouchEvent) {
  if (!isDragging.value || !e.touches?.[0]) return;
  e.preventDefault();

  const t = e.touches[0];
  const dx = t.clientX - lastPointerX;
  position.value += dx;
  pointerVelocity = dx * 60;
  lastPointerX = t.clientX;

  loopWrap();
  applyPosition();
}

function endDragTouch() {
  if (!isDragging.value) return;

  isDragging.value = false;
  document.removeEventListener("touchmove", onDragTouch);
  document.removeEventListener("touchend", endDragTouch);

  if (Math.abs(pointerVelocity) > minVelocity) {
    velocity.value = Math.abs(pointerVelocity);
    direction.value = pointerVelocity > 0 ? 1 : -1;
  } else {
    velocity.value = 120;
  }

  isAnimating.value = true;
}

function onWheel(e: WheelEvent) {
  const scrollSpeed = 20;
  const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
  position.value += delta;
  loopWrap();
  applyPosition();
}

/* Controls */
// function toggleAnimation() {
//   isAnimating.value = !isAnimating.value;
// }
// function resetPosition() {
//   velocity.value = 120;
//   direction.value = -1;
//   isAnimating.value = true;
//   isDragging.value = false;
//   setStartAlignedToScanner();
// }
// function changeDirection() {
//   direction.value *= -1;
// }

/* =========================
   CANVAS: background particles
========================= */
const particleCanvasEl = ref<HTMLCanvasElement | null>(null);
let pCtx: CanvasRenderingContext2D | null = null;
let pRaf = 0;

type BgParticle = {
  x: number;
  y: number;
  r: number;
  a: number;
  vx: number;
  tw: number;
};
let bg: BgParticle[] = [];
let pw = 0,
  ph = 0;

function prand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function setupParticleCanvas() {
  const canvas = particleCanvasEl.value;
  const container = containerEl.value;
  if (!canvas || !container) return;

  const rect = container.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);

  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  canvas.style.width = rect.width + "px";
  canvas.style.height = rect.height + "px";

  pCtx = canvas.getContext("2d");
  if (!pCtx) return;
  pCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

  pw = rect.width;
  ph = rect.height;

  const count = Math.floor(Math.min(520, Math.max(260, (pw * ph) / 1200)));
  bg = Array.from({ length: count }, () => ({
    x: prand(0, pw),
    y: prand(0, ph),
    r: prand(0.6, 2.0),
    a: prand(0.12, 0.65),
    vx: prand(18, 70),
    tw: prand(0.01, 0.06),
  }));
}

function tickBackground(t: number) {
  if (!pCtx) {
    pRaf = requestAnimationFrame(tickBackground);
    return;
  }

  pCtx.clearRect(0, 0, pw, ph);

  pCtx.globalCompositeOperation = "source-over";
  pCtx.fillStyle = "rgba(0,0,0,1)";
  pCtx.fillRect(0, 0, pw, ph);

  pCtx.globalCompositeOperation = "lighter";

  const time = t * 0.001;
  for (const s of bg) {
    s.x += s.vx * 0.016;
    if (s.x > pw + 50) {
      s.x = -50;
      s.y = prand(0, ph);
    }

    s.y += Math.sin(time + s.x * 0.01) * 0.08;

    const twk = 0.65 + Math.sin(time / 2 + s.y * 0.02) * 0.35;
    const a = Math.max(0, Math.min(1, s.a * twk));

    pCtx.globalAlpha = a;
    pCtx.fillStyle = "rgba(60,150,255,1)";
    pCtx.beginPath();
    pCtx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    pCtx.fill();

    pCtx.globalAlpha = a * 0.4;
    pCtx.fillStyle = "rgba(140,200,255,1)";
    pCtx.beginPath();
    pCtx.arc(s.x, s.y, s.r * 2.2, 0, Math.PI * 2);
    pCtx.fill();
  }

  pRaf = requestAnimationFrame(tickBackground);
}

/* =========================
   CANVAS: scanner particles
========================= */
const scannerCanvasEl = ref<HTMLCanvasElement | null>(null);
let sCtx: CanvasRenderingContext2D | null = null;
let sRaf = 0;

const scannerReady = ref(false);

type ScanParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
  originalAlpha: number;
  life: number;
  time: number;
  twinkleSpeed: number;
  twinkleAmount: number;
};

let sw = 0,
  sh = 0;
let scanParticles: ScanParticle[] = [];
let maxParticles = 800;
let intensity = 0.8;
let fadeZone = 60;

let currentIntensity = intensity;
let currentMaxParticles = maxParticles;
let currentFadeZone = fadeZone;

const baseIntensity = 0.8;
const baseMaxParticles = 800;
const baseFadeZone = 60;

const scanTargetIntensity = 2.15;
const scanTargetParticles = 2800;
const scanTargetFadeZone = 35;

let transitionSpeed = 0.05;
let glowIntensity = 1.4;

let gradientCanvas: HTMLCanvasElement | null = null;

function setupScannerCanvas() {
  const canvas = scannerCanvasEl.value;
  const container = containerEl.value;
  if (!canvas || !container) return;

  const rect = container.getBoundingClientRect();
  const dpr = Math.min(2, window.devicePixelRatio || 1);

  sw = rect.width;
  sh = Math.max(300, rect.height);

  canvas.width = Math.floor(sw * dpr);
  canvas.height = Math.floor(sh * dpr);
  canvas.style.width = sw + "px";
  canvas.style.height = sh + "px";

  sCtx = canvas.getContext("2d");
  if (!sCtx) return;
  sCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

  createGradientCache();
  initScanParticles();

  scannerReady.value = true;
}

function createGradientCache() {
  gradientCanvas = document.createElement("canvas");
  gradientCanvas.width = 16;
  gradientCanvas.height = 16;
  const gradientCtx = gradientCanvas.getContext("2d");
  if (!gradientCtx) return;

  const half = 8;
  const g = gradientCtx.createRadialGradient(half, half, 0, half, half, half);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.32, "rgba(196,181,253,0.9)");
  g.addColorStop(0.72, "rgba(139,92,246,0.5)");
  g.addColorStop(1, "transparent");

  gradientCtx.fillStyle = g;
  gradientCtx.beginPath();
  gradientCtx.arc(half, half, half, 0, Math.PI * 2);
  gradientCtx.fill();
}

function createScanParticle(): ScanParticle {
  const intensityRatio = intensity / baseIntensity;
  const speedMul = 1 + (intensityRatio - 1) * 1.2;
  const sizeMul = 1 + (intensityRatio - 1) * 0.75;

  const x = sw / 2 + prand(-1.5, 1.5);
  const y = prand(0, sh);

  const p: ScanParticle = {
    x,
    y,
    vx: prand(0.2, 1.05) * speedMul,
    vy: prand(-0.16, 0.16) * speedMul,
    radius: prand(0.45, 1.05) * sizeMul,
    alpha: prand(0.65, 1.0),
    decay: prand(0.005, 0.022) * (2 - intensityRatio * 0.5),
    originalAlpha: 0,
    life: 1,
    time: 0,
    twinkleSpeed: prand(0.02, 0.08) * speedMul,
    twinkleAmount: prand(0.12, 0.28),
  };

  p.originalAlpha = p.alpha;
  return p;
}

function initScanParticles() {
  scanParticles = [];
  const initial = Math.min(baseMaxParticles, 900);
  for (let i = 0; i < initial; i++) scanParticles.push(createScanParticle());
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function drawLightBar() {
  if (!sCtx) return;

  const x = sw / 2;
  const lineWidth = 4;

  const vGrad = sCtx.createLinearGradient(0, 0, 0, sh);
  vGrad.addColorStop(0, "rgba(255,255,255,0)");
  vGrad.addColorStop(fadeZone / sh, "rgba(255,255,255,1)");
  vGrad.addColorStop(1 - fadeZone / sh, "rgba(255,255,255,1)");
  vGrad.addColorStop(1, "rgba(255,255,255,0)");

  sCtx.globalCompositeOperation = "lighter";

  const targetGlow = scanningActive.value ? 5.2 : 2.1;
  glowIntensity += (targetGlow - glowIntensity) * transitionSpeed;

  sCtx.save();
  sCtx.globalAlpha = scanningActive.value ? 0.55 : 0.35;
  sCtx.shadowColor = "rgba(196,181,253,0.9)";
  sCtx.shadowBlur = 34 * glowIntensity;
  sCtx.fillStyle = "rgba(255,255,255,0.14)";
  roundRect(sCtx, x - lineWidth * 1.25, 0, lineWidth * 2.5, sh, 20);
  sCtx.fill();
  sCtx.restore();

  const core = sCtx.createLinearGradient(
    x - lineWidth / 2,
    0,
    x + lineWidth / 2,
    0
  );
  core.addColorStop(0, "rgba(255,255,255,0)");
  core.addColorStop(0.25, `rgba(255,255,255,${1.05 * glowIntensity})`);
  core.addColorStop(0.5, `rgba(255,255,255,${1.2 * glowIntensity})`);
  core.addColorStop(0.75, `rgba(255,255,255,${1.05 * glowIntensity})`);
  core.addColorStop(1, "rgba(255,255,255,0)");

  sCtx.globalAlpha = 1;
  sCtx.fillStyle = core;
  roundRect(sCtx, x - lineWidth / 2, 0, lineWidth, sh, 16);
  sCtx.fill();

  const g1 = sCtx.createLinearGradient(
    x - lineWidth * 2.3,
    0,
    x + lineWidth * 2.3,
    0
  );
  g1.addColorStop(0, "rgba(139,92,246,0)");
  g1.addColorStop(0.5, `rgba(196,181,253,${0.95 * glowIntensity})`);
  g1.addColorStop(1, "rgba(139,92,246,0)");

  sCtx.globalAlpha = scanningActive.value ? 1.0 : 0.9;
  sCtx.fillStyle = g1;
  roundRect(sCtx, x - lineWidth * 2.3, 0, lineWidth * 4.6, sh, 28);
  sCtx.fill();

  const g2 = sCtx.createLinearGradient(
    x - lineWidth * 4.8,
    0,
    x + lineWidth * 4.8,
    0
  );
  g2.addColorStop(0, "rgba(139,92,246,0)");
  g2.addColorStop(0.5, `rgba(139,92,246,${0.52 * glowIntensity})`);
  g2.addColorStop(1, "rgba(139,92,246,0)");

  sCtx.globalAlpha = scanningActive.value ? 0.9 : 0.7;
  sCtx.fillStyle = g2;
  roundRect(sCtx, x - lineWidth * 4.8, 0, lineWidth * 9.6, sh, 40);
  sCtx.fill();

  if (scanningActive.value) {
    const g3 = sCtx.createLinearGradient(
      x - lineWidth * 10,
      0,
      x + lineWidth * 10,
      0
    );
    g3.addColorStop(0, "rgba(139,92,246,0)");
    g3.addColorStop(0.5, "rgba(139,92,246,0.26)");
    g3.addColorStop(1, "rgba(139,92,246,0)");

    sCtx.globalAlpha = 0.55;
    sCtx.fillStyle = g3;
    roundRect(sCtx, x - lineWidth * 10, 0, lineWidth * 20, sh, 55);
    sCtx.fill();
  }

  sCtx.globalCompositeOperation = "destination-in";
  sCtx.globalAlpha = 1;
  sCtx.fillStyle = vGrad;
  sCtx.fillRect(0, 0, sw, sh);

  sCtx.globalCompositeOperation = "lighter";
}

function updateScanParticle(p: ScanParticle) {
  p.x += p.vx;
  p.y += p.vy;
  p.time++;

  p.alpha =
    p.originalAlpha * p.life +
    Math.sin(p.time * p.twinkleSpeed) * p.twinkleAmount;
  p.life -= p.decay;

  if (p.x > sw + 10 || p.life <= 0) resetScanParticle(p);
}

function resetScanParticle(p: ScanParticle) {
  p.x = sw / 2 + prand(-1.5, 1.5);
  p.y = prand(0, sh);
  p.vx = prand(0.2, 1.05);
  p.vy = prand(-0.16, 0.16);
  p.radius = prand(0.45, 1.05);
  p.alpha = prand(0.65, 1.0);
  p.originalAlpha = p.alpha;
  p.life = 1;
  p.time = 0;
  p.decay = prand(0.005, 0.022);
  p.twinkleSpeed = prand(0.02, 0.08);
  p.twinkleAmount = prand(0.12, 0.28);
}

function drawScanParticle(p: ScanParticle) {
  if (!sCtx || !gradientCanvas) return;
  if (p.life <= 0) return;

  let fadeA = 1;
  if (p.y < fadeZone) fadeA = p.y / fadeZone;
  else if (p.y > sh - fadeZone) fadeA = (sh - p.y) / fadeZone;
  fadeA = Math.max(0, Math.min(1, fadeA));

  sCtx.globalAlpha = Math.max(0, Math.min(1, p.alpha * fadeA));
  sCtx.drawImage(
    gradientCanvas,
    p.x - p.radius,
    p.y - p.radius,
    p.radius * 2,
    p.radius * 2
  );
}

function tickScanner() {
  if (!sCtx) {
    sRaf = requestAnimationFrame(tickScanner);
    return;
  }

  const targetI = scanningActive.value ? scanTargetIntensity : baseIntensity;
  const targetM = scanningActive.value ? scanTargetParticles : baseMaxParticles;
  const targetF = scanningActive.value ? scanTargetFadeZone : baseFadeZone;

  currentIntensity += (targetI - currentIntensity) * transitionSpeed;
  currentMaxParticles += (targetM - currentMaxParticles) * transitionSpeed;
  currentFadeZone += (targetF - currentFadeZone) * transitionSpeed;

  intensity = currentIntensity;
  maxParticles = Math.floor(currentMaxParticles);
  fadeZone = currentFadeZone;

  sCtx.globalCompositeOperation = "source-over";
  sCtx.clearRect(0, 0, sw, sh);

  drawLightBar();

  sCtx.globalCompositeOperation = "lighter";
  for (let i = 0; i < scanParticles.length; i++) {
    const p = scanParticles[i];
    updateScanParticle(p);
    drawScanParticle(p);
  }

  if (Math.random() < intensity && scanParticles.length < maxParticles)
    scanParticles.push(createScanParticle());

  const ratio = intensity / baseIntensity;
  if (ratio > 1.1 && Math.random() < (ratio - 1.0) * 1.2)
    scanParticles.push(createScanParticle());
  if (ratio > 1.3 && Math.random() < (ratio - 1.3) * 1.4)
    scanParticles.push(createScanParticle());
  if (ratio > 1.5 && Math.random() < (ratio - 1.5) * 1.8)
    scanParticles.push(createScanParticle());

  const softLimit = maxParticles + 240;
  if (scanParticles.length > softLimit)
    scanParticles.splice(0, Math.min(18, scanParticles.length - maxParticles));

  sRaf = requestAnimationFrame(tickScanner);
}

function setScannerScanning(_active: boolean) {
  // reservado por claridad
}

/* Resize */
function onResize() {
  calculateDimensions();
  setupParticleCanvas();
  setupScannerCanvas();
  setStartAlignedToScanner();
}

/* Lifecycle */
onMounted(async () => {
  seedAscii();
  await nextTick();

  calculateDimensions();
  setStartAlignedToScanner();

  setupParticleCanvas();
  setupScannerCanvas();

  rafId = requestAnimationFrame(animate);
  pRaf = requestAnimationFrame(tickBackground);
  sRaf = requestAnimationFrame(tickScanner);

  window.addEventListener("resize", onResize, { passive: true });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
  cancelAnimationFrame(pRaf);
  cancelAnimationFrame(sRaf);
  window.removeEventListener("resize", onResize);

  document.removeEventListener("mousemove", onDrag as any);
  document.removeEventListener("mouseup", endDrag as any);
  document.removeEventListener("touchmove", onDragTouch as any);
  document.removeEventListener("touchend", endDragTouch as any);
});
</script>

<style scoped>
/* =========================
   CONTROLS
========================= */
.ctrl-btn {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: 800;
  cursor: pointer;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  font-size: 14px;
}
.ctrl-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.speed-pill {
  color: white;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

/* =========================
   STREAM CONTAINER
========================= */
.stream-container {
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 28px;

  background: #000;
  /* border: 1px solid rgba(255, 255, 255, 0.08); */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
}

/* Vignette */
.stream-container::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 12;
  pointer-events: none;
  background: radial-gradient(
    1200px 260px at 50% 50%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.55) 70%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

/* Side fades */
.stream-container::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 18;
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.85) 6%,
    rgba(0, 0, 0, 0) 22%,
    rgba(0, 0, 0, 0) 78%,
    rgba(0, 0, 0, 0.85) 94%,
    rgba(0, 0, 0, 1) 100%
  );
}

/* Canvases */
.particle-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.scanner-canvas {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 300px;
  z-index: 50;
  pointer-events: none;
}

.scanner-line-fallback {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 300px;
  border-radius: 999px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.75),
    rgba(196, 181, 253, 1),
    rgba(255, 255, 255, 0.75),
    transparent
  );
  box-shadow: 0 0 22px rgba(196, 181, 253, 0.55),
    0 0 60px rgba(139, 92, 246, 0.3);
  opacity: 0.45;
  pointer-events: none;
  z-index: 45;
}

/* =========================
   CARD LINE
========================= */
.card-line {
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 60px;
  white-space: nowrap;
  cursor: grab;
  user-select: none;
  will-change: transform;
  padding-left: 0;
  padding-right: 0;
}
.card-line.dragging {
  cursor: grabbing;
}

/* Wrapper */
.card-wrapper {
  position: relative;
  width: 400px;
  height: 250px;
  flex-shrink: 0;
}

/* Base card */
.card {
  position: absolute;
  inset: 0;
  border-radius: 15px;
  overflow: hidden;
}

/* =========================
   CARD NORMAL (BACKGROUND IMAGE)
========================= */
.card-normal {
  z-index: 2;
  clip-path: inset(0 0 0 var(--clip-right, 0%));

  background-image: var(--bg);
  background-size: var(--bgsize);
  background-position: var(--bgpos);
  background-repeat: no-repeat;

  filter: saturate(1.05) contrast(1.08) brightness(0.95);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

/* Overlay para NO opacar el texto */
.card-normal::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;

  background: radial-gradient(
      900px 260px at 30% 20%,
      rgba(99, 102, 241, 0.22),
      transparent 55%
    ),
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.92) 0%,
      rgba(0, 0, 0, 0.55) 45%,
      rgba(0, 0, 0, 0.18) 78%,
      rgba(0, 0, 0, 0.08) 100%
    );
}

/* =========================
   CARD INFO (FULL HEIGHT)
========================= */
.card-info {
  position: absolute;
  inset: 0;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* TOP + BOTTOM */
  padding: 16px 16px 14px;
}

.card-top {
  display: flex;
  justify-content: flex-start;
}

.card-bottom {
  display: flex;
  flex-direction: column;
}

/* badges */
.card-badges {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.92);
  background: rgba(99, 102, 241, 0.34);
  border: 1px solid rgba(99, 102, 241, 0.35);
  backdrop-filter: blur(6px);
}

.badge-soft {
  background: rgba(255, 255, 255, 0.12);
  /* border: 1px solid rgba(255, 255, 255, 0.14); */
}

/* text */
.card-title {
  color: #fff;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.15;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.65);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-desc {
  margin: 0 0 10px 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 12.5px;
  line-height: 1.35;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.65);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-outcome {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.outcome-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(196, 181, 253, 0.95);
  box-shadow: 0 0 18px rgba(196, 181, 253, 0.6);
}

.outcome-text {
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  line-height: 1.2;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.65);

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footnote {
  margin-top: 6px;
  font-size: 11px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.78);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.65);
}

/* =========================
   ASCII (REVEAL)
========================= */
.card-ascii {
  background: transparent;
  z-index: 1;
  clip-path: inset(0 calc(100% - var(--clip-left, 0%)) 0 0);
}

.ascii-content {
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  color: rgba(220, 210, 255, 0.6);
  font-family: "Courier New", ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  line-height: 13px;
  overflow: hidden;
  white-space: pre;
  animation: glitch 0.1s infinite linear alternate-reverse;

  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 30%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 0.2) 100%
  );
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 30%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

@keyframes glitch {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 0.9;
  }
  16% {
    opacity: 1;
  }
  49% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  99% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}

/* scan pulse */
.scan-effect {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.25),
    transparent
  );
  animation: scanEffect 0.6s ease-out;
  pointer-events: none;
  z-index: 25;
}

@keyframes scanEffect {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
