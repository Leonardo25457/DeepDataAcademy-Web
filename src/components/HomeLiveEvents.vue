<template>
  <section
    class="py-24 relative isolate overflow-hidden border-t transition-colors duration-300
         bg-white/30 dark:bg-white/0 backdrop-blur-[2px]
         border-slate-200 dark:border-slate-800/50"
  >
    <!-- Blobs / glow background -->
    <div
      class="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none
             bg-indigo-500/10 dark:bg-purple-900/20 mix-blend-multiply dark:mix-blend-screen"
    />
    <div
      class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 pointer-events-none
             bg-sky-500/10 dark:bg-blue-900/20 mix-blend-multiply dark:mix-blend-screen"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          <span class="text-gradient">Descubre Nuestros Webinars </span>
        </h2>
        <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300/80">
          Accede a especializaciones diseñadas para impulsar tu carrera.
          Elige el camino que más se adapte a ti y empieza hoy.
        </p>
      </div>

      <!-- Top row (3) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <article
          v-for="c in topCourses"
          :key="c.title"
          class="card-container group relative rounded-2xl overflow-hidden h-[420px] shadow-xl
                 bg-white border border-slate-200
                 dark:bg-slate-950/60 dark:border-slate-800"
        >
          <div class="glow-effect absolute inset-0 rounded-2xl"></div>

          <!-- Image -->
          <div class="absolute inset-0">
            <img
              :alt="c.alt"
              :src="c.image"
              class="w-full h-full object-cover
                     opacity-95 dark:opacity-90
                     group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <!-- ✅ Overlay SUAVE global (para contraste mínimo, NO tapa logos) -->
            <div class="absolute inset-0 soft-overlay" />

            <!-- ✅ Banda inferior: aquí va la legibilidad del texto (SIN tapar el centro) -->
            <div class="absolute inset-0 bottom-band" />
          </div>

          <!-- Content: pegado abajo -->
          <div class="relative z-10 h-full p-6 sm:p-7 lg:p-8">
            <div class="h-full flex flex-col justify-end">
              <div class="caption-box">
                <h3 class="caption-title">
                  <span class="block line-clamp-2">{{ c.title }}</span>
                </h3>

                <p class="caption-desc">
                  <span class="block line-clamp-3">{{ c.description }}</span>
                </p>

                <RouterLink :to="c.to" class="btn-cta">
                  Ver 
                </RouterLink>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Bottom row (2 centered) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 mx-auto gap-8">
        <article
          v-for="c in bottomCourses"
          :key="c.title"
          class="card-container group relative rounded-2xl overflow-hidden h-[420px] shadow-xl
                 bg-white border border-slate-200
                 dark:bg-slate-950/60 dark:border-slate-800"
        >
          <div class="glow-effect absolute inset-0 rounded-2xl"></div>

          <div class="absolute inset-0">
            <img
              :alt="c.alt"
              :src="c.image"
              class="w-full h-full object-cover
                     opacity-95 dark:opacity-90
                     group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div class="absolute inset-0 soft-overlay" />
            <div class="absolute inset-0 bottom-band" />
          </div>

          <div class="relative z-10 h-full p-6 sm:p-7 lg:p-8">
            <div class="h-full flex flex-col justify-end">
              <div class="caption-box">
                <h3 class="caption-title">
                  <span class="block line-clamp-2">{{ c.title }}</span>
                </h3>

                <p class="caption-desc">
                  <span class="block line-clamp-3">{{ c.description }}</span>
                </p>

                <RouterLink :to="c.to" class="btn-cta">
                  Ver
                </RouterLink>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type CourseCard = {
  title: string;
  description: string;
  image: string;
  alt: string;
  to: string;
};

