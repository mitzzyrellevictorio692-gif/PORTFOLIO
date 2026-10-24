<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { ExternalLink, Github, X } from 'lucide-vue-next'
import ProjectIllustration from './ProjectIllustration.vue'
import type { Project } from '@/types/portfolio'

const props = defineProps<{ project: Project | null }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const dialogEl = ref<HTMLElement | null>(null)
const closeBtn = ref<HTMLButtonElement | null>(null)

watch(
  () => props.project,
  async (p) => {
    if (p) {
      await nextTick()
      closeBtn.value?.focus()
    }
  },
)

function getFocusable(): HTMLElement[] {
  if (!dialogEl.value) return []
  return Array.from(
    dialogEl.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  )
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
    return
  }
  if (e.key !== 'Tab') return
  const focusable = getFocusable()
  if (focusable.length === 0) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-label="`Project details: ${project.title}`"
        @keydown="onKeydown"
      >
        <div class="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" @click="emit('close')"></div>

        <div
          ref="dialogEl"
          class="surface-glow relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-white/95 p-6 dark:bg-ink-900/95"
        >
          <button
            ref="closeBtn"
            type="button"
            class="btn-ghost absolute right-4 top-4 h-9 w-9 !px-0"
            aria-label="Close dialog"
            @click="emit('close')"
          >
            <X class="h-4 w-4" aria-hidden="true" />
          </button>

          <ProjectIllustration :kind="project.illustration" />

          <div class="mt-5 flex flex-wrap items-center gap-2">
            <span class="mono-label">{{ project.category }}</span>
            <span
              v-if="project.prototype"
              class="rounded-full border border-brand-violet/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand-violet"
            >
              Research prototype
            </span>
          </div>

          <h3 class="mt-2 font-mono text-2xl font-bold">{{ project.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {{ project.overview }}
          </p>

          <h4 class="mt-6 font-mono text-sm font-semibold text-brand-cyan">Objectives</h4>
          <ul class="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
            <li v-for="obj in project.objectives" :key="obj" class="flex gap-2">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" aria-hidden="true"></span>
              <span>{{ obj }}</span>
            </li>
          </ul>

          <h4 class="mt-6 font-mono text-sm font-semibold text-brand-cyan">Tech</h4>
          <ul class="mt-2 flex flex-wrap gap-2">
            <li
              v-for="t in project.tech"
              :key="t"
              class="rounded-md border border-slate-300/70 px-2 py-0.5 font-mono text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
            >
              {{ t }}
            </li>
          </ul>

          <div class="mt-7 flex flex-wrap gap-3">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ghost"
            >
              <Github class="h-4 w-4" aria-hidden="true" />
              View Code
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              <ExternalLink class="h-4 w-4" aria-hidden="true" />
              Live Demo
            </a>
            <p v-if="!project.demo" class="self-center font-mono text-xs text-slate-500">
              No live demo for this one.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
