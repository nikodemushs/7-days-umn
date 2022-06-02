import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosCafe, IoMdHome } from "react-icons/io";
import "@fontsource/inter";

import style from "../styles/gameover.module.css";

import Main from "../components/layout/Main";
import Topbar from "../components/TopbarButton";

export default function Gameover() {
  const [statList, setStatList] = useState({
    home: 0,
    cafe: 0,
    school: 0,
    supermarket: 0,
  });
  const [finalText, setFinalText] = useState("aa");
  useEffect(() => {
    if (!localStorage.getItem("counters")) {
      return window.location.replace("/");
    }
    const counters = JSON.parse(localStorage.getItem("counters"));
    setStatList({
      home: counters.home,
      cafe: counters.cafe,
      school: counters.school,
      supermarket: counters.supermarket,
    });
    //Find which is the highest number
    let highest = 0;
    let keyHighest = "";
    for (let key in statList) {
      if (statList[key] > highest) {
        highest = statList[key];
        keyHighest = key;
      }
    }
    //Set the final text
    switch (keyHighest) {
      case "home":
        setFinalText(
          "Betah banget di rumah, ga bosen apa? sering sering mampir ke kampus tercinta dong"
        );
        break;
      case "cafe":
        setFinalText(
          "Sering banget ke cafe, sampe tega ninggalin tugasmu sebagai mahasiswa"
        );
        break;
      case "school":
        setFinalText(
          "widih kamu rajing banget ke kampus, cocok jadi mahasiswa teladan!"
        );
        break;
      case "supermarket":
        setFinalText("Sering banget ke supermarket, mending nyetok aja");
        break;
      default:
        setFinalText(
          "Betah banget di rumah, ga bosen apa? sering sering mampir ke kampus tercinta dong"
        );
        break;
    }

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Topbar />
      <Main>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          h="70vh"
          spacing="4"
        >
          <Heading as="h1" sx={{ fontWeight: "1000" }} fontSize="5xl">
            Game Over
          </Heading>
          <Heading as="h3" fontSize={"xl"} textAlign="center">
            {finalText}
          </Heading>
          <Box className={style.statDiv}>
            <Heading size={"sm"} color="white">
              Statistics
            </Heading>
            <Box className={style.outerbox}>
              <Box
                className={style.innerbox}
                width={(statList.home / 80) * 100 + "%"}
              ></Box>
              <Heading size={"auto"} ml={10}>
                Home
              </Heading>
            </Box>
            <Box className={style.outerbox}>
              <Box
                className={style.innerbox}
                width={(statList.cafe / 80) * 100 + "%"}
              ></Box>
              <Heading size={"auto"} ml={10}>
                Cafe
              </Heading>
            </Box>
            <Box className={style.outerbox}>
              <Box
                className={style.innerbox}
                width={(statList.school / 80) * 100 + "%"}
              ></Box>
              <Heading size={"auto"} ml={10}>
                School
              </Heading>
            </Box>
            <Box className={style.outerbox}>
              <Box
                className={style.innerbox}
                width={(statList.supermarket / 80) * 100 + "%"}
              ></Box>
              <Heading size={"auto"} ml={10}>
                Supermarket
              </Heading>
            </Box>
          </Box>

          <Button as="a" href="/" colorScheme="orange">
            Try Again
          </Button>
        </Stack>
      </Main>
    </>
  );
}
