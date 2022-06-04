import { NEWS_API_URL } from "../../lib/constant";

export default async function handler(req, res) {
  try {
    const data = await fetch(NEWS_API_URL(process.env.NEWS_API_KEY));

    return res.status(data.status).json(await data.json());
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Failed fetching news API",
      error: "ERR_FAILED_FETCHING_NEWS_API",
    });
  }
}
