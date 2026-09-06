// ================= NAVBAR =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ================= PRICING TOGGLE =================

const billingToggle = document.getElementById("billingToggle");

const amounts = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");

billingToggle.addEventListener("change", () => {

    if (billingToggle.checked) {

        // Yearly pricing

        amounts.forEach(amount => {
            amount.textContent = amount.dataset.yearly;
        });

        periods.forEach(period => {
            period.textContent = "/month (billed yearly)";
        });

    } else {

        // Monthly pricing

        amounts.forEach(amount => {
            amount.textContent = amount.dataset.monthly;
        });

        periods.forEach(period => {
            period.textContent = "/month";
        });

    }

});


// ================= PLAN BUTTONS =================

const planButtons = document.querySelectorAll(".plan-btn");

planButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".pricing-card");

        const planName = card.querySelector("h3").textContent;

        alert(
            "Thank you for choosing the " +
            planName +
            " plan! ✨"
        );

    });

});


// ================= CONTACT BUTTON =================

const contactButton = document.querySelector(".contact-btn");

contactButton.addEventListener("click", () => {

    alert(
        "Thank you for your interest in Glow Beauty! 💕"
    );

});
