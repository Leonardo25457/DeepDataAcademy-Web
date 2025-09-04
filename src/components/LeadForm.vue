<template>
  <form class="space-y-3" aria-label="Recibe el plan de estudio">
    <h3 class="text-lg font-semibold">Recibe el plan de estudio</h3>
    <p class="sub" style="color: white;">Te enviamos rutas de Desarrollo Web, Data y Cloud.</p>

    <label class="block text-sm">
      Nombre
      <input class="w-full mt-1 rounded-xl border border-blue-200 px-3 py-2" type="text" placeholder="Tu nombre" />
    </label>

    <label class="block text-sm">
      Email
      <input class="w-full mt-1 rounded-xl border border-blue-200 px-3 py-2" type="email" placeholder="correo@gmail.com" />
    </label>

    <button type="button" class="btn btn-primary w-full">Quiero mi plan</button>
    <small class="block sub" style="color: white;">* Por ahora es un formulario de demo (maquetado).</small>
  </form>
</template>

<script setup lang="ts">
// sin lógica de envío
</script>
