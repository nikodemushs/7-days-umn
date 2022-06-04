import { Box, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import ActivityButtons from "../components/ActivityButtons";
import ToggleActivityButtons from "../components/ActivityButtonToggle";
import Countdown from "../components/Countdown";
import Phone from "../components/Phone";
import TogglePhoneButton from "../components/PhoneButton";
import RoomButtons from "../components/RoomButton";
import ToggleRoomButtons from "../components/RoomButtonToggle";
import Stats from "../components/Stats";
import Topbar from "../components/TopbarButton";
import ToggleTopBar from "../components/TopbarButtonToggle";
import useProfile from "../hooks/useProfile";
import useSaves from "../hooks/useSaves";
import setStates from "../hooks/useStates";
import useStats from "../hooks/useStats";
import useTime from "../hooks/useTime";
import useWeather from "../hooks/useWeather";
import useTemperature from "../lib/convertkelvin";
import decodeWeather from "../lib/decodeWeather";

const dayArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const convertAlpha = (time) => {
  const a = Math.pow(0.05 * time - 0.6, 2) * -1;
  return a + 0.8;
};

const greetingArray = ["Good Morning", "Good Afternoon", "Good Evening"];

export default function PlayComponent() {
  const { data, error, isLoading } = useWeather();
  //Convert fahrenheit to kelvin
  const { r, g, b } = useTemperature(data?.main?.temp + 2000 || 5000);

  const [
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
  ] = setStates();
  const counters = {
    cafe,
    supermarket,
    school,
    home,
    eat: eatCounter,
    sleep: sleepCounter,
    play: playCounter,
    study: studyCounter,
  };
  const counterSetters = {
    cafe: setCafeCounter,
    supermarket: setSupermarketCounter,
    school: setSchoolCounter,
    home: setHomeCounter,
    eat: setEatCounter,
    sleep: setSleepCounter,
    play: setPlayCounter,
    study: setStudyCounter,
  };
  useSaves(counters);
  const [phoneVisible, togglePhoneVisible] = useState(false);
  const [roomButtonVisible, toggleRoomButtonVisible] = useState(false);
  const [activityButtonVisible, toggleActivityButtonVisible] = useState(false);
  const [topbarVisible, toggleTopbarVisible] = useState(false);
  const resetVisibility = () => {
    togglePhoneVisible(false);
    toggleRoomButtonVisible(false);
    toggleActivityButtonVisible(false);
  };
  const userData = useRef({
    name: "No Name",
    major: "No Major",
    avatar: "avatar1.png",
  });
  // The hook below handles the time keeper. It is called every 15 second.
  useStats(
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
  );
  useTime(
    setMinuteKeeper,
    setTimekeeper,
    setDaykeeper,
    minutekeeper,
    timekeeper,
    daykeeper
  );
  useProfile(userData);

  // The hook below handles the weather listener
  useEffect(() => {
    if (!isLoading && !error) {
      setWeatherCondition(decodeWeather(data.weather[0].id));
    }
    //eslint-disable-next-line
  }, [isLoading, error, data]);
  const alpha = convertAlpha(timekeeper);
  return (
    <>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        backgroundImage={`url(/assets/background/${room}.jpg)`}
        backgroundPosition="center"
        backgroundSize="cover"
        height="100vh"
        width="100vw"
        overflow="hidden"
      >
        {topbarVisible && <Topbar />}
        <Box
          w={"100%"}
          h={"100%"}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          // Handle background color hue here
          backgroundColor={"rgba(" + r + "," + g + "," + b + ", " + alpha + ")"}
        >
          <Flex
            direction={"column"}
            position={"absolute"}
            left={0}
            bottom={0}
            margin={5}
            gridGap={5}
          >
            <ToggleTopBar
              toggleVisible={toggleTopbarVisible}
              isVisible={topbarVisible}
              reset={resetVisibility}
            />
            <TogglePhoneButton
              toggleVisible={togglePhoneVisible}
              isVisible={phoneVisible}
              reset={resetVisibility}
            />
            <ToggleRoomButtons
              toggleVisible={toggleRoomButtonVisible}
              isVisible={roomButtonVisible}
              reset={resetVisibility}
            />
            <ToggleActivityButtons
              toggleVisible={toggleActivityButtonVisible}
              isVisible={activityButtonVisible}
              reset={resetVisibility}
            />
          </Flex>

          {roomButtonVisible && (
            <RoomButtons
              setroomcondition={setRoom}
              roomcondition={room}
              reset={resetVisibility}
              counters={counterSetters}
            />
          )}
          {activityButtonVisible && (
            <ActivityButtons
              daykeeper={daykeeper}
              timekeeper={timekeeper}
              setDaykeeper={setDaykeeper}
              setTimekeeper={setTimekeeper}
              sleep={sleep}
              hunger={hunger}
              knowledge={knowledge}
              amusement={amusement}
              setHunger={setHunger}
              setKnowledge={setKnowledge}
              setAmusement={setAmusement}
              setSleep={setSleep}
              room={room}
              counters={counterSetters}
              reset={resetVisibility}
            />
          )}
          <Heading fontFamily="mono">
            {dayArray[daykeeper - 1]}, {("0" + timekeeper).slice(-2)}:
            {("0" + minutekeeper).slice(-2)}
          </Heading>
          <Heading fontFamily={"mono"} size={"md"} mb={10}>
            {timekeeper < 13
              ? greetingArray[0]
              : timekeeper < 16
              ? greetingArray[1]
              : timekeeper < 24
              ? greetingArray[2]
              : "Undefined"}
            , {userData.current.name}
          </Heading>
          <Box px={12}>
            <Image
              style={{ borderRadius: "10%" }}
              width={250}
              height={250}
              alt="Avatar"
              src={`/assets/avatar/${userData.current.avatar}`}
            />
          </Box>
          <Stats
            Hunger={hunger}
            Sleep={sleep}
            Knowledge={knowledge}
            Amusement={amusement}
            x={0}
            y={0}
          />
          {phoneVisible && <Phone reset={resetVisibility} />}
        </Box>
        {daykeeper == dayArray.length ? <Countdown /> : null}
      </Box>
    </>
  );
}
