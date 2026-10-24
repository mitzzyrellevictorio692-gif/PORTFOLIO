<script setup lang="ts">
defineProps<{
  id: string
  label: string
  heading: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-20 py-20 sm:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <header class="mb-10">
        <p class="mono-label">{{ label }}</p>
        <h2 class="section-heading mt-2">{{ heading }}</h2>
      </header>
      <slot />
    </div>
  </section>
</template>
