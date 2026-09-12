/**
 * SpireX Foundation - Frontend Web Development Internship
 * Task 8: Drag-and-Drop List
 * Intern: Anzala Yameen | Intern ID: 140
 * Date: September 2026
 */

// =============================================================================
// 1. Initial State & Default Task Dataset
// =============================================================================
const DEFAULT_TASKS = [
    { id: "task-1", title: "Task 1: 3D Interactive Portfolio (WebGL & Three.js)", tag: "frontend", completed: true },
    { id: "task-2", title: "Task 2: Responsive CV Card with Cherry/Rose Theme", tag: "design", completed: true },
    { id: "task-3", title: "Task 3: Responsive Navigation Bar with Mobile Drawer", tag: "frontend", completed: true },
    { id: "task-4", title: "Task 4: Glow Beauty Multi-Tier Pricing Plans", tag: "design", completed: true },
    { id: "task-5", title: "Task 5: Customer Testimonials Interactive Slider", tag: "frontend", completed: true },
    { id: "task-6", title: "Task 6: Real-Time Digital Clock with Live Pulser", tag: "frontend", completed: true },
    { id: "task-7", title: "Task 7: Real-Time Currency Converter API", tag: "backend", completed: true },
    { id: "task-8", title: "Task 8: Dynamic Drag-and-Drop List Architecture", tag: "high", completed: false }
];

let tasks = [];
let draggedItemId = null;
let touchDragItem = null;
let touchClone = null;

// DOM References
const listContainer = document.getElementById("draggableList");
const addTaskForm = document.getElementById("addTaskForm");
const taskInput = document.getElementById("taskInput");
const taskPriority = document.getElementById("taskPriority");
const totalCountEl = document.getElementById("totalCount");
const completedCountEl = document.getElementById("completedCount");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const emptyState = document.getElementById("emptyState");
const emptyResetBtn = document.getElementById("emptyResetBtn");
const eventLogBox = document.getElementById("eventLogBox");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");

// =============================================================================
// 2. Lifecycle & Initialization
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    loadTasks();
    setupEventListeners();
    logEvent("system", "DOM Loaded & Ready. 8 default tasks populated.");
});

// =============================================================================
// 3. Task Storage & Rendering
// =============================================================================
function loadTasks() {
    const saved = localStorage.getItem("spirex_task8_items");
    if (saved) {
        try {
            tasks = JSON.parse(saved);
        } catch (e) {
            tasks = [...DEFAULT_TASKS];
        }
    } else {
        tasks = [...DEFAULT_TASKS];
    }
    renderList();
}

function saveTasks() {
    localStorage.setItem("spirex_task8_items", JSON.stringify(tasks));
    updateStats();
}

function renderList() {
    listContainer.innerHTML = "";

    if (tasks.length === 0) {
        listContainer.style.display = "none";
        emptyState.style.display = "flex";
    } else {
        listContainer.style.display = "flex";
        emptyState.style.display = "none";

        tasks.forEach((task, index) => {
            const li = createDraggableItem(task, index);
            listContainer.appendChild(li);
        });
    }

    updateStats();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;

    totalCountEl.textContent = total;
    completedCountEl.textContent = completed;
}

// =============================================================================
// 4. Create Draggable DOM Element & Attach Event Listeners
// =============================================================================
function createDraggableItem(task, index) {
    const li = document.createElement("li");
    li.className = `drag-item ${task.completed ? "completed" : ""}`;
    li.draggable = true;
    li.dataset.id = task.id;
    li.dataset.index = index;

    const tagLabelMap = {
        high: "🔥 High",
        frontend: "💻 Frontend",
        backend: "⚡ Backend",
        design: "🎨 UI/UX",
        testing: "🧪 QA"
    };

    li.innerHTML = `
        <div class="item-left">
            <span class="drag-handle" title="Drag to reorder" aria-hidden="true">⋮⋮</span>
            <span class="rank-badge">#${index + 1}</span>
            <button type="button" class="item-check" title="Toggle complete" aria-label="Mark complete">
                ${task.completed ? "✔" : ""}
            </button>
            <div class="item-content">
                <span class="item-title">${escapeHtml(task.title)}</span>
                <span class="tag-badge ${task.tag}">${tagLabelMap[task.tag] || task.tag}</span>
            </div>
        </div>

        <div class="item-actions">
            <button type="button" class="item-btn move-up-btn" title="Move Up" ${index === 0 ? "disabled style='opacity:0.3;cursor:not-allowed'" : ""}>↑</button>
            <button type="button" class="item-btn move-down-btn" title="Move Down" ${index === tasks.length - 1 ? "disabled style='opacity:0.3;cursor:not-allowed'" : ""}>↓</button>
            <button type="button" class="item-btn delete-btn" title="Delete task">✕</button>
        </div>
    `;

    // Item Action Buttons
    const checkBtn = li.querySelector(".item-check");
    checkBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleComplete(task.id);
    });

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteTask(task.id);
    });

    const moveUpBtn = li.querySelector(".move-up-btn");
    moveUpBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        moveItem(index, index - 1);
    });

    const moveDownBtn = li.querySelector(".move-down-btn");
    moveDownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        moveItem(index, index + 1);
    });

    // -------------------------------------------------------------------------
    // HTML5 Drag & Drop Listeners
    // -------------------------------------------------------------------------
    li.addEventListener("dragstart", handleDragStart);
    li.addEventListener("dragover", handleDragOver);
    li.addEventListener("dragenter", handleDragEnter);
    li.addEventListener("dragleave", handleDragLeave);
    li.addEventListener("drop", handleDrop);
    li.addEventListener("dragend", handleDragEnd);

    // -------------------------------------------------------------------------
    // Mobile Touch Gesture Listeners (For Touchscreens)
    // -------------------------------------------------------------------------
    const handle = li.querySelector(".drag-handle");
    handle.addEventListener("touchstart", handleTouchStart, { passive: false });
    handle.addEventListener("touchmove", handleTouchMove, { passive: false });
    handle.addEventListener("touchend", handleTouchEnd);

    return li;
}

