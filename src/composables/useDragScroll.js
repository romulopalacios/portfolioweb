import { ref, onMounted, onUnmounted } from 'vue'

export function useDragScroll() {
  const gridRef = ref(null)
  const isDragging = ref(false)
  const hasDragged = ref(false)
  const startX = ref(0)
  const scrollLeft = ref(0)

  const startDrag = (e) => {
    if (!gridRef.value) return
    isDragging.value = true
    hasDragged.value = false
    startX.value = e.pageX - gridRef.value.offsetLeft
    scrollLeft.value = gridRef.value.scrollLeft
  }

  const stopDrag = () => {
    isDragging.value = false
    setTimeout(() => {
      hasDragged.value = false
    }, 50)
  }

  const onDrag = (e) => {
    if (!isDragging.value || !gridRef.value) return
    e.preventDefault()
    const x = e.pageX - gridRef.value.offsetLeft
    const walk = (x - startX.value) * 2 // Multiplicador de velocidad
    
    if (Math.abs(walk) > 5) {
      hasDragged.value = true
    }
    
    gridRef.value.scrollLeft = scrollLeft.value - walk
  }

  const handleLinkClick = (e) => {
    if (hasDragged.value) {
      e.preventDefault()
    }
  }
  
  const scrollGrid = (direction) => {
    if (!gridRef.value) return
    // Ancho de tarjeta base (400px) + gap (32px) para escritorio como fallback general
    const scrollAmount = window.innerWidth > 1024 ? 432 : window.innerWidth > 768 ? 382 : window.innerWidth * 0.85
    
    if (direction === 'left') {
      gridRef.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    } else {
      gridRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return {
    gridRef,
    isDragging,
    startDrag,
    stopDrag,
    onDrag,
    handleLinkClick,
    scrollGrid
  }
}
