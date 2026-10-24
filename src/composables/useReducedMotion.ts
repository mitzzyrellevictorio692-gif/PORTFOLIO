import { onMounted, onUnmounted, readonly, ref } from 'vue'

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)
  let mql: MediaQueryList | null = null

  const update = (e: MediaQueryListEvent | MediaQueryList) => {
    prefersReducedMotion.value = e.matches
  }

  onMounted(() => {
    mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mql.matches
    mql.addEventListener('change', update)
  })

  onUnmounted(() => {
    mql?.removeEventListener('change', update)
  })

  return { prefersReducedMotion: readonly(prefersReducedMotion) }
}
