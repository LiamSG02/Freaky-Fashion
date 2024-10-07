let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  const slideshow = document.querySelector('.slideshow');
  slideshow.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}

function nextSlide() {
  if (currentSlide < slides.length - 3) { // Show 3 slides at a time
    currentSlide++;
    showSlides();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlides();
  }
}
