<script setup lang="ts">
import { ref } from 'vue'
import SpriteRenderer from './SpriteRenderer.vue'
import { rimuruSprite } from '@/data/sprites'
import { useReducedMotion } from '@/composables/useReducedMotion'

withDefaults(
  defineProps<{
    size?: number
    idle?: boolean
  }>(),
  { size: 72, idle: true },
)

const { prefersReducedMotion } = useReducedMotion()
const jiggling = ref(false)

function jiggle() {
  if (prefersReducedMotion.value) return
  jiggling.value = false
  requestAnimationFrame(() => {
    jiggling.value = true
    window.setTimeout(() => (jiggling.value = false), 500)
  })
}
</script>

<template>
  <button
    type="button"
    class="group inline-flex origin-bottom items-center justify-center rounded-full p-1 transition-transform"
    :class="[
      idle && !prefersReducedMotion ? 'animate-slime-bounce' : '',
      jiggling ? 'animate-slime-jiggle' : '',
    ]"
    aria-label="Rimuru the slime — click to jiggle"
    @click="jiggle"
  >
    <SpriteRenderer :sprite="rimuruSprite" :size="size" label="Rimuru the slime" />
  </button>
</template>
