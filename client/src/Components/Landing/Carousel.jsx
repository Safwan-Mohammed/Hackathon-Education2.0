import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Heading, Text, Center, Slide, VStack, HStack, IconButton, useMediaQuery } from "@chakra-ui/react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import doubts from '../../images/Carousel/doubts.png';
import education from '../../images/Carousel/education.png';
import resources from '../../images/Carousel/resources.png';

export default function Carousel() {
  const list = [
    {
      desc: "Join our live classes for an interactive learning experience! Attend sessions led by expert instructors, participate in real-time discussions, and get instant doubt resolution. Elevate your education from the comfort of your home—enroll now for a dynamic and engaging academic journey!",
      link: doubts
    },
    {
      desc: "Collaborative Learning Hub: Post, upvote, and access notes freely from anywhere. Join our global community for a shared learning experience!",
      link: education
    },
    {
      desc: "Open Forum Community: Post your doubts, get answers. A space for everyone to ask questions and share knowledge. Join the conversation - your voice matters!",
      link: resources
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % list.length;
    setTranslateX(-100 * nextIndex);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    setTranslateX(-100 * prevIndex);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <VStack mt={'4rem'} spacing={'2rem'} align="center">
      <Heading>Featured Content</Heading>
      <Flex w={isLargerThan768 ? "80vw" : "100vw"} overflowX="hidden" pos="relative">
        <Flex w={`${list.length * 100}vw`} transform={`translateX(${translateX}vw)`} transition="transform 1s ease-in-out">
          {list.map((item, index) => (
            <Box key={index} w={isLargerThan768 ? "80vw" : "100vw"} display="flex" justifyContent="center">
              <VStack border="1px solid white" p="1rem" borderRadius="1rem" align="center" w={isLargerThan768 ? "30vw" : "80vw"} boxShadow="0.1px 0.1px 5px rgba(255, 255, 255)">
                <Image w="80%" src={item.link} objectFit="contain" />
                <Text>{item.desc}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Flex>
      <HStack spacing={'10rem'}>
        <IconButton icon={<ArrowBigLeft />} color="#3e846f" size="5rem" onClick={handlePrev} />
        <IconButton icon={<ArrowBigRight />} color="#3e846f" size="5rem" onClick={handleNext} />
      </HStack>
    </VStack>
  );
}