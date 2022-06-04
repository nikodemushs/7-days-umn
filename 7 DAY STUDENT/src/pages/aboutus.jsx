import { Box, Heading, Text } from "@chakra-ui/react";

import style from "../styles/aboutus.module.css";

import TopBar from "../components/TopbarButton";

export default function Aboutus() {
  const memberList = [
    {
      imageName: "NICO.jpeg",
      name: "Nikodemus HS",
      email: "nikodemushs@gmail.com",
      NIM: "00000060266",
    },
    {
      imageName: "RAFII.jpeg",
      name: "Rafi Husein Bagaskara",
      email: "aerodactylth@gmail.com",
      NIM: "00000062011",
    },
    {
      imageName: "YOHAN.jpeg",
      name: "Yohanes Andre Yanto",
      email: "yohanesandrey14@gmail.com",
      NIM: "00000061457",
    },
    {
      imageName: "FAIDI.jpeg",
      name: "Muhammad Faidi Rohman",
      email: "mfaidirohman@gmail.com",
      NIM: "00000061882",
    },
  ];
  return (
    <>
      <TopBar />
      <Box className={style.maindiv}>
        <Heading fontFamily={"mono"} size="xl">
          About Us
        </Heading>
        <Text fontFamily={"mono"}>
          Let's meet the team that developed this game!
        </Text>
        <Box className={style.memberList}>
          {memberList.map((member, index) => {
            return (
              <Box className={style.member} key={index}>
                <Box
                  backgroundImage={`url(/assets/members/${member.imageName})`}
                  width={250}
                  height={250}
                  alt={"About Us Image"}
                  className={style.image}
                ></Box>
                <Heading size={"sm"} m={5} fontFamily="mono" color="white">
                  {member.name}
                </Heading>
                <Heading size={"xs"} fontFamily="mono" color="white">
                  {member.email}
                </Heading>
                <Heading size={"xs"} fontFamily="mono" color="white">
                  NIM: {member.NIM}
                </Heading>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
