/**
 * SpireX Task 11 - Predefined Popular Cities & Offline Mock Data
 * Provides fast-load presets, coordinates, and resilient offline fallback data.
 */

const POPULAR_CITIES = [
  { name: "Islamabad", country: "Pakistan", code: "PK", lat: 33.6844, lon: 73.0479, timezone: "Asia/Karachi" },
  { name: "Karachi", country: "Pakistan", code: "PK", lat: 24.8607, lon: 67.0011, timezone: "Asia/Karachi" },
  { name: "Lahore", country: "Pakistan", code: "PK", lat: 31.5204, lon: 74.3587, timezone: "Asia/Karachi" },
  { name: "London", country: "United Kingdom", code: "GB", lat: 51.5074, lon: -0.1278, timezone: "Europe/London" },
  { name: "New York", country: "United States", code: "US", lat: 40.7128, lon: -74.0060, timezone: "America/New_York" },
  { name: "Tokyo", country: "Japan", code: "JP", lat: 35.6762, lon: 139.6503, timezone: "Asia/Tokyo" },
  { name: "Dubai", country: "United Arab Emirates", code: "AE", lat: 25.2048, lon: 55.2708, timezone: "Asia/Dubai" },
  { name: "Paris", country: "France", code: "FR", lat: 48.8566, lon: 2.3522, timezone: "Europe/Paris" },
  { name: "Sydney", country: "Australia", code: "AU", lat: -33.8688, lon: 151.2093, timezone: "Australia/Sydney" },
  { name: "Toronto", country: "Canada", code: "CA", lat: 43.6532, lon: -79.3832, timezone: "America/Toronto" },
  { name: "Singapore", country: "Singapore", code: "SG", lat: 1.3521, lon: 103.8198, timezone: "Asia/Singapore" },
  { name: "Istanbul", country: "Turkey", code: "TR", lat: 41.0082, lon: 28.9784, timezone: "Europe/Istanbul" }
];

// WMO Weather Code Interpreter mappings
const WMO_CODES = {
  0: { description: "Clear sky", icon: "sun", group: "clear" },
  1: { description: "Mainly clear", icon: "sun", group: "clear" },
  2: { description: "Partly cloudy", icon: "cloud-sun", group: "clouds" },
  3: { description: "Overcast", icon: "cloud", group: "clouds" },
  45: { description: "Foggy", icon: "smog", group: "fog" },
  48: { description: "Depositing rime fog", icon: "smog", group: "fog" },
  51: { description: "Light drizzle", icon: "cloud-rain", group: "drizzle" },
  53: { description: "Moderate drizzle", icon: "cloud-rain", group: "drizzle" },
  55: { description: "Dense drizzle", icon: "cloud-showers-heavy", group: "drizzle" },
  56: { description: "Light freezing drizzle", icon: "snowflake", group: "snow" },
  57: { description: "Dense freezing drizzle", icon: "snowflake", group: "snow" },
  61: { description: "Slight rain", icon: "cloud-sun-rain", group: "rain" },
  63: { description: "Moderate rain", icon: "cloud-rain", group: "rain" },
  65: { description: "Heavy rain", icon: "cloud-showers-heavy", group: "rain" },
  66: { description: "Light freezing rain", icon: "snowflake", group: "snow" },
  67: { description: "Heavy freezing rain", icon: "snowflake", group: "snow" },
  71: { description: "Slight snow fall", icon: "snowflake", group: "snow" },
  73: { description: "Moderate snow fall", icon: "snowflake", group: "snow" },
  75: { description: "Heavy snow fall", icon: "snowflake", group: "snow" },
  77: { description: "Snow grains", icon: "snowflake", group: "snow" },
  80: { description: "Slight rain showers", icon: "cloud-rain", group: "rain" },
  81: { description: "Moderate rain showers", icon: "cloud-showers-heavy", group: "rain" },
  82: { description: "Violent rain showers", icon: "cloud-showers-water", group: "rain" },
  85: { description: "Slight snow showers", icon: "snowflake", group: "snow" },
  86: { description: "Heavy snow showers", icon: "snowflake", group: "snow" },
  95: { description: "Thunderstorm", icon: "bolt", group: "thunderstorm" },
  96: { description: "Thunderstorm with slight hail", icon: "cloud-bolt", group: "thunderstorm" },
  99: { description: "Thunderstorm with heavy hail", icon: "cloud-bolt", group: "thunderstorm" }
};

