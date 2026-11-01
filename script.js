let slideIndex = 1;
let slideInterval;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[slideIndex - 1].classList.add('active');
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n;
    showSlide(slideIndex);
    startAutoSlide();
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
    startAutoSlide();

    // Pause on hover
    const slideshow = document.querySelector('.slideshow-container');
    if (slideshow) {
        slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slideshow.addEventListener('mouseleave', startAutoSlide);
    }
});
