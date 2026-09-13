# Task 9 – Expense Tracker

## 📅 Date
13/09/2026

## 📌 Task
**Expense Tracker**

## 📖 Description

A modern, responsive, and dynamic web application that allows users to seamlessly **add, view, and delete expenses** while **dynamically calculating the total amount**, net cash balance, income inflow, category breakdown distribution, and monthly budget pacing in real time using **HTML5, CSS3, and modern JavaScript (ES6+)**.

Built with a state-of-the-art glassmorphic user interface, the application features live SVG donut chart analytics, category spending progress bars, search and multi-criteria sorting, preset expense chips, multi-currency conversion, local storage persistence, CSV data export, and dual dark/light themes.

---

## ✨ Features

- **Real-Time Dynamic Total Calculation:**
  - Automatically calculates and updates **Total Expenses**, **Total Income**, and **Net Balance** upon every addition or deletion.
  - Computes average expense per transaction, highest recorded expense, and remaining budget in real time.
- **Interactive Add & Manage Transactions:**
  - Dual-mode switcher for **Expense** vs **Income** transactions.
  - Detailed metadata capture: Title/Description, Amount, Category, Date, Payment Method (Cash, Card, Digital Wallet, Bank Transfer), and optional Notes.
  - Instant form validation with friendly inline field feedback.
  - Quick preset chips (☕ Coffee, 🍔 Lunch, ⛽ Fuel, 🛒 Groceries, 🌐 Internet) for rapid one-click testing.
- **Visual Analytics & Category Spending Breakdown:**
  - **Dynamic SVG Donut Chart:** Interactive proportional ring visualization calculated via SVG stroke-dasharray geometry.
  - **Category Distribution Bars:** Real-time percentage bars for Food & Dining, Transportation, Shopping, Utilities & Bills, Entertainment, Health, Education, Salary, and Miscellaneous.
  - **Financial Highlights Matrix:** Key insights including Highest Expense, Average Outlay, and Total Transaction Volume.
- **Monthly Budget Pacing Monitor:**
  - User-configurable monthly spending ceiling with in-app edit modal.
  - Animated progress bar that dynamically shifts color status (Emerald `<70%`, Warning Amber `70–90%`, Rose Alert `>90%`).
- **Comprehensive History, Search & Filter Engine:**
  - Instant text search across transaction descriptions and memos.
  - Filter by category and transaction type (All, Expenses Only, Income Only).
  - Multi-criteria sorting (Date: Newest/Oldest, Amount: Highest/Lowest).
- **Smooth Delete & Batch Operations:**
  - Individual item deletion with slide-out transition animations and immediate dynamic recalculation.
  - "Clear All Transactions" with confirmation modal.
  - **Sample Demo Data Seeder:** Instantly pre-populates realistic expenses and salary data for immediate evaluator demonstration.
  - **Export to CSV:** One-click download of all transaction history in `.csv` spreadsheet format.
- **Multi-Currency Support:**
  - Live currency switcher supporting USD (`$`), PKR (`₨`), EUR (`€`), GBP (`£`), AED (`د.إ`), SAR (`﷼`), CAD (`C$`), AUD (`A$`), and INR (`₹`).
- **LocalStorage State Persistence:**
  - All transactions, custom budget targets, selected currency, and active theme persist across browser reloads.
- **Dual Dark / Light Theme:**
  - Futuristic glassmorphic dark theme and elegant frosted light theme with memory toggle.

---

## 🛠️ Technologies Used

- **HTML5** – Semantic document architecture (`<header>`, `<main>`, `<section>`, `<article>`, `<form>`, `<footer>`), accessibility ARIA attributes and roles.
- **CSS3** – Modern CSS Variables, Flexbox, CSS Grid, Glassmorphism (`backdrop-filter: blur(16px)`), CSS keyframe animations, responsive media queries.
- **JavaScript (ES6+)** – DOM manipulation, array higher-order methods (`reduce`, `filter`, `map`, `sort`), Event Delegation, SVG dynamic pathing, Blob/Data URI CSV generator, `localStorage` API.
- **Google Fonts** – `Plus Jakarta Sans` for clean typography and `JetBrains Mono` for numeric metrics and financial tickers.

---

## 📂 Project Structure

```text
Task9 Expense Track/
│
├── index.html       # Semantic HTML5 markup, KPI cards, form, analytics, transaction history & modals
├── style.css        # Glassmorphic UI styling, dark/light themes, category colors, responsive layout
├── script.js        # Dynamic calculation engine, SVG donut chart, filters, CSV export, persistence
└── README.md        # Technical task documentation & submission report
```

---

## 🚀 How to Run

1. Open the `Task9 Expense Track` directory.
2. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari).
3. Review the dashboard with pre-loaded realistic demo transactions, or click **Demo Data** to restore samples at any time.
4. Add a new expense or income item using the form on the left:
   - Notice the **Total Expenses** and **Net Balance** immediately recalculate!
   - Observe the **Donut Chart** and **Category Breakdown Bars** update instantly.
5. Click the trash icon (`🗑️`) on any transaction card to delete it and watch the totals dynamically decrease.
6. Try the **Currency Switcher**, **Search & Filter Bar**, **Budget Limit Editor**, and **Export CSV** feature!

---

## 🎯 Objective & Evaluation Criteria

The objective of Task 9 is to demonstrate comprehensive proficiency in:
- Dynamic mathematical state calculation and immediate DOM synchronization without page refresh
- Designing modern, aesthetic, and production-ready financial user interfaces
- Modular, bug-free, and clean JavaScript component architecture
- User-centric interactions including filtering, search, export, animations, and accessible modals
- Robust edge-case handling, input validation, and local storage state persistence

---

## 📱 Responsive Layout

The application is thoroughly optimized across:
- **Workstations & High-Res Desktops** (1920×1080 and above)
- **Laptops** (1366×768, 1440×900, 1600×900)
- **Tablets** (768px – 1024px)
- **Mobile Devices** (360px – 480px)

---

## 👨‍💻 Internship Information

**SpireX Foundation – Web Development Internship**  
**Task 9: Expense Tracker**

- **Intern Name:** Anzala Yameen  
- **Intern ID:** 140  
- **Institution:** Iqra University (BS Software Engineering)  
- **Assigned Date:** 13th September 2026  
- **Submission Date:** 14th September 2026  
- **Submission Deadline:** Before 07:00 PM  

**Technical Lead,**  
**SpireX Foundation**
