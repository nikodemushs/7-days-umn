import { WEATHER_API_URL } from "../../lib//constant";

export default async function handler(req, res) {
  try {
    const data = await fetch(
      WEATHER_API_URL("-6.257444", "106.618751", process.env.WEATHER_API_KEY)
    );

    return res.status(data.status).json(await data.json());
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Failed fetching weather API",
      error: "ERR_FAILED_FETCHING_WEATHER_API",
    });
  }
}
