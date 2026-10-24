import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollSpy(sectionIds: string[], rootMargin = '-40% 0px -55% 0px') {
  const activeId = ref<string>(sectionIds[0] ?? '')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeId.value = entry.target.id
          }
        }
      },
      { rootMargin, threshold: 0 },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => observer?.disconnect())

  return { activeId }
}
