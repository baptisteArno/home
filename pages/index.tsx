import { Button, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const handleFirstButtonClick = async () => {
    try {
      await fetch("http://192.168.1.43/?m=1&o=1");
    } catch (err) {}
  };

  const handleSecondButtonClick = async () => {
    try {
      await fetch("http://192.168.1.19/?m=1&o=1");
    } catch (err) {}
  };
  return (
    <VStack p="4">
      <Button onClick={handleFirstButtonClick} w="full" colorScheme="green">
        Sapin
      </Button>
      <Button onClick={handleSecondButtonClick} w="full" colorScheme="yellow">
        Guirlande
      </Button>
    </VStack>
  );
};

export default Home;
