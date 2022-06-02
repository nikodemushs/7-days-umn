import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  intialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
});

export default theme;
