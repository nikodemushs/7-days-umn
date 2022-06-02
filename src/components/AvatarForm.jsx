import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import "swiper/css";
const AvatarFilename = [
  "avatar1.png",
  "avatar2.png",
  "avatar3.png",
  "avatar4.png",
  "avatar5.png",
];
const majors = [
  "Teknik Informatika",
  "Sistem Informasi",
  "Manajemen",
  "Akuntansi",
  "Ilmu Komunikasi",
  "Sistem Komputer",
  "Desain Komunikasi Visual",
];
const AvatarForm = () => {
  const router = useRouter("/play");

  const [name, setName] = useState("");
  const [major, setMajor] = useState(majors[0]);
  const [currentAvatar, setCurrentAvatar] = useState(0);

  const handleLeftClick = () => {
    if (currentAvatar === 0) return setCurrentAvatar(AvatarFilename.length - 1);
    setCurrentAvatar(currentAvatar - 1);
  };
  const handleRightClick = () => {
    if (currentAvatar === AvatarFilename.length - 1) return setCurrentAvatar(0);
    setCurrentAvatar(currentAvatar + 1);
  };
  const namechange = (e) => {
    setName(e.target.value);
  };
  const majorchange = (e) => {
    setMajor(e.target.value);
  };
  const onsubmit = () => {
    if (name === "") return toast.warn("Name must be filled");
    if (major === "") return toast.warn("Major must be filled");
    toast.success("Successfully registered");
    localStorage.setItem(
      "profileData",
      JSON.stringify({
        name,
        major,
        avatar: AvatarFilename[currentAvatar],
      })
    );
    router.push("/play");
  };
  return (
    <>
      <Box maxW="50vw">
        <Flex
          my="12"
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <IconButton onClick={handleLeftClick} icon={<LeftOutlined />} />
          <Box px="12">
            <Image
              style={{ borderRadius: "10%" }}
              width="300"
              height="300"
              alt="Avatar"
              src={`/assets/avatar/${AvatarFilename[currentAvatar]}`}
            />
          </Box>
          <IconButton onClick={handleRightClick} icon={<RightOutlined />} />
        </Flex>
      </Box>
      <Stack direction="column" spacing="5">
        <Input
          variant="filled"
          placeholder="Enter your name here...."
          value={name}
          onChange={namechange}
        />
        <Select variant="filled" value={major} onChange={majorchange}>
          {majors.map((major, index) => {
            return (
              <option value={major} key={index}>
                {major}
              </option>
            );
          })}
        </Select>
        <Button colorScheme="orange" size="md" onClick={onsubmit}>
          Start
        </Button>
      </Stack>
    </>
  );
};

export default AvatarForm;
