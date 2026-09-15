/**
 * SpireX Foundation - Frontend Web Development Internship
 * Task 10: Country Information App
 * Interactive Global Country Exploration & Demographics Engine
 * Intern: Anzala Yameen | Intern ID: 140 | Date: September 2026
 */

(function () {
    'use strict';

    // Global constant estimate of world population for demographic percentage calculation
    const GLOBAL_WORLD_POPULATION = 8100000000;

    // --------------------------------------------------------------------------
    // 1. Application State
    // --------------------------------------------------------------------------
    const state = {
        allCountries: [],
        filteredCountries: [],
        activeCountry: null,
        currentRegion: 'All',
        currentSort: 'name-asc',
        searchQuery: '',
        favorites: new Set(),
        showFavoritesOnly: false,
        activeAutocompleteIdx: -1
    };

    // --------------------------------------------------------------------------
    // 2. DOM Elements Cache
    // --------------------------------------------------------------------------
    const elements = {
        // Search & Autocomplete
        searchInput: document.getElementById('countrySearchInput'),
        searchClearBtn: document.getElementById('searchClearBtn'),
        autocompleteDropdown: document.getElementById('autocompleteDropdown'),
        presetChipsContainer: document.getElementById('presetChipsContainer'),

        // Filters & Sorting
        regionTabs: document.querySelectorAll('.region-tab'),
        sortSelect: document.getElementById('countrySortSelect'),
        matchingCountText: document.getElementById('matchingCountText'),
        renderedCountLabel: document.getElementById('renderedCountLabel'),

        // Header Actions
        randomCountryBtn: document.getElementById('randomCountryBtn'),
        openCompareModalBtn: document.getElementById('openCompareModalBtn'),
        favoritesFilterBtn: document.getElementById('favoritesFilterBtn'),
        favCountBadge: document.getElementById('favCountBadge'),
        themeToggleBtn: document.getElementById('themeToggleBtn'),

        // Showcase Card Elements
        showcaseCard: document.getElementById('activeShowcaseCard'),
        activeFlagImg: document.getElementById('activeFlagImg'),
        activeFlagEmoji: document.getElementById('activeFlagEmoji'),
        activeIsoCodeTag: document.getElementById('activeIsoCodeTag'),
        activeCountryName: document.getElementById('activeCountryName'),
        activeOfficialName: document.getElementById('activeOfficialName'),
        zoomFlagBtn: document.getElementById('zoomFlagBtn'),

        // Showcase Buttons
        speakCountryBtn: document.getElementById('speakCountryBtn'),
        toggleFavoriteBtn: document.getElementById('toggleFavoriteBtn'),
        favBtnLabel: document.getElementById('favBtnLabel'),
        copyDetailsBtn: document.getElementById('copyDetailsBtn'),
        openMapsLink: document.getElementById('openMapsLink'),

        // Showcase Metric Values
        activeCapital: document.getElementById('activeCapital'),
        activeTimezone: document.getElementById('activeTimezone'),
        activePopulation: document.getElementById('activePopulation'),
        activePopProgress: document.getElementById('activePopProgress'),
        activePopPct: document.getElementById('activePopPct'),
        activeRegion: document.getElementById('activeRegion'),
        activeSubregion: document.getElementById('activeSubregion'),
        activeCurrencyCode: document.getElementById('activeCurrencyCode'),
        activeCurrencySymbol: document.getElementById('activeCurrencySymbol'),
        activeCurrencyName: document.getElementById('activeCurrencyName'),
        activeLanguagesContainer: document.getElementById('activeLanguagesContainer'),
        activeArea: document.getElementById('activeArea'),
        activeDensity: document.getElementById('activeDensity'),
        activeCallingCode: document.getElementById('activeCallingCode'),
        activeTld: document.getElementById('activeTld'),
        activeCoordinates: document.getElementById('activeCoordinates'),

        // Neighboring Borders
        bordersWrapper: document.querySelector('.borders-wrapper'),
        bordersContainer: document.getElementById('activeBordersContainer'),
        bordersCountBadge: document.getElementById('bordersCountBadge'),

        // Directory Grid
        countriesGrid: document.getElementById('countriesGrid'),
        noResultsState: document.getElementById('noResultsState'),
        resetFiltersBtn: document.getElementById('resetFiltersBtn'),

        // Compare Modal
        compareModal: document.getElementById('compareModal'),
        closeCompareModalBtn: document.getElementById('closeCompareModalBtn'),
        compareSelectA: document.getElementById('compareSelectA'),
        compareSelectB: document.getElementById('compareSelectB'),
        compareResultsContent: document.getElementById('compareResultsContent'),

        // Flag Modal
        flagModal: document.getElementById('flagModal'),
        closeFlagModalBtn: document.getElementById('closeFlagModalBtn'),
        flagModalImg: document.getElementById('flagModalImg'),
        flagModalTitle: document.getElementById('flagModalTitle'),

        // Toast
        toastNotification: document.getElementById('toastNotification'),
        toastMessage: document.getElementById('toastMessage')
    };

    // --------------------------------------------------------------------------
    // 3. Formatting Helpers
    // --------------------------------------------------------------------------
    function formatNumber(num) {
        if (num === null || num === undefined || isNaN(num)) return 'N/A';
        return Number(num).toLocaleString('en-US');
    }

    function formatCoordinates(latlng) {
        if (!latlng || !Array.isArray(latlng) || latlng.length < 2) return 'N/A';
        const [lat, lng] = latlng;
        const latDir = lat >= 0 ? 'N' : 'S';
        const lngDir = lng >= 0 ? 'E' : 'W';
        return `${Math.abs(lat).toFixed(2)}° ${latDir}, ${Math.abs(lng).toFixed(2)}° ${lngDir}`;
    }

    function calculateEstimatedTimezone(lng) {
        if (lng === undefined || lng === null || isNaN(lng)) return 'UTC';
        const offsetHours = Math.round(lng / 15);
        const sign = offsetHours >= 0 ? '+' : '-';
        const abs = Math.abs(offsetHours).toString().padStart(2, '0');
        return `UTC${sign}${abs}:00`;
    }

    function showToast(message) {
        if (!elements.toastNotification) return;
        elements.toastMessage.textContent = message;
        elements.toastNotification.classList.add('show');
        setTimeout(() => {
            elements.toastNotification.classList.remove('show');
        }, 3200);
    }

    // --------------------------------------------------------------------------
    // 4. Persistence (LocalStorage)
    // --------------------------------------------------------------------------
    function loadSavedFavorites() {
        try {
            const raw = localStorage.getItem('spirex_country_favorites');
            if (raw) {
                const arr = JSON.parse(raw);
                state.favorites = new Set(arr);
            }
        } catch (e) {
            console.warn('Could not load favorites from localStorage', e);
        }
        updateFavoritesBadge();
    }

    function saveFavorites() {
        try {
            localStorage.setItem('spirex_country_favorites', JSON.stringify([...state.favorites]));
        } catch (e) {
            console.warn('Could not save favorites to localStorage', e);
        }
        updateFavoritesBadge();
    }

    function updateFavoritesBadge() {
        if (elements.favCountBadge) {
            elements.favCountBadge.textContent = `Saved (${state.favorites.size})`;
        }
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('spirex_theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
    }

    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('spirex_theme', newTheme);
    }

    // --------------------------------------------------------------------------
    // 5. Data Initialization & Live Synchronization
    // --------------------------------------------------------------------------
    function initData() {
        // Load initial dataset from COUNTRIES_DATA provided in countries-data.js
        if (typeof COUNTRIES_DATA !== 'undefined' && Array.isArray(COUNTRIES_DATA)) {
            state.allCountries = [...COUNTRIES_DATA];
        } else {
            console.error('COUNTRIES_DATA is missing or not an array');
            state.allCountries = [];
        }

        // Set default active country: Pakistan if available, else first country
        const defaultCountry = state.allCountries.find(c => c.name.toLowerCase() === 'pakistan') || state.allCountries[0];
        if (defaultCountry) {
            setActiveCountry(defaultCountry);
        }

        // Apply initial filter & render
        applyFiltersAndSort();
        populateCompareSelectors();

        // Attempt live update from Dave Garvey Workers API in background
        fetchLiveCountries();
    }

    async function fetchLiveCountries() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6000);

            const res = await fetch('https://countries-api.davegarvey.workers.dev/countries', {
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (!res.ok) return;
            const liveList = await res.json();

            if (Array.isArray(liveList) && liveList.length > 0) {
                // Merge live population data or new fields seamlessly
                let updated = false;
                liveList.forEach(item => {
                    const existing = state.allCountries.find(c => c.code === item.code || c.alpha3Code === item.alpha3Code);
                    if (existing) {
                        if (item.population && existing.population !== item.population) {
                            existing.population = item.population;
                            updated = true;
                        }
                    }
                });

                if (updated && state.activeCountry) {
                    const refreshed = state.allCountries.find(c => c.code === state.activeCountry.code);
                    if (refreshed) setActiveCountry(refreshed);
                    applyFiltersAndSort();
                }
            }
        } catch (e) {
            // Silently maintain local dataset
            console.log('Operating in high-speed offline/embedded dataset mode');
        }
    }

    // --------------------------------------------------------------------------
    // 6. Active Country Rendering (Spotlight Showcase)
    // --------------------------------------------------------------------------
    function setActiveCountry(country) {
        if (!country) return;
        state.activeCountry = country;

        // Flag Image & Fallback
        elements.activeFlagImg.src = country.flagSvg;
        elements.activeFlagImg.alt = `National Flag of ${country.name}`;
        elements.activeFlagImg.onerror = function () {
            // Fallback to flagsapi or placeholder if CDN is unreachable
            this.onerror = null;
            this.src = `https://flagsapi.com/${country.code}/flat/64.png`;
        };

        // Header and names
        elements.activeFlagEmoji.textContent = country.flag || '🏳️';
        elements.activeIsoCodeTag.textContent = `${country.code} / ${country.alpha3Code}`;
        elements.activeCountryName.textContent = country.name;
        elements.activeOfficialName.textContent = country.officialName || country.name;

        // Modal Flag properties
        elements.flagModalImg.src = country.flagSvg;
        elements.flagModalImg.alt = `Flag of ${country.name}`;
        elements.flagModalTitle.textContent = `Flag of ${country.name}`;

        // 1. Capital & Timezone
        elements.activeCapital.textContent = country.capital || 'N/A';
        const tz = country.latlng ? calculateEstimatedTimezone(country.latlng[1]) : 'UTC';
        elements.activeTimezone.textContent = `Estimated Local: ${tz}`;

        // 2. Population & World Percentage
        const pop = country.population || 0;
        elements.activePopulation.textContent = formatNumber(pop);
        const popPct = ((pop / GLOBAL_WORLD_POPULATION) * 100);
        const displayPct = popPct < 0.01 ? '< 0.01%' : `~${popPct.toFixed(2)}%`;
        elements.activePopPct.textContent = `${displayPct} of Global Population`;
        elements.activePopProgress.style.width = `${Math.min(Math.max(popPct * 4, 1.5), 100)}%`;

        // 3. Region & Subregion
        elements.activeRegion.textContent = country.region || 'Unknown';
        elements.activeSubregion.textContent = country.subregion ? `Subregion: ${country.subregion}` : 'Subregion: N/A';

        // 4. Currency
        elements.activeCurrencyCode.textContent = country.currency || 'N/A';
        elements.activeCurrencySymbol.textContent = country.currencySymbol || country.currency || '¤';
        elements.activeCurrencyName.textContent = country.currencyName || 'Official Currency';

        // 5. Languages
        elements.activeLanguagesContainer.innerHTML = '';
        if (country.languages && country.languages.length > 0) {
            country.languages.forEach(lang => {
                const pill = document.createElement('span');
                pill.className = 'tag-pill';
                pill.textContent = lang;
                elements.activeLanguagesContainer.appendChild(pill);
            });
        } else {
            elements.activeLanguagesContainer.innerHTML = '<span class="tag-pill">Unspecified</span>';
        }

        // 6. Area & Density
        const area = country.area || 0;
        if (area > 0) {
            elements.activeArea.textContent = `${formatNumber(area)} km²`;
            const density = pop > 0 ? Math.round(pop / area) : 0;
            elements.activeDensity.textContent = `Density: ~${formatNumber(density)} people / km²`;
        } else {
            elements.activeArea.textContent = 'N/A';
            elements.activeDensity.textContent = 'Density: N/A';
        }

        // 7. Telephony & TLD
        elements.activeCallingCode.textContent = country.callingCode || 'N/A';
        const tldStr = (country.tld && country.tld.length > 0) ? country.tld.join(', ') : 'N/A';
        elements.activeTld.textContent = `Domain: ${tldStr}`;

        // 8. Coordinates
        elements.activeCoordinates.textContent = formatCoordinates(country.latlng);

        // Google Maps Link
        const mapQuery = encodeURIComponent(`${country.name} ${country.capital || ''}`);
        elements.openMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

        // Favorite Button State
        updateFavoriteButtonState();

        // Neighboring Borders
        renderNeighborBorders(country);

        // Highlight active preset chip if it exists
        document.querySelectorAll('.preset-chip').forEach(chip => {
            if (chip.getAttribute('data-country').toLowerCase() === country.name.toLowerCase()) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });

        // Highlight active card in directory grid
        document.querySelectorAll('.country-card').forEach(card => {
            if (card.getAttribute('data-code') === country.code) {
                card.classList.add('active-card');
            } else {
                card.classList.remove('active-card');
            }
        });
    }

    function updateFavoriteButtonState() {
        if (!state.activeCountry || !elements.toggleFavoriteBtn) return;
        const isFav = state.favorites.has(state.activeCountry.code);
        if (isFav) {
            elements.toggleFavoriteBtn.classList.add('favorited');
            elements.favBtnLabel.textContent = 'Saved';
        } else {
            elements.toggleFavoriteBtn.classList.remove('favorited');
            elements.favBtnLabel.textContent = 'Bookmark';
        }
    }

    // --------------------------------------------------------------------------
    // 7. Neighboring Borders Rendering
    // --------------------------------------------------------------------------
    function renderNeighborBorders(country) {
        elements.bordersContainer.innerHTML = '';
        const borders = country.borders || [];

        if (borders.length === 0) {
            elements.bordersCountBadge.textContent = '0 Borders';
            elements.bordersContainer.innerHTML = '<span class="no-borders-msg">🏝️ Island or territory with no direct land borders.</span>';
            return;
        }

        elements.bordersCountBadge.textContent = `${borders.length} ${borders.length === 1 ? 'Neighbor' : 'Neighbors'}`;

        borders.forEach(borderCode => {
            // Find neighbor in allCountries by alpha3Code or code
            const neighbor = state.allCountries.find(c => c.alpha3Code === borderCode || c.code === borderCode);
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'border-country-btn';

            if (neighbor) {
                btn.innerHTML = `
                    <img src="${neighbor.flagSvg}" alt="${neighbor.name}" class="border-flag-tiny" loading="lazy" onerror="this.style.display='none'">
                    <span>${neighbor.name}</span>
                `;
                btn.title = `Jump to ${neighbor.name}`;
                btn.addEventListener('click', () => {
                    setActiveCountry(neighbor);
                    elements.showcaseCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    showToast(`Loaded neighboring nation: ${neighbor.name} ${neighbor.flag}`);
                });
            } else {
                btn.textContent = borderCode;
            }

            elements.bordersContainer.appendChild(btn);
        });
    }

    // --------------------------------------------------------------------------
    // 8. Search & Autocomplete System
    // --------------------------------------------------------------------------
    function handleSearchInput(e) {
        const query = e.target.value.trim().toLowerCase();
        state.searchQuery = query;

        if (query.length > 0) {
            elements.searchClearBtn.classList.add('visible');
            renderAutocomplete(query);
        } else {
            elements.searchClearBtn.classList.remove('visible');
            closeAutocomplete();
        }

        applyFiltersAndSort();
    }

    function renderAutocomplete(query) {
        const matches = state.allCountries.filter(c => {
            return (
                c.name.toLowerCase().includes(query) ||
                (c.officialName && c.officialName.toLowerCase().includes(query)) ||
                (c.capital && c.capital.toLowerCase().includes(query)) ||
                (c.currency && c.currency.toLowerCase().includes(query)) ||
                c.code.toLowerCase() === query ||
                c.alpha3Code.toLowerCase() === query
            );
        }).slice(0, 7);

        if (matches.length === 0) {
            elements.autocompleteDropdown.innerHTML = `
                <div style="padding: 0.75rem 1rem; color: var(--text-muted); font-size: 0.85rem; font-style: italic;">
                    No countries matching "${query}"
                </div>
            `;
            elements.autocompleteDropdown.classList.add('active');
            elements.autocompleteDropdown.setAttribute('aria-hidden', 'false');
            state.activeAutocompleteIdx = -1;
            return;
        }

        elements.autocompleteDropdown.innerHTML = '';
        state.activeAutocompleteIdx = -1;

        matches.forEach((country, index) => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.setAttribute('role', 'option');
            item.setAttribute('data-index', index);

            item.innerHTML = `
                <div class="autocomplete-item-left">
                    <img src="${country.flagSvg}" alt="${country.name}" class="autocomplete-flag" loading="lazy" onerror="this.src='https://flagsapi.com/${country.code}/flat/64.png'">
                    <div>
                        <span class="autocomplete-name">${highlightMatch(country.name, query)}</span>
                        ${country.capital ? `<span class="autocomplete-capital">• ${country.capital}</span>` : ''}
                    </div>
                </div>
                <div class="autocomplete-meta">
                    <span class="autocomplete-region-pill">${country.region}</span>
                </div>
            `;

            item.addEventListener('click', () => {
                selectCountryFromSearch(country);
            });

            elements.autocompleteDropdown.appendChild(item);
        });

        elements.autocompleteDropdown.classList.add('active');
        elements.autocompleteDropdown.setAttribute('aria-hidden', 'false');
    }

    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
        return text.replace(regex, '<strong style="color: var(--accent-primary);">$1</strong>');
    }

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function selectCountryFromSearch(country) {
        setActiveCountry(country);
        elements.searchInput.value = country.name;
        state.searchQuery = country.name.toLowerCase();
        closeAutocomplete();
        applyFiltersAndSort();
        elements.showcaseCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        showToast(`Displayed: ${country.name} ${country.flag}`);
    }

    function closeAutocomplete() {
        elements.autocompleteDropdown.classList.remove('active');
        elements.autocompleteDropdown.setAttribute('aria-hidden', 'true');
        elements.autocompleteDropdown.innerHTML = '';
        state.activeAutocompleteIdx = -1;
    }

    function handleSearchKeydown(e) {
        const items = elements.autocompleteDropdown.querySelectorAll('.autocomplete-item');
        if (!elements.autocompleteDropdown.classList.contains('active') || items.length === 0) {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (state.filteredCountries.length > 0) {
                    setActiveCountry(state.filteredCountries[0]);
                    elements.showcaseCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            return;
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            state.activeAutocompleteIdx = (state.activeAutocompleteIdx + 1) % items.length;
            updateAutocompleteFocus(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            state.activeAutocompleteIdx = (state.activeAutocompleteIdx - 1 + items.length) % items.length;
            updateAutocompleteFocus(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (state.activeAutocompleteIdx >= 0 && state.activeAutocompleteIdx < items.length) {
                items[state.activeAutocompleteIdx].click();
            }
        } else if (e.key === 'Escape') {
            closeAutocomplete();
        }
    }

    function updateAutocompleteFocus(items) {
        items.forEach((item, idx) => {
            if (idx === state.activeAutocompleteIdx) {
                item.classList.add('focused');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('focused');
            }
        });
    }

    // --------------------------------------------------------------------------
    // 9. Filtering, Sorting & Catalog Grid
    // --------------------------------------------------------------------------
    function applyFiltersAndSort() {
        let list = [...state.allCountries];

        // 1. Favorites only toggle
        if (state.showFavoritesOnly) {
            list = list.filter(c => state.favorites.has(c.code));
        }

        // 2. Region filter
        if (state.currentRegion !== 'All') {
            list = list.filter(c => c.region.toLowerCase() === state.currentRegion.toLowerCase());
        }

        // 3. Search query
        if (state.searchQuery) {
            const q = state.searchQuery.toLowerCase();
            list = list.filter(c => {
                return (
                    c.name.toLowerCase().includes(q) ||
                    (c.officialName && c.officialName.toLowerCase().includes(q)) ||
                    (c.capital && c.capital.toLowerCase().includes(q)) ||
                    (c.currency && c.currency.toLowerCase().includes(q)) ||
                    c.code.toLowerCase() === q ||
                    c.alpha3Code.toLowerCase() === q
                );
            });
        }

        // 4. Sorting
        list.sort((a, b) => {
            switch (state.currentSort) {
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'pop-desc':
                    return (b.population || 0) - (a.population || 0);
                case 'pop-asc':
                    return (a.population || 0) - (b.population || 0);
                case 'area-desc':
                    return (b.area || 0) - (a.area || 0);
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        state.filteredCountries = list;
        renderCatalogGrid(list);

        // Update indicators
        const countStr = `${list.length} ${list.length === 1 ? 'Nation' : 'Nations'}`;
        elements.matchingCountText.textContent = countStr;
        elements.renderedCountLabel.textContent = `Showing ${countStr}`;
    }

    function renderCatalogGrid(countries) {
        elements.countriesGrid.innerHTML = '';

        if (countries.length === 0) {
            elements.noResultsState.classList.remove('hidden');
            return;
        }

        elements.noResultsState.classList.add('hidden');

        const frag = document.createDocumentFragment();

        countries.forEach(country => {
            const card = document.createElement('article');
            card.className = 'country-card';
            card.setAttribute('data-code', country.code);
            if (state.activeCountry && state.activeCountry.code === country.code) {
                card.classList.add('active-card');
            }

            card.innerHTML = `
                <div class="card-flag-frame">
                    <img src="${country.flagSvg}" alt="${country.name} Flag" class="card-flag-img" loading="lazy" onerror="this.src='https://flagsapi.com/${country.code}/flat/64.png'">
                    <span class="card-region-badge">${country.region}</span>
                </div>
                <div class="card-body">
                    <div class="card-title-row">
                        <h3 class="card-country-name">${country.name}</h3>
                        <span class="card-flag-emoji">${country.flag || ''}</span>
                    </div>
                    <div class="card-stats-list">
                        <div class="card-stat-item">
                            <span class="stat-label">Capital:</span>
                            <span class="stat-value">${country.capital || 'N/A'}</span>
                        </div>
                        <div class="card-stat-item">
                            <span class="stat-label">Population:</span>
                            <span class="stat-value">${formatNumber(country.population)}</span>
                        </div>
                        <div class="card-stat-item">
                            <span class="stat-label">Currency:</span>
                            <span class="stat-value">${country.currency || 'N/A'}</span>
                        </div>
                    </div>
                    <div class="card-footer-action">
                        <span class="card-currency-badge">${country.currencySymbol || ''} ${country.currency || ''}</span>
                        <span class="card-view-link">View Details →</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                setActiveCountry(country);
                elements.showcaseCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });

            frag.appendChild(card);
        });

        elements.countriesGrid.appendChild(frag);
    }

    // --------------------------------------------------------------------------
    // 10. Country Comparison Engine
    // --------------------------------------------------------------------------
    function populateCompareSelectors() {
        elements.compareSelectA.innerHTML = '';
        elements.compareSelectB.innerHTML = '';

        const sorted = [...state.allCountries].sort((a, b) => a.name.localeCompare(b.name));

        sorted.forEach(c => {
            const optA = document.createElement('option');
            optA.value = c.code;
            optA.textContent = `${c.flag || ''} ${c.name}`;
            elements.compareSelectA.appendChild(optA);

            const optB = document.createElement('option');
            optB.value = c.code;
            optB.textContent = `${c.flag || ''} ${c.name}`;
            elements.compareSelectB.appendChild(optB);
        });

        // Set Country A to current active country, and B to United States or another country
        if (state.activeCountry) {
            elements.compareSelectA.value = state.activeCountry.code;
        }

        const defaultB = state.allCountries.find(c => c.code === 'US' || c.code === 'GB') || state.allCountries[1];
        if (defaultB) {
            elements.compareSelectB.value = defaultB.code;
        }

        renderComparison();
    }

    function renderComparison() {
        const codeA = elements.compareSelectA.value;
        const codeB = elements.compareSelectB.value;

        const countryA = state.allCountries.find(c => c.code === codeA);
        const countryB = state.allCountries.find(c => c.code === codeB);

        if (!countryA || !countryB) return;

        const popA = countryA.population || 0;
        const popB = countryB.population || 0;
        const areaA = countryA.area || 0;
        const areaB = countryB.area || 0;

        const densityA = (areaA > 0 && popA > 0) ? Math.round(popA / areaA) : 0;
        const densityB = (areaB > 0 && popB > 0) ? Math.round(popB / areaB) : 0;

        elements.compareResultsContent.innerHTML = `
            <table class="compare-table">
                <thead>
                    <tr>
                        <th style="width: 25%;">Metric</th>
                        <th style="width: 37.5%;">${countryA.name}</th>
                        <th style="width: 37.5%;">${countryB.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>National Flag</strong></td>
                        <td>
                            <div class="compare-flag-cell">
                                <img src="${countryA.flagSvg}" alt="${countryA.name}" class="compare-flag-img">
                                <span>${countryA.name}</span>
                            </div>
                        </td>
                        <td>
                            <div class="compare-flag-cell">
                                <img src="${countryB.flagSvg}" alt="${countryB.name}" class="compare-flag-img">
                                <span>${countryB.name}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Capital City</strong></td>
                        <td class="compare-val-a">${countryA.capital || 'N/A'}</td>
                        <td class="compare-val-b">${countryB.capital || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td><strong>Population</strong></td>
                        <td class="${popA >= popB ? 'compare-winner' : 'compare-val-a'}">
                            ${formatNumber(popA)}
                            ${popA > popB ? ' (Higher)' : ''}
                        </td>
                        <td class="${popB >= popA ? 'compare-winner' : 'compare-val-b'}">
                            ${formatNumber(popB)}
                            ${popB > popA ? ' (Higher)' : ''}
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Land Area</strong></td>
                        <td class="${areaA >= areaB ? 'compare-winner' : 'compare-val-a'}">
                            ${formatNumber(areaA)} km²
                            ${areaA > areaB ? ' (Larger)' : ''}
                        </td>
                        <td class="${areaB >= areaA ? 'compare-winner' : 'compare-val-b'}">
                            ${formatNumber(areaB)} km²
                            ${areaB > areaA ? ' (Larger)' : ''}
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Population Density</strong></td>
                        <td class="compare-val-a">~${formatNumber(densityA)} / km²</td>
                        <td class="compare-val-b">~${formatNumber(densityB)} / km²</td>
                    </tr>
                    <tr>
                        <td><strong>Region & Subregion</strong></td>
                        <td class="compare-val-a">${countryA.region} (${countryA.subregion || 'N/A'})</td>
                        <td class="compare-val-b">${countryB.region} (${countryB.subregion || 'N/A'})</td>
                    </tr>
                    <tr>
                        <td><strong>Currency</strong></td>
                        <td class="compare-val-a">${countryA.currencySymbol || ''} ${countryA.currency} (${countryA.currencyName || 'N/A'})</td>
                        <td class="compare-val-b">${countryB.currencySymbol || ''} ${countryB.currency} (${countryB.currencyName || 'N/A'})</td>
                    </tr>
                    <tr>
                        <td><strong>Languages</strong></td>
                        <td class="compare-val-a">${(countryA.languages || []).join(', ') || 'N/A'}</td>
                        <td class="compare-val-b">${(countryB.languages || []).join(', ') || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td><strong>Calling Code</strong></td>
                        <td class="compare-val-a">${countryA.callingCode || 'N/A'}</td>
                        <td class="compare-val-b">${countryB.callingCode || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    // --------------------------------------------------------------------------
    // 11. Interactive Extras: Speech, Random, Copy
    // --------------------------------------------------------------------------
    function speakActiveCountry() {
        if (!state.activeCountry) return;
        if (!('speechSynthesis' in window)) {
            showToast('Text-to-speech audio is not supported in this browser.');
            return;
        }

        window.speechSynthesis.cancel(); // Stop any pending utterances
        const text = `${state.activeCountry.name}. Capital city is ${state.activeCountry.capital || 'unspecified'}. Located in ${state.activeCountry.region}.`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;

        window.speechSynthesis.speak(utterance);
        showToast(`Pronouncing: ${state.activeCountry.name} 🔊`);
    }

    function toggleFavorite() {
        if (!state.activeCountry) return;
        const code = state.activeCountry.code;

        if (state.favorites.has(code)) {
            state.favorites.delete(code);
            showToast(`Removed ${state.activeCountry.name} from saved favorites.`);
        } else {
            state.favorites.add(code);
            showToast(`Saved ${state.activeCountry.name} ${state.activeCountry.flag} to favorites! ⭐`);
        }

        saveFavorites();
        updateFavoriteButtonState();

        if (state.showFavoritesOnly) {
            applyFiltersAndSort();
        }
    }

    function copyCountrySummary() {
        if (!state.activeCountry) return;
        const c = state.activeCountry;
        const text = `Country: ${c.name} ${c.flag || ''}\nOfficial Name: ${c.officialName || c.name}\nCapital: ${c.capital || 'N/A'}\nPopulation: ${formatNumber(c.population)}\nRegion: ${c.region} (${c.subregion || ''})\nCurrency: ${c.currency} (${c.currencyName || ''})\nLanguages: ${(c.languages || []).join(', ')}\nArea: ${formatNumber(c.area)} km²\nCalling Code: ${c.callingCode || 'N/A'}`;

        navigator.clipboard.writeText(text).then(() => {
            showToast(`Copied ${c.name} details to clipboard! 📋`);
        }).catch(() => {
            showToast('Unable to copy to clipboard.');
        });
    }

    function pickRandomCountry() {
        if (state.allCountries.length === 0) return;
        const randIdx = Math.floor(Math.random() * state.allCountries.length);
        const randomCountry = state.allCountries[randIdx];
        setActiveCountry(randomCountry);
        elements.showcaseCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        showToast(`Discovered: ${randomCountry.name} ${randomCountry.flag} 🎲`);
    }

    // --------------------------------------------------------------------------
    // 12. Event Listeners Setup
    // --------------------------------------------------------------------------
    function initEvents() {
        // Search Input Events
        elements.searchInput.addEventListener('input', handleSearchInput);
        elements.searchInput.addEventListener('keydown', handleSearchKeydown);

        // Clear Search Button
        elements.searchClearBtn.addEventListener('click', () => {
            elements.searchInput.value = '';
            state.searchQuery = '';
            elements.searchClearBtn.classList.remove('visible');
            closeAutocomplete();
            applyFiltersAndSort();
            elements.searchInput.focus();
        });

        // Global Keyboard Shortcut: '/' to focus search, 'Escape' to close dropdowns
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== elements.searchInput) {
                e.preventDefault();
                elements.searchInput.focus();
                elements.searchInput.select();
            } else if (e.key === 'Escape') {
                closeAutocomplete();
                elements.compareModal.classList.add('hidden');
                elements.flagModal.classList.add('hidden');
            }
        });

        // Click outside to close autocomplete dropdown
        document.addEventListener('click', (e) => {
            if (!elements.searchInput.contains(e.target) && !elements.autocompleteDropdown.contains(e.target)) {
                closeAutocomplete();
            }
        });

        // Preset Chips
        elements.presetChipsContainer.addEventListener('click', (e) => {
            const chip = e.target.closest('.preset-chip');
            if (!chip) return;
            const countryName = chip.getAttribute('data-country');
            const target = state.allCountries.find(c => c.name.toLowerCase() === countryName.toLowerCase());
            if (target) {
                setActiveCountry(target);
                elements.showcaseCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                showToast(`Selected: ${target.name} ${target.flag}`);
            }
        });

        // Region Tabs
        elements.regionTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                elements.regionTabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                state.currentRegion = tab.getAttribute('data-region');
                applyFiltersAndSort();
            });
        });

        // Sort Select
        elements.sortSelect.addEventListener('change', (e) => {
            state.currentSort = e.target.value;
            applyFiltersAndSort();
        });

        // Reset Filters Button in empty state
        elements.resetFiltersBtn.addEventListener('click', () => {
            elements.searchInput.value = '';
            state.searchQuery = '';
            elements.searchClearBtn.classList.remove('visible');
            state.currentRegion = 'All';
            elements.regionTabs.forEach(t => {
                if (t.getAttribute('data-region') === 'All') {
                    t.classList.add('active');
                    t.setAttribute('aria-selected', 'true');
                } else {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                }
            });
            state.showFavoritesOnly = false;
            elements.favoritesFilterBtn.classList.remove('active');
            applyFiltersAndSort();
        });

        // Favorites Filter Button
        elements.favoritesFilterBtn.addEventListener('click', () => {
            state.showFavoritesOnly = !state.showFavoritesOnly;
            if (state.showFavoritesOnly) {
                elements.favoritesFilterBtn.style.background = 'rgba(245, 158, 11, 0.2)';
                elements.favoritesFilterBtn.style.borderColor = 'var(--accent-amber)';
                showToast(`Filtering by saved favorites (${state.favorites.size})`);
            } else {
                elements.favoritesFilterBtn.style.background = '';
                elements.favoritesFilterBtn.style.borderColor = '';
            }
            applyFiltersAndSort();
        });

        // Showcase Action Buttons
        elements.speakCountryBtn.addEventListener('click', speakActiveCountry);
        elements.toggleFavoriteBtn.addEventListener('click', toggleFavorite);
        elements.copyDetailsBtn.addEventListener('click', copyCountrySummary);
        elements.randomCountryBtn.addEventListener('click', pickRandomCountry);

        // Zoom Flag Modal
        elements.zoomFlagBtn.addEventListener('click', () => {
            if (!state.activeCountry) return;
            elements.flagModal.classList.remove('hidden');
        });

        elements.closeFlagModalBtn.addEventListener('click', () => {
            elements.flagModal.classList.add('hidden');
        });

        elements.flagModal.addEventListener('click', (e) => {
            if (e.target === elements.flagModal) {
                elements.flagModal.classList.add('hidden');
            }
        });

        // Compare Modal
        elements.openCompareModalBtn.addEventListener('click', () => {
            if (state.activeCountry) {
                elements.compareSelectA.value = state.activeCountry.code;
            }
            renderComparison();
            elements.compareModal.classList.remove('hidden');
        });

        elements.closeCompareModalBtn.addEventListener('click', () => {
            elements.compareModal.classList.add('hidden');
        });

        elements.compareModal.addEventListener('click', (e) => {
            if (e.target === elements.compareModal) {
                elements.compareModal.classList.add('hidden');
            }
        });

        elements.compareSelectA.addEventListener('change', renderComparison);
        elements.compareSelectB.addEventListener('change', renderComparison);

        // Theme Switcher
        elements.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // --------------------------------------------------------------------------
    // 13. App Bootstrapper
    // --------------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        loadTheme();
        loadSavedFavorites();
        initData();
        initEvents();
    });

})();
