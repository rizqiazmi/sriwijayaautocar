// Inisialisasi object untuk menyimpan index slide
let slideIndexes = {};

// Fungsi untuk membuka gallery
function openHorizontalGallery(galleryId) {
  const modal = document.getElementById(`${galleryId}-gallery-modal`);
  modal.style.display = "block";
  
  // Inisialisasi index untuk gallery ini jika belum ada
  if (!slideIndexes[galleryId]) {
    slideIndexes[galleryId] = 0;
  }
  
  showSlide(galleryId, 0);
  
  // Optimasi ukuran gambar
  setTimeout(() => {
    const activeSlide = modal.querySelector('.slide[style*="display: block"]');
    if (activeSlide) {
      const img = activeSlide.querySelector('img');
      if (img) maximizeImageSize(img);
    }
  }, 50);
}

// Fungsi untuk menutup gallery
function closeGallery(galleryId) {
  document.getElementById(`${galleryId}-gallery-modal`).style.display = "none";
}

// Fungsi utama untuk menampilkan slide
function showSlide(galleryId, n) {
  const modal = document.getElementById(`${galleryId}-gallery-modal`);
  if (!modal) return;
  
  const slides = modal.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  // Pastikan index valid
  slideIndexes[galleryId] = (n < 0) ? slides.length - 1 : 
                          (n >= slides.length) ? 0 : n;
  
  // Sembunyikan semua slide
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  
  // Tampilkan slide yang aktif
  slides[slideIndexes[galleryId]].style.display = 'block';
  
  // Update tombol navigasi
  updateNavButtons(galleryId);
}

// Fungsi untuk navigasi slide
function moveSlide(galleryId, n) {
  if (!slideIndexes[galleryId]) {
    slideIndexes[galleryId] = 0;
  }
  showSlide(galleryId, slideIndexes[galleryId] + n);
}

// Fungsi untuk mengupdate status tombol navigasi
function updateNavButtons(galleryId) {
  const modal = document.getElementById(`${galleryId}-gallery-modal`);
  if (!modal) return;
  
  const slides = modal.querySelectorAll('.slide');
  const prevBtn = modal.querySelector('.prev-btn');
  const nextBtn = modal.querySelector('.next-btn');
  
  if (prevBtn && nextBtn) {
    prevBtn.style.visibility = (slideIndexes[galleryId] === 0) ? 'hidden' : 'visible';
    nextBtn.style.visibility = (slideIndexes[galleryId] === slides.length - 1) ? 'hidden' : 'visible';
  }
}

// Fungsi untuk optimasi ukuran gambar
function maximizeImageSize(img) {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  
  const maxHeight = Math.min(windowHeight * 0.85, img.naturalHeight);
  const maxWidth = Math.min(windowWidth * 0.95, img.naturalWidth);
  
  img.style.maxHeight = `${maxHeight}px`;
  img.style.maxWidth = `${maxWidth}px`;
  img.style.height = 'auto';
  img.style.width = 'auto';
}

// Event listener untuk klik di luar modal
window.onclick = function(event) {
  document.querySelectorAll('.horizontal-gallery-modal').forEach(modal => {
    if (event.target === modal) {
      const galleryId = modal.id.replace('-gallery-modal', '');
      closeGallery(galleryId);
    }
  });
};