<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    class="btn-ghost h-10 w-10 !px-0"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    :aria-pressed="theme === 'dark'"
    @click="toggleTheme"
  >
    <Sun v-if="theme === 'dark'" class="h-4 w-4" aria-hidden="true" />
    <Moon v-else class="h-4 w-4" aria-hidden="true" />
  </button>
</template>
