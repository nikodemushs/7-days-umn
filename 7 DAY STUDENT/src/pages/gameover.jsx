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
    setStatList(counters);
    //Find which is the highest number
    if (
      counters.home >= counters.cafe &&
      counters.home >= counters.school &&
      counters.home >= counters.supermarket
    ) {
      setFinalText(
        "Betah banget di rumah, ga bosen apa? sering sering mampir ke kampus tercinta dong"
      );
    } else if (
      counters.cafe >= counters.home &&
      counters.cafe >= counters.school &&
      counters.cafe >= counters.supermarket
    ) {
      setFinalText(
        "Sering banget ke cafe, sampe tega ninggalin tugasmu sebagai mahasiswa"
      );
    } else if (
      counters.school >= counters.home &&
      counters.school >= counters.cafe &&
      counters.school >= counters.supermarket
    ) {
      setFinalText(
        "Widih kamu rajin banget ke kampus, cocok jadi mahasiswa teladan!"
      );
    } else if (
      counters.supermarket >= counters.home &&
      counters.supermarket >= counters.cafe &&
      counters.supermarket >= counters.school
    ) {
      setFinalText("Sering banget ke supermarket, mending nyetok aja");
    } else {
      setFinalText("You are a weirdo");
    }

    //eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <Topbar /> */}
      <Main>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          h="70vh"
          spacing="4"
        >
          <Heading
            as="h1"
            sx={{ fontWeight: "1000" }}
            fontSize="4xl"
            fontFamily={"mono"}
          >
            Game Over
          </Heading>
          <Heading
            as="h3"
            fontSize={"xl"}
            textAlign="center"
            fontFamily={"mono"}
          >
            {finalText}
          </Heading>
          <Box className={style.statDiv}>
            <Heading size={"sm"} color="white" fontFamily={"mono"}>
              Statistics
            </Heading>
            <Box className={style.outerbox}>
              <Box
                className={style.innerbox}
                width={(statList.home / 50) * 100 + "%"}
              ></Box>
              <Heading size={"auto"} ml={10} fontFamily={"mono"}>
                Home
              </Heading>
            </Box>
            <Box className={style.outerbox}>
              <Box
                className={style.innerbox}
                width={(statList.cafe / 50) * 100 + "%"}
              ></Box>
              <Heading size={"auto"} ml={10} fontFamily={"mono"}>
                Cafe
              </Heading>
            </Box>
            <Box className={style.outerbox}>
              <Box
                className={style.innerbox}
                width={(statList.school / 50) * 100 + "%"}
              ></Box>
              <Heading size={"auto"} ml={10} fontFamily={"mono"}>
                School
              </Heading>
            </Box>
            <Box className={style.outerbox}>
              <Box
                className={style.innerbox}
                width={(statList.supermarket / 50) * 100 + "%"}
              ></Box>
              <Heading size={"auto"} ml={10} fontFamily={"mono"}>
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
