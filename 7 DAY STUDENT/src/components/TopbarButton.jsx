import { Box, Button } from "@chakra-ui/react";
import router from "next/router";

import style from "../styles/topbar.module.css";
export default function TopbarComponent() {
  const routeHome = () => {
    router.push("/");
  };
  const play = () => {
    router.push("/play");
  };
  const aboutus = () => {
    router.push("/aboutus");
  };
  return (
    <Box className={style.topbar} position="absolute" top={0}>
      <Button
        fontFamily={"mono"}
        className={style.button}
        onClick={() => {
          routeHome();
        }}
      >
        Home
      </Button>
      <Button
        fontFamily={"mono"}
        className={style.button}
        onClick={() => {
          play();
        }}
      >
        Play
      </Button>
      <Button
        fontFamily={"mono"}
        className={style.button}
        onClick={() => {
          aboutus();
        }}
      >
        About Us
      </Button>
    </Box>
  );
}
