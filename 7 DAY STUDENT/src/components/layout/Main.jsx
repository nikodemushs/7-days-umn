import { Container, Stack } from "@chakra-ui/react";

import Head from "./Head";

const Main = ({ children }) => {
  return (
    <>
      <Container my="12" minW="80vw">
        <Stack>
          <Head />
          {children}
        </Stack>
      </Container>
    </>
  );
};

export default Main;
