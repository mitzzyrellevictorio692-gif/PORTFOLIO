<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import StitchMascot from '@/components/mascots/StitchMascot.vue'

const scrollPercent = ref(0)
const visible = ref(false)

function onScroll() {
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  scrollPercent.value = max > 0 ? Math.min(100, (doc.scrollTop / max) * 100) : 0
  visible.value = doc.scrollTop > 400
}

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const R = 26
const CIRC = 2 * Math.PI * R
const dashOffset = computed(() => CIRC - (scrollPercent.value / 100) * CIRC)

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="fade">
    <button
      v-show="visible"
      type="button"
      class="group fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-ink-900/80 shadow-glow backdrop-blur transition hover:scale-105"
      aria-label="Back to top"
      @click="toTop"
    >
      <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" :r="R" fill="none" stroke="currentColor" stroke-width="3" class="text-white/10" />
        <circle
          cx="32"
          cy="32"
          :r="R"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          class="text-brand-cyan transition-[stroke-dashoffset] duration-150"
          :stroke-dasharray="CIRC"
          :stroke-dashoffset="dashOffset"
        />
      </svg>
      <StitchMascot :size="34" :idle="false" />
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
