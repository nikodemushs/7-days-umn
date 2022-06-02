import { IconButton } from "@chakra-ui/react";
import { IoAccessibilityOutline } from "react-icons/io5";
export default function PhoneButton({ toggleVisible, isVisible, reset }) {
  const toggle = (e) => {
    if (isVisible) return toggleVisible(false);
    toggleVisible(true);
  };
  return (
    <IconButton
      aria-label="phone"
      icon={<IoAccessibilityOutline />}
      backgroundColor="twitter.300"
      borderRadius={"100%"}
      size="lg"
      alignSelf={"flex-start"}
      className="phone-button"
      onClick={toggle}
    />
  );
}
