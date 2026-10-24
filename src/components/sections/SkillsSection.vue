<script setup lang="ts">
import { ref } from 'vue'
import SectionShell from '@/components/layout/SectionShell.vue'
import { skillCategories } from '@/data/skills'
import { resolveIcon } from '@/lib/icons'
import type { SkillLevel } from '@/types/portfolio'

const activeCategory = ref(skillCategories[0]?.id ?? '')

const levelStyles: Record<SkillLevel, string> = {
  Learning: 'border-brand-violet/40 text-brand-violet',
  Comfortable: 'border-brand-blue/40 text-brand-blue dark:text-brand-cyan',
  'Used in projects': 'border-brand-cyan/50 text-brand-cyan',
}
</script>

<template>
  <SectionShell id="skills" label="// skills" heading="What I'm working with">
    <div class="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
      <button
        v-for="cat in skillCategories"
        :key="cat.id"
        type="button"
        role="tab"
        :aria-selected="activeCategory === cat.id"
        class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition"
        :class="
          activeCategory === cat.id
            ? 'border-brand-cyan bg-brand-cyan/10 text-brand-cyan'
            : 'border-slate-300/70 text-slate-600 hover:border-brand-blue hover:text-brand-blue dark:border-white/10 dark:text-slate-300'
        "
        @click="activeCategory = cat.id"
      >
        <component :is="resolveIcon(cat.icon)" class="h-4 w-4" aria-hidden="true" />
        {{ cat.title }}
      </button>
    </div>

    <div
      v-for="cat in skillCategories"
      v-show="activeCategory === cat.id"
      :key="cat.id"
      class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      role="tabpanel"
    >
      <div
        v-for="skill in cat.skills"
        :key="skill.name"
        class="surface group flex flex-col gap-2 rounded-xl p-4 transition hover:shadow-glow"
      >
        <div class="flex items-center justify-between gap-2">
          <span class="font-medium">{{ skill.name }}</span>
          <span
            class="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide"
            :class="levelStyles[skill.level]"
          >
            {{ skill.level }}
          </span>
        </div>
        <p v-if="skill.note" class="text-xs text-slate-500 dark:text-slate-400">
          {{ skill.note }}
        </p>
      </div>
    </div>

    <p class="mt-6 font-mono text-xs text-slate-500">
      Levels are qualitative on purpose — no fake percentage bars.
    </p>
  </SectionShell>
</template>