const courses: CourseCard[] = [
  {
    title: "Python Data Science",
    description:
      "Domina Python aplicado a análisis y ciencia de datos: ETL, visualización y fundamentos de ML.",
    image: "/img/Python_Work.png",
    alt: "Python Data Science",
    to: "/webinars",
  },
  {
    title: "Desarrollo Web",
    description:
      "Construye interfaces modernas y responsive con buenas prácticas, componentes y despliegue.",
    image: "/img/Web.png",
    alt: "Desarrollo Web",
    to: "/webinars",
  },
  {
    title: "SQL Mastery",
    description:
      "Aprende SQL desde cero a avanzado: consultas, modelado, optimización y análisis con datos reales.",
    image: "/img/SQL_Work.png",
    alt: "SQL Mastery",
    to: "/webinars",
  },
  {
    title: "Azure Fundamentals",
    description:
      "Empieza en cloud con Azure: servicios clave, identidad, recursos y buenas prácticas.",
    image: "/img/Azure_Work.png",
    alt: "Azure Fundamentals",
    to: "/webinars",
  },
  {
    title: "Linux Administration",
    description:
      "Administra Linux como pro: terminal, usuarios, permisos, servicios, redes y automatización.",
    image: "/img/Linux_Work.png",
    alt: "Linux Administration",
    to: "/webinars",
  },
];

const topCourses = courses.slice(0, 3);
const bottomCourses = courses.slice(3);
</script>

<style scoped>
/* Título gradiente */
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #4f46e5, #7c3aed, #2563eb);
}
:global(.dark) .text-gradient {
  background-image: linear-gradient(to right, #818cf8, #a78bfa, #60a5fa);
}

/* Glow effect */
.glow-effect::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(
    45deg,
    rgba(99, 102, 241, 0.55),
    transparent,
    rgba(59, 130, 246, 0.55)
  );
  z-index: -1;
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card-container:hover .glow-effect::before {
  opacity: 0.55;
}

/* ✅ Overlay suave global: NO mata logos/texto de la imagen */
.soft-overlay {
  background: linear-gradient(
    to bottom,
    rgba(2, 6, 23, 0.05),
    rgba(2, 6, 23, 0.10)
  );
}
:global(.dark) .soft-overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.10),
    rgba(0, 0, 0, 0.22)
  );
}

/* ✅ Banda inferior: aquí garantizamos lectura */
.bottom-band {
  background: linear-gradient(
    to top,
    rgba(2, 6, 23, 0.92) 0%,
    rgba(2, 6, 23, 0.65) 28%,
    rgba(2, 6, 23, 0.18) 62%,
    rgba(2, 6, 23, 0.00) 100%
  );
}
:global(.dark) .bottom-band {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.92) 0%,
    rgba(0, 0, 0, 0.70) 30%,
    rgba(0, 0, 0, 0.20) 65%,
    rgba(0, 0, 0, 0.00) 100%
  );
}

/* Caption box (abajo) */
.caption-box {
  border-radius: 1.25rem;
  padding: 1.1rem 1.15rem;
  background: rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(2px);
}
:global(.dark) .caption-box {
  background: rgba(0, 0, 0, 0.10);
}

/* Tipografía */
.caption-title {
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: white;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);
  font-size: 1.6rem;
  line-height: 1.15;
}
@media (min-width: 640px) {
  .caption-title {
    font-size: 1.75rem;
  }
}
@media (min-width: 1024px) {
  .caption-title {
    font-size: 2rem;
  }
}

.caption-desc {
  margin-top: 0.65rem;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.86rem;
  line-height: 1.55;
  min-height: 72px; /* alinea cards */
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
}

/* Botón */
.btn-cta {
  margin-top: 1rem;
  width: 100%;
  padding: 0.8rem 1.25rem;
  border-radius: 0.95rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: white;
  font-weight: 700;
  text-align: center;
  background-image: linear-gradient(to right, #4f6cf7, #3b82f6);
  box-shadow: 0 18px 35px rgba(79, 108, 247, 0.25);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.btn-cta:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 40px rgba(79, 108, 247, 0.35);
  background-image: linear-gradient(to right, #3f55f0, #2563eb);
}
</style>