// =============================================================================
// 5. HTML5 Drag and Drop Event Handlers
// =============================================================================
function handleDragStart(e) {
    draggedItemId = this.dataset.id;
    this.classList.add("dragging");

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", draggedItemId);

    const taskObj = tasks.find(t => t.id === draggedItemId);
    logEvent("dragstart", `[dragstart] Started dragging "${taskObj ? taskObj.title.substring(0, 25) + '...' : draggedItemId}" (Rank #${parseInt(this.dataset.index) + 1})`);
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    if (this.dataset.id === draggedItemId) return;

    const bounding = this.getBoundingClientRect();
    const offset = e.clientY - bounding.top;
    const height = bounding.height;

    // Determine if insertion should be top or bottom
    if (offset < height / 2) {
        this.classList.add("drag-over-top");
        this.classList.remove("drag-over-bottom");
    } else {
        this.classList.add("drag-over-bottom");
        this.classList.remove("drag-over-top");
    }
}

function handleDragEnter(e) {
    e.preventDefault();
}

function handleDragLeave() {
    this.classList.remove("drag-over-top", "drag-over-bottom");
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    const targetId = this.dataset.id;
    const isOverTop = this.classList.contains("drag-over-top");
    cleanupDropStyles();

    if (!draggedItemId || draggedItemId === targetId) return;

    const sourceIndex = tasks.findIndex(t => t.id === draggedItemId);
    let targetIndex = tasks.findIndex(t => t.id === targetId);

    if (sourceIndex === -1 || targetIndex === -1) return;

    // Remove item from source
    const [movedItem] = tasks.splice(sourceIndex, 1);

    // If dropped on bottom half, increment target index
    if (!isOverTop && sourceIndex < targetIndex) {
        // targetIndex has already decreased due to splice
    } else if (!isOverTop && sourceIndex > targetIndex) {
        targetIndex += 1;
    }

    // Insert at new target index
    tasks.splice(targetIndex, 0, movedItem);

    saveTasks();
    renderList();

    logEvent("drop", `[drop] Moved "${movedItem.title.substring(0, 25)}..." from position #${sourceIndex + 1} ➔ #${targetIndex + 1}`);
    showToast(`Reordered: #${sourceIndex + 1} ➔ #${targetIndex + 1}`);
}

function handleDragEnd() {
    this.classList.remove("dragging");
    cleanupDropStyles();
    draggedItemId = null;
}

function cleanupDropStyles() {
    document.querySelectorAll(".drag-item").forEach(item => {
        item.classList.remove("drag-over-top", "drag-over-bottom");
    });
}

// =============================================================================
// 6. Mobile Touch Event Handlers
// =============================================================================
function handleTouchStart(e) {
    touchDragItem = this.closest(".drag-item");
    touchDragItem.classList.add("dragging");
    logEvent("dragstart", `[touch] Drag initiated on task #${parseInt(touchDragItem.dataset.index) + 1}`);
}

function handleTouchMove(e) {
    if (!touchDragItem) return;
    e.preventDefault();

    const touch = e.touches[0];
    const targetEl = document.elementFromPoint(touch.clientX, touch.clientY);
    const dropItem = targetEl ? targetEl.closest(".drag-item") : null;

    cleanupDropStyles();

    if (dropItem && dropItem !== touchDragItem) {
        const bounding = dropItem.getBoundingClientRect();
        const offset = touch.clientY - bounding.top;
        if (offset < bounding.height / 2) {
            dropItem.classList.add("drag-over-top");
        } else {
            dropItem.classList.add("drag-over-bottom");
        }
    }
}

