/**
 * SpireX Foundation - Frontend Web Development Internship
 * Task 7: Real-Time Currency Converter
 * Intern: Anzala Yameen | Intern ID: 140
 * Date: September 2026
 */

// =============================================================================
// 1. Comprehensive Currency Dataset (Codes, Names, Symbols & Country Flags)
// =============================================================================
const CURRENCY_LIST = [
    { code: "USD", name: "United States Dollar", symbol: "$", flag: "us" },
    { code: "PKR", name: "Pakistani Rupee", symbol: "₨", flag: "pk" },
    { code: "EUR", name: "Euro", symbol: "€", flag: "eu" },
    { code: "GBP", name: "British Pound Sterling", symbol: "£", flag: "gb" },
    { code: "AED", name: "United Arab Emirates Dirham", symbol: "د.إ", flag: "ae" },
    { code: "SAR", name: "Saudi Riyal", symbol: "﷼", flag: "sa" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "ca" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "au" },
    { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "in" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "jp" },
    { code: "CNY", name: "Chinese Yuan", symbol: "¥", flag: "cn" },
    { code: "TRY", name: "Turkish Lira", symbol: "₺", flag: "tr" },
    { code: "KWD", name: "Kuwaiti Dinar", symbol: "KD", flag: "kw" },
    { code: "QAR", name: "Qatari Riyal", symbol: "QR", flag: "qa" },
    { code: "OMR", name: "Omani Rial", symbol: "RO", flag: "om" },
    { code: "BHD", name: "Bahraini Dinar", symbol: "BD", flag: "bh" },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF", flag: "ch" },
    { code: "SGD", name: "Singapore Dollar", symbol: "S$", flag: "sg" },
    { code: "MYR", name: "Malaysian Ringgit", symbol: "RM", flag: "my" },
    { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", flag: "nz" },
    { code: "THB", name: "Thai Baht", symbol: "฿", flag: "th" },
    { code: "ZAR", name: "South African Rand", symbol: "R", flag: "za" },
    { code: "BRL", name: "Brazilian Real", symbol: "R$", flag: "br" },
    { code: "RUB", name: "Russian Ruble", symbol: "₽", flag: "ru" },
    { code: "KRW", name: "South Korean Won", symbol: "₩", flag: "kr" },
    { code: "SEK", name: "Swedish Krona", symbol: "kr", flag: "se" },
    { code: "NOK", name: "Norwegian Krone", symbol: "kr", flag: "no" },
    { code: "MXN", name: "Mexican Peso", symbol: "Mex$", flag: "mx" },
    { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp", flag: "id" },
    { code: "EGP", name: "Egyptian Pound", symbol: "E£", flag: "eg" },
    { code: "BDT", name: "Bangladeshi Taka", symbol: "৳", flag: "bd" },
    { code: "LKR", name: "Sri Lankan Rupee", symbol: "Rs", flag: "lk" },
    { code: "NGN", name: "Nigerian Naira", symbol: "₦", flag: "ng" }
];

// Fallback rates relative to USD if API fails or user is offline
const FALLBACK_USD_RATES = {
    USD: 1,
    PKR: 277.72,
    EUR: 0.91,
    GBP: 0.77,
    AED: 3.6725,
    SAR: 3.75,
    CAD: 1.36,
    AUD: 1.49,
    INR: 83.95,
    JPY: 142.50,
    CNY: 7.10,
    TRY: 33.95,
    KWD: 0.305,
    QAR: 3.64,
    OMR: 0.385,
    BHD: 0.376,
    CHF: 0.85,
    SGD: 1.30,
    MYR: 4.34,
    NZD: 1.62,
    THB: 33.80,
    ZAR: 17.80,
    BRL: 5.60,
    RUB: 91.20,
    KRW: 1335.00,
    SEK: 10.35,
    NOK: 10.75,
    MXN: 19.80,
    IDR: 15400.00,
    EGP: 48.40,
    BDT: 119.50,
    LKR: 300.20,
    NGN: 1610.00
};

// Popular currencies showcased in the quick comparison matrix
const MATRIX_CURRENCIES = ["PKR", "EUR", "GBP", "AED", "SAR", "CAD", "INR", "CNY"];

// =============================================================================
// 2. Application State & DOM References
// =============================================================================
let currentRates = { ...FALLBACK_USD_RATES };
let currentBase = "USD";
let isLiveApi = false;
let lastUpdateTimestamp = new Date();

// DOM Elements
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const fromFlag = document.getElementById("fromFlag");
const toFlag = document.getElementById("toFlag");
const amountInput = document.getElementById("amountInput");
const clearAmountBtn = document.getElementById("clearAmount");
const swapBtn = document.getElementById("swapBtn");
const convertBtn = document.getElementById("convertBtn");
const fromSymbolPreview = document.getElementById("fromSymbolPreview");

// Result Elements
const fromAmountDisplay = document.getElementById("fromAmountDisplay");
const convertedAmount = document.getElementById("convertedAmount");
const directRateEl = document.getElementById("directRate");
const inverseRateEl = document.getElementById("inverseRate");

// Status & Controls
const statusDot = document.getElementById("statusDot");
const statusText = document.getElementById("statusText");
const lastUpdated = document.getElementById("lastUpdated");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const copyBtn = document.getElementById("copyBtn");
const matrixGrid = document.getElementById("matrixGrid");
const matrixBaseCode = document.getElementById("matrixBaseCode");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");

// =============================================================================
// 3. Initialization
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    populateSelectOptions();
    setupEventListeners();
    fetchExchangeRates("USD");
});

