<template>
  <form
    class="flex flex-col items-center text-sm text-slate-900 dark:text-slate-100"
    @submit.prevent="onSubmit"
  >
    <h1
      class="text-4xl font-bold py-4 text-center text-slate-900 dark:text-slate-50"
    >
      ¡Contáctanos!
    </h1>

    <p
      class="max-md:text-sm pb-10 text-center text-slate-600 dark:text-slate-300"
    >
      ¿Tienes preguntas? Escríbenos a :
      <a href="#" class="text-indigo-600 hover:underline dark:text-indigo-300">
        deepdataacademy@gmail.com
      </a>
    </p>

    <div class="max-w-96 w-full px-4">
      <label for="name" class="font-medium text-slate-800 dark:text-slate-200"
        >Nombre Completo</label
      >

      <div
        class="flex items-center mt-2 mb-4 h-10 pl-3 rounded-full overflow-hidden transition-all border border-slate-300 bg-white/60 focus-within:ring-2 focus-within:ring-indigo-400 dark:border-white/15 dark:bg-white/5 dark:focus-within:ring-indigo-300"
      >
        <svg
          class="shrink-0 text-slate-500 dark:text-slate-300"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
            fill="currentColor"
          />
        </svg>

        <input
          id="name"
          v-model.trim="name"
          type="text"
          class="h-full px-2 w-full outline-none bg-transparent text-slate-900 placeholder:text-slate-400 dark:text-slate-50 dark:placeholder:text-slate-400"
          placeholder="Enter your full name"
          autocomplete="name"
          required
        />
      </div>

      <label
        for="email"
        class="font-medium mt-4 text-slate-800 dark:text-slate-200"
      >
        Correo Electrónico
      </label>

      <div
        class="flex items-center mt-2 mb-4 h-10 pl-3 rounded-full overflow-hidden transition-all border border-slate-300 bg-white/60 focus-within:ring-2 focus-within:ring-indigo-400 dark:border-white/15 dark:bg-white/5 dark:focus-within:ring-indigo-300"
      >
        <svg
          class="shrink-0 text-slate-500 dark:text-slate-300"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
            fill="currentColor"
          />
        </svg>

        <input
          id="email"
          v-model.trim="email"
          type="email"
          class="h-full px-2 w-full outline-none bg-transparent text-slate-900 placeholder:text-slate-400 dark:text-slate-50 dark:placeholder:text-slate-400"
          placeholder="Enter your email address"
          autocomplete="email"
          required
        />
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="flex items-center justify-center gap-1 mt-5 py-2.5 w-full rounded-full transition bg-indigo-500 hover:bg-indigo-600 text-white disabled:opacity-60 disabled:cursor-not-allowed dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        {{ isSubmitting ? "Opening WhatsApp..." : "Enviar " }}
        <svg
          class="mt-0.5"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
            fill="currentColor"
            class="text-white"
          />
        </svg>
      </button>

      <p v-if="error" class="mt-3 text-xs text-red-600 dark:text-red-400">
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const WHATSAPP_NUMBER = "51970110199";

const name = ref("");
const email = ref("");
const error = ref<string | null>(null);
const isSubmitting = ref(false);

const isValidEmail = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
});

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function onSubmit() {
  error.value = null;

  if (!name.value) {
    error.value = "Por favor, ingresa tu nombre.";
    return;
  }
  if (!email.value || !isValidEmail.value) {
    error.value = "Por favor, ingresa un correo válido.";
    return;
  }

  isSubmitting.value = true;

  const message =
    `Hola, quiero más información.\n\n` +
    `Nombre: ${name.value}\n` +
    `Email: ${email.value}`;

  const url = buildWhatsAppUrl(message);

  window.open(url, "_blank", "noopener,noreferrer");

  name.value = "";
  email.value = "";

  setTimeout(() => {
    isSubmitting.value = false;
  }, 350);
}
</script>
