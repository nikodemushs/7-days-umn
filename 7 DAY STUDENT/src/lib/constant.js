/**
 * It returns a string that is the URL of the News API endpoint
 * @param apikey - Your API key.
 */
const NEWS_API_URL = (apikey) =>
  `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apikey}`;

/**
 * It takes a latitude, longitude, and API key, and returns a URL that can be used to fetch weather
 * data from the OpenWeatherMap API
 * @param lat - latitude
 * @param lon - longitude
 * @param apikey - Your API key
 */
const WEATHER_API_URL = (lat, lon, apikey) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;

export { NEWS_API_URL, WEATHER_API_URL };
