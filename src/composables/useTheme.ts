// src/composables/useTheme.ts
import { ref } from "vue";

const STORAGE_KEY = "dda_theme"; // "dark" | "light"
const isDark = ref(false);

function applyTheme(nextIsDark: boolean) {
  isDark.value = nextIsDark;
  document.documentElement.classList.toggle("dark", nextIsDark);
  localStorage.setItem(STORAGE_KEY, nextIsDark ? "dark" : "light");
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === "dark") return applyTheme(true);
  if (saved === "light") return applyTheme(false);

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  applyTheme(prefersDark);
}

function toggleTheme() {
  applyTheme(!isDark.value);
}

export function useTheme() {
  return { isDark, initTheme, toggleTheme, applyTheme };
}
