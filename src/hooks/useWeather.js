import useSWR from "swr";

import { fetcher } from "../lib/fetcher";

export default function useWeather() {
  const { data, error } = useSWR("/api/weather", fetcher, {
    refreshInterval: 30000,
  });

  return {
    data: data || null,
    error: error || null,
    isLoading: !error && !data,
  };
}
