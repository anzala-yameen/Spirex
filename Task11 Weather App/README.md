# Task 11 – Weather App

## 📅 Date
16/09/2026

## 📌 Task
**Weather App**

## 📖 Description

A modern, responsive, and dynamic web application that fetches and visualizes **real-time weather information** such as **temperature, humidity, atmospheric pressure, wind dynamics, and weather conditions** from a live meteorological API using **HTML5, CSS3, and modern vanilla JavaScript (ES6+)**.

Built with an ultra-sleek glassmorphic user interface, the application features an intelligent live city search bar with real-time autocomplete suggestions, 24-hour hourly forecast projections, a 7-day extended outlook, comprehensive Air Quality Index (AQI) diagnostics, solar daylight schedule tracking, side-by-side city weather comparison, device GPS geolocation, favorites bookmarking, and dynamic ambient weather particle animations that adapt to the active meteorological state (Rain, Snow, Thunderstorm, Fog, Clear Day/Night).

---

## ✨ Features

- **Real-Time Atmospheric Telemetry (Task Core Requirement):**
  - **Live Temperature Display:** Prominent degree readout with daily high and low extremes and apparent ("feels like") calculation.
  - **Relative Humidity & Comfort Gauge:** Dynamic percentage fill bar with tailored humidity advisories (Dry, Optimal, Muggy).
  - **Weather Conditions & Dynamic Iconography:** WMO weather condition classification with animated vector icons representing Clear Skies, Clouds, Rain, Snow, Drizzle, Thunderstorms, and Fog.
  - **Wind Dynamics & Digital Compass:** Wind speed measurement, cardinal direction calculation (`SSE (140°)`), rotating compass needle, and peak gust indicators.
  - **Barometric Pressure:** Mean sea-level pressure (`hPa`) with surface pressure metrics.
  - **Precipitation & Rain Probability:** Live precipitation volume (`mm` / `in`) paired with rain probability likelihood metrics.
  - **UV Radiation Index:** Standard UV index scale with status badges (Low, Moderate, High, Very High, Extreme) and sun protection advice.

- **Intelligent Global City Search & Autocomplete:**
  - High-precision search across any global city, capital, or coordinate utilizing Open-Meteo Geocoding API.
  - Dropdown suggestion list displaying city names, administrative divisions, countries, and geographical coordinates.
  - Full keyboard navigation (Arrow keys `↑` `↓` to cycle, `Enter` to select, `Esc` to close, and `/` global search shortcut).
  - One-click clear search button (`×`).

- **Quick Jump Popular City Pills:**
  - One-click shortcut pills for prominent global hubs:
    - 🇵🇰 Islamabad
    - 🇵🇰 Karachi
    - 🇵🇰 Lahore
    - 🇬🇧 London
    - 🇺🇸 New York
    - 🇯🇵 Tokyo
    - 🇦🇪 Dubai
    - 🇫🇷 France (Paris)
    - 🇦🇺 Australia (Sydney)
    - 🇨🇦 Canada (Toronto)
    - 🇸🇬 Singapore
    - 🇹🇷 Turkey (Istanbul)

- **24-Hour Dynamic Hourly Forecast:**
  - Horizontally scrollable timeline featuring upcoming 24 hours of forecast telemetry.
  - Current hour highlight with glow effect.
  - Hourly temperatures, animated weather icons, and precipitation probability percentages.

- **7-Day Extended Daily Outlook:**
  - Complete week overview with weekday titles and calendar dates.
  - Min/Max temperature visual range indicator bar with thermal gradient.
  - Weather condition descriptions and corresponding iconography.

- **Air Quality Index (AQI) Diagnostics:**
  - US AQI scale gauge with color-coded safety tiers (Good, Moderate, Sensitive, Unhealthy, Hazardous).
  - Real-time pollutant concentration breakdown:
    - **PM2.5** (Fine Particulate Matter)
    - **PM10** (Coarse Dust Particles)
    - **O₃** (Ground-level Ozone)
    - **NO₂** (Nitrogen Dioxide)
    - **CO** (Carbon Monoxide)
  - Medical and outdoor activity health advisories.

