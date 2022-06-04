import { useEffect } from "react";
export default function SafeFunction(counters) {
  const eatTotal = counters.eat;
  const sleepTotal = counters.sleep;
  const playTotal = counters.play;
  const studyTotal = counters.study;

  const cafeTotal = counters.cafe;
  const supermarketTotal = counters.supermarket;
  const schoolTotal = counters.school;
  const homeTotal = counters.home;
  useEffect(() => {
    const savedObject = {
      eat: eatTotal,
      sleep: sleepTotal,
      play: playTotal,
      study: studyTotal,
      cafe: cafeTotal,
      supermarket: supermarketTotal,
      school: schoolTotal,
      home: homeTotal,
    };
    const jsonString = JSON.stringify(savedObject);
    localStorage.setItem("counters", jsonString);
    //eslint-disable-next-line
  }, [
    eatTotal,
    sleepTotal,
    playTotal,
    studyTotal,
    cafeTotal,
    supermarketTotal,
    schoolTotal,
    homeTotal,
  ]);
  return null;
}
