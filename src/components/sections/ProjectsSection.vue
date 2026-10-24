<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowUpRight, Github } from 'lucide-vue-next'
import SectionShell from '@/components/layout/SectionShell.vue'
import ProjectIllustration from '@/components/projects/ProjectIllustration.vue'
import ProjectModal from '@/components/projects/ProjectModal.vue'
import StitchMascot from '@/components/mascots/StitchMascot.vue'
import { projectCategories, projects } from '@/data/projects'
import type { Project, ProjectCategory } from '@/types/portfolio'

type Filter = 'All' | ProjectCategory

const filters: Filter[] = ['All', ...projectCategories]
const activeFilter = ref<Filter>('All')

const visibleProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter.value),
)

const selected = ref<Project | null>(null)
function openProject(p: Project) {
  selected.value = p
}
function closeProject() {
  selected.value = null
}

function openById(id: string) {
  const p = projects.find((proj) => proj.id === id)
  if (p) {
    activeFilter.value = 'All'
    selected.value = p
  }
}

defineExpose({ openById })
</script>

<template>
  <SectionShell id="projects" label="// projects" heading="Featured projects">
    <div class="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      <button
        v-for="f in filters"
        :key="f"
        type="button"
        class="rounded-full border px-4 py-1.5 text-sm transition"
        :class="
          activeFilter === f
            ? 'border-brand-cyan bg-brand-cyan/10 text-brand-cyan'
            : 'border-slate-300/70 text-slate-600 hover:border-brand-blue hover:text-brand-blue dark:border-white/10 dark:text-slate-300'
        "
        :aria-pressed="activeFilter === f"
        @click="activeFilter = f"
      >
        {{ f }}
      </button>
    </div>

    <div v-if="visibleProjects.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in visibleProjects"
        :key="project.id"
        class="surface group flex flex-col overflow-hidden rounded-2xl transition hover:shadow-glow"
      >
        <button
          type="button"
          class="block text-left"
          :aria-label="`Open details for ${project.title}`"
          @click="openProject(project)"
        >
          <ProjectIllustration :kind="project.illustration" />
        </button>

        <div class="flex flex-1 flex-col p-5">
          <div class="flex items-center gap-2">
            <span class="mono-label">{{ project.category }}</span>
            <span
              v-if="project.prototype"
              class="rounded-full border border-brand-violet/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-brand-violet"
            >
              Prototype
            </span>
          </div>

          <h3 class="mt-2 font-mono text-lg font-semibold">{{ project.title }}</h3>
          <p class="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
            {{ project.overview }}
          </p>

          <ul class="mt-4 flex flex-wrap gap-1.5">
            <li
              v-for="t in project.tech.slice(0, 4)"
              :key="t"
              class="rounded border border-slate-300/70 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:border-white/10 dark:text-slate-400"
            >
              {{ t }}
            </li>
          </ul>

          <div class="mt-4 flex items-center gap-3">
            <button
              type="button"
              class="inline-flex items-center gap-1 text-sm font-medium text-brand-cyan transition hover:gap-2"
              @click="openProject(project)"
            >
              Details <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate-400 transition hover:text-brand-cyan"
              :aria-label="`${project.title} on GitHub`"
            >
              <Github class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="surface flex flex-col items-center gap-3 rounded-2xl p-12 text-center">
      <StitchMascot :size="56" />
      <p class="font-mono text-sm text-slate-500">No projects in this category yet.</p>
    </div>

    <ProjectModal :project="selected" @close="closeProject" />
  </SectionShell>
</template>