- **Sun Schedule & Solar Daylight Arc:**
  - Exact calculated sunrise and sunset times for the queried location.
  - Total daylight hours and minutes calculation.
  - Dynamic solar arc tracker displaying the current sun position and daylight cycle status.

- **Dynamic Ambient Particle Environments:**
  - Hardware-accelerated CSS particle canvas automatically adapting to live conditions:
    - **Rain / Thunderstorm:** Animated falling raindrops with variable velocity.
    - **Snow:** Drifting arctic snowflakes with horizontal sway.
    - **Clear Night:** Twinkling cosmic night stars.
    - **Sunny / Overcast:** Deep atmospheric gradients matching day/night cycles.

- **Dual-City Weather Comparison Engine:**
  - Dedicated comparison modal allowing evaluators to select any two cities from a dropdown.
  - Compares Temperature, Condition, Humidity, Wind Speed, UV Index, Barometric Pressure, and Precipitation side-by-side with visual winner highlights.

- **One-Click HTML5 GPS Geolocation:**
  - Detects current user device coordinates via `navigator.geolocation`.
  - Automatic reverse geocoding to resolve city name and country with instant weather retrieval.

- **Unit Toggle & Persistence:**
  - Seamless toggle between **Metric (°C, km/h, mm)** and **Imperial (°F, mph, in)**.
  - Instant recalculation across all cards and persistent storage in `localStorage`.

- **Favorites & Location Bookmarking:**
  - Pin favourite cities to local storage with one click on the hero star icon.
  - Slide-out Saved Locations drawer with count badge and instant removal/selection.

- **Zero-Config Live API + Resilient Offline Fallback:**
  - Powered by **Open-Meteo API** (completely free, zero API keys required).
  - Includes a fallback mock engine with rich realistic telemetry if network is unavailable.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible markup, ARIA roles, modern form inputs |
| **CSS3** | Glassmorphism, CSS Custom Properties, Flexbox & Grid, keyframe animations, responsive design |
| **JavaScript (ES6+)** | Asynchronous API fetching, debouncing, state management, DOM manipulation, Geolocation |
| **Open-Meteo API** | Real-time weather, hourly/daily forecasts, geocoding search, and air quality endpoints |
| **Font Awesome 6** | Scalable vector weather icons and interactive UI glyphs |
| **Google Fonts** | Modern typography using **Outfit** (display & numbers) and **Inter** (body & metrics) |

---

## 📂 Project Structure

```text
Task11 Weather App/
│
├── index.html          # Semantic HTML5 application shell & components
├── style.css           # Modern glassmorphic stylesheet, themes & particle animations
├── script.js           # Core JavaScript logic, state machine & API handling
├── cities-data.js      # Popular city presets, WMO weather codes & offline fallback generator
└── README.md           # Task 11 submission documentation
```

---

## 🚀 Getting Started / Running Locally

No build tools or external servers are required. The application runs purely in any modern web browser:

1. Clone or navigate to the repository directory:
   ```bash
   cd "Spirex/Task11 Weather App"
   ```

2. Open `index.html` directly in your browser:
   - Double-click `index.html`, **or**
   - Serve using any lightweight static server:
     ```bash
     # Python 3
     python -m http.server 8080

     # Node.js
     npx serve .
     ```

3. Open `http://localhost:8080` in your web browser.

---

## 📋 Keyboard Shortcuts

- <kbd>/</kbd> : Instantly focus the city search bar.
- <kbd>↓</kbd> / <kbd>↑</kbd> : Navigate through autocomplete search suggestions.
- <kbd>Enter</kbd> : Select highlighted suggestion or initiate city search.
- <kbd>Esc</kbd> : Dismiss search suggestions, drawer, or modal windows.

---

## 👨‍💻 Submission Details

- **Task:** Task 11 – Weather App
- **Organization:** SpireX Foundation
- **Date:** 16/09/2026
- **Deadline:** 17th September 2026, before 4:00 PM