// =============================================================================
// 4. Populate Dropdown Select Options
// =============================================================================
function populateSelectOptions() {
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    CURRENCY_LIST.forEach(currency => {
        const option1 = document.createElement("option");
        option1.value = currency.code;
        option1.textContent = `${currency.code} — ${currency.name}`;
        fromSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = currency.code;
        option2.textContent = `${currency.code} — ${currency.name}`;
        toSelect.appendChild(option2);
    });

    // Default pairs: USD -> PKR
    fromSelect.value = "USD";
    toSelect.value = "PKR";
    updateFlagAndSymbol("from");
    updateFlagAndSymbol("to");
}

function updateFlagAndSymbol(type) {
    const isFrom = type === "from";
    const selectEl = isFrom ? fromSelect : toSelect;
    const flagEl = isFrom ? fromFlag : toFlag;
    const selectedCode = selectEl.value;

    const currencyData = CURRENCY_LIST.find(c => c.code === selectedCode);
    if (currencyData) {
        flagEl.src = `https://flagcdn.com/w40/${currencyData.flag}.png`;
        flagEl.alt = `${currencyData.code} Flag`;
        flagEl.style.display = "inline-block";

        if (isFrom && fromSymbolPreview) {
            fromSymbolPreview.textContent = currencyData.symbol;
        }
    }
}

// =============================================================================
// 5. Fetch Exchange Rates from Real-Time API with Graceful Fallback
// =============================================================================
async function fetchExchangeRates(base = "USD") {
    statusDot.className = "status-indicator";
    statusText.textContent = "Fetching Live API Rates...";

    try {
        // Primary API: open.er-api.com (free, high availability, no API key needed)
        const response = await fetch(`https://open.er-api.com/v6/latest/${base}`, {
            cache: "no-cache"
        });

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();

        if (data.result === "success" && data.rates) {
            currentRates = data.rates;
            currentBase = base;
            isLiveApi = true;
            lastUpdateTimestamp = new Date();

            statusDot.className = "status-indicator live";
            statusText.textContent = `Live API Connected (${base})`;
            lastUpdated.innerHTML = `<span>Rates as of: ${lastUpdateTimestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;
        } else {
            throw new Error("Invalid API response format");
        }
    } catch (primaryError) {
        console.warn("Primary API fetch failed, attempting secondary API...", primaryError);

        try {
            // Secondary Backup API: exchangerate-api.com
            const backupRes = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
            const backupData = await backupRes.json();

            if (backupData && backupData.rates) {
                currentRates = backupData.rates;
                currentBase = base;
                isLiveApi = true;
                lastUpdateTimestamp = new Date();

                statusDot.className = "status-indicator live";
                statusText.textContent = `Live API Connected (Backup)`;
                lastUpdated.innerHTML = `<span>Updated: ${lastUpdateTimestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;
            } else {
                throw new Error("Backup API also failed");
            }
        } catch (backupError) {
            console.warn("Using offline fallback rates...", backupError);
            useOfflineFallback(base);
        }
    }

    calculateConversion();
    renderMatrix();
}

