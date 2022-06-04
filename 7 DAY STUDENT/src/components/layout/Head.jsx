import { TrophyFilled } from "@ant-design/icons";
import { Stack, Text } from "@chakra-ui/react";

const Head = () => {
  return (
    <>
      <Stack spacing="4" align="center" direction="column">
        <TrophyFilled style={{ fontSize: "32pt" }} />
        <Text fontSize="2xl" fontWeight="black" fontFamily={"mono"}>
          7 Days Student
        </Text>
      </Stack>
    </>
  );
};

export default Head;
