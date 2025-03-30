let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-item');

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}
