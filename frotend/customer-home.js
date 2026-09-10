 // ================= FESTIVAL SLIDER =================

const slides = document.querySelectorAll(".festival-slide");
const dots = document.querySelectorAll(".festival-dot");

const prevBtn = document.getElementById("festivalPrev");
const nextBtn = document.getElementById("festivalNext");

let currentSlide = 0;
let slideTimer;


// Show selected slide
function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Remove active from all slides
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    // Remove active from all dots
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    // Add active to current slide
    slides[currentSlide].classList.add("active");

    // Add active to current dot
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }
}


// Next slide
function nextSlide() {
    showSlide(currentSlide + 1);
    restartTimer();
}


// Previous slide
function previousSlide() {
    showSlide(currentSlide - 1);
    restartTimer();
}


// Start automatic slider
function startTimer() {
    slideTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 4000);
}


// Restart timer after manual click
function restartTimer() {
    clearInterval(slideTimer);
    startTimer();
}


// Next button
if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}


// Previous button
if (prevBtn) {
    prevBtn.addEventListener("click", previousSlide);
}


// Dot buttons
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);
        restartTimer();

    });

});


// Start slider
showSlide(0);
startTimer();