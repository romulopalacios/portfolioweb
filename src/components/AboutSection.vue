<script setup>
import { ref, inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

// Sección 02: ocultar cuando está activa (14.29% - 28.58%)
const sectionNumberOpacity = computed(() => {
  const progress = scrollProgress.value
  if (progress >= 14.29 && progress < 28.58) return 0
  return 0
})

const certifications = ref([
  { 
    name: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps', 
    provider: 'Coursera - IBM', 
    year: '2025',
    pdf: '/certificates/Flutter and Dart Developing.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/UTLY1MZFOIOA'
  },
  { 
    name: 'Advanced Python Development', 
    provider: 'Coursera - Microsoft', 
    year: '2025',
    pdf: '/certificates/Advance Python Development.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/6W68P9P9K72A'
  },
  { 
    name: 'IoT Wireless and Cloud Computing', 
    provider: 'Coursera - Yonsei University', 
    year: '2025',
    pdf: '/certificates/IoT Wireless and Cloud Computing.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/9APXJ1YFK908'
  },
  { 
    name: 'AWS Artificial Intelligence Practitioner', 
    provider: 'AWS', 
    year: '2025',
    pdf: '/certificates/AWS Artificial Intelligencie Practioner.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/UXX80L585W2V'
  },
])

const selectedCert = ref(null)
const showModal = ref(false)

const openCertificate = (cert) => {
  selectedCert.value = cert
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  setTimeout(() => {
    selectedCert.value = null
  }, 300)
}
</script>

<template>
  <section class="section section-about" aria-label="Información sobre mí">
    <div class="container">
      <h2 class="section-title">SOBRE MÍ</h2>
      <div class="about-layout">
        <div class="profile-image-container">
          <div class="profile-image-wrapper">
            <img 
              src="/images/profile.jpg" 
              alt="Rómulo Palacios" 
              class="profile-image"
              loading="eager"
              @error="(e) => e.target.style.display = 'none'"
            />
          </div>
        </div>
        <div class="about-content">
          <p class="about-text">
            Hola, soy Rómulo Palacios, estudiante y apasionado por la tecnología, cursando el ultimo semestre de mi carrera de technologías de la información, cuento con skills y aptitudes de desarrollo como en movil y web, además gran afinidad por la automatización de procesos y el Internet de las Cosas IoT. Siempre dispuesto a aprender y enfrentar nuevos desafíos.
          </p>
          <div class="certifications">
            <div class="certifications-header">
              <div class="cert-icon">✓</div>
              <span class="cert-title">CERTIFICACIONES</span>
            </div>
            <div class="cert-list">
              <div 
                v-for="cert in certifications" 
                :key="cert.name" 
                class="cert-item"
                @click="openCertificate(cert)"
              >
                <div class="cert-badge"></div>
                <div class="cert-info">
                  <div class="cert-name">{{ cert.name }}</div>
                  <div class="cert-meta">
                    <span class="cert-provider">{{ cert.provider }}</span>
                    <span class="cert-separator">•</span>
                    <span class="cert-year">{{ cert.year }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-number" :style="{ opacity: sectionNumberOpacity }">02</div>
  </section>
  
  <!-- Modal de Certificado - Teleport to body -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal" aria-label="Cerrar">×</button>
          
          <div class="modal-header">
            <h3 class="modal-title">{{ selectedCert?.name }}</h3>
            <div class="modal-meta">
              <span>{{ selectedCert?.provider }}</span>
              <span class="separator">•</span>
              <span>{{ selectedCert?.year }}</span>
            </div>
          </div>
          
          <div class="modal-body">
            <div class="pdf-preview">
              <iframe 
                v-if="selectedCert?.pdf"
                :src="selectedCert.pdf" 
                frameborder="0"
                title="Certificate Preview"
              ></iframe>
              <div v-else class="no-preview">
                <div class="no-preview-icon">📄</div>
                <p>Preview no disponible</p>
              </div>
            </div>
          </div>
          
          <div class="modal-footer">
            <a 
              v-if="selectedCert?.verifyUrl"
              :href="selectedCert.verifyUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="verify-btn"
            >
              <span>✓</span>
              VERIFICAR EN COURSERA
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
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
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
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

.section-about {
  background: var(--color-background-soft);
}

.section-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.about-layout {
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 2.5rem;
  align-items: start;
}

.profile-image-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.profile-image-wrapper {
  position: relative;
  width: 240px;
  height: 240px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all var(--transition-base);
}

.profile-image-wrapper:hover {
  border-color: var(--color-text);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(100%);
  transition: all var(--transition-base);
}

.profile-image-wrapper:hover .profile-image {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.about-content {
  max-width: 100%;
}

.about-text {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-text);
  margin-bottom: 1.75rem;
  font-weight: 400;
  max-width: 100%;
}

.certifications {
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
  margin-top: 1.5rem;
}

.certifications-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.cert-icon {
  width: 24px;
  height: 24px;
  border: 1px solid var(--color-text);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text);
}

.cert-title {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  font-weight: 500;
}

.cert-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cert-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.cert-item:hover {
  border-color: var(--color-text);
  background: var(--color-background-mute);
  transform: translateX(4px);
}

.cert-badge {
  width: 8px;
  height: 8px;
  background: var(--color-text);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.3rem;
}

.cert-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.cert-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.3;
}

