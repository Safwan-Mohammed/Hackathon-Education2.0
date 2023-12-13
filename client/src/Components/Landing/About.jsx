import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import education from "../../images/Background/education.jpg";

export default function About() {
  return (
    <Box
      height={{ base: "100vh", md: "50vh" }}
      position="relative"
    >
      <Box
        backgroundImage={`url(${education})`}
        backgroundSize="cover"
        backgroundPosition="center"
        height="100%"
        width="100%"
      />
      <Flex
        direction="column"
        position="absolute"
        top={{ base: "10%", md: "20%" }}
        left={{ base: "5%", md: "10%" }}
        width={{ base: "90%", md: "80%" }}
      >
        <Text color="white" fontSize={{ base: "3rem", md: "6rem" }} fontWeight={600}>
          Edify!
        </Text>
        <Text color="white" fontSize={{ base: "1.5rem", md: "2.85rem" }}>
          Revolutionizing Learning, Inspiring Futures Your Transformative Education Hub
        </Text>
      </Flex>
    </Box>
  );
}