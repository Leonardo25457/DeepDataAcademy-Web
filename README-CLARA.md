# LandingPage-DDA — Tailwind v4 + Vite (Ready)

## Requisitos
- Node.js 18 o 20 LTS
- npm 9+

## Pasos
1. Instala dependencias:
   ```bash
   npm ci
   # o si prefieres:
   # npm install
   ```
2. Inicia el proyecto:
   ```bash
   npm run dev
   ```
3. Si usas `@apply` dentro de `<style scoped>` o CSS Modules, añade al inicio:
   ```css
   @reference "tailwindcss";
   ```

> Tailwind se carga desde `src/assets/tailwind.css` con `@import "tailwindcss"` y el tema personalizado definido en `@theme`.
