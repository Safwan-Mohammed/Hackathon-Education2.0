import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Heading, Text, Center, Slide } from "@chakra-ui/react"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import doubts from '../../images/Carousel/doubts.png'
import education from '../../images/Carousel/education.png'
import resources from '../../images/Carousel/resources.png'

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
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);


    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % list.length;
        setTranslateX(-100 * nextIndex);
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + list.length) % list.length;
        setTranslateX((-100 * prevIndex));
        setCurrentIndex(prevIndex);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <Flex mt={'4rem'} height={'auto'} gap={'2rem'} direction={'column'} p={'2rem 0rem'}>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <Heading>Featured Content</Heading>
            </Flex>
            <Flex overflowX={'hidden'} position={'relative'} >
                <Flex width={`${list.length * 100}vw`} transform={`translateX(${translateX}vw)`} transition="transform 1s ease-in-out">
                    {list.map((item, index) => (
                        <Box key={index} width={'100vw'} display={'flex'} justifyContent={'center'}>
                            <Flex
                                border={'1px solid white'}
                                padding={'1rem'}
                                borderRadius={'1rem'}
                                direction={'column'}
                                justifyContent={'space-evenly'}
                                alignItems={'center'}
                                width={['80%','50%','30%']}
                                boxShadow={'0.1px 0.1px 5px rgba(255, 255, 255)'}
                            >
                                <Image width={'80%'} src={item.link} objectFit={'contain'} />
                                <Text wordBreak={'keep-all'}>{item.desc}</Text>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
            </Flex>
            <Flex direction={'row'} justifyContent={'center'} gap={'10rem'}>
                <ArrowBigLeft cursor={'pointer'} color="#3e846f" size={'5rem'} onClick={handlePrev} />
                <ArrowBigRight cursor={'pointer'} color="#3e846f" size={'5rem'} onClick={handleNext} />
            </Flex>
        </Flex>
    );

}