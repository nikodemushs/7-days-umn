import { Box, Button, Heading } from "@chakra-ui/react";

import style from "../styles/roombutton.module.css";
export default function Buttons({
  setroomcondition,
  roomcondition,
  reset,
  counters,
}) {
  const changeRoomCondition = (condition) => {
    setroomcondition(condition);
    reset();
    return;
  };
  return (
    <Box className={style.buttonsdiv}>
      <Heading size={"md"} fontFamily={"mono"} color="white">
        Rooms
      </Heading>
      <Button
        backgroundColor={roomcondition === "HOME" ? "purple.300" : "white"}
        fontFamily={"mono"}
        onClick={() => {
          if (roomcondition !== "HOME") {
            changeRoomCondition("HOME");
            counters.home((num) => num + 1);
          }
          return;
        }}
      >
        Home
      </Button>
      <Button
        backgroundColor={roomcondition === "CAFE" ? "purple.300" : "white"}
        fontFamily={"mono"}
        onClick={() => {
          if (roomcondition !== "CAFE") {
            changeRoomCondition("CAFE");
            counters.cafe((num) => num + 1);
          }
          return;
        }}
      >
        Cafe
      </Button>
      <Button
        backgroundColor={roomcondition === "CAMPUS" ? "purple.300" : "white"}
        fontFamily={"mono"}
        onClick={() => {
          if (roomcondition !== "CAMPUS") {
            changeRoomCondition("CAMPUS");
            counters.school((num) => num + 1);
          }
          return;
        }}
      >
        Campus
      </Button>
      <Button
        backgroundColor={
          roomcondition === "SUPERMARKET" ? "purple.300" : "white"
        }
        fontFamily={"mono"}
        onClick={() => {
          if (roomcondition !== "SUPERMARKET") {
            changeRoomCondition("SUPERMARKET");
            counters.supermarket((num) => num + 1);
          }
          return;
        }}
      >
        Supermarket
      </Button>
    </Box>
  );
}