.cert-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  color: var(--color-text-mute);
}

.cert-provider {
  letter-spacing: 0.05em;
}

.cert-separator {
  opacity: 0.5;
}

.cert-year {
  font-variant-numeric: tabular-nums;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 2rem;
}

.modal-content {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  max-width: 1200px;
  width: 100%;
  max-height: 95vh;
  height: 95vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal-close:hover {
  border-color: var(--color-text);
  background: var(--color-background-soft);
}

.modal-header {
  padding: 2rem 2rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  padding-right: 3rem;
}

.modal-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--color-text-mute);
}

.modal-meta .separator {
  opacity: 0.5;
}

.modal-body {
  flex: 1;
  overflow: hidden;
  padding: 0;
  display: flex;
}

.pdf-preview {
  width: 100%;
  height: 100%;
  background: var(--color-background-soft);
  display: flex;
}

.pdf-preview iframe {
  width: 100%;
  height: 100%;
  display: block;
  border: none;
}

.no-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--color-text-mute);
}

.no-preview-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.modal-footer {
  padding: 1.5rem 2rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
}

.verify-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  transition: all var(--transition-fast);
}

.verify-btn:hover {
  border-color: var(--color-text);
  background: var(--color-background-soft);
  transform: translateY(-2px);
}

.verify-btn span {
  font-size: 1rem;
  font-weight: 600;
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from .modal-content {
  transform: scale(0.95) translateY(20px);
}

.modal-fade-leave-to .modal-content {
  transform: scale(0.95) translateY(20px);
}

.skills-section {
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
}

.skills-header {
  margin-bottom: 1.25rem;
}

.skills-main-title {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  font-weight: 500;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.skills-column {
  display: flex;
  flex-direction: column;
}

.skill-category {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--color-text-mute);
  font-weight: 500;
  margin-bottom: 0.75rem;
  opacity: 0.7;
}

.skills-group {
  display: flex;
  flex-direction: column;
}

.skills-title {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  margin-bottom: 1.25rem;
  color: var(--color-text-mute);
  font-weight: 500;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.7rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 0.8rem;
  color: var(--color-text);
}

.skill-percent {
  font-size: 0.7rem;
  color: var(--color-text-mute);
  font-variant-numeric: tabular-nums;
}

.skill-bar {
  height: 1px;
  background: var(--color-border);
  position: relative;
  width: 100%;
}

.skill-progress {
  height: 100%;
  background: var(--color-text);
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 1200px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .profile-image-wrapper {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  
  .skills-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
  
  .about-text {
    font-size: 0.9rem;
  }
  
  .certifications {
    margin-top: 1.25rem;
    padding-top: 1.25rem;
  }
  
  .cert-item {
    padding: 0.65rem;
  }
  
  .cert-name {
    font-size: 0.8rem;
  }
  
  .cert-meta {
    font-size: 0.65rem;
  }
  
  .skills-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .skill-name {
    font-size: 0.8rem;
  }
  
  .skill-percent {
    font-size: 0.7rem;
  }
}
</style>
