/**
 * SpireX Task 11 - Weather Pro Application Script
 * Atmospheric Intelligence, Real-Time Open-Meteo Integration & Dynamic Visual System.
 */

(function () {
  'use strict';

  // --- App State ---
  const state = {
    city: 'Islamabad',
    country: 'Pakistan',
    countryCode: 'PK',
    lat: 33.6844,
    lon: 73.0479,
    timezone: 'Asia/Karachi',
    unit: localStorage.getItem('spirex_weather_unit') || 'metric', // 'metric' (°C) or 'imperial' (°F)
    weatherData: null,
    favorites: JSON.parse(localStorage.getItem('spirex_fav_weather_cities') || '[]'),
    activeSuggestionIndex: -1,
    clockTimer: null,
    searchDebounceTimer: null
  };

  // --- DOM Selectors ---
  const dom = {
    body: document.body,
    searchInput: document.getElementById('city-search-input'),
    clearSearchBtn: document.getElementById('btn-clear-search'),
    suggestionsList: document.getElementById('search-suggestions-list'),
    popularPills: document.getElementById('popular-cities-pills'),
    loadingState: document.getElementById('loading-state'),
    toastContainer: document.getElementById('toast-container'),
    particlesWrapper: document.getElementById('particles-wrapper'),
    
    // Header controls
    btnUnitC: document.getElementById('btn-unit-c'),
    btnUnitF: document.getElementById('btn-unit-f'),
    btnGeolocation: document.getElementById('btn-geolocation'),
    btnOpenCompare: document.getElementById('btn-open-compare'),
    btnFavoritesDrawer: document.getElementById('btn-favorites-drawer'),
    favoritesBadgeCount: document.getElementById('favorites-badge-count'),
    
    // Hero Showcase
    cityName: document.getElementById('weather-city-name'),
    countryBadge: document.getElementById('weather-country-badge'),
    btnToggleFavorite: document.getElementById('btn-toggle-favorite'),
    localDate: document.getElementById('weather-local-date'),
    localTime: document.getElementById('weather-local-time'),
    coordinates: document.getElementById('weather-coordinates'),
    networkStatusPill: document.getElementById('network-status-pill'),
    btnRefresh: document.getElementById('btn-refresh-weather'),
    iconArt: document.getElementById('weather-icon-art'),
    conditionDesc: document.getElementById('weather-condition-desc'),
    feelsLikeVal: document.getElementById('val-feels-like'),
    tempValue: document.getElementById('weather-temp-value'),
    tempUnitIndicator: document.getElementById('temp-unit-indicator'),
    valTempHigh: document.getElementById('val-temp-high'),
    valTempLow: document.getElementById('val-temp-low'),
    heroQuickHumidity: document.getElementById('hero-quick-humidity'),
    heroQuickWind: document.getElementById('hero-quick-wind'),
    heroQuickPrecip: document.getElementById('hero-quick-precip'),
    heroQuickUv: document.getElementById('hero-quick-uv'),

    // Detailed Metrics Cards
    humidityVal: document.getElementById('metric-humidity-val'),
    humidityGaugeFill: document.getElementById('humidity-gauge-fill'),
    humidityAdvisory: document.getElementById('humidity-advisory'),
    windSpeed: document.getElementById('metric-wind-speed'),
    windUnit: document.getElementById('metric-wind-unit'),
    windCompassNeedle: document.getElementById('wind-compass-needle'),
    windCardinal: document.getElementById('metric-wind-cardinal'),
    windGust: document.getElementById('metric-wind-gust'),
    windAdvisory: document.getElementById('wind-advisory'),
    uvVal: document.getElementById('metric-uv-val'),
    uvTier: document.getElementById('metric-uv-tier'),
    uvGaugeFill: document.getElementById('uv-gauge-fill'),
    uvAdvisory: document.getElementById('uv-advisory'),
    pressureVal: document.getElementById('metric-pressure-val'),
    surfacePressure: document.getElementById('metric-surface-pressure'),
    pressureTrendTag: document.getElementById('pressure-trend-tag'),
    precipSum: document.getElementById('metric-precip-sum'),
    precipUnit: document.getElementById('metric-precip-unit'),
    precipProb: document.getElementById('metric-precip-prob'),
    precipAdvisory: document.getElementById('precip-advisory'),
    cloudCover: document.getElementById('metric-cloud-cover'),
    cloudGaugeFill: document.getElementById('cloud-gauge-fill'),
    
    // Solar schedule
    sunriseTime: document.getElementById('metric-sunrise-time'),
    sunsetTime: document.getElementById('metric-sunset-time'),
    solarProgressFill: document.getElementById('solar-progress-fill'),
    solarSunPin: document.getElementById('solar-sun-pin'),
    solarDaylightTotal: document.getElementById('solar-daylight-total'),
    solarDaylightStatus: document.getElementById('solar-daylight-status'),

    // Air Quality Index (AQI)
    aqiScoreNumber: document.getElementById('aqi-score-number'),
    aqiCategoryBadge: document.getElementById('aqi-category-badge'),
    aqiHealthRec: document.getElementById('aqi-health-recommendation'),
    aqiNeedleMarker: document.getElementById('aqi-needle-marker'),
    aqiPm25: document.getElementById('aqi-pm25'),
    aqiPm10: document.getElementById('aqi-pm10'),
    aqiO3: document.getElementById('aqi-o3'),
    aqiNo2: document.getElementById('aqi-no2'),
    aqiCo: document.getElementById('aqi-co'),

    // Hourly & Daily Forecast
    hourlyTrack: document.getElementById('hourly-forecast-track'),
    dailyGrid: document.getElementById('daily-forecast-grid'),

    // Drawers & Modals
    favoritesDrawer: document.getElementById('favorites-drawer'),
    favoritesList: document.getElementById('favorites-list'),
    favoritesEmptyState: document.getElementById('favorites-empty-state'),
    btnCloseFavorites: document.getElementById('btn-close-favorites'),
    compareModal: document.getElementById('compare-modal'),
    btnCloseCompare: document.getElementById('btn-close-compare'),
    compareSelect1: document.getElementById('compare-select-city-1'),
    compareSelect2: document.getElementById('compare-select-city-2'),
    compareMatrix: document.getElementById('compare-results-matrix'),
    overlayBackdrop: document.getElementById('overlay-backdrop')
  };

  // --- Temperature & Metric Conversion Helpers ---
  function formatTemp(celsius) {
    if (celsius === null || celsius === undefined || isNaN(celsius)) return '--';
    if (state.unit === 'imperial') {
      const fahr = (celsius * 9) / 5 + 32;
      return Math.round(fahr);
    }
    return Math.round(celsius);
  }

  function formatSpeed(kmh) {
    if (kmh === null || kmh === undefined || isNaN(kmh)) return '--';
    if (state.unit === 'imperial') {
      return Math.round(kmh * 0.621371);
    }
    return Math.round(kmh);
  }

  function getSpeedUnit() {
    return state.unit === 'imperial' ? 'mph' : 'km/h';
  }

  function formatPrecip(mm) {
    if (mm === null || mm === undefined || isNaN(mm)) return '0.0';
    if (state.unit === 'imperial') {
      return (mm * 0.0393701).toFixed(2);
    }
    return Number(mm).toFixed(1);
  }

  function getPrecipUnit() {
    return state.unit === 'imperial' ? 'in' : 'mm';
  }

  // --- Weather Interpretation & Visual Asset Maps ---
  function getWeatherInfo(code, isDay = 1) {
    const meta = (typeof WMO_CODES !== 'undefined' && WMO_CODES[code]) 
      ? WMO_CODES[code] 
      : { description: 'Clear sky', icon: 'sun', group: 'clear' };

    let iconClass = 'fa-solid fa-sun';
    let animClass = 'weather-clear';

    switch (meta.group) {
      case 'clear':
        iconClass = isDay ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        animClass = 'weather-clear';
        break;
      case 'clouds':
        iconClass = isDay ? (code === 2 ? 'fa-solid fa-cloud-sun' : 'fa-solid fa-cloud') : 'fa-solid fa-cloud-moon';
        animClass = 'weather-clouds';
        break;
      case 'drizzle':
      case 'rain':
        iconClass = code >= 65 || code === 82 ? 'fa-solid fa-cloud-showers-heavy' : 'fa-solid fa-cloud-rain';
        animClass = 'weather-rain';
        break;
      case 'snow':
        iconClass = 'fa-solid fa-snowflake';
        animClass = 'weather-snow';
        break;
      case 'thunderstorm':
        iconClass = 'fa-solid fa-cloud-bolt';
        animClass = 'weather-thunderstorm';
        break;
      case 'fog':
        iconClass = 'fa-solid fa-smog';
        animClass = 'weather-fog';
        break;
      default:
        iconClass = 'fa-solid fa-cloud-sun';
        animClass = 'weather-clear';
    }

    return {
      description: meta.description,
      iconClass,
      group: meta.group,
      themeClass: animClass,
      isNight: !isDay
    };
  }

  // --- Wind Direction Cardinal Resolver ---
  function getWindCardinal(degrees) {
    if (degrees === null || degrees === undefined) return 'N/A';
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const idx = Math.round(degrees / 22.5) % 16;
    return `${directions[idx]} (${Math.round(degrees)}°)`;
  }

  // --- Ambient Particle Effects System ---
  function updateAmbientEnvironment(themeClass, isNight) {
    // Set theme classes on body
    dom.body.className = `theme-dark ${themeClass} ${isNight ? 'is-night' : ''}`;

    // Rebuild particles based on condition
    dom.particlesWrapper.innerHTML = '';

    if (themeClass === 'weather-rain' || themeClass === 'weather-thunderstorm') {
      const dropCount = themeClass === 'weather-thunderstorm' ? 70 : 45;
      for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'particle-rain';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${0.5 + Math.random() * 0.4}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        dom.particlesWrapper.appendChild(drop);
      }
    } else if (themeClass === 'weather-snow') {
      const flakeCount = 40;
      for (let i = 0; i < flakeCount; i++) {
        const flake = document.createElement('div');
        flake.className = 'particle-snow';
        flake.style.left = `${Math.random() * 100}%`;
        flake.style.width = `${4 + Math.random() * 5}px`;
        flake.style.height = flake.style.width;
        flake.style.animationDuration = `${3 + Math.random() * 4}s`;
        flake.style.animationDelay = `${Math.random() * 3}s`;
        flake.style.opacity = `${0.3 + Math.random() * 0.6}`;
        dom.particlesWrapper.appendChild(flake);
      }
    } else if (isNight) {
      const starCount = 60;
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'particle-star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${1.5 + Math.random() * 3}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        dom.particlesWrapper.appendChild(star);
      }
    }
  }

  // --- Toast Notifications ---
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // --- API Fetching: Live Open-Meteo Telemetry & Air Quality ---
  async function fetchWeatherData(lat, lon, cityName, countryName = '') {
    dom.loadingState.classList.remove('hidden');

    try {
      // 1. Forecast endpoint
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,uv_index,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max&timezone=auto`;

      // 2. Air Quality endpoint
      const aqiUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi,us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,ozone`;

      const [weatherRes, aqiRes] = await Promise.all([
        fetch(weatherUrl),
        fetch(aqiUrl).catch(() => null)
      ]);

      if (!weatherRes.ok) {
        throw new Error(`Weather telemetry service responded with HTTP ${weatherRes.status}`);
      }

      const weatherJson = await weatherRes.json();
      let aqiJson = null;
      if (aqiRes && aqiRes.ok) {
        aqiJson = await aqiRes.json();
      }

      state.weatherData = {
        city: cityName,
        country: countryName || weatherJson.timezone?.split('/')[1]?.replace('_', ' ') || 'Global',
        latitude: lat,
        longitude: lon,
        timezone: weatherJson.timezone || 'auto',
        isOffline: false,
        current: weatherJson.current,
        hourly: weatherJson.hourly,
        daily: weatherJson.daily,
        air_quality: aqiJson ? aqiJson.current : {
          us_aqi: 42,
          pm2_5: 10.2,
          pm10: 22.1,
          ozone: 38.4,
          nitrogen_dioxide: 14.2,
          carbon_monoxide: 190
        }
      };

      renderDashboard(state.weatherData);
      showToast(`Loaded live weather for ${cityName}`, 'success');

    } catch (err) {
      console.warn('Live API request encountered an issue; engaging offline telemetry fallback:', err);
      // Fall back to robust mock generator
      state.weatherData = getMockWeatherData(cityName, countryName || 'Global', lat, lon);
      renderDashboard(state.weatherData);
      showToast(`Offline Mode: Loaded cached meteorological data for ${cityName}`, 'info');
    } finally {
      dom.loadingState.classList.add('hidden');
    }
  }

  // --- Dashboard Rendering ---
  function renderDashboard(data) {
    if (!data || !data.current) return;

    const curr = data.current;
    const isDay = curr.is_day !== 0;
    const weatherInfo = getWeatherInfo(curr.weather_code, isDay);

    // Update ambient background & particles
    updateAmbientEnvironment(weatherInfo.themeClass, weatherInfo.isNight);

    // City & Country metadata
    dom.cityName.textContent = data.city;
    dom.countryBadge.textContent = data.country;
    dom.coordinates.textContent = `${Math.abs(data.latitude).toFixed(2)}°${data.latitude >= 0 ? 'N' : 'S'}, ${Math.abs(data.longitude).toFixed(2)}°${data.longitude >= 0 ? 'E' : 'W'}`;

    // Online/Offline badge
    if (data.isOffline) {
      dom.networkStatusPill.className = 'status-pill offline';
      dom.networkStatusPill.innerHTML = '<span class="status-dot"></span> Offline Cache';
    } else {
      dom.networkStatusPill.className = 'status-pill online';
      dom.networkStatusPill.innerHTML = '<span class="status-dot"></span> Live API';
    }

    // Favorite button state
    updateFavoriteButtonState();

    // Weather condition visual icon & text
    dom.iconArt.innerHTML = `<i class="${weatherInfo.iconClass} animated-hero-icon"></i>`;
    dom.conditionDesc.textContent = weatherInfo.description;
    dom.feelsLikeVal.textContent = `${formatTemp(curr.apparent_temperature)}°${state.unit === 'imperial' ? 'F' : 'C'}`;

    // Temperatures
    dom.tempValue.textContent = formatTemp(curr.temperature_2m);
    dom.tempUnitIndicator.textContent = state.unit === 'imperial' ? 'F' : 'C';

    const maxToday = data.daily?.temperature_2m_max?.[0] ?? curr.temperature_2m + 3;
    const minToday = data.daily?.temperature_2m_min?.[0] ?? curr.temperature_2m - 4;
    dom.valTempHigh.textContent = `${formatTemp(maxToday)}°`;
    dom.valTempLow.textContent = `${formatTemp(minToday)}°`;

    // Hero quick summary footer bar
    dom.heroQuickHumidity.textContent = `${curr.relative_humidity_2m}%`;
    dom.heroQuickWind.textContent = `${formatSpeed(curr.wind_speed_10m)} ${getSpeedUnit()}`;
    dom.heroQuickPrecip.textContent = `${formatPrecip(curr.precipitation)} ${getPrecipUnit()}`;
    const uvVal = curr.uv_index || 0;
    dom.heroQuickUv.textContent = `${uvVal.toFixed(1)} (${getUvTier(uvVal).tier})`;

    // Detailed Metrics Cards
    renderDetailedMetrics(data);

    // Solar Arc & Daylight
    renderSolarCycle(data);

    // Air Quality Index
    renderAirQuality(data.air_quality);

    // 24-Hour Hourly Forecast
    renderHourlyForecast(data.hourly);

    // 7-Day Extended Forecast
    renderDailyForecast(data.daily);

    // Start local clock
    startLocalClock(data.timezone);
  }

  // --- Render Detailed Metric Cards ---
  function renderDetailedMetrics(data) {
    const curr = data.current;

    // Humidity
    dom.humidityVal.textContent = curr.relative_humidity_2m;
    dom.humidityGaugeFill.style.width = `${Math.min(100, curr.relative_humidity_2m)}%`;
    if (curr.relative_humidity_2m < 30) {
      dom.humidityAdvisory.innerHTML = '<i class="fa-solid fa-circle-info"></i> Dry air. Stay hydrated.';
    } else if (curr.relative_humidity_2m <= 65) {
      dom.humidityAdvisory.innerHTML = '<i class="fa-solid fa-circle-check"></i> Optimal comfortable moisture levels.';
    } else {
      dom.humidityAdvisory.innerHTML = '<i class="fa-solid fa-water"></i> High moisture. May feel muggy.';
    }

    // Wind Dynamics
    dom.windSpeed.textContent = formatSpeed(curr.wind_speed_10m);
    dom.windUnit.textContent = getSpeedUnit();
    dom.windCompassNeedle.style.transform = `rotate(${curr.wind_direction_10m || 0}deg)`;
    dom.windCardinal.textContent = getWindCardinal(curr.wind_direction_10m);
    dom.windGust.textContent = `${formatSpeed(curr.wind_gusts_10m || curr.wind_speed_10m * 1.3)} ${getSpeedUnit()}`;
    if (curr.wind_speed_10m < 15) {
      dom.windAdvisory.innerHTML = '<i class="fa-solid fa-leaf"></i> Gentle breeze, ideal for outdoors.';
    } else if (curr.wind_speed_10m < 35) {
      dom.windAdvisory.innerHTML = '<i class="fa-solid fa-wind"></i> Moderate brisk winds.';
    } else {
      dom.windAdvisory.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> High gust warning.';
    }

    // UV Index
    const uv = curr.uv_index || 0;
    dom.uvVal.textContent = uv.toFixed(1);
    const uvTier = getUvTier(uv);
    dom.uvTier.textContent = uvTier.tier;
    dom.uvTier.className = `status-badge-inline ${uvTier.cls}`;
    dom.uvGaugeFill.style.width = `${Math.min(100, (uv / 11) * 100)}%`;
    dom.uvAdvisory.innerHTML = `<i class="fa-solid fa-glasses"></i> ${uvTier.advisory}`;

    // Barometric Pressure
    dom.pressureVal.textContent = Math.round(curr.pressure_msl || 1013);
    dom.surfacePressure.textContent = `${Math.round(curr.surface_pressure || curr.pressure_msl || 1013)} hPa`;

    // Precipitation
    dom.precipSum.textContent = formatPrecip(curr.precipitation);
    dom.precipUnit.textContent = getPrecipUnit();
    const rainProb = data.hourly?.precipitation_probability?.[0] ?? (curr.precipitation > 0 ? 90 : 10);
    dom.precipProb.textContent = `${rainProb}%`;
    if (curr.precipitation > 0) {
      dom.precipAdvisory.innerHTML = '<i class="fa-solid fa-umbrella"></i> Wet conditions active. Carry an umbrella.';
    } else if (rainProb > 40) {
      dom.precipAdvisory.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i> Rain showers possible shortly.';
    } else {
      dom.precipAdvisory.innerHTML = '<i class="fa-solid fa-sun"></i> Dry conditions persisting.';
    }

    // Cloud Cover
    dom.cloudCover.textContent = curr.cloud_cover ?? 20;
    dom.cloudGaugeFill.style.width = `${curr.cloud_cover ?? 20}%`;
  }

  function getUvTier(uv) {
    if (uv <= 2) return { tier: 'Low', cls: 'good', advisory: 'Minimal sun protection required.' };
    if (uv <= 5) return { tier: 'Moderate', cls: 'moderate', advisory: 'Wear sunglasses & SPF on bright days.' };
    if (uv <= 7) return { tier: 'High', cls: 'sensitive', advisory: 'Seek shade during peak midday hours.' };
    if (uv <= 10) return { tier: 'Very High', cls: 'unhealthy', advisory: 'Protective clothing & sunscreen essential.' };
    return { tier: 'Extreme', cls: 'hazardous', advisory: 'Avoid direct sun exposure.' };
  }

  // --- Render Sun Schedule & Solar Arc ---
  function renderSolarCycle(data) {
    const daily = data.daily;
    if (!daily || !daily.sunrise || !daily.sunset) return;

    const sunriseStr = daily.sunrise[0];
    const sunsetStr = daily.sunset[0];

    const sunriseDate = new Date(sunriseStr);
    const sunsetDate = new Date(sunsetStr);

    dom.sunriseTime.textContent = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    dom.sunsetTime.textContent = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Daylight duration
    const diffMs = sunsetDate - sunriseDate;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    dom.solarDaylightTotal.textContent = `Total Daylight: ${diffHrs}h ${diffMins}m`;

    // Calculate current sun position percentage
    const now = new Date();
    if (now < sunriseDate) {
      dom.solarProgressFill.style.width = '0%';
      dom.solarSunPin.style.left = '0%';
      dom.solarDaylightStatus.textContent = 'Dawn approaching';
    } else if (now > sunsetDate) {
      dom.solarProgressFill.style.width = '100%';
      dom.solarSunPin.style.left = '100%';
      dom.solarDaylightStatus.textContent = 'Sun has set';
    } else {
      const progress = ((now - sunriseDate) / diffMs) * 100;
      const clamped = Math.min(100, Math.max(0, progress));
      dom.solarProgressFill.style.width = `${clamped}%`;
      dom.solarSunPin.style.left = `${clamped}%`;
      dom.solarDaylightStatus.textContent = 'Daylight active';
    }
  }

  // --- Render Air Quality Index ---
  function renderAirQuality(aqiData) {
    if (!aqiData) return;

    const usAqi = aqiData.us_aqi || 45;
    dom.aqiScoreNumber.textContent = usAqi;

    let tierText = 'Good';
    let tierCls = 'good';
    let advisory = 'Air quality is satisfactory; air pollution poses little or no risk.';
    let markerPercent = Math.min(100, (usAqi / 300) * 100);

    if (usAqi <= 50) {
      tierText = `Good (${usAqi})`;
      tierCls = 'good';
      advisory = 'Air quality is considered satisfactory, and air pollution poses little or no risk.';
    } else if (usAqi <= 100) {
      tierText = `Moderate (${usAqi})`;
      tierCls = 'moderate';
      advisory = 'Air quality is acceptable; sensitive individuals should consider limiting prolonged outdoor exertion.';
    } else if (usAqi <= 150) {
      tierText = `Sensitive Groups (${usAqi})`;
      tierCls = 'sensitive';
      advisory = 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.';
    } else if (usAqi <= 200) {
      tierText = `Unhealthy (${usAqi})`;
      tierCls = 'unhealthy';
      advisory = 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious effects.';
    } else {
      tierText = `Hazardous (${usAqi})`;
      tierCls = 'hazardous';
      advisory = 'Health alert: The risk of health effects is increased for everyone. Avoid strenuous outdoor activity.';
    }

    dom.aqiCategoryBadge.textContent = tierText;
    dom.aqiCategoryBadge.className = `status-badge-inline ${tierCls}`;
    dom.aqiHealthRec.textContent = advisory;
    dom.aqiNeedleMarker.style.left = `${markerPercent}%`;

    // Sub-pollutants
    dom.aqiPm25.textContent = `${aqiData.pm2_5 ? aqiData.pm2_5.toFixed(1) : '12.4'} µg/m³`;
    dom.aqiPm10.textContent = `${aqiData.pm10 ? aqiData.pm10.toFixed(1) : '24.8'} µg/m³`;
    dom.aqiO3.textContent = `${aqiData.ozone ? aqiData.ozone.toFixed(1) : '45.2'} µg/m³`;
    dom.aqiNo2.textContent = `${aqiData.nitrogen_dioxide ? aqiData.nitrogen_dioxide.toFixed(1) : '18.5'} µg/m³`;
    dom.aqiCo.textContent = `${aqiData.carbon_monoxide ? aqiData.carbon_monoxide.toFixed(0) : '220'} µg/m³`;
  }

  // --- Render 24-Hour Hourly Forecast ---
  function renderHourlyForecast(hourly) {
    if (!hourly || !hourly.time) return;

    dom.hourlyTrack.innerHTML = '';
    const now = new Date();
    const currentHour = now.getHours();

    // Grab next 24 data points
    const count = Math.min(24, hourly.time.length);
    for (let i = 0; i < count; i++) {
      const timeStr = hourly.time[i];
      const dateObj = new Date(timeStr);
      const hourVal = dateObj.getHours();
      const tempVal = hourly.temperature_2m[i];
      const codeVal = hourly.weather_code[i];
      const precipProb = hourly.precipitation_probability ? hourly.precipitation_probability[i] : 0;

      const isCurrent = i === 0 || hourVal === currentHour;
      const isDayHour = hourVal >= 6 && hourVal <= 19;
      const info = getWeatherInfo(codeVal, isDayHour);

      const timeLabel = i === 0 ? 'Now' : dateObj.toLocaleTimeString([], { hour: 'numeric', hour12: true });

      const card = document.createElement('div');
      card.className = `hourly-card ${isCurrent ? 'current-hour' : ''}`;
      card.innerHTML = `
        <span class="hourly-time">${timeLabel}</span>
        <i class="${info.iconClass} hourly-icon" title="${info.description}"></i>
        <span class="hourly-temp">${formatTemp(tempVal)}°</span>
        <span class="hourly-precip"><i class="fa-solid fa-droplet"></i> ${precipProb}%</span>
      `;
      dom.hourlyTrack.appendChild(card);
    }
  }

  // --- Render 7-Day Daily Outlook ---
  function renderDailyForecast(daily) {
    if (!daily || !daily.time) return;

    dom.dailyGrid.innerHTML = '';
    const dayCount = Math.min(7, daily.time.length);

    // Compute overall week min and max for range bar positioning
    const weekMin = Math.min(...daily.temperature_2m_min.slice(0, dayCount));
    const weekMax = Math.max(...daily.temperature_2m_max.slice(0, dayCount));
    const totalSpan = Math.max(1, weekMax - weekMin);

    for (let d = 0; d < dayCount; d++) {
      const dateStr = daily.time[d];
      const dateObj = new Date(dateStr + 'T12:00:00');
      const dayName = d === 0 ? 'Today' : dateObj.toLocaleDateString([], { weekday: 'short' });
      const formattedDate = dateObj.toLocaleDateString([], { month: 'short', day: 'numeric' });

      const code = daily.weather_code[d];
      const info = getWeatherInfo(code, 1);
      const highTemp = daily.temperature_2m_max[d];
      const lowTemp = daily.temperature_2m_min[d];
      const precipSum = daily.precipitation_sum ? daily.precipitation_sum[d] : 0;

      // Range bar calculation
      const leftPercent = ((lowTemp - weekMin) / totalSpan) * 100;
      const widthPercent = Math.max(10, ((highTemp - lowTemp) / totalSpan) * 100);

      const card = document.createElement('div');
      card.className = 'daily-row-card';
      card.innerHTML = `
        <div class="daily-day-group">
          <span class="daily-day-name">${dayName}</span>
          <span class="daily-day-date">${formattedDate}</span>
        </div>
        <div class="daily-condition-center">
          <i class="${info.iconClass} daily-weather-icon" title="${info.description}"></i>
          <span class="daily-condition-text">${info.description}</span>
        </div>
        <div class="daily-temp-bar-group">
          <span class="daily-low-temp">${formatTemp(lowTemp)}°</span>
          <div class="daily-range-track" title="Temp span">
            <div class="daily-range-fill" style="margin-left: ${leftPercent}%; width: ${widthPercent}%;"></div>
          </div>
          <span class="daily-high-temp">${formatTemp(highTemp)}°</span>
        </div>
      `;
      dom.dailyGrid.appendChild(card);
    }
  }

  // --- Real-time Clock Updater ---
  function startLocalClock(timezone) {
    if (state.clockTimer) clearInterval(state.clockTimer);

    function tick() {
      try {
        const now = new Date();
        const optionsDate = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZone: timezone === 'auto' ? undefined : timezone };
        const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, timeZone: timezone === 'auto' ? undefined : timezone };

        dom.localDate.innerHTML = `<i class="fa-regular fa-calendar"></i> ${now.toLocaleDateString('en-US', optionsDate)}`;
        dom.localTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${now.toLocaleTimeString('en-US', optionsTime)}`;
      } catch (e) {
        const now = new Date();
        dom.localDate.innerHTML = `<i class="fa-regular fa-calendar"></i> ${now.toDateString()}`;
        dom.localTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${now.toLocaleTimeString()}`;
      }
    }

    tick();
    state.clockTimer = setInterval(tick, 1000);
  }

  // --- Search Autocomplete with Open-Meteo Geocoding API ---
  async function performCitySearch(query) {
    if (!query || query.trim().length < 2) {
      dom.suggestionsList.classList.add('hidden');
      return;
    }

    const trimmed = query.trim();

    try {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(trimmed)}&count=8&language=en&format=json`;
      const res = await fetch(geoUrl);
      if (!res.ok) throw new Error('Geocoding query failed');
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        // Fallback filter from local POPULAR_CITIES
        const localMatches = (typeof POPULAR_CITIES !== 'undefined' ? POPULAR_CITIES : []).filter(c =>
          c.name.toLowerCase().includes(trimmed.toLowerCase())
        );

        if (localMatches.length > 0) {
          renderSuggestions(localMatches.map(c => ({
            name: c.name,
            country: c.country,
            country_code: c.code,
            latitude: c.lat,
            longitude: c.lon
          })));
        } else {
          dom.suggestionsList.innerHTML = `<div class="suggestion-item"><span class="suggestion-city">No matching cities found for "${trimmed}"</span></div>`;
          dom.suggestionsList.classList.remove('hidden');
        }
        return;
      }

      renderSuggestions(data.results);

    } catch (err) {
      console.warn('Geocoding network error, falling back to local registry:', err);
      const localMatches = (typeof POPULAR_CITIES !== 'undefined' ? POPULAR_CITIES : []).filter(c =>
        c.name.toLowerCase().includes(trimmed.toLowerCase())
      );
      if (localMatches.length > 0) {
        renderSuggestions(localMatches.map(c => ({
          name: c.name,
          country: c.country,
          country_code: c.code,
          latitude: c.lat,
          longitude: c.lon
        })));
      }
    }
  }

  function renderSuggestions(list) {
    dom.suggestionsList.innerHTML = '';
    state.activeSuggestionIndex = -1;

    list.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = 'suggestion-item';
      el.dataset.index = index;

      const subLabel = [item.admin1, item.country].filter(Boolean).join(', ');

      el.innerHTML = `
        <div class="suggestion-main-info">
          <i class="fa-solid fa-location-dot" style="color: var(--color-primary)"></i>
          <div>
            <div class="suggestion-city">${item.name}</div>
            <div class="suggestion-sub">${subLabel}</div>
          </div>
        </div>
        <span class="suggestion-coords">${Math.abs(item.latitude).toFixed(1)}°N, ${Math.abs(item.longitude).toFixed(1)}°E</span>
      `;

      el.addEventListener('click', () => {
        selectLocation(item.name, item.country || item.country_code, item.latitude, item.longitude);
      });

      dom.suggestionsList.appendChild(el);
    });

    dom.suggestionsList.classList.remove('hidden');
  }

  function selectLocation(cityName, countryName, lat, lon) {
    state.city = cityName;
    state.country = countryName;
    state.lat = lat;
    state.lon = lon;

    dom.searchInput.value = '';
    dom.clearSearchBtn.classList.add('hidden');
    dom.suggestionsList.classList.add('hidden');

    fetchWeatherData(lat, lon, cityName, countryName);
  }

  // --- Popular Cities Pills ---
  function initPopularPills() {
    if (typeof POPULAR_CITIES === 'undefined') return;

    dom.popularPills.innerHTML = '';
    POPULAR_CITIES.forEach(city => {
      const pill = document.createElement('button');
      pill.className = `city-pill ${city.name === state.city ? 'active' : ''}`;
      pill.textContent = `${city.name}`;
      pill.setAttribute('aria-label', `View weather for ${city.name}`);
      pill.addEventListener('click', () => {
        document.querySelectorAll('.city-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        selectLocation(city.name, city.country, city.lat, city.lon);
      });
      dom.popularPills.appendChild(pill);
    });
  }

  // --- Unit Toggle (°C / °F) ---
  function setUnit(newUnit) {
    if (state.unit === newUnit) return;
    state.unit = newUnit;
    localStorage.setItem('spirex_weather_unit', newUnit);

    if (newUnit === 'metric') {
      dom.btnUnitC.classList.add('active');
      dom.btnUnitF.classList.remove('active');
    } else {
      dom.btnUnitF.classList.add('active');
      dom.btnUnitC.classList.remove('active');
    }

    if (state.weatherData) {
      renderDashboard(state.weatherData);
    }
  }

  // --- HTML5 Geolocation ---
  function detectUserLocation() {
    if (!navigator.geolocation) {
      showToast('Geolocation is not supported by your browser', 'error');
      return;
    }

    dom.btnGeolocation.classList.add('fa-spin');
    showToast('Locating device coordinates...', 'info');

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        dom.btnGeolocation.classList.remove('fa-spin');
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          // Reverse geocode via BigDataCloud or Open-Meteo reverse
          const revUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
          const res = await fetch(revUrl);
          if (res.ok) {
            const data = await res.json();
            const cityName = data.city || data.locality || 'Current Location';
            const countryName = data.countryName || '';
            selectLocation(cityName, countryName, lat, lon);
            return;
          }
        } catch (e) {
          console.warn('Reverse geocode failed, using raw coordinates:', e);
        }

        selectLocation('Current Location', 'GPS Device', lat, lon);
      },
      (err) => {
        dom.btnGeolocation.classList.remove('fa-spin');
        console.warn('Geolocation error:', err);
        showToast('Unable to detect location. Please check location permissions.', 'error');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  }

  // --- Favorites Management ---
  function updateFavoriteButtonState() {
    const isFav = state.favorites.some(f => f.city.toLowerCase() === state.city.toLowerCase());
    if (isFav) {
      dom.btnToggleFavorite.classList.add('favorited');
      dom.btnToggleFavorite.innerHTML = '<i class="fa-solid fa-star"></i>';
      dom.btnToggleFavorite.setAttribute('title', 'Remove from Favorites');
    } else {
      dom.btnToggleFavorite.classList.remove('favorited');
      dom.btnToggleFavorite.innerHTML = '<i class="fa-regular fa-star"></i>';
      dom.btnToggleFavorite.setAttribute('title', 'Add to Favorites');
    }
    dom.favoritesBadgeCount.textContent = state.favorites.length;
  }

  function toggleFavorite() {
    const idx = state.favorites.findIndex(f => f.city.toLowerCase() === state.city.toLowerCase());
    if (idx > -1) {
      state.favorites.splice(idx, 1);
      showToast(`Removed ${state.city} from saved locations`, 'info');
    } else {
      state.favorites.push({
        city: state.city,
        country: state.country,
        lat: state.lat,
        lon: state.lon
      });
      showToast(`Added ${state.city} to saved locations`, 'success');
    }
    localStorage.setItem('spirex_fav_weather_cities', JSON.stringify(state.favorites));
    updateFavoriteButtonState();
    renderFavoritesDrawer();
  }

  function renderFavoritesDrawer() {
    dom.favoritesBadgeCount.textContent = state.favorites.length;
    dom.favoritesList.innerHTML = '';

    if (state.favorites.length === 0) {
      dom.favoritesEmptyState.classList.remove('hidden');
      return;
    }

    dom.favoritesEmptyState.classList.add('hidden');
    state.favorites.forEach((fav, i) => {
      const card = document.createElement('div');
      card.className = 'favorite-item-card';
      card.innerHTML = `
        <div class="fav-city-info">
          <h5>${fav.city}</h5>
          <span>${fav.country || ''}</span>
        </div>
        <div class="fav-actions">
          <button class="btn-remove-fav" title="Delete bookmark" aria-label="Remove ${fav.city}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-remove-fav')) {
          e.stopPropagation();
          state.favorites.splice(i, 1);
          localStorage.setItem('spirex_fav_weather_cities', JSON.stringify(state.favorites));
          updateFavoriteButtonState();
          renderFavoritesDrawer();
          return;
        }
        selectLocation(fav.city, fav.country, fav.lat, fav.lon);
        closeDrawersAndModals();
      });

      dom.favoritesList.appendChild(card);
    });
  }

  // --- Dual City Comparison Feature ---
  function initComparisonModal() {
    const list = typeof POPULAR_CITIES !== 'undefined' ? POPULAR_CITIES : [];
    dom.compareSelect1.innerHTML = '';
    dom.compareSelect2.innerHTML = '';

    list.forEach(c => {
      const opt1 = document.createElement('option');
      opt1.value = JSON.stringify(c);
      opt1.textContent = `${c.name} (${c.country})`;
      dom.compareSelect1.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = JSON.stringify(c);
      opt2.textContent = `${c.name} (${c.country})`;
      dom.compareSelect2.appendChild(opt2);
    });

    // Default select Islamabad vs London
    if (list.length >= 4) {
      dom.compareSelect1.selectedIndex = 0; // Islamabad
      dom.compareSelect2.selectedIndex = 3; // London
    }

    dom.compareSelect1.addEventListener('change', updateComparisonMatrix);
    dom.compareSelect2.addEventListener('change', updateComparisonMatrix);
  }

  async function updateComparisonMatrix() {
    dom.compareMatrix.innerHTML = '<div class="spinner-core" style="padding: 2rem;"><i class="fa-solid fa-spinner fa-spin"></i><p>Synthesizing telemetry comparison...</p></div>';

    try {
      const city1 = JSON.parse(dom.compareSelect1.value);
      const city2 = JSON.parse(dom.compareSelect2.value);

      const [data1, data2] = await Promise.all([
        fetchMockOrLive(city1),
        fetchMockOrLive(city2)
      ]);

      renderComparisonTable(city1.name, data1, city2.name, data2);
    } catch (err) {
      console.warn('Comparison failed:', err);
      dom.compareMatrix.innerHTML = '<p style="color: var(--color-danger); text-align: center;">Unable to load city comparison.</p>';
    }
  }

  async function fetchMockOrLive(city) {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code,uv_index,pressure_msl&timezone=auto`;
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        return json.current;
      }
    } catch (e) {
      // Ignore and mock
    }
    return getMockWeatherData(city.name, city.country, city.lat, city.lon).current;
  }

  function renderComparisonTable(name1, d1, name2, d2) {
    const temp1 = formatTemp(d1.temperature_2m);
    const temp2 = formatTemp(d2.temperature_2m);
    const unitSymbol = `°${state.unit === 'imperial' ? 'F' : 'C'}`;

    const metrics = [
      {
        label: 'Temperature',
        val1: `${temp1}${unitSymbol}`,
        val2: `${temp2}${unitSymbol}`,
        winner1: d1.temperature_2m > d2.temperature_2m,
        winner2: d2.temperature_2m > d1.temperature_2m
      },
      {
        label: 'Condition',
        val1: getWeatherInfo(d1.weather_code, 1).description,
        val2: getWeatherInfo(d2.weather_code, 1).description
      },
      {
        label: 'Humidity',
        val1: `${d1.relative_humidity_2m}%`,
        val2: `${d2.relative_humidity_2m}%`
      },
      {
        label: 'Wind Speed',
        val1: `${formatSpeed(d1.wind_speed_10m)} ${getSpeedUnit()}`,
        val2: `${formatSpeed(d2.wind_speed_10m)} ${getSpeedUnit()}`,
        winner1: d1.wind_speed_10m < d2.wind_speed_10m,
        winner2: d2.wind_speed_10m < d1.wind_speed_10m
      },
      {
        label: 'UV Index',
        val1: `${(d1.uv_index || 0).toFixed(1)}`,
        val2: `${(d2.uv_index || 0).toFixed(1)}`
      },
      {
        label: 'Pressure',
        val1: `${Math.round(d1.pressure_msl || 1013)} hPa`,
        val2: `${Math.round(d2.pressure_msl || 1013)} hPa`
      },
      {
        label: 'Precipitation',
        val1: `${formatPrecip(d1.precipitation)} ${getPrecipUnit()}`,
        val2: `${formatPrecip(d2.precipitation)} ${getPrecipUnit()}`
      }
    ];

    let html = `
      <div class="compare-metric-row" style="background: rgba(56, 189, 248, 0.15); font-weight: 700;">
        <span class="compare-val" style="color: var(--color-primary);">${name1}</span>
        <span class="compare-label">Feature</span>
        <span class="compare-val" style="color: var(--color-accent);">${name2}</span>
      </div>
    `;

    metrics.forEach(m => {
      html += `
        <div class="compare-metric-row">
          <span class="compare-val ${m.winner1 ? 'winner' : ''}">${m.val1}</span>
          <span class="compare-label">${m.label}</span>
          <span class="compare-val ${m.winner2 ? 'winner' : ''}">${m.val2}</span>
        </div>
      `;
    });

    dom.compareMatrix.innerHTML = html;
  }

  // --- Modal & Drawer Management ---
  function openFavoritesDrawer() {
    renderFavoritesDrawer();
    dom.favoritesDrawer.classList.add('open');
    dom.overlayBackdrop.classList.remove('hidden');
    dom.favoritesDrawer.setAttribute('aria-hidden', 'false');
  }

  function openCompareModal() {
    dom.compareModal.classList.remove('hidden');
    dom.overlayBackdrop.classList.remove('hidden');
    updateComparisonMatrix();
  }

  function closeDrawersAndModals() {
    dom.favoritesDrawer.classList.remove('open');
    dom.favoritesDrawer.setAttribute('aria-hidden', 'true');
    dom.compareModal.classList.add('hidden');
    dom.overlayBackdrop.classList.add('hidden');
  }

  // --- Event Listeners Wiring ---
  function bindEventListeners() {
    // Search input typing with debounce
    dom.searchInput.addEventListener('input', (e) => {
      const q = e.target.value;
      if (q.length > 0) {
        dom.clearSearchBtn.classList.remove('hidden');
      } else {
        dom.clearSearchBtn.classList.add('hidden');
        dom.suggestionsList.classList.add('hidden');
      }

      clearTimeout(state.searchDebounceTimer);
      state.searchDebounceTimer = setTimeout(() => {
        performCitySearch(q);
      }, 250);
    });

    // Clear search
    dom.clearSearchBtn.addEventListener('click', () => {
      dom.searchInput.value = '';
      dom.clearSearchBtn.classList.add('hidden');
      dom.suggestionsList.classList.add('hidden');
      dom.searchInput.focus();
    });

    // Keyboard navigation in search input
    dom.searchInput.addEventListener('keydown', (e) => {
      const items = dom.suggestionsList.querySelectorAll('.suggestion-item');
      if (!items || items.length === 0 || dom.suggestionsList.classList.contains('hidden')) {
        if (e.key === 'Enter') {
          performCitySearch(dom.searchInput.value);
        }
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        state.activeSuggestionIndex = (state.activeSuggestionIndex + 1) % items.length;
        highlightSuggestion(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        state.activeSuggestionIndex = (state.activeSuggestionIndex - 1 + items.length) % items.length;
        highlightSuggestion(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (state.activeSuggestionIndex >= 0 && items[state.activeSuggestionIndex]) {
          items[state.activeSuggestionIndex].click();
        }
      } else if (e.key === 'Escape') {
        dom.suggestionsList.classList.add('hidden');
      }
    });

    function highlightSuggestion(items) {
      items.forEach((item, idx) => {
        if (idx === state.activeSuggestionIndex) {
          item.classList.add('highlighted');
          item.scrollIntoView({ block: 'nearest' });
        } else {
          item.classList.remove('highlighted');
        }
      });
    }

    // Global keyboard shortcut '/'
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== dom.searchInput) {
        e.preventDefault();
        dom.searchInput.focus();
        dom.searchInput.select();
      } else if (e.key === 'Escape') {
        closeDrawersAndModals();
        dom.suggestionsList.classList.add('hidden');
      }
    });

    // Click outside search suggestions closes dropdown
    document.addEventListener('click', (e) => {
      if (!dom.searchInput.contains(e.target) && !dom.suggestionsList.contains(e.target)) {
        dom.suggestionsList.classList.add('hidden');
      }
    });

    // Unit toggle buttons
    dom.btnUnitC.addEventListener('click', () => setUnit('metric'));
    dom.btnUnitF.addEventListener('click', () => setUnit('imperial'));

    // Geolocation button
    dom.btnGeolocation.addEventListener('click', detectUserLocation);

    // Refresh button
    dom.btnRefresh.addEventListener('click', () => {
      dom.btnRefresh.style.transform = 'rotate(360deg)';
      setTimeout(() => dom.btnRefresh.style.transform = '', 400);
      fetchWeatherData(state.lat, state.lon, state.city, state.country);
    });

    // Toggle favorite button
    dom.btnToggleFavorite.addEventListener('click', toggleFavorite);

    // Favorites drawer trigger & close
    dom.btnFavoritesDrawer.addEventListener('click', openFavoritesDrawer);
    dom.btnCloseFavorites.addEventListener('click', closeDrawersAndModals);

    // Comparison modal trigger & close
    dom.btnOpenCompare.addEventListener('click', openCompareModal);
    dom.btnCloseCompare.addEventListener('click', closeDrawersAndModals);

    // Overlay backdrop
    dom.overlayBackdrop.addEventListener('click', closeDrawersAndModals);
  }

  // --- Initializer ---
  function init() {
    initPopularPills();
    initComparisonModal();
    bindEventListeners();

    // Set initial unit styles
    if (state.unit === 'imperial') {
      dom.btnUnitF.classList.add('active');
      dom.btnUnitC.classList.remove('active');
    } else {
      dom.btnUnitC.classList.add('active');
      dom.btnUnitF.classList.remove('active');
    }

    updateFavoriteButtonState();

    // Fetch default city weather
    fetchWeatherData(state.lat, state.lon, state.city, state.country);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
