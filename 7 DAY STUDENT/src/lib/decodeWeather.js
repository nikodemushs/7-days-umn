/**
 * It takes a weather code as an argument and returns a string that describes the weather
 * @param code - The weather code from the API
 * @returns A string that describes the weather.
 */
export default function decodeWeather(code) {
  if (String(code).startsWith("2")) return "Thunderstorm";
  if (String(code).startsWith("3")) return "Drizzle";
  if (String(code).startsWith("5")) return "Rain";
  if (String(code).startsWith("7")) return "Atmosphere";
  if (String(code) == "800") return "Clear";
  if (String(code).startsWith("80") && String(code) !== "800") return "Clouds";
}
