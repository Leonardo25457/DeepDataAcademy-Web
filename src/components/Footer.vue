<template>
  <footer class="site-footer text-white">
    <!-- Top -->
    <div class="container py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
        <!-- Suscripción -->
        <section class="md:col-span-5 space-y-4">
          <h3
            class="text-2xl md:text-3xl font-extrabold tracking-tight uppercase"
          >
            Únete a nuestra comunidad
          </h3>
          <p class="text-white/80 max-w-lg">
            Suscríbete y mantente al día con las últimas noticias, ofertas
            exclusivas y recursos enviados directamente a tu correo.
          </p>

          <form
            class="flex flex-col sm:flex-row gap-3 max-w-xl"
            @submit.prevent="onSubscribe"
          >
            <label for="email" class="sr-only">Tu correo</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="Tu correo"
              class="w-full flex-1 rounded-full px-5 py-3 bg-white/5 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              class="rounded-full px-6 py-3 font-extrabold shadow-mdx bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] hover:brightness-110 transition"
            >
              SUSCRIBIRME
            </button>
          </form>

          <!-- Marca + copy -->
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2 no-underline mt-6"
          >
            <span
              class="w-10 h-10 rounded-full grid place-items-center font-extrabold shadow-mdx"
              style="background: linear-gradient(145deg, #005187, #4d82bc)"
              >D</span
            >
            <span class="font-black tracking-tight">DeepData Academy</span>
          </RouterLink>
          <p class="text-sm text-white/60">
            © {{ year }} DeepData Academy. Todos los derechos reservados.
          </p>
        </section>

        <!-- Columnas -->
        <nav class="md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 class="col-title">Programas</h4>
            <RouterLink class="col-link" to="/especializaciones/data-engineer"
              >Data Engineer</RouterLink
            >
            <RouterLink class="col-link" to="/especializaciones/frontend"
              >Frontend Developer</RouterLink
            >
            <RouterLink class="col-link" to="/especializaciones/cloud-computing"
              >Cloud Computing</RouterLink
            >
            <RouterLink class="col-link" to="/especializaciones/ciberseguridad"
              >Ciberseguridadt</RouterLink
            >
            <!-- <RouterLink class="col-link" to="/especializaciones/ml-engineer"
              >ML Engineering</RouterLink
            > -->
          </div>

          <div class="md:pr-2">
            <h4 class="col-title">Contáctanos</h4>
            <a
              class="col-link"
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener"
              >WhatsApp</a
            >
            <a class="col-link" href="mailto:hola@deepdataacademy.com"
              >Correo</a
            >

            <!-- Redes (ahora con wrap y gap controlado) -->
            <div
              class="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 max-w-full"
            >
              <!-- Facebook -->
              <a
                class="social relative z-0 w-10 h-10 sm:w-11 sm:h-11 md:w-11 md:h-11 shrink-0 fb hover:z-10 hover:ring-2 hover:ring-white/30 hover:ring-offset-2 hover:ring-offset-[#0b2a57]"
                href="https://www.facebook.com/profile.php?id=61579251651963"
                aria-label="Facebook"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M22 12.073C22 6.49 17.523 2 11.94 2 6.356 2 2 6.49 2 12.073c0 5.027 3.657 9.205 8.438 9.927v-7.02H7.898v-2.906h2.54V9.845c0-2.51 1.492-3.894 3.779-3.894 1.095 0 2.238.196 2.238.196v2.463h-1.26c-1.242 0-1.627.772-1.627 1.563v1.888h2.773l-.443 2.906h-2.33v7.02C18.343 21.278 22 17.1 22 12.073Z"
                  />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                class="social relative z-0 w-10 h-10 sm:w-11 sm:h-11 md:w-11 md:h-11 shrink-0 in hover:z-10 hover:ring-2 hover:ring-white/30 hover:ring-offset-2 hover:ring-offset-[#0b2a57]"
                href="https://linkedin.com/company/deepdataacademy"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.56 13.019H3.771V9h3.126v11.452Z"
                  />
                </svg>
              </a>

              <!-- YouTube -->
              <a
                class="social relative z-0 w-10 h-10 sm:w-11 sm:h-11 md:w-11 md:h-11 shrink-0 yt hover:z-10 hover:ring-2 hover:ring-white/30 hover:ring-offset-2 hover:ring-offset-[#0b2a57]"
                href="https://www.youtube.com/@DeepDataAcademy"
                aria-label="YouTube"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M23.498 6.186a2.99 2.99 0 0 0-2.104-2.117C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.394.569A2.99 2.99 0 0 0 .502 6.186C0 8.09 0 12 0 12s0 3.91.502 5.814a2.99 2.99 0 0 0 2.104 2.117C4.5 20.5 12 20.5 12 20.5s7.5 0 9.394-.569a2.99 2.99 0 0 0 2.104-2.117C24 15.91 24 12 24 12s0-3.91-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z"
                  />
                </svg>
              </a>

              <!-- TikTok -->
              <a
                class="social relative z-0 w-10 h-10 sm:w-11 sm:h-11 md:w-11 md:h-11 shrink-0 tt hover:z-10 hover:ring-2 hover:ring-white/30 hover:ring-offset-2 hover:ring-offset-[#0b2a57]"
                href="https://www.tiktok.com/@deepdataacademy"
                aria-label="TikTok"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M16.5 2c.3 2.2 1.7 3.9 3.9 4.3v3.1c-1.6-.1-3.1-.6-4.5-1.5v6.8c0 4-2.7 6.8-6.7 6.8A6.7 6.7 0 0 1 2.5 14a6.7 6.7 0 0 1 8.6-6.4v3.3a3.4 3.4 0 0 0-4.6 3.2c0 1.9 1.5 3.4 3.5 3.4 2 0 3.2-1.4 3.2-3.4V2h3.3Z"
                  />
                </svg>
              </a>

              <!-- Instagram -->
              <a
                class="social relative z-0 w-10 h-10 sm:w-11 sm:h-11 md:w-11 md:h-11 shrink-0 ig hover:z-10 hover:ring-2 hover:ring-white/30 hover:ring-offset-2 hover:ring-offset-[#0b2a57]"
                href="https://www.instagram.com/deepdataacademy/"
                aria-label="Instagram"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1.1.7 1.6 1.2.5.5.9 1 .12 1.6.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1.1-1.2 1.6-.5.5-1 .9-1.6 1.2-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6a4.6 4.6 0 0 1-1.6-1.2 4.6 4.6 0 0 1-1.2-1.6c-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1.1 1.2-1.6.5-.5 1-.9 1.6-1.2.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2Zm0 5.5a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm6-2.3a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
                  />
                </svg>
              </a>

              <!-- Twitch -->
              <a
                class="social relative z-0 w-9 h-9 sm:w-10 sm:h-10 md:w-10 md:h-10 shrink-0 tw hover:z-10 hover:ring-2 hover:ring-white/30 hover:ring-offset-2 hover:ring-offset-[#0b2a57]"
                href="https://www.twitch.tv/deepdataacademy"
                aria-label="Twitch"
              >
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M0 0v17.143h5.143V24l6.857-6.857h5.143L24 11.143V0H0zm20.571 9.714l-3.429 3.429h-5.143L7.143 14.571v-1.714H3.429V2.286h17.143v7.429zM16.286 5.143h1.714v4.571h-1.714V5.143zm-4.571 0h1.714v4.571h-1.714V5.143z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="col-title">Organización</h4>
            <RouterLink class="col-link" to="/nosotros">Nosotros</RouterLink>
            <RouterLink class="col-link" to="/webinars">Webinars</RouterLink>
            <RouterLink class="col-link" to="/ebooks">Ebooks</RouterLink>
            <RouterLink class="col-link" to="/bolsa"
              >Bolsa de Trabajo</RouterLink
            >
          </div>

          <div>
            <h4 class="col-title">Más información</h4>
            <RouterLink class="col-link" to="/privacidad"
              >Políticas de privacidad</RouterLink
            >
            <RouterLink class="col-link" to="/faq"
              >Preguntas frecuentes</RouterLink
            >
            <RouterLink class="col-link" to="/reclamaciones"
              >Libro de reclamaciones</RouterLink
            >
          </div>
        </nav>
      </div>
    </div>

    <!-- Bottom -->
    <!-- <div class="border-t border-white/10">
      <div class="container py-4 text-xs text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <span>© {{ year }} DeepData Academy.</span>
        <span class="hidden sm:inline">Hecho con ♥ en Perú</span>
      </div>
    </div> -->
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
const email = ref("");
const year = new Date().getFullYear();
function onSubscribe() {
  console.log("Suscrito:", email.value);
  email.value = "";
}
</script>

