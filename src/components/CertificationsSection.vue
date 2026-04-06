<script setup>
import { ref, inject, computed } from 'vue'

const scrollProgress = inject('scrollProgress')

const sectionNumberOpacity = computed(() => {
  return 0 // TODO: Adjust based on actual scrolling logic if needed
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
    name: 'React Native: Developing Android and iOS App', 
    provider: 'Coursera - Meta', 
    year: '2025',
    pdf: '/certificates/React Native Developing Android and iOS App.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/REPLACE_ME_ID_1'
  },
  { 
    name: 'Advanced Python Development', 
    provider: 'Coursera - Microsoft', 
    year: '2025',
    pdf: '/certificates/Advance Python Development.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/6W68P9P9K72A'
  },
  { 
    name: 'Web Development with Python', 
    provider: 'Coursera - Microsoft', 
    year: '2025',
    pdf: '/certificates/Web Development with Python.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/REPLACE_ME_ID_2'
  },
  { 
    name: 'Machine Learning with Python', 
    provider: 'Coursera - IBM', 
    year: '2025',
    pdf: '/certificates/Machine Learning with Python.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/REPLACE_ME_ID_3'
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
  { 
    name: 'Introduction to Cybersecurity', 
    provider: 'Cisco', 
    year: '2024',
    pdf: '/certificates/Introduction to Cybersecurity.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/REPLACE_ME_ID_4'
  },
  { 
    name: 'Prediction Models with Sports Data', 
    provider: 'Coursera - Univ. of Michigan', 
    year: '2025',
    pdf: '/certificates/Prediction Models with Sports Data.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/REPLACE_ME_ID_5'
  },
  { 
    name: 'Working with Data', 
    provider: 'Coursera - IBM', 
    year: '2026',
    pdf: '/certificates/Working with Data.pdf',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/REPLACE_ME_ID_6'
  }
])

const selectedCert = ref(null)
const showModal = ref(false)

const itemsPerPage = 6
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(certifications.value.length / itemsPerPage))

const paginatedCerts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return certifications.value.slice(start, end)
})

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

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
  <section class="section section-certifications" aria-label="Certificaciones">
    <div class="container">
      <h2 class="section-title">CERTIFICACIONES</h2>
      <div class="cert-list">
        <div 
          v-for="cert in paginatedCerts" 
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

      <div class="pagination">
        <button 
          class="page-btn" 
          @click="prevPage" 
          :disabled="currentPage === 1"
          aria-label="Página anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <div class="page-indicator">
          <span>{{ String(currentPage).padStart(2, '0') }}</span>
          <span class="page-separator">/</span>
          <span class="page-total">{{ String(totalPages).padStart(2, '0') }}</span>
        </div>
        <button 
          class="page-btn" 
          @click="nextPage" 
          :disabled="currentPage === totalPages"
          aria-label="Página siguiente"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
    
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
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
}

.section-certifications {
  background: var(--color-background-soft);
}

.section-title {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  margin-bottom: 2.5rem;
  font-weight: 500;
  flex-shrink: 0;
}

.cert-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: auto;
  padding-top: 1.5rem;
}

.page-btn {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.page-btn:not(:disabled):hover {
  background: var(--color-text);
  color: var(--color-background);
  transform: translateY(-2px);
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-btn svg {
  width: 18px;
  height: 18px;
}

.page-indicator {
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: var(--color-text-mute);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-separator {
  opacity: 0.5;
}

.page-total {
  opacity: 0.5;
}

.cert-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
  cursor: pointer;
  background: var(--color-background);
}

.cert-item:hover {
  border-color: var(--color-text);
  background: var(--color-background-soft);
  transform: translateY(-4px);
}

.cert-badge {
  width: 8px;
  height: 8px;
  background: var(--color-text);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.4rem;
}

.cert-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.cert-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.3;
}

.cert-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
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

@media (max-width: 1024px) {
  .cert-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 0 4vw;
  }
}
</style>