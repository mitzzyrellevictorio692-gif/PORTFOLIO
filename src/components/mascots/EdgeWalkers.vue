<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { Heart } from 'lucide-vue-next'
import SpriteRenderer from './SpriteRenderer.vue'
import { rimuruSprite, stitchSprite } from '@/data/sprites'
import { useReducedMotion } from '@/composables/useReducedMotion'

const { prefersReducedMotion } = useReducedMotion()

const SIZE = 56
const MARGIN = 8

interface Walker {
  id: 'rimuru' | 'stitch'
  x: number
  dir: 1 | -1
  speed: number
  paused: boolean
  greeting: boolean
}

const walkers = reactive<Record<'rimuru' | 'stitch', Walker>>({
  rimuru: { id: 'rimuru', x: 40, dir: 1, speed: 48, paused: false, greeting: false },
  stitch: { id: 'stitch', x: 180, dir: -1, speed: 60, paused: false, greeting: false },
})

const ready = ref(false)
let rafId = 0
let last = 0
const greetTimers: Record<string, number> = {}

function maxX() {
  return Math.max(0, window.innerWidth - SIZE - MARGIN)
}

function step(now: number) {
  if (!last) last = now
  const dt = (now - last) / 1000
  last = now

  const limit = maxX()
  for (const key of ['rimuru', 'stitch'] as const) {
    const w = walkers[key]
    if (w.paused || prefersReducedMotion.value) continue
    w.x += w.dir * w.speed * dt
    if (w.x <= MARGIN) {
      w.x = MARGIN
      w.dir = 1
    } else if (w.x >= limit) {
      w.x = limit
      w.dir = -1
    }
  }
  rafId = window.requestAnimationFrame(step)
}

function greet(key: 'rimuru' | 'stitch') {
  const w = walkers[key]
  w.paused = true
  w.greeting = true
  if (greetTimers[key]) window.clearTimeout(greetTimers[key])
  greetTimers[key] = window.setTimeout(() => {
    w.greeting = false
    w.paused = false
    last = 0
  }, 2400)
}

onMounted(() => {
  walkers.rimuru.x = Math.min(maxX(), window.innerWidth * 0.2)
  walkers.stitch.x = Math.min(maxX(), window.innerWidth * 0.65)
  ready.value = true
  if (!prefersReducedMotion.value) rafId = window.requestAnimationFrame(step)
})

onUnmounted(() => {
  if (rafId) window.cancelAnimationFrame(rafId)
  for (const k of Object.keys(greetTimers)) window.clearTimeout(greetTimers[k])
})
</script>

<template>
  <div v-if="ready" class="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-24" aria-hidden="false">
    <button
      type="button"
      class="pointer-events-auto absolute bottom-1 origin-bottom cursor-pointer border-0 bg-transparent p-0"
      :style="{ left: `${walkers.rimuru.x}px` }"
      aria-label="Rimuru — click to say hi"
      @click="greet('rimuru')"
    >
      <span class="relative inline-block">
        <span
          v-if="walkers.rimuru.greeting"
          class="absolute -top-10 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-brand-cyan/40 bg-white px-2 py-1 shadow-glow dark:bg-ink-850"
        >
          <Heart class="h-3.5 w-3.5 fill-brand-pink text-brand-pink animate-pulse-glow" aria-hidden="true" />
          <span
            class="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-brand-cyan/40 bg-white dark:bg-ink-850"
          ></span>
        </span>
        <span
          class="inline-block"
          :class="!walkers.rimuru.greeting && !prefersReducedMotion ? 'animate-slime-bounce' : ''"
        >
          <SpriteRenderer :sprite="rimuruSprite" :size="SIZE" label="Rimuru the slime" />
        </span>
      </span>
    </button>

    <button
      type="button"
      class="pointer-events-auto absolute bottom-1 origin-bottom cursor-pointer border-0 bg-transparent p-0"
      :style="{ left: `${walkers.stitch.x}px` }"
      aria-label="Stitch — click to say hi"
      @click="greet('stitch')"
    >
      <span class="relative inline-block">
        <span
          v-if="walkers.stitch.greeting"
          class="absolute -top-10 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-brand-blue/40 bg-white px-2 py-1 shadow-glow dark:bg-ink-850"
        >
          <Heart class="h-3.5 w-3.5 fill-brand-pink text-brand-pink animate-pulse-glow" aria-hidden="true" />
          <span
            class="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-brand-blue/40 bg-white dark:bg-ink-850"
          ></span>
        </span>
        <span
          class="inline-block transition-transform duration-300"
          :style="{
            transform: walkers.stitch.greeting
              ? 'scaleX(1) rotate(0deg)'
              : `scaleX(${walkers.stitch.dir}) rotate(8deg)`,
          }"
        >
          <span
            class="inline-block origin-bottom"
            :class="
              walkers.stitch.greeting
                ? ''
                : !prefersReducedMotion
                  ? 'animate-crawl-bob'
                  : 'scale-y-[0.82]'
            "
          >
            <SpriteRenderer :sprite="stitchSprite" :size="SIZE" label="Stitch the alien" />
          </span>
        </span>
      </span>
    </button>
  </div>
</template>
