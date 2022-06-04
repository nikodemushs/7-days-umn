import { Box, Heading } from "@chakra-ui/react";
import "@fontsource/inter";

export default function Countdown({ time }) {
  return (
    <>
      <Box
        display="flex"
        bgColor="blackAlpha.900"
        position="absolute"
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="white" fontSize="6xl">
          {time}
        </Heading>
      </Box>
    </>
  );
}
