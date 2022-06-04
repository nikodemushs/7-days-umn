import { useEffect } from "react";
export default function useStats(
  hunger,
  sleep,
  knowledge,
  amusement,
  setHunger,
  setSleep,
  setKnowledge,
  setAmusement,
  weatherCondition,
  timekeeper
) {
  useEffect(() => {
    const decreaseInterval = 2;
    if (hunger > decreaseInterval) setHunger(hunger - 1);
    if (sleep > decreaseInterval) {
      if (weatherCondition == "Clear" || weatherCondition == "Rain") {
        setSleep(sleep - 3);
      } else {
        setSleep(sleep - 1);
      }
    }
    if (knowledge > decreaseInterval) setKnowledge(knowledge - 0.5);
    if (amusement > decreaseInterval) {
      if (weatherCondition == "Clear" || weatherCondition == "Rain") {
        setAmusement(amusement - 3);
      } else {
        setAmusement(amusement - 1);
      }
    }
    //eslint-disable-next-line
  }, [timekeeper]);
  return null;
}
