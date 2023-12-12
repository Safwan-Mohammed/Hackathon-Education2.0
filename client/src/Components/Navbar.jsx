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
                <Flex direction={'row'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontWeight={600}>
                            LOGO
                        </Text>
                    </Box>
                    <Box>
                        <Flex direction={'row'}>
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
                            <Box onClick={() => {
                                toggleColorMode()
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            }>
                                <Image src={theme == "dark" ? darkLogo : lightLogo} />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            </div>
        </>
    )
}

export default Navbar