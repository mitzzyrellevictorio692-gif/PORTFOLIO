<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'
import SpriteRenderer from '@/components/mascots/SpriteRenderer.vue'
import { rimuruSprite } from '@/data/sprites'
import { useScrollSpy } from '@/composables/useScrollSpy'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const { activeId } = useScrollSpy(['home', ...links.map((l) => l.id)])

const mobileOpen = ref(false)

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/70"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Primary">
      <a href="#home" class="flex items-center gap-2 font-mono text-sm font-semibold" @click="closeMobile">
        <SpriteRenderer :sprite="rimuruSprite" :size="28" label="" />
        <span class="hidden sm:inline">mitz<span class="text-brand-cyan">.dev</span></span>
      </a>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="rounded-lg px-3 py-2 text-sm transition hover:text-brand-cyan"
            :class="
              activeId === link.id
                ? 'text-brand-cyan'
                : 'text-ink-700 dark:text-slate-300'
            "
            :aria-current="activeId === link.id ? 'true' : undefined"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          class="btn-ghost h-10 w-10 !px-0 md:hidden"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileOpen"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" class="h-4 w-4" aria-hidden="true" />
          <Menu v-else class="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <div
      v-if="mobileOpen"
      class="border-t border-slate-200/60 bg-white/95 px-4 py-3 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/95 md:hidden"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="block rounded-lg px-3 py-2 text-sm transition hover:bg-slate-100 hover:text-brand-cyan dark:hover:bg-white/5"
            :class="activeId === link.id ? 'text-brand-cyan' : ''"
            @click="closeMobile"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
