import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import "primeicons/primeicons.css";
import "./assets/tailwind.css";

import { useTheme } from "./composables/useTheme";

// Router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, saved) {
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    if (saved) return saved;
    return { top: 0 };
  },
});

useTheme().initTheme();

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".dark",
      cssLayer: true,
    },
  },
});

app.mount("#app");
