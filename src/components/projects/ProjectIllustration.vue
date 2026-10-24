<script setup lang="ts">
import type { Project } from '@/types/portfolio'

defineProps<{ kind: Project['illustration'] }>()
</script>

<template>
  <div class="relative aspect-video w-full overflow-hidden rounded-xl bg-ink-900/40 dark:bg-ink-900/60">
    <svg
      viewBox="0 0 160 90"
      class="h-full w-full"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="illus-grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0 H0 V10" fill="none" stroke="#5ad1e6" stroke-opacity="0.08" stroke-width="0.5" />
        </pattern>
      </defs>
      <rect width="160" height="90" fill="url(#illus-grid)" />

      <g v-if="kind === 'navicane'" fill="none" stroke-linecap="round">
        <path d="M45 55 a25 22 0 0 1 50 0" fill="#4a7fd4" fill-opacity="0.25" stroke="#4a7fd4" stroke-width="2" />
        <path d="M45 55 h50" stroke="#4a7fd4" stroke-width="2" />
        <path d="M95 42 L135 30 M95 50 L138 50 M95 58 L135 70" stroke="#5ad1e6" stroke-width="1.5" stroke-dasharray="3 2" />
        <circle cx="135" cy="30" r="2.5" fill="#f4a6c0" stroke="none" />
        <circle cx="138" cy="50" r="2.5" fill="#f4a6c0" stroke="none" />
        <circle cx="135" cy="70" r="2.5" fill="#f4a6c0" stroke="none" />
        <circle cx="70" cy="40" r="3" fill="#5ad1e6" stroke="none" />
      </g>

      <g v-else-if="kind === 'esp32-led'">
        <rect x="55" y="35" width="50" height="22" rx="2" fill="#1f2633" stroke="#4a7fd4" stroke-width="1.5" />
        <text x="80" y="49" text-anchor="middle" font-size="7" fill="#5ad1e6" font-family="monospace">ESP32</text>
        <circle cx="35" cy="46" r="7" fill="#355fa3" stroke="#4a7fd4" stroke-width="1.5" />
        <path d="M42 46 H55" stroke="#5ad1e6" stroke-width="1.5" />
        <path d="M105 46 H120" stroke="#5ad1e6" stroke-width="1.5" />
        <circle cx="128" cy="46" r="6" fill="#f4a6c0" fill-opacity="0.8" stroke="#f4a6c0" stroke-width="1.5" class="animate-pulse-glow" />
      </g>

      <g v-else-if="kind === 'traffic-light'">
        <rect x="68" y="20" width="24" height="54" rx="4" fill="#1f2633" stroke="#4a7fd4" stroke-width="1.5" />
        <circle cx="80" cy="32" r="6" fill="#f4a6c0" />
        <circle cx="80" cy="47" r="6" fill="#5ad1e6" fill-opacity="0.5" />
        <circle cx="80" cy="62" r="6" fill="#4a7fd4" fill-opacity="0.5" />
        <rect x="76" y="74" width="8" height="10" fill="#355fa3" />
      </g>

      <g v-else-if="kind === 'servo-gate'">
        <rect x="30" y="58" width="12" height="18" fill="#1f2633" stroke="#4a7fd4" stroke-width="1.5" />
        <rect x="118" y="58" width="12" height="18" fill="#1f2633" stroke="#4a7fd4" stroke-width="1.5" />
        <line x1="42" y1="62" x2="110" y2="40" stroke="#5ad1e6" stroke-width="3" stroke-linecap="round" />
        <circle cx="42" cy="62" r="4" fill="#4a7fd4" />
        <path d="M118 50 a6 6 0 0 1 10 0" fill="none" stroke="#f4a6c0" stroke-width="1.5" />
      </g>

      <g v-else>
        <rect x="55" y="30" width="50" height="32" rx="3" fill="#1f2633" stroke="#4a7fd4" stroke-width="1.5" />
        <path d="M63 46 l6 6 l-6 6 M75 58 h12" stroke="#5ad1e6" stroke-width="1.5" fill="none" stroke-linecap="round" />
      </g>
    </svg>
  </div>
</template>
