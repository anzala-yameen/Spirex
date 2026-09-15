# Task 10 – Country Information App

## 📅 Date
14/09/2026

## 📌 Task
**Country Information App**

## 📖 Description

A modern, responsive, and dynamic web application that allows users to **search for any country in the world** and dynamically displays comprehensive details such as its **national flag, capital city, total population, geographical region, and official currency** using **HTML5, CSS3, and modern vanilla JavaScript (ES6+)**.

Built with a state-of-the-art glassmorphic user interface, the application features an intelligent live search bar with autocomplete suggestions, interactive neighboring border country navigation, side-by-side demographic comparison, continent filtering, multi-criteria sorting, text-to-speech country pronunciation, high-resolution flag inspection, favorites bookmarking, and dual dark/light themes.

---

## ✨ Features

- **Dynamic Search & Real-Time Country Details (Task Core):**
  - **National Flag Display:** High-definition vector SVG flag presentation with aspect ratio preservation and full-screen zoom preview modal.
  - **Administrative Capital City:** Displays official capital city with estimated timezone calculation (`UTC+XX:00`).
  - **Dynamic Population Metric:** Formatted with standard digit separators (e.g. `220,892,340`) and animated progress bar computing the country's exact percentage of the global population (~8.1 billion).
  - **Region & Subregion:** Continental classification (Asia, Europe, Africa, Americas, Oceania) with detailed subregion tagging.
  - **Official Currency Details:** ISO currency code (e.g. `PKR`, `USD`, `EUR`), native currency symbol (`₨`, `$`, `€`), and full currency name.

- **Intelligent Autocomplete & Instant Search:**
  - Fast search matching across common names, official names, capital cities, currency codes, and ISO country codes (`PK`, `PAK`).
  - Dropdown suggestion list with flags, capitals, and continental badges.
  - Full keyboard accessibility (Arrow navigation `↑` `↓`, `Enter` to select, `Esc` to dismiss, and `/` global search shortcut).
  - One-click clear search button (`×`).

- **Quick Jump Featured Nation Chips:**
  - One-click shortcut pills for prominent global countries:
    - 🇵🇰 Pakistan
    - 🇺🇸 United States
    - 🇬🇧 United Kingdom
    - 🇯🇵 Japan
    - 🇩🇪 Germany
    - 🇸🇦 Saudi Arabia
    - 🇨🇦 Canada
    - 🇹🇷 Turkey
    - 🇦🇺 Australia
    - 🇧🇷 Brazil
    - 🇫🇷 France
    - 🇪🇬 Egypt

- **Interactive Neighboring Borders Navigation:**
  - Dynamically calculates all land border neighbors.
  - Displays interactive buttons with mini-flags for each bordering country (e.g., Pakistan → 🇦🇫 Afghanistan, 🇨🇳 China, 🇮🇳 India, 🇮🇷 Iran).
  - Clicking any neighboring pill immediately loads that country into the showcase with smooth scrolling.
  - Graceful handling for island nations and territories without land borders.

- **Side-by-Side Nation Comparison Engine:**
  - Dedicated comparison modal allowing users to select any two nations from a dropdown.
  - Compares Flags, Capitals, Populations (with visual winner highlight), Land Area (km²), Population Density, Continents, Currencies, Languages, and Calling Codes.

- **Interactive Extras & Demographics:**
  - **Text-to-Speech Audio Pronunciation:** Built-in Web Speech API voice reader that articulates the country and capital names out loud.
  - **Copy Summary:** One-click clipboard copy of country demographics formatted in clean markdown.
  - **Direct Google Maps Link:** One-click satellite and map lookup based on geographic coordinates (`lat, lng`).
  - **Random Nation Generator ("Surprise Me"):** Dice button that picks and showcases an exciting random sovereign state.
  - **Favorites & Bookmarks:** Star favorite countries with `localStorage` persistence and quick "Saved" filter.

- **Global Catalog Directory & Filtering:**
  - Filter by Region / Continent (All, Asia, Europe, Africa, Americas, Oceania).
  - Sort by:
    - Name (A → Z)
    - Name (Z → A)
    - Population (Highest First)
    - Population (Lowest First)
    - Land Area (Largest First)
  - Responsive cards with mini-flags, capital, population, currency, and "View Details" trigger.

- **Dual-Layer Zero-Failure Architecture:**
  - Bundled comprehensive 197-nation offline dataset ensuring **100% immediate load time, zero broken API keys, and offline capability**.
  - Asynchronous background synchronization with live REST endpoints to update real-time demographic shifts when connected.

- **Dual Dark / Light Glassmorphic Theme:**
  - Sleek dark futuristic interface by default with vibrant cyan/indigo glow accents.
  - Elegant frosted daylight light theme with persistent memory toggle.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic document architecture (`<header>`, `<main>`, `<section>`, `<article>`, `<select>`, `<button>`, `<footer>`), accessibility ARIA attributes (`role="listbox"`, `aria-selected`, `aria-modal`).
- **CSS3:** Modern CSS Custom Properties (Design Tokens), Glassmorphism (`backdrop-filter: blur(20px)`), CSS Grid, Flexbox, Keyframe Animations, Responsive Media Queries down to 360px.
- **JavaScript (ES6+):** Object-oriented state management, Web Speech API (`SpeechSynthesis`), Clipboard API, Asynchronous Fetch API with AbortController, DOM manipulation, `localStorage` persistence.
- **Google Fonts:** `Plus Jakarta Sans` for clean UI typography and `JetBrains Mono` for demographic metrics, numbers, and ISO codes.

---

## 📂 Project Structure

```
Task10 Country Info App/
├── index.html           # Main semantic HTML5 markup & application layout
├── style.css            # Responsive glassmorphic stylesheet & dark/light themes
├── script.js            # Main interactive controller, search engine & comparison logic
├── countries-data.js    # Comprehensive 197-nation offline dataset (ISO, flags, borders)
└── README.md            # Complete project documentation & submission details
```

---

## 🚀 How to Run the Application

1. **Option A: Direct Browser Execution (Zero-Build)**
   - Double-click `index.html` or drag and drop it into any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari).
   - No build tools, Node servers, or installations required!

2. **Option B: Live Server**
   - In VS Code or Antigravity IDE, right-click `index.html` and click **"Open with Live Server"**.
   - Or run with a local lightweight HTTP server:
     ```bash
     npx serve "Task10 Country Info App"
     ```

---

## 🎯 Submission Details

- **Intern Name:** Anzala Yameen
- **Intern ID:** 140
- **Organization:** SpireX Foundation
- **Role:** Frontend Web Development Intern
- **Task:** Task 10 – Country Information App
- **Submission Date:** 15th September 2026 (Before 7:00 PM)
