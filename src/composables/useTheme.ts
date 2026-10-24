import { readonly, ref } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const theme = ref<Theme>('dark')
let initialized = false

function apply(next: Theme) {
  theme.value = next
  const root = document.documentElement
  root.classList.toggle('dark', next === 'dark')
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
  }
}

export function useTheme() {
  if (!initialized) {
    initialized = true
    let stored: string | null = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch {
    }
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = (stored as Theme) ?? (prefersDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }

  const toggleTheme = () => apply(theme.value === 'dark' ? 'light' : 'dark')
  const setTheme = (next: Theme) => apply(next)

  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme,
  }
}
