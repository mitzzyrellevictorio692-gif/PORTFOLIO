<script setup lang="ts">
import SpriteRenderer from './SpriteRenderer.vue'
import { stitchSprite } from '@/data/sprites'
import { useReducedMotion } from '@/composables/useReducedMotion'

withDefaults(
  defineProps<{
    size?: number
    idle?: boolean
  }>(),
  { size: 72, idle: true },
)

const { prefersReducedMotion } = useReducedMotion()
</script>

<template>
  <span
    class="inline-flex items-center justify-center"
    :class="idle && !prefersReducedMotion ? 'animate-ear-wiggle' : ''"
  >
    <span :class="idle && !prefersReducedMotion ? 'animate-blink' : ''">
      <SpriteRenderer :sprite="stitchSprite" :size="size" label="Stitch the alien" />
    </span>
  </span>
</template>
