/**
 * SpireX Foundation – Frontend Internship • Task 9: Expense Tracker
 * Intern: Anzala Yameen (Intern ID: 140, Iqra University)
 * Submission Date: 14th September 2026 (Before 07:00 PM)
 * 
 * Technical Features:
 * - Dynamic financial calculation engine (Total Expenses, Total Income, Net Balance, Budget pacing)
 * - Category spending distribution & SVG Donut Chart visualization
 * - Instant Add, View, and Delete operations with smooth animations
 * - Real-time search, category filtering, type filtering, and multi-criteria sorting
 * - Multi-currency support (USD, PKR, EUR, GBP, AED, SAR, CAD, AUD, INR)
 * - Persistent State Management via localStorage
 * - Interactive CSV data export engine
 * - Dark & Light glassmorphic theme system
 */

(function () {
    'use strict';

    // =========================================================================
    // Category & Payment Metadata
    // =========================================================================
    const CATEGORIES = {
        food: { name: 'Food & Dining', icon: '🍔', color: '#f97316' },
        transport: { name: 'Transportation', icon: '🚗', color: '#3b82f6' },
        shopping: { name: 'Shopping & Apparel', icon: '🛍️', color: '#ec4899' },
        bills: { name: 'Bills & Utilities', icon: '💡', color: '#eab308' },
        entertainment: { name: 'Entertainment', icon: '🎬', color: '#a855f7' },
        health: { name: 'Health & Medical', icon: '💊', color: '#06b6d4' },
        education: { name: 'Education & Work', icon: '📚', color: '#6366f1' },
        salary: { name: 'Salary & Inflow', icon: '💼', color: '#10b981' },
        other: { name: 'Miscellaneous', icon: '🏷️', color: '#64748b' }
    };

    const PAYMENT_METHODS = {
        card: { name: 'Card', icon: '💳' },
        cash: { name: 'Cash', icon: '💵' },
        online: { name: 'Wallet/App', icon: '📱' },
        bank: { name: 'Bank Transfer', icon: '🏦' }
    };

    // Default Demo Data for Immediate Evaluation
    const SAMPLE_TRANSACTIONS = [
        {
            id: 'demo-1',
            description: 'Monthly Software Engineering Salary',
            amount: 2850.00,
            type: 'income',
            category: 'salary',
            date: getRecentDateString(10),
            payment: 'bank',
            note: 'SpireX Internship & Project Stipend',
            createdAt: Date.now() - 86400000 * 10
        },
        {
            id: 'demo-2',
            description: 'Weekly Supermarket Groceries',
            amount: 142.50,
            type: 'expense',
            category: 'food',
            date: getRecentDateString(5),
            payment: 'card',
            note: 'Metro Cash & Carry Supplies',
            createdAt: Date.now() - 86400000 * 5
        },
        {
            id: 'demo-3',
            description: 'High-Speed Fiber Internet Bill',
            amount: 49.99,
            type: 'expense',
            category: 'bills',
            date: getRecentDateString(4),
            payment: 'online',
            note: 'Monthly subscription',
            createdAt: Date.now() - 86400000 * 4
        },
        {
            id: 'demo-4',
            description: 'Fuel Refill & Vehicle Service',
            amount: 65.00,
            type: 'expense',
            category: 'transport',
            date: getRecentDateString(3),
            payment: 'card',
            note: 'PSO Petroleum Station',
            createdAt: Date.now() - 86400000 * 3
        },
        {
            id: 'demo-5',
            description: 'Mechanical Keyboard & Desk Mat',
            amount: 110.00,
            type: 'expense',
            category: 'shopping',
            date: getRecentDateString(2),
            payment: 'online',
            note: 'Workspace upgrade',
            createdAt: Date.now() - 86400000 * 2
        },
        {
            id: 'demo-6',
            description: 'Weekend Dining & Team Coffee',
            amount: 38.25,
            type: 'expense',
            category: 'food',
            date: getRecentDateString(1),
            payment: 'cash',
            note: 'Espresso Cafe with friends',
            createdAt: Date.now() - 86400000 * 1
        },
        {
            id: 'demo-7',
            description: 'Web Development Masterclass Course',
            amount: 45.00,
            type: 'expense',
            category: 'education',
            date: getRecentDateString(0),
            payment: 'card',
            note: 'Frontend certification',
            createdAt: Date.now()
        }
    ];

    // =========================================================================
    // Application State
    // =========================================================================
    const state = {
        transactions: [],
        currency: '$',
        monthlyBudget: 1500.00,
        activeType: 'expense',
        filters: {
            search: '',
            category: 'all',
            type: 'all',
            sort: 'date-desc'
        },
        theme: 'dark'
    };

    // =========================================================================
    // DOM Element Selectors
    // =========================================================================
    const elements = {
        // Theme & Currency
        themeToggle: document.getElementById('themeToggle'),
        themeIcon: document.getElementById('themeIcon'),
        currencySelect: document.getElementById('currencySelect'),
        currencyLabels: document.querySelectorAll('.form-curr-label'),
        amountCurrIcon: document.getElementById('amountCurrIcon'),
        budgetModalCurrIcon: document.getElementById('budgetModalCurrIcon'),

        // Action Buttons
        seedDataBtn: document.getElementById('seedDataBtn'),
        exportCsvBtn: document.getElementById('exportCsvBtn'),
        emptyDemoBtn: document.getElementById('emptyDemoBtn'),

        // KPI Metric Card Values
        netBalance: document.getElementById('netBalance'),
        symBalance: document.getElementById('symBalance'),
        balanceStatus: document.getElementById('balanceStatus'),

        totalExpenses: document.getElementById('totalExpenses'),
        symExpense: document.getElementById('symExpense'),
        expenseCountBadge: document.getElementById('expenseCountBadge'),

        totalIncome: document.getElementById('totalIncome'),
        symIncome: document.getElementById('symIncome'),
        incomeCountBadge: document.getElementById('incomeCountBadge'),

        budgetLimit: document.getElementById('budgetLimit'),
        symBudget: document.getElementById('symBudget'),
        budgetProgressFill: document.getElementById('budgetProgressFill'),
        budgetPercent: document.getElementById('budgetPercent'),
        budgetRemaining: document.getElementById('budgetRemaining'),
        editBudgetBtn: document.getElementById('editBudgetBtn'),

        // Add Transaction Form
        typeExpense: document.getElementById('typeExpense'),
        typeIncome: document.getElementById('typeIncome'),
        transactionForm: document.getElementById('transactionForm'),
        transDescription: document.getElementById('transDescription'),
        transAmount: document.getElementById('transAmount'),
        transCategory: document.getElementById('transCategory'),
        transDate: document.getElementById('transDate'),
        transPayment: document.getElementById('transPayment'),
        transNote: document.getElementById('transNote'),
        submitTransBtn: document.getElementById('submitTransBtn'),
        descError: document.getElementById('descError'),
        amountError: document.getElementById('amountError'),
        dateError: document.getElementById('dateError'),
        categoryError: document.getElementById('categoryError'),
        presetChips: document.querySelectorAll('.preset-chip'),

        // Analytics & Breakdown
        breakdownTotalTag: document.getElementById('breakdownTotalTag'),
        donutSegmentsGroup: document.getElementById('donutSegmentsGroup'),
        chartCenterAmount: document.getElementById('chartCenterAmount'),
        categoryBarsContainer: document.getElementById('categoryBarsContainer'),
        insightHighest: document.getElementById('insightHighest'),
        insightAverage: document.getElementById('insightAverage'),
        insightCount: document.getElementById('insightCount'),

        // Transaction History & Filters
        historyCounterBadge: document.getElementById('historyCounterBadge'),
        searchQuery: document.getElementById('searchQuery'),
        filterCategory: document.getElementById('filterCategory'),
        filterType: document.getElementById('filterType'),
        sortBy: document.getElementById('sortBy'),
        clearAllBtn: document.getElementById('clearAllBtn'),
        transactionsList: document.getElementById('transactionsList'),
        emptyState: document.getElementById('emptyState'),

        // Modals
        budgetModal: document.getElementById('budgetModal'),
        budgetInput: document.getElementById('budgetInput'),
        closeModalBtn: document.getElementById('closeModalBtn'),
        cancelBudgetBtn: document.getElementById('cancelBudgetBtn'),
        saveBudgetBtn: document.getElementById('saveBudgetBtn'),

        confirmModal: document.getElementById('confirmModal'),
        closeConfirmBtn: document.getElementById('closeConfirmBtn'),
        cancelConfirmBtn: document.getElementById('cancelConfirmBtn'),
        proceedClearBtn: document.getElementById('proceedClearBtn'),

        // Toast
        toast: document.getElementById('toast'),
        toastIcon: document.getElementById('toastIcon'),
        toastMsg: document.getElementById('toastMsg')
    };

    let toastTimer = null;

    // =========================================================================
    // Initialization
    // =========================================================================
    function init() {
        loadState();
        initDateInput();
        initEventListeners();
        applyTheme(state.theme);
        updateCurrencyUI(state.currency);

        // If no transactions exist, seed initial realistic sample data
        if (!state.transactions || state.transactions.length === 0) {
            state.transactions = [...SAMPLE_TRANSACTIONS];
            saveState();
        }

        renderApp();
    }

    function initDateInput() {
        // Default date picker to today's date in local ISO format (YYYY-MM-DD)
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        elements.transDate.value = `${yyyy}-${mm}-${dd}`;
    }

    function getRecentDateString(daysAgo) {
        const d = new Date();
        d.setDate(d.getDate() - daysAgo);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    // =========================================================================
    // LocalStorage State Management
    // =========================================================================
    function loadState() {
        try {
            const savedTrans = localStorage.getItem('spirex_expenses_list');
            if (savedTrans) {
                state.transactions = JSON.parse(savedTrans);
            }

            const savedCurrency = localStorage.getItem('spirex_expense_currency');
            if (savedCurrency) {
                state.currency = savedCurrency;
                elements.currencySelect.value = savedCurrency;
            }

            const savedBudget = localStorage.getItem('spirex_expense_budget');
            if (savedBudget) {
                state.monthlyBudget = parseFloat(savedBudget) || 1500.00;
            }

            const savedTheme = localStorage.getItem('spirex_expense_theme');
            if (savedTheme) {
                state.theme = savedTheme;
            }
        } catch (e) {
            console.error('Error loading state from localStorage:', e);
        }
    }

    function saveState() {
        try {
            localStorage.setItem('spirex_expenses_list', JSON.stringify(state.transactions));
            localStorage.setItem('spirex_expense_currency', state.currency);
            localStorage.setItem('spirex_expense_budget', state.monthlyBudget.toString());
            localStorage.setItem('spirex_expense_theme', state.theme);
        } catch (e) {
            console.error('Error saving state to localStorage:', e);
        }
    }

    // =========================================================================
    // Financial Calculation Engine
    // =========================================================================
    function calculateTotals() {
        let totalExpenses = 0;
        let totalIncome = 0;
        let expenseCount = 0;
        let incomeCount = 0;
        let highestExpense = 0;
        const categoryExpenses = {};

        // Initialize category counters
        Object.keys(CATEGORIES).forEach(cat => {
            categoryExpenses[cat] = 0;
        });

        state.transactions.forEach(item => {
            const amt = Number(item.amount) || 0;
            if (item.type === 'expense') {
                totalExpenses += amt;
                expenseCount++;
                if (amt > highestExpense) {
                    highestExpense = amt;
                }
                const cat = item.category in CATEGORIES ? item.category : 'other';
                categoryExpenses[cat] = (categoryExpenses[cat] || 0) + amt;
            } else if (item.type === 'income') {
                totalIncome += amt;
                incomeCount++;
            }
        });

        const netBalance = totalIncome - totalExpenses;
        const averageExpense = expenseCount > 0 ? (totalExpenses / expenseCount) : 0;
        const budgetPercent = state.monthlyBudget > 0 ? (totalExpenses / state.monthlyBudget) * 100 : 0;
        const budgetRemaining = Math.max(0, state.monthlyBudget - totalExpenses);

        return {
            totalExpenses,
            totalIncome,
            netBalance,
            expenseCount,
            incomeCount,
            highestExpense,
            averageExpense,
            categoryExpenses,
            budgetPercent,
            budgetRemaining
        };
    }

    // =========================================================================
    // Render Functions
    // =========================================================================
    function renderApp() {
        const stats = calculateTotals();

        // 1. Update KPI Cards
        renderKPICards(stats);

        // 2. Update Visual Analytics & Donut Chart
        renderAnalytics(stats);

        // 3. Update Transaction List & History
        renderTransactionList();
    }

    function renderKPICards(stats) {
        // Net Balance
        elements.netBalance.textContent = formatMoney(stats.netBalance);
        if (stats.netBalance > 0) {
            elements.balanceStatus.textContent = '▲ Net positive savings';
            elements.balanceStatus.style.color = 'var(--income-emerald)';
        } else if (stats.netBalance < 0) {
            elements.balanceStatus.textContent = '▼ Net deficit';
            elements.balanceStatus.style.color = 'var(--expense-rose)';
        } else {
            elements.balanceStatus.textContent = 'Balanced budget';
            elements.balanceStatus.style.color = 'var(--text-muted)';
        }

        // Total Expenses
        elements.totalExpenses.textContent = formatMoney(stats.totalExpenses);
        elements.expenseCountBadge.textContent = `${stats.expenseCount} ${stats.expenseCount === 1 ? 'Expense' : 'Expenses'}`;

        // Total Income
        elements.totalIncome.textContent = formatMoney(stats.totalIncome);
        elements.incomeCountBadge.textContent = `${stats.incomeCount} ${stats.incomeCount === 1 ? 'Inflow' : 'Inflows'}`;

        // Monthly Budget
        elements.budgetLimit.textContent = formatMoney(state.monthlyBudget);
        const cappedPercent = Math.min(100, Math.max(0, stats.budgetPercent));
        elements.budgetProgressFill.style.width = `${cappedPercent}%`;
        elements.budgetPercent.textContent = `${stats.budgetPercent.toFixed(1)}% used`;
        elements.budgetRemaining.textContent = `Remaining: ${state.currency}${formatMoney(stats.budgetRemaining)}`;

        // Progress color alert thresholds
        elements.budgetProgressFill.classList.remove('moderate', 'danger');
        if (stats.budgetPercent >= 90) {
            elements.budgetProgressFill.classList.add('danger');
        } else if (stats.budgetPercent >= 70) {
            elements.budgetProgressFill.classList.add('moderate');
        }
    }

    function renderAnalytics(stats) {
        elements.breakdownTotalTag.textContent = `Total: ${state.currency}${formatMoney(stats.totalExpenses)}`;
        elements.chartCenterAmount.textContent = `${state.currency}${formatCompact(stats.totalExpenses)}`;

        // Insights Matrix
        elements.insightHighest.textContent = `${state.currency}${formatMoney(stats.highestExpense)}`;
        elements.insightAverage.textContent = `${state.currency}${formatMoney(stats.averageExpense)}`;
        elements.insightCount.textContent = `${state.transactions.length} items`;

        // Render Donut Chart Segments (SVG circle stroke-dasharray method)
        renderDonutChart(stats.categoryExpenses, stats.totalExpenses);

        // Render Category Progress Bars
        renderCategoryBars(stats.categoryExpenses, stats.totalExpenses);
    }

    function renderDonutChart(categoryExpenses, totalExpenses) {
        elements.donutSegmentsGroup.innerHTML = '';

        if (totalExpenses <= 0) {
            return;
        }

        let accumulatedPercent = 0;

        Object.keys(CATEGORIES).forEach(catKey => {
            const amount = categoryExpenses[catKey] || 0;
            if (amount <= 0) return;

            const percent = (amount / totalExpenses) * 100;
            const strokeDash = `${percent.toFixed(3)} ${(100 - percent).toFixed(3)}`;
            const strokeOffset = 100 - accumulatedPercent;

            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('class', 'donut-segment');
            circle.setAttribute('cx', '21');
            circle.setAttribute('cy', '21');
            circle.setAttribute('r', '15.91549430918954'); // Circumference = 100
            circle.setAttribute('fill', 'transparent');
            circle.setAttribute('stroke', CATEGORIES[catKey].color);
            circle.setAttribute('stroke-width', '4.2');
            circle.setAttribute('stroke-dasharray', strokeDash);
            circle.setAttribute('stroke-dashoffset', strokeOffset.toFixed(3));
            circle.setAttribute('data-category', catKey);

            // Accessible tooltip title
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
            title.textContent = `${CATEGORIES[catKey].name}: ${state.currency}${formatMoney(amount)} (${percent.toFixed(1)}%)`;
            circle.appendChild(title);

            elements.donutSegmentsGroup.appendChild(circle);

            accumulatedPercent += percent;
        });
    }

    function renderCategoryBars(categoryExpenses, totalExpenses) {
        elements.categoryBarsContainer.innerHTML = '';

        // Sort categories by expenditure descending
        const sortedCats = Object.keys(CATEGORIES)
            .map(key => ({
                key,
                name: CATEGORIES[key].name,
                icon: CATEGORIES[key].icon,
                color: CATEGORIES[key].color,
                amount: categoryExpenses[key] || 0
            }))
            .filter(item => item.amount > 0)
            .sort((a, b) => b.amount - a.amount);

        if (sortedCats.length === 0) {
            elements.categoryBarsContainer.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 1rem 0;">
                    No expense spending data recorded yet.
                </div>
            `;
            return;
        }

        sortedCats.forEach(cat => {
            const percent = totalExpenses > 0 ? (cat.amount / totalExpenses) * 100 : 0;

            const barItem = document.createElement('div');
            barItem.className = 'cat-bar-item';
            barItem.innerHTML = `
                <div class="cat-bar-header">
                    <span class="cat-bar-title">
                        <span class="cat-bar-dot" style="background-color: ${cat.color};"></span>
                        <span>${cat.icon} ${cat.name}</span>
                    </span>
                    <span class="cat-bar-values">
                        ${state.currency}${formatMoney(cat.amount)} 
                        <span style="color: var(--text-muted); font-size: 0.75rem;">(${percent.toFixed(1)}%)</span>
                    </span>
                </div>
                <div class="cat-bar-track">
                    <div class="cat-bar-fill" style="width: ${percent}%; background-color: ${cat.color};"></div>
                </div>
            `;
            elements.categoryBarsContainer.appendChild(barItem);
        });
    }

    function renderTransactionList() {
        const query = state.filters.search.toLowerCase().trim();
        const categoryFilter = state.filters.category;
        const typeFilter = state.filters.type;
        const sortOption = state.filters.sort;

        // Filter
        let filtered = state.transactions.filter(item => {
            const matchesQuery = query === '' ||
                item.description.toLowerCase().includes(query) ||
                (item.note && item.note.toLowerCase().includes(query));

            const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
            const matchesType = typeFilter === 'all' || item.type === typeFilter;

            return matchesQuery && matchesCategory && matchesType;
        });

        // Sort
        filtered.sort((a, b) => {
            switch (sortOption) {
                case 'date-asc':
                    return new Date(a.date) - new Date(b.date);
                case 'amount-desc':
                    return Number(b.amount) - Number(a.amount);
                case 'amount-asc':
                    return Number(a.amount) - Number(b.amount);
                case 'date-desc':
                default:
                    return new Date(b.date) - new Date(a.date);
            }
        });

        // Update badge count
        elements.historyCounterBadge.textContent = `${filtered.length} of ${state.transactions.length} Transactions`;

        // Empty state check
        if (filtered.length === 0) {
            elements.transactionsList.innerHTML = '';
            elements.emptyState.classList.add('visible');
            return;
        }

        elements.emptyState.classList.remove('visible');
        elements.transactionsList.innerHTML = '';

        // Render Cards
        const fragment = document.createDocumentFragment();

        filtered.forEach(item => {
            const cat = CATEGORIES[item.category] || CATEGORIES.other;
            const payment = PAYMENT_METHODS[item.payment] || PAYMENT_METHODS.card;
            const isExpense = item.type === 'expense';
            const sign = isExpense ? '-' : '+';
            const amountClass = isExpense ? 'is-expense' : 'is-income';

            const card = document.createElement('div');
            card.className = 'transaction-card';
            card.id = `trans-${item.id}`;
            card.setAttribute('role', 'listitem');

            card.innerHTML = `
                <div class="trans-left">
                    <div class="trans-icon-circle" style="border: 1px solid ${cat.color}40; background: ${cat.color}15;">
                        <span aria-hidden="true">${cat.icon}</span>
                    </div>
                    <div class="trans-details">
                        <div class="trans-title" title="${escapeHtml(item.description)}">${escapeHtml(item.description)}</div>
                        <div class="trans-meta-row">
                            <span>📅 ${formatReadableDate(item.date)}</span>
                            <span class="trans-tag" style="background: ${cat.color}20; color: ${cat.color};">
                                ${cat.name}
                            </span>
                            <span class="trans-tag" style="background: rgba(255, 255, 255, 0.08);">
                                ${payment.icon} ${payment.name}
                            </span>
                            ${item.note ? `<span class="trans-note-pill" title="${escapeHtml(item.note)}">💬 ${escapeHtml(item.note)}</span>` : ''}
                        </div>
                    </div>
                </div>

                <div class="trans-right">
                    <div class="trans-amount ${amountClass}">
                        ${sign} ${state.currency}${formatMoney(item.amount)}
                    </div>
                    <button type="button" class="delete-btn" data-id="${item.id}" title="Delete transaction" aria-label="Delete ${escapeHtml(item.description)}">
                        🗑️
                    </button>
                </div>
            `;

            fragment.appendChild(card);
        });

        elements.transactionsList.appendChild(fragment);
    }

    // =========================================================================
    // Event Handlers & User Actions
    // =========================================================================
    function initEventListeners() {
        // 1. Transaction Type Toggle (Expense vs Income)
        elements.typeExpense.addEventListener('click', () => setTransactionType('expense'));
        elements.typeIncome.addEventListener('click', () => setTransactionType('income'));

        // 2. Transaction Form Submission (Add Item)
        elements.transactionForm.addEventListener('submit', handleAddTransaction);

        // 3. Quick Preset Chips
        elements.presetChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const desc = chip.dataset.desc;
                const amt = chip.dataset.amount;
                const cat = chip.dataset.cat;

                elements.transDescription.value = desc;
                elements.transAmount.value = amt;
                elements.transCategory.value = cat;
                setTransactionType('expense');

                elements.transAmount.focus();
                showToast(`Filled preset: ${desc}`, '⚡');
            });
        });

        // 4. Delete Transaction (Event Delegation)
        elements.transactionsList.addEventListener('click', e => {
            const deleteBtn = e.target.closest('.delete-btn');
            if (deleteBtn) {
                const transId = deleteBtn.dataset.id;
                handleDeleteTransaction(transId);
            }
        });

        // 5. Search & Filters
        elements.searchQuery.addEventListener('input', e => {
            state.filters.search = e.target.value;
            renderTransactionList();
        });

        elements.filterCategory.addEventListener('change', e => {
            state.filters.category = e.target.value;
            renderTransactionList();
        });

        elements.filterType.addEventListener('change', e => {
            state.filters.type = e.target.value;
            renderTransactionList();
        });

        elements.sortBy.addEventListener('change', e => {
            state.filters.sort = e.target.value;
            renderTransactionList();
        });

        // 6. Currency Switcher
        elements.currencySelect.addEventListener('change', e => {
            state.currency = e.target.value;
            updateCurrencyUI(state.currency);
            saveState();
            renderApp();
            showToast(`Currency changed to ${state.currency}`, '💱');
        });

        // 7. Seed Sample Demo Data
        elements.seedDataBtn.addEventListener('click', seedDemoData);
        elements.emptyDemoBtn.addEventListener('click', seedDemoData);

        // 8. Export CSV
        elements.exportCsvBtn.addEventListener('click', exportToCSV);

        // 9. Clear All Modal
        elements.clearAllBtn.addEventListener('click', () => {
            if (state.transactions.length === 0) {
                showToast('No transactions to clear', 'ℹ️');
                return;
            }
            openModal(elements.confirmModal);
        });

        elements.closeConfirmBtn.addEventListener('click', () => closeModal(elements.confirmModal));
        elements.cancelConfirmBtn.addEventListener('click', () => closeModal(elements.confirmModal));
        elements.proceedClearBtn.addEventListener('click', () => {
            state.transactions = [];
            saveState();
            renderApp();
            closeModal(elements.confirmModal);
            showToast('All transactions cleared', '🗑️');
        });

        // 10. Budget Modal
        elements.editBudgetBtn.addEventListener('click', () => {
            elements.budgetInput.value = state.monthlyBudget;
            openModal(elements.budgetModal);
        });

        elements.closeModalBtn.addEventListener('click', () => closeModal(elements.budgetModal));
        elements.cancelBudgetBtn.addEventListener('click', () => closeModal(elements.budgetModal));
        elements.saveBudgetBtn.addEventListener('click', () => {
            const val = parseFloat(elements.budgetInput.value);
            if (isNaN(val) || val <= 0) {
                showToast('Please enter a valid positive budget amount', '⚠️');
                return;
            }
            state.monthlyBudget = val;
            saveState();
            renderApp();
            closeModal(elements.budgetModal);
            showToast(`Budget set to ${state.currency}${formatMoney(val)}`, '🎯');
        });

        // 11. Theme Toggle
        elements.themeToggle.addEventListener('click', toggleTheme);

        // 12. Modal backdrop click & Escape key listeners
        window.addEventListener('click', e => {
            if (e.target === elements.budgetModal) closeModal(elements.budgetModal);
            if (e.target === elements.confirmModal) closeModal(elements.confirmModal);
        });

        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                closeModal(elements.budgetModal);
                closeModal(elements.confirmModal);
            }
        });
    }

    function setTransactionType(type) {
        state.activeType = type;
        if (type === 'expense') {
            elements.typeExpense.classList.add('active');
            elements.typeIncome.classList.remove('active');
            elements.submitTransBtn.querySelector('.btn-text').textContent = 'Add Expense';
            elements.transCategory.value = 'food';
        } else {
            elements.typeIncome.classList.add('active');
            elements.typeExpense.classList.remove('active');
            elements.submitTransBtn.querySelector('.btn-text').textContent = 'Add Income';
            elements.transCategory.value = 'salary';
        }
    }

    function handleAddTransaction(e) {
        e.preventDefault();

        // Validation
        clearFieldErrors();
        let isValid = true;

        const description = elements.transDescription.value.trim();
        const amountStr = elements.transAmount.value.trim();
        const amount = parseFloat(amountStr);
        const category = elements.transCategory.value;
        const date = elements.transDate.value;
        const payment = elements.transPayment.value;
        const note = elements.transNote.value.trim();

        if (!description) {
            elements.descError.textContent = 'Please enter a description for the transaction.';
            elements.transDescription.focus();
            isValid = false;
        }

        if (isNaN(amount) || amount <= 0) {
            elements.amountError.textContent = 'Please enter a valid amount greater than zero.';
            if (isValid) elements.transAmount.focus();
            isValid = false;
        }

        if (!date) {
            elements.dateError.textContent = 'Please select a valid date.';
            if (isValid) elements.transDate.focus();
            isValid = false;
        }

        if (!isValid) return;

        // Construct Transaction Object
        const newTransaction = {
            id: 'trx-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
            description,
            amount: Math.round(amount * 100) / 100,
            type: state.activeType,
            category,
            date,
            payment,
            note,
            createdAt: Date.now()
        };

        // Add to top of list
        state.transactions.unshift(newTransaction);
        saveState();
        renderApp();

        // Reset inputs
        elements.transDescription.value = '';
        elements.transAmount.value = '';
        elements.transNote.value = '';
        initDateInput();

        showToast(
            `${state.activeType === 'expense' ? 'Expense' : 'Income'} of ${state.currency}${formatMoney(amount)} added!`,
            '✔'
        );
    }

    function handleDeleteTransaction(id) {
        const index = state.transactions.findIndex(item => item.id === id);
        if (index === -1) return;

        const card = document.getElementById(`trans-${id}`);
        if (card) {
            card.classList.add('deleting');
            setTimeout(() => {
                state.transactions.splice(index, 1);
                saveState();
                renderApp();
                showToast('Transaction removed', '🗑️');
            }, 250);
        } else {
            state.transactions.splice(index, 1);
            saveState();
            renderApp();
            showToast('Transaction removed', '🗑️');
        }
    }

    function clearFieldErrors() {
        elements.descError.textContent = '';
        elements.amountError.textContent = '';
        elements.dateError.textContent = '';
        elements.categoryError.textContent = '';
    }

    function seedDemoData() {
        state.transactions = [...SAMPLE_TRANSACTIONS];
        saveState();
        renderApp();
        showToast('Demo expenses loaded successfully!', '⚡');
    }

    // =========================================================================
    // CSV Export Engine
    // =========================================================================
    function exportToCSV() {
        if (!state.transactions || state.transactions.length === 0) {
            showToast('No transactions to export', '⚠️');
            return;
        }

        const headers = ['Transaction ID', 'Date', 'Type', 'Category', 'Description', 'Payment Method', 'Amount', 'Currency', 'Notes'];

        const rows = state.transactions.map(item => {
            const catName = CATEGORIES[item.category] ? CATEGORIES[item.category].name : item.category;
            const payName = PAYMENT_METHODS[item.payment] ? PAYMENT_METHODS[item.payment].name : item.payment;
            return [
                `"${item.id}"`,
                `"${item.date}"`,
                `"${item.type}"`,
                `"${catName}"`,
                `"${item.description.replace(/"/g, '""')}"`,
                `"${payName}"`,
                item.amount.toFixed(2),
                `"${state.currency}"`,
                `"${(item.note || '').replace(/"/g, '""')}"`
            ];
        });

        const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `spirex_expense_tracker_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showToast('Exported transactions to CSV!', '📥');
    }

    // =========================================================================
    // UI Helpers & Formatting
    // =========================================================================
    function updateCurrencyUI(curr) {
        elements.symBalance.textContent = curr;
        elements.symExpense.textContent = curr;
        elements.symIncome.textContent = curr;
        elements.symBudget.textContent = curr;
        elements.amountCurrIcon.textContent = curr;
        elements.budgetModalCurrIcon.textContent = curr;
        elements.currencyLabels.forEach(el => el.textContent = curr);
    }

    function formatMoney(amount) {
        return Math.abs(amount).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    function formatCompact(amount) {
        if (amount >= 1000000) {
            return (amount / 1000000).toFixed(1) + 'M';
        }
        if (amount >= 1000) {
            return (amount / 1000).toFixed(1) + 'k';
        }
        return amount.toFixed(0);
    }

    function formatReadableDate(dateString) {
        if (!dateString) return '';
        const parts = dateString.split('-');
        if (parts.length !== 3) return dateString;
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        const d = new Date(year, month, day);
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // =========================================================================
    // Modal & Toast Controls
    // =========================================================================
    function openModal(modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    function showToast(message, icon = '✔') {
        if (toastTimer) clearTimeout(toastTimer);

        elements.toastMsg.textContent = message;
        elements.toastIcon.textContent = icon;
        elements.toast.classList.add('show');

        toastTimer = setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 3000);
    }

    // =========================================================================
    // Theme Management
    // =========================================================================
    function toggleTheme() {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(state.theme);
        saveState();
        showToast(`Theme switched to ${state.theme} mode`, state.theme === 'dark' ? '🌙' : '☀️');
    }

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            elements.themeIcon.textContent = '☀️';
            elements.themeToggle.title = 'Switch to Dark Mode';
        } else {
            document.body.classList.remove('light-theme');
            elements.themeIcon.textContent = '🌙';
            elements.themeToggle.title = 'Switch to Light Mode';
        }
    }

    // =========================================================================
    // Launch Application
    // =========================================================================
    document.addEventListener('DOMContentLoaded', init);
})();
