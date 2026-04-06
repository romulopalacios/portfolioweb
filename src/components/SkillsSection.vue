<script setup>
import { ref, inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

// Sección 03: ocultar cuando está activa (28.58% - 42.87%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 28.58 && progress < 42.87) return 0
  return 0
})

const skillCategories = ref([
  {
    name: 'MÓVIL',
    skills: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' }
    ]
  },
  {
    name: 'WEB',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'tRPC', icon: '' }
    ]
  },
  {
    name: 'IoT & BACKEND',
    skills: [
      { name: 'Python (FastAPI)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'ESP32', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'MQTT', icon: '' },
      { name: 'AMQP', icon: '' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' }
    ]
  },
  {
    name: 'QA & TESTING',
    skills: [
      { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg' },
      { name: 'Appium', icon: '' },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'Gherkin', icon: '' }
    ]
  },
  {
    name: 'DATA ANALYSIS',
    skills: [
      { name: 'Power BI', icon: '' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Sports Analytics', icon: '' }
    ]
  },
  {
    name: 'INFRAESTRUCTURA',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' }
    ]
  }
])
</script>

<template>
  <section class="section section-skills" aria-label="Habilidades técnicas">
    <div class="container">
      <h2 class="section-title">HABILIDADES TÉCNICAS</h2>
      
      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.name" class="skill-item">
          <span class="skill-label">{{ category.name }}</span>
          <div class="skill-value">
            <span v-for="skill in category.skills" :key="skill.name" class="tech-tag">
              <img v-if="skill.icon" :src="skill.icon" :alt="skill.name" class="tech-icon" />
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">03</div>
  </section>
</template>

<style scoped>
.section {
  min-width: 100vw;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 6vw;
  border-right: 1px solid var(--color-border);
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.container {
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-number {
  position: absolute;
  top: 2rem;
  right: 3rem;
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  font-weight: 500;
}

.section-skills {
  background: var(--color-background);
}

.section-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  margin-bottom: 2.5rem;
  font-weight: 500;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.skill-item {
  display: grid;
  align-items: center;
  overflow: hidden;
  cursor: crosshair;
  min-height: 4rem;
  border-bottom: 1px solid var(--color-border);
}

.skill-label, .skill-value {
  grid-area: 1 / 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-label {
  font-size: 2.25rem;
  letter-spacing: -0.02em;
  color: var(--color-text);
  font-weight: 300;
  opacity: 1;
  transform: translateY(0);
}

.skill-value {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  opacity: 0;
  transform: translateY(100%);
  grid-area: 1 / 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-mute);
  font-weight: 400;
  transition: all var(--transition-fast);
}

.tech-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all var(--transition-fast);
}

.skill-item:hover .tech-icon {
  filter: grayscale(0%);
  opacity: 1;
}

.skill-item:hover .tech-tag {
  color: var(--color-text);
}

.skill-item:hover .skill-label {
  opacity: 0;
  transform: translateY(-100%);
}

.skill-item:hover .skill-value {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
  
  .skill-item {
    min-height: 3.5rem;
  }
  
  .skill-label {
    font-size: 1.5rem;
  }
  
  .skill-value {
    gap: 0.75rem;
  }
}
</style>
