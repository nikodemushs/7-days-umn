import { useState } from "react";
export default function Setstates() {
  const [weatherCondition, setWeatherCondition] = useState("Clear");
  const [minutekeeper, setMinuteKeeper] = useState(0);
  const [timekeeper, setTimekeeper] = useState(0);
  const [daykeeper, setDaykeeper] = useState(1);
  const [room, setRoom] = useState("HOME");

  const [hunger, setHunger] = useState(12);
  const [sleep, setSleep] = useState(12);
  const [knowledge, setKnowledge] = useState(0);
  const [amusement, setAmusement] = useState(12);

  const [cafe, setCafeCounter] = useState(0);
  const [supermarket, setSupermarketCounter] = useState(0);
  const [school, setSchoolCounter] = useState(0);
  const [home, setHomeCounter] = useState(0);

  const [eatCounter, setEatCounter] = useState(0);
  const [sleepCounter, setSleepCounter] = useState(0);
  const [playCounter, setPlayCounter] = useState(0);
  const [studyCounter, setStudyCounter] = useState(0);

  return [
    [weatherCondition, setWeatherCondition],
    [minutekeeper, setMinuteKeeper],
    [timekeeper, setTimekeeper],
    [daykeeper, setDaykeeper],
    [room, setRoom],
    [hunger, setHunger],
    [sleep, setSleep],
    [knowledge, setKnowledge],
    [amusement, setAmusement],
    [cafe, setCafeCounter],
    [supermarket, setSupermarketCounter],
    [school, setSchoolCounter],
    [home, setHomeCounter],
    [eatCounter, setEatCounter],
    [sleepCounter, setSleepCounter],
    [playCounter, setPlayCounter],
    [studyCounter, setStudyCounter],
  ];
}