// Resilient fallback offline weather data generator
function getMockWeatherData(cityName, countryName = "Global", lat = 33.6844, lon = 73.0479) {
  const currentHour = new Date().getHours();
  const baseTemp = 24;
  
  const hourlyTimes = [];
  const hourlyTemps = [];
  const hourlyCodes = [];
  const hourlyPrecip = [];
  
  for (let i = 0; i < 24; i++) {
    const d = new Date();
    d.setHours(i, 0, 0, 0);
    hourlyTimes.push(d.toISOString());
    const offset = Math.sin((i - 6) / 24 * Math.PI * 2) * 6;
    hourlyTemps.push(Math.round((baseTemp + offset) * 10) / 10);
    hourlyCodes.push(i >= 12 && i <= 16 ? 2 : (i >= 20 || i <= 5 ? 1 : 0));
    hourlyPrecip.push(i >= 14 && i <= 18 ? 20 : 5);
  }
  
  const dailyDates = [];
  const dailyMax = [];
  const dailyMin = [];
  const dailyCodes = [0, 1, 2, 61, 2, 1, 0];
  const dailyPrecip = [0, 5, 15, 60, 20, 10, 0];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  for (let d = 0; d < 7; d++) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + d);
    dailyDates.push(targetDate.toISOString().split("T")[0]);
    dailyMax.push(baseTemp + 4 + Math.round(Math.sin(d) * 3));
    dailyMin.push(baseTemp - 5 + Math.round(Math.cos(d) * 2));
  }

  return {
    city: cityName,
    country: countryName,
    latitude: lat,
    longitude: lon,
    timezone: "UTC",
    isOffline: true,
    current: {
      temperature_2m: baseTemp,
      relative_humidity_2m: 54,
      apparent_temperature: baseTemp + 1.5,
      is_day: currentHour >= 6 && currentHour <= 19 ? 1 : 0,
      precipitation: 0.0,
      weather_code: 1,
      cloud_cover: 25,
      pressure_msl: 1014.2,
      surface_pressure: 960.0,
      wind_speed_10m: 11.5,
      wind_direction_10m: 140,
      wind_gusts_10m: 18.2,
      uv_index: 5.8
    },
    air_quality: {
      us_aqi: 48,
      pm2_5: 12.4,
      pm10: 24.8,
      european_aqi: 28,
      carbon_monoxide: 220,
      nitrogen_dioxide: 18.5,
      ozone: 45.2
    },
    hourly: {
      time: hourlyTimes,
      temperature_2m: hourlyTemps,
      weather_code: hourlyCodes,
      precipitation_probability: hourlyPrecip,
      relative_humidity_2m: hourlyTemps.map(t => Math.min(95, Math.max(30, Math.round(80 - t * 1.5)))),
      wind_speed_10m: hourlyTemps.map(t => Math.round(8 + (t % 5) * 2))
    },
    daily: {
      time: dailyDates,
      weather_code: dailyCodes,
      temperature_2m_max: dailyMax,
      temperature_2m_min: dailyMin,
      sunrise: dailyDates.map(date => `${date}T05:58:00`),
      sunset: dailyDates.map(date => `${date}T18:22:00`),
      uv_index_max: [6.2, 5.8, 6.0, 3.4, 5.2, 6.5, 6.8],
      precipitation_sum: [0, 0.2, 1.4, 8.5, 2.1, 0, 0],
      precipitation_probability_max: dailyPrecip,
      wind_speed_10m_max: [14.2, 16.5, 12.0, 22.4, 18.1, 13.5, 11.2]
    }
  };
}
