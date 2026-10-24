<script setup lang="ts">
import { BookOpen, PenTool, Target } from 'lucide-vue-next'
import SectionShell from '@/components/layout/SectionShell.vue'

const principles = [
  {
    icon: BookOpen,
    title: 'Documentation first',
    body: 'I keep clear notes and documentation so projects stay understandable and maintainable.',
  },
  {
    icon: PenTool,
    title: 'Structured design',
    body: 'I plan before I build — breaking problems into well-defined, testable pieces.',
  },
  {
    icon: Target,
    title: 'Real problems',
    body: 'I focus on solving real problems that matter to my community and the people around me.',
  },
]
</script>

<template>
  <SectionShell id="about" label="// about" heading="Combining software and hardware">
    <div class="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
      <div class="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          I'm a Computer Engineering student who enjoys working at the intersection of software
          and hardware. I like taking an idea and carrying it all the way from a concept to a
          working prototype — whether that's a web interface, a computer-vision experiment, or a
          microcontroller wired up to sensors on my desk.
        </p>
        <p>
          My interests span frontend and web development, AI and computer vision, and embedded
          systems. What ties them together is the same goal: building things that are useful and
          solve real problems. I'm still learning, and I treat every project as a chance to get
          a little better.
        </p>
      </div>

      <div class="grid gap-4">
        <div
          v-for="p in principles"
          :key="p.title"
          class="surface flex items-start gap-4 rounded-xl p-5 transition hover:shadow-glow"
        >
          <span class="rounded-lg bg-brand-blue/10 p-2 text-brand-cyan">
            <component :is="p.icon" class="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 class="font-mono text-sm font-semibold">{{ p.title }}</h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">{{ p.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
</template>
