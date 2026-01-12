<template>
  <footer class="bg-slate-950 text-slate-300 pt-24 pb-12 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <RouterLink to="/" class="flex items-center gap-2 mb-6">
            <div class="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center text-white font-bold text-sm">D</div>
            <span class="text-xl font-extrabold text-white tracking-tight">DeepData</span>
          </RouterLink>

          <p class="text-slate-500 text-sm mb-6 leading-relaxed">
            Formando la próxima generación de ingenieros de datos y desarrolladores de élite con metodología 100% práctica.
          </p>

          <div class="flex gap-4">
            <a class="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 text-slate-400" href="#" aria-label="Facebook">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a class="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 text-slate-400" href="#" aria-label="LinkedIn">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a class="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 text-slate-400" href="#" aria-label="YouTube">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Programs -->
        <div>
          <h4 class="text-white font-bold mb-6">Programas</h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li><RouterLink class="hover:text-indigo-400 transition-colors" to="/cursos">Data Engineer</RouterLink></li>
            <li><RouterLink class="hover:text-indigo-400 transition-colors" to="/cursos">Frontend Developer</RouterLink></li>
            <li><RouterLink class="hover:text-indigo-400 transition-colors" to="/cursos">Cloud Computing</RouterLink></li>
            <li><RouterLink class="hover:text-indigo-400 transition-colors" to="/cursos">Ciberseguridad</RouterLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-white font-bold mb-6">Compañía</h4>
          <ul class="space-y-4 text-sm text-slate-400">
            <li><a class="hover:text-indigo-400 transition-colors" href="#">Sobre nosotros</a></li>
            <li><RouterLink class="hover:text-indigo-400 transition-colors" to="/webinars">Webinars</RouterLink></li>
            <li><a class="hover:text-indigo-400 transition-colors" href="#">Bolsa de trabajo</a></li>
            <li><RouterLink class="hover:text-indigo-400 transition-colors" to="/blog">Blog</RouterLink></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-white font-bold mb-6">Newsletter</h4>
          <p class="text-sm mb-4 text-slate-400">Recibe las últimas noticias y ofertas exclusivas.</p>

          <form class="flex gap-2" @submit.prevent="subscribe">
            <input
              v-model="email"
              class="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-slate-600"
              placeholder="Tu correo"
              type="email"
              required
            />
            <button class="bg-indigo-500 hover:bg-indigo-600 text-white p-2.5 rounded-xl transition-colors" type="submit" aria-label="Enviar">
              <span class="material-icons-round text-sm">send</span>
            </button>
          </form>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
        <p>© {{ year }} DeepData Academy. Todos los derechos reservados.</p>
        <div class="flex gap-6">
          <a class="hover:text-white transition-colors" href="#">Privacidad</a>
          <a class="hover:text-white transition-colors" href="#">Términos</a>
          <a class="hover:text-white transition-colors" href="#">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const year = new Date().getFullYear();
const email = ref("");

function subscribe() {
  console.log("newsletter:", email.value);
  email.value = "";
}
</script>
