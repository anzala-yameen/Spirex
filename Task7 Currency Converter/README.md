# Task 7 – Currency Converter

## 📅 Date
11/09/2026

## 📌 Task
**Currency Converter**

## 📖 Description

A modern, responsive web-based application that converts an amount from one currency to another using real-time exchange rates through an external financial API, built with **HTML5, CSS3, and JavaScript**.

The application connects to live exchange rate data covering over 160+ world currencies, with an embedded offline fallback cache ensuring zero downtime. It features interactive currency swapping, instant calculation, country flag visual previews, quick preset chips, a major currencies quick glance matrix, copy to clipboard functionality, and dual dark/light themes.

## ✨ Features

- **Real-Time Exchange Rates:** Connects live to exchange rate APIs (`open.er-api.com` with secondary fallback).
- **160+ World Currencies Supported:** Full support for major and regional currencies (USD, PKR, EUR, GBP, AED, SAR, CAD, AUD, INR, JPY, CNY, etc.).
- **Live Country Flags & Symbols:** Instant visual country flag indicators via FlagCDN with currency symbol preview.
- **Dynamic Instant Conversion:** Real-time calculation on typing with smooth debouncing and number formatting.
- **Animated Swap Engine:** 360-degree interactive currency swap button (`⇄`) with state recalculation.
- **Offline Fallback Architecture:** Integrated cached dataset prevents application breakage if internet access is interrupted.
- **Major Currencies Quick Matrix:** Live cards displaying 1 unit of selected base currency against PKR, EUR, GBP, AED, SAR, CAD, INR, and CNY.
- **Direct & Inverse Rate Breakdown:** Detailed exchange metrics (e.g., `1 USD = 277.72 PKR` & `1 PKR = 0.0036 USD`).
- **Quick Preset Chips:** Rapid amount testing chips ($10, $50, $100, $500, $1,000).
- **Copy to Clipboard:** One-click result copy with interactive toast notification.
- **Dark & Light Mode Toggle:** Smooth glassmorphic dark theme and crisp light theme with `localStorage` persistence.
- **Mobile-First Responsive Design:** Fluidly adapts to desktop, laptop, tablet, and smartphone screens.

## 🛠️ Technologies Used

- **HTML5** – Semantic document structure (`<header>`, `<main>`, `<section>`, `<form>`, `<footer>`), accessibility ARIA attributes.
- **CSS3** – Modern CSS Custom Properties (Variables), Flexbox, CSS Grid, Glassmorphism (`backdrop-filter`), keyframe animations, smooth transitions.
- **JavaScript (ES6+)** – Asynchronous `fetch()` API, DOM event handling, currency rate cross-multiplication, clipboard API, `localStorage` state management.
- **Google Fonts** – `Plus Jakarta Sans` for primary typography and `JetBrains Mono` for numeric readouts.
- **FlagCDN** – High-resolution vector/raster country flag previews.

## 📂 Project Structure

```text
Task7 Currency Converter/
│
├── index.html       # Semantic HTML5 markup with converter cards and quick matrix
├── style.css        # Modern glassmorphic styling, responsive layout, dark/light themes
├── script.js        # API fetch logic, calculation algorithms, DOM listeners, offline fallback
└── README.md        # Task documentation & submission report
```

## 🚀 How to Run

1. Clone or download the repository.
2. Navigate to the `Task7 Currency Converter` folder.
3. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
4. Enter any amount or select preset chips.
5. Select **From** and **To** currencies from the dropdowns or click the **Swap (⇄)** button.
6. The converted amount and direct/inverse exchange rates will update automatically!

> **Note:** The app works both online (fetching live real-time API rates) and offline (using integrated cached exchange rates).

## 🎯 Objective

The objective of this task is to develop a functional, professional real-time currency conversion web application demonstrating practical skills in:
- Asynchronous JavaScript (`async/await`, `fetch()`)
- REST API integration & error handling
- Mathematical cross-rate computations
- Responsive CSS Grid and Flexbox layouts
- Modern UI/UX principles (Glassmorphism, micro-animations, user feedback)

## 📱 Responsive Design

The interface is optimized for:
- Desktop monitors (1920×1080 and larger)
- Laptops (1366×768, 1440×900)
- Tablets (768px – 1024px)
- Mobile devices (360px – 480px)

## 👨‍💻 Internship

**SpireX Foundation – Web Development Internship**

**Task 7: Currency Converter**

**Intern:** Anzala Yameen  
**Intern ID:** 140  
**Institution:** Iqra University (BS Software Engineering)  
**Assigned Date:** 11th September 2026  
**Submission Date:** 12th September 2026  
**Submission Deadline:** Before 07:00 PM  

**Technical Lead,**  
**SpireX Foundation**
