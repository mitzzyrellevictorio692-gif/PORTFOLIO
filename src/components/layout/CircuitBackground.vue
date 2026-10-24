<script setup lang="ts">
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      class="absolute inset-0 bg-grid-light bg-[size:44px_44px] opacity-70 dark:bg-grid-dark"
    ></div>

    <div
      class="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl dark:bg-brand-blue/15"
    ></div>
    <div
      class="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-brand-violet/20 blur-3xl dark:bg-brand-violet/10"
    ></div>
    <div
      class="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl dark:bg-brand-cyan/10"
    ></div>

    <svg class="absolute inset-0 h-full w-full opacity-[0.12] dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="currentColor" stroke-width="1" class="text-brand-cyan">
        <path d="M0 80 H120 V160 H260" />
        <path d="M100% 120 h-140 v120 h-180" transform="translate(0,0)" />
        <path d="M40 300 V420 H200 V520" />
        <circle cx="120" cy="160" r="3" fill="currentColor" />
        <circle cx="260" cy="160" r="3" fill="currentColor" />
        <circle cx="40" cy="300" r="3" fill="currentColor" />
        <circle cx="200" cy="520" r="3" fill="currentColor" />
      </g>
    </svg>
  </div>
</template>
