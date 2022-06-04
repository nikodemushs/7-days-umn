import { useRouter } from "next/router";
import { useEffect } from "react";
export default function useTime(
  setMinuteKeeper,
  setTimekeeper,
  setDaykeeper,
  minutekeeper,
  timekeeper,
  daykeeper
) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (daykeeper == 7) {
        router.push("/gameover");
      }
      setMinuteKeeper(minutekeeper + 1);
      if (minutekeeper === 59) {
        setMinuteKeeper(1);
        setTimekeeper(timekeeper + 1);
      }
      if (timekeeper === 23) {
        setTimekeeper(1);
        setDaykeeper(daykeeper + 1);
      }
    }, 1000);
  });
  return null;
}
