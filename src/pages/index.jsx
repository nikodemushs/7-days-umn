import { Stack } from "@chakra-ui/react";
import "@fontsource/inter";

import AvatarForm from "../components/AvatarForm";
import Main from "../components/layout/Main";
import TopBar from "../components/TopbarButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Main>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <AvatarForm />
        </Stack>
      </Main>
    </>
  );
}
