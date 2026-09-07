const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const periodElement = document.getElementById("period");
const dateElement = document.getElementById("date");

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // AM / PM
    const period = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zero
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // Update time
    hoursElement.textContent = formattedHours;
    minutesElement.textContent = formattedMinutes;
    secondsElement.textContent = formattedSeconds;

    // Update AM / PM
    periodElement.textContent = period;

    // Format date
    const dateOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    };

    dateElement.textContent = now.toLocaleDateString(
        "en-US",
        dateOptions
    );
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);

