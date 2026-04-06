<script setup>
import { defineAsyncComponent } from 'vue'

import HeroSection from '@/components/HeroSection.vue'

// Lazy Loading para el resto de secciones (No bloquean el First Contentful Paint)
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
const CertificationsSection = defineAsyncComponent(() => import('@/components/CertificationsSection.vue'))
const SkillsSection = defineAsyncComponent(() => import('@/components/SkillsSection.vue'))
const ProjectsSection = defineAsyncComponent(() => import('@/components/ProjectsSection.vue'))
const ExperienceSection = defineAsyncComponent(() => import('@/components/ExperienceSection.vue'))
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))
const FooterSection = defineAsyncComponent(() => import('@/components/FooterSection.vue'))
</script>

<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <CertificationsSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  height: 100vh;
}
</style>