function useOfflineFallback(base = "USD") {
    isLiveApi = false;
    currentBase = base;

    // Recalculate fallback rates relative to current base
    const baseToUsdRate = FALLBACK_USD_RATES[base] || 1;
    const rebasedRates = {};

    for (const [code, rateAgainstUsd] of Object.entries(FALLBACK_USD_RATES)) {
        rebasedRates[code] = rateAgainstUsd / baseToUsdRate;
    }

    currentRates = rebasedRates;
    statusDot.className = "status-indicator offline";
    statusText.textContent = "Offline Mode (Cached Rates)";
    lastUpdated.innerHTML = `<span>Offline Fallback Active</span>`;
    showToast("Network unavailable. Using high-precision cached rates.", "warning");
}

// =============================================================================
// 6. Currency Calculation & DOM Rendering
// =============================================================================
function calculateConversion() {
    const rawAmount = parseFloat(amountInput.value);
    const fromCode = fromSelect.value;
    const toCode = toSelect.value;

    if (isNaN(rawAmount) || rawAmount <= 0) {
        fromAmountDisplay.textContent = `0.00 ${fromCode} =`;
        convertedAmount.innerHTML = `<span class="amount-val">0.00</span> <span class="currency-code">${toCode}</span>`;
        directRateEl.querySelector(".rate-value").textContent = "—";
        inverseRateEl.querySelector(".rate-value").textContent = "—";
        return;
    }

    // Determine exchange rate
    let directRate = 1;
    if (fromCode === currentBase) {
        directRate = currentRates[toCode] || 1;
    } else if (toCode === currentBase) {
        directRate = 1 / (currentRates[fromCode] || 1);
    } else {
        // Cross-rate calculation
        const rateFrom = currentRates[fromCode] || 1;
        const rateTo = currentRates[toCode] || 1;
        directRate = rateTo / rateFrom;
    }

    const inverseRate = 1 / directRate;
    const totalConverted = rawAmount * directRate;

    // Formatting numbers
    const formattedAmount = formatCurrencyNumber(rawAmount);
    const formattedResult = formatCurrencyNumber(totalConverted);
    const formattedDirect = formatRatePrecision(directRate);
    const formattedInverse = formatRatePrecision(inverseRate);

    // Update UI
    fromAmountDisplay.textContent = `${formattedAmount} ${fromCode} =`;
    convertedAmount.innerHTML = `
        <span class="amount-val">${formattedResult}</span>
        <span class="currency-code">${toCode}</span>
    `;

    directRateEl.querySelector(".rate-value").textContent = `1 ${fromCode} = ${formattedDirect} ${toCode}`;
    inverseRateEl.querySelector(".rate-value").textContent = `1 ${toCode} = ${formattedInverse} ${fromCode}`;
}

function formatCurrencyNumber(num) {
    if (num >= 100000) {
        return num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else if (num >= 1) {
        return num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
    } else {
        return num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 6 });
    }
}

function formatRatePrecision(rate) {
    if (rate >= 100) return rate.toFixed(2);
    if (rate >= 1) return rate.toFixed(4);
    return rate.toFixed(6);
}