<style scoped>
@reference "../assets/tailwind.css";

/* Fondo navy con leve gradiente */
.site-footer {
  @apply relative;
  background: linear-gradient(180deg, #0b2a57 0%, #092448 100%);
}

/* Títulos / enlaces */
.col-title {
  @apply text-sm font-extrabold uppercase tracking-wider text-white/90 mb-3;
}
.col-link {
  @apply block text-white/80 hover:text-white no-underline mb-2;
}

/* Social base (sin tamaños) */
.social {
  @apply inline-flex items-center justify-center rounded-full
         box-border p-0 leading-none overflow-hidden
         border border-white/25 bg-white/10 text-white/90
         backdrop-blur-[2px] shadow-sm transform-gpu
         transition-[transform,box-shadow,ring,background-color] duration-150 ease-out;
}
.social:hover {
  @apply -translate-y-0.5 shadow-md text-white;
}
.social:active {
  @apply translate-y-0 shadow-sm;
}
.social:focus-visible {
  outline: none;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.25);
}

/* Colores de marca */
.fb:hover {
  background-color: #1877f2;
}
.in:hover {
  background-color: #0a66c2;
}
.yt:hover {
  background-color: #ff0033;
}
.tt:hover {
  background-color: #000000;
}
.ig:hover {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
.tw:hover {
  background-color: #9146ff;
}

/* A11y helper */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
