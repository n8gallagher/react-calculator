import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorMode
} from '@chakra-ui/react'


const ToggleButton = () => {
  const { setColorMode } = useColorMode();
  const toggleCustomMode = (value, cb) => {
    switch (value) {
      case "red":
        cb("red");
        break;
      case "blue":
        cb("blue");
        break;
      case "green":
        cb("green");
        break;
      case "yellow":
        cb("yellow");
        break;
      default:
        break;
    }
  };
  return (
    <Box>
      <Flex>
        <Button onClick={() => toggleCustomMode("red", setColorMode)}>Red color mode!</Button>
        <Button onClick={() => toggleCustomMode("blue", setColorMode)}>
          Blue color mode!
        </Button>
        <Button onClick={() => toggleCustomMode("green", setColorMode)}>
          Green color mode!
        </Button>
        <Button onClick={() => toggleCustomMode("yellow", setColorMode)}>
          Yellow color mode!
        </Button>
      </Flex>
    </Box>
  );
}

export default ToggleButton;