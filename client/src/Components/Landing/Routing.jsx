import React from "react";
import { Flex, Image, Text, Heading } from "@chakra-ui/react"
import networking from '../../images/Routing/networking.jpg'
import resources from '../../images/Routing/resources.jpg'
import liveClass from '../../images/Routing/liveClass.jpg'

export default function Routing() {
    return (
        <>
            <div>
                <Flex mt={'4rem'} mb={'2rem'} justifyContent={'center'} alignItems={'center'} p={'1rem 1rem 3rem 1rem'} direction={'column'}>
                    <Heading mb={'4rem'}>CLICK HERE TO EXPLORE! </Heading>
                    <Flex width={'90%'} direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} gap={'5rem'}>
                        <Flex border={'1px solid white'} borderRadius={'1rem'} p={'1rem'} direction={'row'} justifyContent={'center'} alignItems={'center'} width={'30vw'} gap={'1rem'} boxShadow={'0.1px 0.1px 5px rgba(255, 255, 255)'} cursor={'pointer'} >
                            <Image height={'10rem'} width={'10rem'} src={liveClass} objectFit={'contain'}></Image>
                            <Text wordBreak={'keep-all'}>Discover live lectures on topics you love! Click to join now.</Text>
                        </Flex>
                        <Flex scale={1.2} border={'1px solid white'} borderRadius={'1rem'} p={'1rem'} direction={'row'} justifyContent={'center'} alignItems={'center'} width={'30vw'} gap={'1rem'} boxShadow={'0.1px 0.1px 5px rgba(255, 255, 255)'} cursor={'pointer'}>
                            <Image height={'10rem'} width={'10rem'} src={resources} objectFit={'contain'}></Image>
                            <Text wordBreak={'keep-all'}>Access high-quality notes on your preferred topics! Click here to explore and download</Text>
                        </Flex>
                        <Flex border={'1px solid white'} borderRadius={'1rem'} p={'1rem'} direction={'row'} justifyContent={'center'} alignItems={'center'} width={'30vw'} gap={'1rem'} boxShadow={'0.1px 0.1px 5px rgba(255, 255, 255)'} cursor={'pointer'}>
                            <Image height={'10rem'} width={'10rem'} src={networking} objectFit={'contain'}></Image>
                            <Text wordBreak={'keep-all'}>Connect with like-minded individuals for engaging discussions! Click here to join now.</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </>
    )
}