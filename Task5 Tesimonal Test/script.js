const testimonials = document.querySelectorAll(".testimonial-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");

let currentIndex = 0;

// Create dots dynamically
testimonials.forEach((_, index) => {
    const dot = document.createElement("button");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);

    dot.addEventListener("click", () => {
        currentIndex = index;
        showTestimonial(currentIndex);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Display testimonial
function showTestimonial(index) {

    testimonials.forEach((testimonial) => {
        testimonial.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
}

// Next button
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }

    showTestimonial(currentIndex);
});

// Previous button
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }

    showTestimonial(currentIndex);
});

// Keyboard navigation
document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {
        nextBtn.click();
    }

    if (event.key === "ArrowLeft") {
        prevBtn.click();
    }
});
