<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { Download, ExternalLink, X } from 'lucide-vue-next'

const props = defineProps<{ open: boolean; src: string }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const dialogEl = ref<HTMLElement | null>(null)
const closeBtn = ref<HTMLButtonElement | null>(null)

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
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
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Resume preview"
        @keydown="onKeydown"
      >
        <div class="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" @click="emit('close')"></div>

        <div
          ref="dialogEl"
          class="surface-glow relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/95 dark:bg-ink-900/95"
        >
          <div class="flex items-center justify-between gap-3 border-b border-slate-200/60 px-5 py-3 dark:border-white/10">
            <h3 class="font-mono text-sm font-semibold">Resume</h3>
            <div class="flex items-center gap-2">
              <a
                :href="src"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-ghost h-9 !py-0 text-xs"
              >
                <ExternalLink class="h-4 w-4" aria-hidden="true" />
                Open in new tab
              </a>
              <a :href="src" download class="btn-primary h-9 !py-0 text-xs">
                <Download class="h-4 w-4" aria-hidden="true" />
                Download
              </a>
              <button
                ref="closeBtn"
                type="button"
                class="btn-ghost h-9 w-9 !px-0"
                aria-label="Close resume preview"
                @click="emit('close')"
              >
                <X class="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div class="min-h-0 flex-1 bg-slate-100 dark:bg-ink-950">
            <iframe
              :src="`${src}#view=FitH`"
              title="Resume preview"
              class="h-[70vh] w-full"
            ></iframe>
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
