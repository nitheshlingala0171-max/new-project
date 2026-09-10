<<<<<<< HEAD
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
=======
 /* ================= FESTIVAL CAROUSEL ================= */

let currentFestival = 0;

const festivalTrack = document.getElementById("festivalTrack");

const totalFestivals = 3;


function showFestival(index) {

    if (index < 0) {
        currentFestival = totalFestivals - 1;
    }

    else if (index >= totalFestivals) {
        currentFestival = 0;
    }

    else {
        currentFestival = index;
    }

    festivalTrack.style.transform =
        `translateX(-${currentFestival * 100}%)`;
}


function nextFestival() {
    showFestival(currentFestival + 1);
}


function previousFestival() {
    showFestival(currentFestival - 1);
}


/* Automatic carousel */

setInterval(function () {
    nextFestival();
}, 5000);


/* ================= FESTIVAL BUTTON ================= */

function exploreFestival(festivalName) {

    alert(
        festivalName +
        " collection will be available here."
    );
}


/* ================= CATEGORY ================= */

function openCategory(categoryName) {

    alert(
        categoryName +
        " category selected."
    );
}


/* ================= PRODUCT ================= */

function openProduct(productName) {

    alert(
        productName +
        " selected."
    );
}


/* ================= HEADER ICONS ================= */

function showMessage(item) {

    alert(item + " feature will be added soon.");
}


/* ================= SEARCH ================= */

function searchProducts() {

    const searchInput =
        document.getElementById("searchInput");

    const value =
        searchInput.value.trim();

    if (value === "") {

        alert("Please enter something to search.");

        return;
    }

    alert(
        "Searching for: " + value
    );
}
>>>>>>> 0a10b678362e0484a991201ef173b6d4ef8aeb91

    // Remove active from all dots
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

<<<<<<< HEAD
    // Add active to current slide
    slides[currentSlide].classList.add("active");

    // Add active to current dot
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }
}
=======
/* ================= ENTER KEY SEARCH ================= */

document
    .getElementById("searchInput")
    .addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
>>>>>>> 0a10b678362e0484a991201ef173b6d4ef8aeb91

            searchProducts();

<<<<<<< HEAD
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
=======
        }

    });
>>>>>>> 0a10b678362e0484a991201ef173b6d4ef8aeb91
