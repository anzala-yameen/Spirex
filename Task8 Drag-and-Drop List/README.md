# Task 8 – Drag-and-Drop List

## 📅 Date
12/09/2026

## 📌 Task
**Drag-and-Drop List**

## 📖 Description

A modern, responsive, and dynamic web application that enables users to effortlessly rearrange, organize, and prioritize list items using native **JavaScript DOM Drag & Drop events**, designed with a futuristic glassmorphic user interface using **HTML5 and CSS3**.

The application implements the full HTML5 Drag and Drop API (`dragstart`, `dragover`, `dragenter`, `dragleave`, `drop`, and `dragend`) along with touch event listeners (`touchstart`, `touchmove`, `touchend`) for mobile and tablet responsiveness. It includes dynamic visual drop indicators, live rank counter recalculations, task completion toggles, local storage state persistence, and a real-time Technical DOM Event Stream Inspector.

## ✨ Features

- **Native HTML5 Drag & Drop API:** Seamless desktop drag-and-drop utilizing `dataTransfer`, ghost opacity states, and dynamic insertion indicators.
- **Mobile & Touch Gesture Support:** Touch event listeners enable fluid dragging on smartphones and tablets.
- **Dynamic Rank Numbering:** Items automatically renumber (`#1, #2, #3...`) in real-time as they are rearranged.
- **Visual Insertion Guides:** Glowing cyan drop indicators dynamically mark whether the item will land above or below the target card.
- **Task Management Capabilities:**
  - Add new tasks with category badges (🔥 High Priority, 💻 Frontend UI, ⚡ Backend API, 🎨 UI/UX Design, 🧪 QA Testing).
  - Delete individual tasks with instant animation.
  - Mark tasks completed (`✔`) with strikethrough styling and live statistics counter.
  - Accessible keyboard/button movement controls (↑ and ↓) for accessibility compliance.
- **Quick Controls:**
  - **🔀 Shuffle:** Randomizes list item order using the Fisher-Yates algorithm.
  - **↺ Reset:** Restores default SpireX internship roadmap tasks.
  - **🗑 Clear:** Clears the list with an empty-state call to action.
- **DOM Event Stream Inspector:** Live technical console logging DOM Drag and Drop event lifecycles in real time.
- **LocalStorage State Persistence:** All reordered items, custom tasks, and completed states are preserved across page reloads.
- **Dual Dark / Light Mode:** Sleek glassmorphic dark theme and elegant light theme with `localStorage` memory.

## 🛠️ Technologies Used

- **HTML5** – Semantic structure (`<header>`, `<main>`, `<section>`, `<form>`, `<ul draggable="true">`, `<footer>`), accessibility ARIA attributes.
- **CSS3** – Modern CSS Variables, Flexbox, Glassmorphism (`backdrop-filter`), grab/grabbing cursor states, keyframe pulsing animations, responsive breakpoints.
- **JavaScript (ES6+)** – HTML5 Drag & Drop API, Pointer/Touch API, DOM manipulation, Fisher-Yates shuffle algorithm, `localStorage` API.
- **Google Fonts** – `Plus Jakarta Sans` for clean typography and `JetBrains Mono` for numeric readouts and console logging.

## 📂 Project Structure

```text
Task8 Drag-and-Drop List/
│
├── index.html       # Semantic HTML5 markup, task input bar, list and DOM inspector
├── style.css        # Glassmorphic styling, drag ghost states, insertion lines, themes
├── script.js        # Drag & drop event handlers, touch gesture engine, state persistence
└── README.md        # Technical task documentation & submission report
```

## 🚀 How to Run

1. Open the `Task8 Drag-and-Drop List` folder.
2. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).
3. Drag any task by clicking and holding on the grip handle (`⋮⋮`) or task card surface.
4. Move it over other tasks to view the glowing insertion line, then release to drop.
5. Watch the items renumber automatically and observe the real-time event logs in the DOM Inspector below!

## 🎯 Objective

The objective of this task is to demonstrate mastery of:
- JavaScript DOM event systems and the HTML5 Drag & Drop specification
- Mobile touch gesture mapping
- Complex array element reordering and state synchronization
- Clean CSS component architecture and state feedback (`:active`, `.dragging`, `.drag-over`)
- Accessible and responsive web application engineering

## 📱 Responsive Design

The interface is optimized for:
- Desktop workstations (1920×1080 and larger)
- Laptops (1366×768, 1440×900)
- Tablets (768px – 1024px)
- Mobile devices (360px – 480px)

## 👨‍💻 Internship

**SpireX Foundation – Web Development Internship**

**Task 8: Drag-and-Drop List**

**Intern:** Anzala Yameen  
**Intern ID:** 140  
**Institution:** Iqra University (BS Software Engineering)  
**Assigned Date:** 12th September 2026  
**Submission Date:** 13th September 2026  
**Submission Deadline:** Before 07:00 PM  

**Technical Lead,**  
**SpireX Foundation**
