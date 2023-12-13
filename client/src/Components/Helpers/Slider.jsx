import React, { useRef } from "react";
import { useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Button, useColorMode, Link } from "@chakra-ui/react";
import { Menu, Home, Presentation, Library, UsersRound, LogIn } from "lucide-react";

export default function Slider() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const { colorMode } = useColorMode()
    const drawerBg = colorMode === "light" ? "rgb(206, 211, 207)" : "gray.800"
    const textFont = (colorMode === "light" ? "blackAlpha.900" : "blue.300")
    const customDrawerWidth = "240px"

    return (
        <>
            <Button background={'transparent'} _hover={{bg:"transparent"}} _active={{bg:"transparent"}} onClick={onOpen} ref={btnRef} >
                <Menu size={'2rem'} color="#70a7ff" />
            </Button>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size={'xs'} >
                <DrawerOverlay />
                <DrawerContent bg={drawerBg} color={textFont} w={customDrawerWidth} maxW={customDrawerWidth}>
                    <DrawerHeader fontSize={'2rem'} color={textFont}>EDIFY</DrawerHeader>
                    <DrawerBody display={'flex'} flexDirection={'column'} gap={'1rem'} fontSize={'1.25rem'}>
                        <Link display={'flex'} alignItems={'center'} gap={'1.25rem'} fontWeight={600}> <Home color="#70a7ff" /> HOME </Link>
                        <Link display={'flex'} alignItems={'center'} gap={'1.25rem'} fontWeight={600}> <Presentation color="#70a7ff" /> LIVE CLASSES </Link>
                        <Link display={'flex'} alignItems={'center'} gap={'1.25rem'} fontWeight={600}> <Library color="#70a7ff" /> REFERENCES </Link>
                        <Link display={'flex'} alignItems={'center'} gap={'1.25rem'} fontWeight={600}> <UsersRound color="#70a7ff" />COMMUNITY </Link>
                        <Link display={'flex'} alignItems={'center'} gap={'1.25rem'} fontWeight={600}> <LogIn color="#70a7ff" /> SIGN IN </Link>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}