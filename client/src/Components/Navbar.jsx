import React, { useState } from "react";
import { Box, Flex, Text, Button, useColorMode, Image } from "@chakra-ui/react"
import darkLogo from "../images/dark.png"
import lightLogo from "../images/sun.png"

function Navbar() {

    const [ theme, setTheme ]  = useState("dark")
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <div>
            <Box bg={'blue'}>
                <Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'} p={'0.5rem'}>
                    <Box ml={'1rem'}>
                        <Text fontWeight={600} fontSize={'2.5rem'} >
                            EDIFY
                        </Text>
                    </Box>
                    <Box>
                        <Flex direction={'row'} gap={'1rem'} justifyContent={'center'} alignItems={'center'}>
                            <Button>
                                HOME
                            </Button>
                            <Button>
                                LIVE CLASSES
                            </Button>
                            <Button>
                                REFERNCES
                            </Button>
                            <Button>
                                COMMUNITY
                            </Button>
                            <Button>
                                SIGN IN
                            </Button>
                            <Button bg={'transparent'} _hover={{style:{background:"transparent"}}} _active={{style:{background:"transparent"}}} size={'xs'} onClick={() => {
                                toggleColorMode()
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            }>
                                <Image objectFit={'contain'} src={theme == "dark" ? darkLogo : lightLogo} />
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            </div>
        </>
    )
}

export default Navbar