<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowRight, FileText, Github, Linkedin, MapPin, Mail } from 'lucide-vue-next'
import ResumeModal from './ResumeModal.vue'
import { portfolio } from '@/data/portfolio'
import { hasResume } from '@/lib/resume'

const githubLink = computed(() => portfolio.social.find((s) => s.id === 'github'))
const linkedinLink = computed(() => portfolio.social.find((s) => s.id === 'linkedin'))
const emailLink = computed(() => portfolio.social.find((s) => s.id === 'email'))
const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`
const photoHref = `${import.meta.env.BASE_URL}mitz.png`

const resumeOpen = ref(false)
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center pt-24">
    <div class="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
      <div class="order-1 flex justify-center lg:justify-start animate-fade-up">
        <div class="relative">
          <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-cyan/30 via-brand-blue/20 to-brand-violet/30 blur-2xl" aria-hidden="true"></div>
          <img
            :src="photoHref"
            alt="Portrait of Mitz Zyrelle M. Victorio"
            width="320"
            height="400"
            loading="eager"
            class="relative w-56 rounded-3xl border border-white/20 object-cover shadow-glow sm:w-64 lg:w-72"
          />
        </div>
      </div>

      <div class="order-2 animate-fade-up">
        <p class="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
          I LOVE CHRISTIAN GABRIEL PAGULAYAN
        </p>

        <h1 class="mt-4 font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span id="hero-name" class="text-gradient">{{ portfolio.name }}</span>
        </h1>

        <p class="mt-4 font-mono text-sm text-brand-blue dark:text-brand-cyan sm:text-base">
          {{ portfolio.title }}
        </p>

        <p class="mt-6 max-w-xl text-lg font-semibold text-ink-900 dark:text-white sm:text-xl">
          {{ portfolio.headline }}
        </p>

        <p class="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {{ portfolio.intro }}
        </p>

        <p class="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-300/70 px-3 py-1 text-xs text-slate-600 dark:border-white/15 dark:text-slate-300">
          <MapPin class="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
          {{ portfolio.locationBadge }}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" class="btn-primary">
            Explore My Projects
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#contact" class="btn-ghost">Get In Touch</a>

          <button
            v-if="hasResume"
            type="button"
            class="btn-ghost"
            @click="resumeOpen = true"
          >
            <FileText class="h-4 w-4" aria-hidden="true" />
            View Resume
          </button>
          <span
            v-else
            class="btn-ghost cursor-not-allowed opacity-50"
            role="button"
            aria-disabled="true"
            title="Add /public/resume.pdf to enable this (see README)"
          >
            <FileText class="h-4 w-4" aria-hidden="true" />
            Resume (coming soon)
          </span>
        </div>

        <div class="mt-6 flex items-center gap-4">
          <a
            v-if="githubLink"
            :href="githubLink.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 transition hover:text-brand-cyan"
            aria-label="GitHub"
          >
            <Github class="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            v-if="linkedinLink"
            :href="linkedinLink.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 transition hover:text-brand-cyan"
            aria-label="LinkedIn"
          >
            <Linkedin class="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            v-if="emailLink"
            :href="emailLink.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-400 transition hover:text-brand-cyan"
            aria-label="Email"
          >
            <Mail class="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

    </div>

    <ResumeModal :open="resumeOpen" :src="resumeHref" @close="resumeOpen = false" />
  </section>
</template>
