import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Copyright } from "lucide-react";

export default function Footer() {
  return (
    <Flex
      color={'white'}
      background={'black'}
      direction={['column', 'row']}
      p={'1rem'}
      gap={'1.5rem'}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex direction="column" alignItems="center" gap={'0.5rem'}>
        <Text fontWeight={600} fontSize={'1.75rem'}>FOLLOW US ON</Text>
        <Flex direction={'row'} justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
          <Link href="https://instagram.com/" target="_blank">
            <Instagram size={'2rem'} color="#c931a1" />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank">
            <Linkedin size={'2rem'} color="#485df9" />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <Twitter size={'2rem'} color="#0091ff" />
          </Link>
        </Flex>
      </Flex>
      <Flex direction="column" alignItems="center" gap={'0.25rem'}>
        <Text fontWeight={600} fontSize={'1.5rem'}>CONTACT US</Text>
        <Flex direction={'column'} gap={'0.5rem'} alignItems="center" textAlign={'center'}>
          <Flex gap={'0.5rem'} alignItems="center" textAlign={'center'}>
            <Mail size={'1.25rem'} color="#ffffff" />
            <Link href="mailto:sevitha.n03@gmail.com">sevitha.n03@gmail.com</Link>
          </Flex>
          <Flex gap={'0.5rem'} alignItems="center" textAlign={'center'}>
            <MapPin size={'1.25rem'} color="#ffffff" />
            <Text>BMSCE Basavanagudi Bangalore</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" alignItems="center" gap={'0.5rem'}>
        <Link href="https://phaseshift.bmsce.in" target="_blank">PHASESHIFT 2023</Link>
        <Flex gap={'0.5rem'} alignItems="center">
          <Copyright color="#ffffff" />
          <Text>Edify. All Rights Reserved</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}