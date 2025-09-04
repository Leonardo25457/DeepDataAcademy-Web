<!-- src/views/Home.vue -->
<template>
  <main>
    <HeroLead />

    <!-- Si luego quieres usar LogoWall, descomenta esta línea y vuelve a importar LogoWall y LogoItem -->
    <!-- <LogoWall :logos="logos" /> -->

    

    <!-- Rutas / Cursos -->
    <section class="p-14">
      <div class="container">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="pill">Rutas formativas</p>
            <h2 class="text-2xl font-semibold mt-1">Elige tu camino</h2>
            <p class="sub">
              Programas por niveles, con proyectos y acompañamiento.
            </p>
          </div>
          <RouterLink class="btn btn-ghost h-max" to="/#cta">
            Asesoría gratuita
          </RouterLink>
        </div>

        <div class="grid-3 mt-6">
          <CardCourse
            v-for="c in courses"
            :key="c.id"
            :tag="c.tag"
            :title="c.title"
            :desc="c.desc"
            :features="c.features"
          />
        </div>
      </div>
    </section>

    <!-- Áreas -->
    <section id="areas" class="p-14 bg-blue-50/60">
      <div class="container">
        <p class="pill">📚 Áreas de formación</p>
        <h2 class="text-2xl font-semibold mt-1">Stacks que dominarás</h2>

        <div class="grid-2 mt-6">
          <article class="card">
            <h3 class="font-semibold text-lg">💻 Desarrollo Web</h3>
            <p class="sub">Frontend moderno y buenas prácticas</p>
            <div class="flex flex-wrap items-center gap-3 mt-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt="HTML5" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" alt="CSS3" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt="JS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="40" height="40" alt="Vue" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40" alt="Node" />
              <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="40" height="40" alt="Tailwind" />
            </div>
          </article>

          <article class="card">
            <h3 class="font-semibold text-lg">📊 Data Engineering</h3>
            <p class="sub">Pipelines, orquestación y modelado</p>
            <div class="flex flex-wrap items-center gap-3 mt-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="40" height="40" alt="Python" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="40" height="40" alt="MySQL" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="40" height="40" alt="PostgreSQL" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" width="40" height="40" alt="Apache" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg" width="40" height="40" alt="Airflow" />
            </div>
          </article>

          <article class="card">
            <h3 class="font-semibold text-lg">☁️ Cloud Computing</h3>
            <p class="sub">Infra, contenedores y Kubernetes</p>
            <div class="flex flex-wrap items-center gap-3 mt-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="80" height="40" alt="AWS" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" width="40" height="40" alt="Azure" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" width="40" height="40" alt="GCP" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="40" height="40" alt="Docker" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" width="40" height="40" alt="K8s" />
            </div>
          </article>

          <article class="card">
            <h3 class="font-semibold text-lg">🔐 Ciberseguridad</h3>
            <p class="sub">Sistemas, bash y hardening</p>
            <div class="flex flex-wrap items-center gap-3 mt-3">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" width="40" height="40" alt="Linux" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" width="40" height="40" alt="Bash" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" width="40" height="40" alt="Debian" />
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Cursos gratuitos -->
    <section class="py-14">
      <div class="container">
        <p class="pill">Cursos gratuitos</p>
        <h2 class="text-2xl font-semibold mt-1">Aprende a tu ritmo</h2>
        <div class="grid-4 mt-6">
          <a class="mini-card" href="#"><h4 class="font-semibold">Fundamentos de Programación</h4><span class="sub">Inicio rápido</span></a>
          <a class="mini-card" href="#"><h4 class="font-semibold">Estadística para Data</h4><span class="sub">Asincrónico</span></a>
          <a class="mini-card" href="#"><h4 class="font-semibold">R para análisis</h4><span class="sub">Introducción</span></a>
          <a class="mini-card" href="#"><h4 class="font-semibold">SQL desde cero</h4><span class="sub">Práctico</span></a>
        </div>
      </div>
    </section>

    <!-- Webinars -->
    <section class="py-14 bg-blue-50/60">
      <div class="container">
        <p class="pill">En vivo cada semana</p>
        <h2 class="text-2xl font-semibold mt-1">Webinars y eventos</h2>
        <div class="grid-3 mt-6">
          <article class="card" v-for="w in webinars" :key="w.id">
            <h3 class="font-semibold text-lg">{{ w.title }}</h3>
            <p class="sub">{{ w.description }}</p>
            <p class="meta">{{ new Date(w.start).toLocaleString() }}</p>
            <div class="mt-2"><Countdown :target="w.start" /></div>
            <RouterLink class="btn btn-primary mt-3" :to="`/webinar/${w.id}`">Registrarme</RouterLink>
          </article>
        </div>
        <div class="text-center mt-4">
          <RouterLink class="btn btn-ghost" to="/webinars">Ver todos</RouterLink>
        </div>
      </div>
    </section>

    <!-- Ebooks -->
    <section class="py-14">
      <div class="container">
        <p class="pill">Recursos</p>
        <h2 class="text-2xl font-semibold mt-1">Ebooks y plantillas</h2>
        <div class="grid-4 mt-6">
          <article class="card">
            <h3 class="font-semibold">Guía rápida de SQL</h3>
            <p class="sub">Joins, CTEs y ejercicios.</p>
            <a class="btn btn-ghost mt-2" href="#">Descargar</a>
          </article>
          <article class="card">
            <h3 class="font-semibold">Ruta Data Analyst</h3>
            <p class="sub">Temas por semanas + proyectos.</p>
            <a class="btn btn-ghost mt-2" href="#">Descargar</a>
          </article>
          <article class="card">
            <h3 class="font-semibold">Dashboards Power BI</h3>
            <p class="sub">Plantillas listas para negocio.</p>
            <a class="btn btn-ghost mt-2" href="#">Descargar</a>
          </article>
          <article class="card">
            <h3 class="font-semibold">Regex para analistas</h3>
            <p class="sub">Patrones útiles de limpieza.</p>
            <a class="btn btn-ghost mt-2" href="#">Descargar</a>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section id="cta" class="py-14">
      <div class="container">
        <div class="cta-band cta-dark">
          <div>
            <h3 class="text-xl font-semibold">
              ✨ “Aprende hoy lo que te abrirá las puertas al mañana”
            </h3>
            <p class="sub text-white/90">
              Únete a la próxima cohorte y construye tu portafolio.
            </p>
          </div>
          <a class="btn btn-primary" href="#">Comenzar</a>
        </div>
      </div>
    </section>

    <!-- Widget flotante de asesoría -->
    <AdvisorWidget
      position="right"
      whatsapp="51999999999"
      brand="DeepData Academy"
      title="Asesora Académica"
    />
  </main>
</template>

<script setup lang="ts">
import HeroLead from "../components/HeroLead.vue";
import CardCourse from "../components/CardCourse.vue";
import Countdown from "../components/Countdown.vue";
import courses from "../data/courses";
import webinars from "../data/webinars";
import AdvisorWidget from "../components/AdvisorWidget.vue";
</script>
