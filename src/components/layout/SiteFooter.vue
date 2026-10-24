<script setup lang="ts">
import { Github, Heart, Linkedin, Mail } from 'lucide-vue-next'
import { portfolio } from '@/data/portfolio'
import SpriteRenderer from '@/components/mascots/SpriteRenderer.vue'
import { rimuruSprite, stitchSprite } from '@/data/sprites'

const year = new Date().getFullYear()

const iconFor = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  location: Mail,
}
</script>

<template>
  <footer class="border-t border-slate-200/60 py-10 dark:border-white/10">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
      <div class="flex items-end gap-3">
        <SpriteRenderer :sprite="rimuruSprite" :size="36" label="Rimuru" />
        <SpriteRenderer :sprite="stitchSprite" :size="36" label="Stitch" />
      </div>
      <nav class="flex items-center gap-4" aria-label="Social links">
        <template v-for="link in portfolio.social" :key="link.id">
          <a
            v-if="link.id !== 'location'"
            :href="link.href"
            class="text-slate-400 transition hover:text-brand-cyan"
            :aria-label="link.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <component :is="iconFor[link.id]" class="h-5 w-5" aria-hidden="true" />
          </a>
        </template>
      </nav>
      <p class="font-mono text-xs text-slate-500">
        © {{ year }} {{ portfolio.name }}. Built with Vue, TypeScript &amp; Tailwind.
      </p>
      <p class="flex items-center gap-1 text-xs text-slate-500">
        Made with <Heart class="h-3 w-3 text-brand-pink" aria-hidden="true" /> and a little slime.
      </p>
    </div>
  </footer>
</template>