function handleTouchEnd(e) {
    if (!touchDragItem) return;

    const targetWithLine = document.querySelector(".drag-over-top, .drag-over-bottom");
    if (targetWithLine) {
        const sourceId = touchDragItem.dataset.id;
        const targetId = targetWithLine.dataset.id;
        const isOverTop = targetWithLine.classList.contains("drag-over-top");

        const sourceIndex = tasks.findIndex(t => t.id === sourceId);
        let targetIndex = tasks.findIndex(t => t.id === targetId);

        if (sourceIndex !== -1 && targetIndex !== -1) {
            const [moved] = tasks.splice(sourceIndex, 1);
            if (!isOverTop && sourceIndex > targetIndex) {
                targetIndex += 1;
            }
            tasks.splice(targetIndex, 0, moved);
            saveTasks();
            renderList();
            logEvent("drop", `[touch drop] Placed at position #${targetIndex + 1}`);
            showToast(`Task moved to #${targetIndex + 1}`);
        }
    }

    touchDragItem.classList.remove("dragging");
    cleanupDropStyles();
    touchDragItem = null;
}

// =============================================================================
// 7. Manual Actions (Move, Add, Delete, Shuffle, Reset)
// =============================================================================
function moveItem(fromIndex, toIndex) {
    if (toIndex < 0 || toIndex >= tasks.length) return;

    const [item] = tasks.splice(fromIndex, 1);
    tasks.splice(toIndex, 0, item);

    saveTasks();
    renderList();

    logEvent("drop", `[accessible move] Moved "${item.title.substring(0, 20)}..." to position #${toIndex + 1}`);
    showToast(`Moved to position #${toIndex + 1}`);
}

function toggleComplete(id) {
    const item = tasks.find(t => t.id === id);
    if (item) {
        item.completed = !item.completed;
        saveTasks();
        renderList();
        logEvent("system", `[status change] "${item.title.substring(0, 20)}..." marked as ${item.completed ? 'completed' : 'pending'}`);
        showToast(item.completed ? "Task completed! 🎉" : "Task marked as pending");
    }
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        const [removed] = tasks.splice(index, 1);
        saveTasks();
        renderList();
        logEvent("system", `[deleted] Removed "${removed.title.substring(0, 20)}..." from position #${index + 1}`);
        showToast("Task deleted");
    }
}

function setupEventListeners() {
    // Add Task Form
    addTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = taskInput.value.trim();
        if (!text) return;

        const newTask = {
            id: `task-${Date.now()}`,
            title: text,
            tag: taskPriority.value,
            completed: false
        };

        tasks.unshift(newTask); // Add to top
        saveTasks();
        renderList();

        taskInput.value = "";
        taskInput.focus();

        logEvent("system", `[new task] Added "${newTask.title.substring(0, 25)}..." at position #1`);
        showToast("New task added to top of list!");
    });

    // Shuffle Button
    shuffleBtn.addEventListener("click", () => {
        if (tasks.length <= 1) return;
        // Fisher-Yates Shuffle
        for (let i = tasks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
        }
        saveTasks();
        renderList();
        logEvent("system", "[shuffle] Reordered all list items randomly.");
        showToast("List shuffled randomly! 🔀");
    });

    // Reset to Default Order
    resetBtn.addEventListener("click", resetToDefault);
    emptyResetBtn.addEventListener("click", resetToDefault);

    // Clear All Button
    clearAllBtn.addEventListener("click", () => {
        if (tasks.length === 0) return;
        tasks = [];
        saveTasks();
        renderList();
        logEvent("system", "[clear] All items deleted from list.");
        showToast("List cleared", "warning");
    });

    // Theme Toggle
    themeToggle.addEventListener("click", toggleTheme);
}

function resetToDefault() {
    tasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
    saveTasks();
    renderList();
    logEvent("system", "[reset] Restored default 8 internship tasks.");
    showToast("Reset to default order ↺");
}

// =============================================================================
// 8. Technical Event Inspector Logger
// =============================================================================
function logEvent(type, message) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const div = document.createElement("div");
    div.className = `log-entry ${type}`;
    div.textContent = `[${time}] ${message}`;

    eventLogBox.appendChild(div);

    // Limit log entries to last 30
    while (eventLogBox.children.length > 30) {
        eventLogBox.removeChild(eventLogBox.firstChild);
    }
}

// =============================================================================
// 9. Theme Management
// =============================================================================
function initTheme() {
    const savedTheme = localStorage.getItem("spirex_theme") || "dark";
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeIcon.textContent = "☀️";
    } else {
        document.body.classList.remove("light-theme");
        themeIcon.textContent = "🌙";
    }
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-theme");
    if (isLight) {
        themeIcon.textContent = "☀️";
        localStorage.setItem("spirex_theme", "light");
        showToast("Switched to Light Mode");
    } else {
        themeIcon.textContent = "🌙";
        localStorage.setItem("spirex_theme", "dark");
        showToast("Switched to Dark Mode");
    }
}

// =============================================================================
// 10. Helpers (Toast & HTML Escaping)
// =============================================================================
let toastTimeout;
function showToast(message, type = "info") {
    clearTimeout(toastTimeout);
    toastMsg.textContent = message;

    const toastIcon = document.getElementById("toastIcon");
    if (type === "warning") {
        toastIcon.textContent = "⚠️";
    } else if (type === "error") {
        toastIcon.textContent = "✕";
    } else {
        toastIcon.textContent = "✔";
    }

    toast.classList.add("show");
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function escapeHtml(string) {
    const div = document.createElement("div");
    div.textContent = string;
    return div.innerHTML;
}
