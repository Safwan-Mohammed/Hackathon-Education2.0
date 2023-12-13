import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react"
import education from "../../images/Background/education.jpg"

export default function About() {
    return (
        <>
            <Box height={'100vh'} position="relative">
                <Box
                    backgroundImage={`url(${education})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    height="100%"
                    width="100%"
                />
                <Flex direction={'column'} position={'absolute'} top={"20%"} left={'5%'} width={'50%'}>
                    <Text color="white" fontSize={'6rem'} fontWeight={600}>
                        Edify!
                    </Text>
                    <Text color="white" fontSize={'2.85rem'}>
                    Revolutionizing Learning, Inspiring Futures Your Transformative Education Hub
                    </Text>
                </Flex>
            </Box>

        </>
    )
}