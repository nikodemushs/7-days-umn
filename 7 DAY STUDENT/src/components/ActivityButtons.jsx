import { Box, Button, Heading } from "@chakra-ui/react";

import style from "../styles/roombutton.module.css";
export default function HomeButtons({
  daykeeper,
  timekeeper,
  setDaykeeper,
  setTimekeeper,
  sleep,
  hunger,
  knowledge,
  amusement,
  setHunger,
  setKnowledge,
  setAmusement,
  setSleep,
  room,
  reset,
  counters,
}) {
  const sleepFunction = (e) => {
    setSleep(24);
    counters.sleep((num) => num + 1);
    if (timekeeper + 8 > 23) {
      setTimekeeper(0);
      setDaykeeper(daykeeper + 1);
    } else {
      setTimekeeper(timekeeper + 8);
    }
  };
  const eatFunction = (e) => {
    setHunger(24);
    counters.eat((num) => num + 1);
    if (timekeeper + 1 > 23) {
      setTimekeeper(0);
      setDaykeeper(daykeeper + 1);
    } else {
      setTimekeeper(timekeeper + 1);
    }
  };
  const studyFunction = (e) => {
    counters.study((num) => num + 1);
    if (knowledge + 3 > 24) {
      setKnowledge(24);
    } else {
      setKnowledge(knowledge + 3);
    }
    if (sleep - 2 <= 0) {
      setSleep(0);
    } else {
      setSleep(sleep - 2);
    }
    if (timekeeper + 4 > 23) {
      setTimekeeper(0);
      setDaykeeper(daykeeper + 1);
    } else {
      setTimekeeper(timekeeper + 4);
    }
  };
  const amusementFunction = (e) => {
    counters.play((num) => num + 1);
    setAmusement(24);
    if (timekeeper + 3 > 23) {
      setTimekeeper(0);
      setDaykeeper(daykeeper + 1);
    } else {
      setTimekeeper(timekeeper + 3);
    }
  };

  return (
    <>
      {room === "HOME" && (
        <Box className={style.buttonsdiv}>
          <Heading size={"md"} fontFamily={"mono"} color="white">
            Home
          </Heading>
          <Button fontFamily={"mono"} onClick={sleepFunction}>
            Sleep
          </Button>
          <Button fontFamily={"mono"} onClick={eatFunction}>
            Eat
          </Button>
          <Button fontFamily={"mono"} onClick={studyFunction}>
            Study
          </Button>
        </Box>
      )}
      {room === "CAFE" && (
        <Box className={style.buttonsdiv}>
          <Heading size={"md"} fontFamily={"mono"} color="white">
            Cafe
          </Heading>
          <Button fontFamily={"mono"} onClick={amusementFunction}>
            Hangout
          </Button>
          <Button fontFamily={"mono"} onClick={eatFunction}>
            Eat
          </Button>
        </Box>
      )}
      {room === "CAMPUS" && (
        <Box className={style.buttonsdiv}>
          <Heading size={"md"} fontFamily={"mono"} color="white">
            Campus
          </Heading>
          <Button fontFamily={"mono"} onClick={studyFunction}>
            Study
          </Button>
        </Box>
      )}
      {room === "SUPERMARKET" && (
        <Box className={style.buttonsdiv}>
          <Heading size={"md"} fontFamily={"mono"} color="white">
            Supermarket
          </Heading>
          <Button fontFamily={"mono"} onClick={amusementFunction}>
            Shop
          </Button>
          <Button fontFamily={"mono"} onClick={eatFunction}>
            Eat
          </Button>
        </Box>
      )}
    </>
  );
}
