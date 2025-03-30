let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[currentIndex].style.display = 'block';
}

// Initialize the carousel
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.carousel-item');
  slides.forEach(slide => slide.style.display = 'none');
  slides[currentIndex].style.display = 'block';
});