// =============================================================================
// 7. Quick Matrix / Major Currencies Board
// =============================================================================
function renderMatrix() {
    const fromCode = fromSelect.value;
    if (matrixBaseCode) matrixBaseCode.textContent = fromCode;
    matrixGrid.innerHTML = "";

    MATRIX_CURRENCIES.forEach(targetCode => {
        if (targetCode === fromCode) return;

        const currMeta = CURRENCY_LIST.find(c => c.code === targetCode) || {
            code: targetCode,
            name: targetCode,
            flag: "un"
        };

        // Compute 1 Base = X Target
        let rate = 1;
        if (fromCode === currentBase) {
            rate = currentRates[targetCode] || 1;
        } else {
            const rFrom = currentRates[fromCode] || 1;
            const rTo = currentRates[targetCode] || 1;
            rate = rTo / rFrom;
        }

        const card = document.createElement("div");
        card.className = "matrix-card";
        card.title = `Click to convert to ${targetCode}`;
        card.innerHTML = `
            <div class="matrix-card-top">
                <div class="matrix-flag-name">
                    <img src="https://flagcdn.com/w40/${currMeta.flag}.png" alt="${targetCode}" class="matrix-flag-img" onerror="this.style.display='none'">
                    <span class="matrix-code">${targetCode}</span>
                </div>
                <span class="currency-symbol">${currMeta.symbol || ""}</span>
            </div>
            <div class="matrix-rate">${formatRatePrecision(rate)}</div>
            <div class="matrix-sub">${currMeta.name}</div>
        `;

        // Click card to instantly set target currency
        card.addEventListener("click", () => {
            toSelect.value = targetCode;
            updateFlagAndSymbol("to");
            calculateConversion();
            showToast(`Target currency set to ${targetCode}`);
        });

        matrixGrid.appendChild(card);
    });
}

// =============================================================================
// 8. Event Listeners & Interactive Handlers
// =============================================================================
function setupEventListeners() {
    // Amount input typing
    amountInput.addEventListener("input", () => {
        calculateConversion();
    });

    // Clear amount button
    clearAmountBtn.addEventListener("click", () => {
        amountInput.value = "";
        amountInput.focus();
        calculateConversion();
    });

    // Quick Preset Chips
    document.querySelectorAll(".chip-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            amountInput.value = btn.dataset.val;
            calculateConversion();
            showToast(`Amount set to $${btn.dataset.val}`);
        });
    });

    // From Currency Change
    fromSelect.addEventListener("change", () => {
        updateFlagAndSymbol("from");
        const newBase = fromSelect.value;
        // Fetch new rates if base changed
        fetchExchangeRates(newBase);
    });

    // To Currency Change
    toSelect.addEventListener("change", () => {
        updateFlagAndSymbol("to");
        calculateConversion();
    });

    // Swap Currencies Button
    swapBtn.addEventListener("click", () => {
        // Trigger 180deg animation
        swapBtn.classList.add("rotate-anim");
        setTimeout(() => swapBtn.classList.remove("rotate-anim"), 400);

        const temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;

        updateFlagAndSymbol("from");
        updateFlagAndSymbol("to");

        fetchExchangeRates(fromSelect.value);
        showToast(`Swapped: ${fromSelect.value} ⇄ ${toSelect.value}`);
    });

    // Manual Convert Button
    convertBtn.addEventListener("click", () => {
        calculateConversion();
        showToast("Rates recalculated!");
    });

    // Copy Result to Clipboard
    copyBtn.addEventListener("click", () => {
        const textToCopy = `${fromAmountDisplay.textContent} ${convertedAmount.innerText.replace(/\s+/g, ' ')}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showToast("Result copied to clipboard!");
        }).catch(() => {
            showToast("Failed to copy", "error");
        });
    });

    // Dark/Light Theme Toggle
    themeToggle.addEventListener("click", toggleTheme);
}

// =============================================================================
// 9. Theme Management (Dark & Light Modes)
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
// 10. Toast Notification Helper
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
    }, 2800);
}
