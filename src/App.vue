<script setup lang="ts">
import { onMounted } from 'vue'

import CircuitBackground from '@/components/layout/CircuitBackground.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import BackToTop from '@/components/layout/BackToTop.vue'

import HeroSection from '@/components/hero/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import EdgeWalkers from '@/components/mascots/EdgeWalkers.vue'

import { detectResume } from '@/lib/resume'

onMounted(() => {
  void detectResume()
})
</script>

<template>
  <CircuitBackground />

  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-white"
  >
    Skip to content
  </a>

  <SiteHeader />

  <main id="main">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>

  <SiteFooter />
  <BackToTop />

  <EdgeWalkers />
</template>
