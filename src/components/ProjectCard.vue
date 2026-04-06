<template>
  <div class="project-card">
    <div class="project-number">[{{ String(project.id).padStart(2, '0') }}]</div>
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-desc">{{ project.description }}</p>
    <div class="project-tech">
      <span v-for="tech in project.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
    </div>
    <div class="project-links">
      <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link group-hover:text-theme-accent transition-colors" @click="handleLinkClick($event)">
        <svg class="link-icon github-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GITHUB
      </a>
      <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link group-hover:text-theme-accent transition-colors" @click="handleLinkClick($event)">        
        <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">     
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        VISITAR WEB
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  draggingState: {
    type: Boolean,
    default: false
  }
})

const handleLinkClick = (e) => {
  if (props.draggingState) {
    e.preventDefault()
  }
}
</script>

<style scoped>
.project-card {
  min-width: 400px;
  max-width: 400px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 1px solid var(--color-border);
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--color-background);
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.project-card:hover {
  background: var(--color-background-soft);
  transform: translateY(-8px);
  border-color: var(--color-text);
}

@media (max-width: 1024px) {
  .project-card {
    min-width: 350px;
    max-width: 350px;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .project-card {
    min-width: 85vw;
    max-width: 85vw;
    padding: 1.75rem;
  }
}

.project-number {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
  color: var(--color-text);
}

.project-desc {
  color: var(--color-text-mute);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  flex-grow: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  color: var(--color-text-mute);
  letter-spacing: 0.05em;
}

.project-links {
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  text-transform: uppercase;
}

.project-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 1px;
  background: var(--color-text);
  transition: width 0.3s ease;
}

.project-link:hover::after {
  width: 100%;
}

.link-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
}

.project-link:hover .link-icon {
  transform: translateY(-2px);
}
</style>