import React, { useState } from "react";
import { Box, Flex, Text, useColorMode, Image, useMediaQuery } from "@chakra-ui/react"
import darkLogo from "../images/dark.png"
import lightLogo from "../images/sun.png"
import Slider from "./Helpers/Slider";

function Navbar() {

    const [ theme, setTheme ]  = useState("dark")
    const { colorMode, toggleColorMode } = useColorMode()
    const [isGreaterThan600] = useMediaQuery("(min-width:600px)")

    return (
        <>
            <div>
            <Box bg={'blackAlpha.900'}>
                <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'} p={'0.5rem 1rem'} position={'sticky'}>
                    <Box ml={'1rem'}>
                        <Text letterSpacing={'0.1rem'} fontWeight={700} fontSize={'2.5rem'} color={'white'} >
                            EDIFY
                        </Text>
                    </Box>
                    <Flex alignItems={'center'} gap={'1rem'}>
                    {isGreaterThan600 ?
                    (<Box>
                        <Flex direction={'row'} gap={'1.5rem'} justifyContent={'center'} alignItems={'center'}>
                            <Text _hover={{borderBottom:'2px solid white', transition:'0.1s'}} fontSize={'1.5rem'} cursor={'pointer'} fontWeight={700} letterSpacing={'0.05rem'} color={'blue.300'}>
                                HOME
                            </Text>
                            <Text _hover={{borderBottom:'2px solid white', transition:'0.05s'}} fontSize={'1.5rem'} cursor={'pointer'} fontWeight={700} letterSpacing={'0.05rem'} color={'blue.300'}>
                                LIVE CLASSES
                            </Text>
                            <Text _hover={{borderBottom:'2px solid white', transition:'0.05s'}} fontSize={'1.5rem'} cursor={'pointer'} fontWeight={700} letterSpacing={'0.05rem'} color={'blue.300'}>
                                REFERNCES
                            </Text>
                            <Text _hover={{borderBottom:'2px solid white', transition:'0.05s'}} fontSize={'1.5rem'} cursor={'pointer'} fontWeight={700} letterSpacing={'0.05rem'} color={'blue.300'}>
                                COMMUNITY
                            </Text>
                            <Text _hover={{borderBottom:'2px solid white', transition:'0.05s'}} fontSize={'1.5rem'} cursor={'pointer'} fontWeight={700} letterSpacing={'0.05rem'} color={'blue.300'}>
                                SIGN IN
                            </Text>
                        </Flex>
                    </Box>)
                    :
                    (<Slider />)}
                    <Box cursor={'pointer'} onClick={() => {
                                toggleColorMode()
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            }>
                                <Image objectFit={'contain'} src={theme == "dark" ? darkLogo : lightLogo} />
                            </Box>
                    </Flex>
                </Flex>
            </Box>
            </div>
        </>
    )
}

export default Navbar