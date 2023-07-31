import { Button } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";

const GoUp = () => {
  return (
    <Button
      position="fixed"
      bottom="5%"
      right="5%"
      colorScheme="blackAlpha"
      size="lg"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <AiOutlineArrowUp />
    </Button>
  );
};

export default GoUp;
