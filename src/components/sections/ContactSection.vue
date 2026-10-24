<script setup lang="ts">
import { computed, ref } from 'vue'
import { Check, Copy, Github, Linkedin, Mail } from 'lucide-vue-next'
import SectionShell from '@/components/layout/SectionShell.vue'
import { portfolio } from '@/data/portfolio'

const emailLink = portfolio.social.find((s) => s.id === 'email')
const githubLink = portfolio.social.find((s) => s.id === 'github')
const linkedinLink = portfolio.social.find((s) => s.id === 'linkedin')

const gmailCompose = computed(() =>
  emailLink
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailLink.display)}`
    : '#',
)

const copied = ref(false)
async function copyEmail() {
  if (!emailLink) return
  try {
    await navigator.clipboard.writeText(emailLink.display)
    copied.value = true
    window.setTimeout(() => (copied.value = false), 1800)
  } catch {
  }
}

const contacts = [
  emailLink && { icon: Mail, label: emailLink.label, value: emailLink.display, href: gmailCompose.value },
  githubLink && { icon: Github, label: githubLink.label, value: githubLink.display, href: githubLink.href },
  linkedinLink && { icon: Linkedin, label: linkedinLink.label, value: linkedinLink.display, href: linkedinLink.href },
].filter(Boolean) as { icon: unknown; label: string; value: string; href: string }[]
</script>

<template>
  <SectionShell id="contact" label="// contact" heading="Let's build something">
    <div class="max-w-2xl">
      <p class="text-base leading-relaxed text-slate-600 dark:text-slate-300">
        I'm always happy to collaborate, discuss projects, or just connect. I'm especially
        open to working on tech and research projects of all kinds.
      </p>

      <ul class="mt-6 space-y-3">
        <li v-for="c in contacts" :key="c.label" class="flex items-center gap-3">
          <span class="rounded-lg bg-brand-blue/10 p-2 text-brand-cyan">
            <component :is="c.icon" class="h-4 w-4" aria-hidden="true" />
          </span>
          <a
            :href="c.href"
            class="text-sm text-slate-700 transition hover:text-brand-cyan dark:text-slate-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ c.value }}
          </a>
        </li>
      </ul>

      <button
        v-if="emailLink"
        type="button"
        class="btn-ghost mt-6"
        @click="copyEmail"
      >
        <component :is="copied ? Check : Copy" class="h-4 w-4" aria-hidden="true" />
        {{ copied ? 'Copied!' : 'Copy email' }}
      </button>
    </div>
  </SectionShell>
</template>
