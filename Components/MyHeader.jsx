import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React, { useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/MyHeader.module.css';
import { Box } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Drawer } from '@chakra-ui/modal';
import {
  DrawerContent,
  DrawerOverlay,
  DrawerFooter,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
} from '@chakra-ui/modal';
import { useColorMode } from '@chakra-ui/color-mode';
import { useColorModeValue } from '@chakra-ui/color-mode';

function MyHeader() {
  const HeadList = [
    {
      name: 'Home',
      link: '#home',
    },
    {
      name: 'Photo',
      link: '#photo',
    },
    {
      name: 'Education',
      link: '#education',
    },
    {
      name: 'Notes',
      link: '#notes',
    },
    {
      name: 'Sour',
      link: '#sour',
    },
    {
      name: 'Bookmarks',
      link: '#bookmarks',
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { toggleColorMode, colorMode } = useColorMode();
  const menuColor = useColorModeValue(
    '#212121',
    'linear(to-b, white, gray.300)'
  );
  const color = useColorModeValue('#d80000', 'teal.500');

  return (
    <Flex
      h={16}
      p={2}
      w="100%"
      bgGradient="linear(to-l, #ba000d, #d80000)"
      align="center"
      justify="space-between"
      boxShadow="lg"
      position="sticky"
      top="0"
      zIndex="5"
    >
      <Box className={styles.realHeader} w="100%">
        <Flex pl={7} pr={7} w="100%" align="center" justify="space-between">
          <Heading
            size="lg"
            bgGradient={['linear(to-b, white, gray.300)']}
            cursor="pointer"
            bgClip="text"
            fontFamily="monospace"
          >
            Cristiano Ronaldo
          </Heading>

          <Flex justify="center" align="center">
            {HeadList.map((listItem, i) => (
              <Link key={i} href={listItem.link} passHref>
                <Text
                  bgGradient={['linear(to-b, white, gray.300)']}
                  fontWeight="bold"
                  bgClip="text"
                  cursor="pointer"
                  m={2}
                >
                  {listItem.name}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>{' '}
      </Box>
      <Box className={styles.fakeHeader} w="100%">
        <Flex justify="space-between" align="center">
          <IconButton
            colorScheme="red"
            ref={btnRef}
            onClick={onOpen}
            bg="#d80000"
            aria-label="Menu"
            icon={<HamburgerIcon color="white" w="7" h="7" />}
          />
          <Heading
            size="lg"
            bgGradient={['linear(to-b, white, gray.300)']}
            cursor="pointer"
            bgClip="text"
            fontFamily="monospace"
          >
            Cristiano Ronaldo
          </Heading>

          <Drawer
            isOpen={isOpen}
            colorScheme="red"
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader color={color} fontSize="3xl">
                Cristiano
              </DrawerHeader>

              <DrawerBody>
                <Box>
                  {HeadList.map((listItem, i) => (
                    <Box
                      onClick={() => {
                        setTimeout(() => {
                          onClose();
                        }, 1000);
                      }}
                      key={i}
                    >
                      <Link href={listItem.link} passHref>
                        <Text
                          // bgGradient={[menuColor]}
                          color={menuColor}
                          fontWeight="bold"
                          // bgClip="text"
                          fontSize="lg"
                          cursor="pointer"
                          _hover={{
                            bg: '#d80000',
                            rounded: '14',
                            color: 'white',
                          }}
                          p={3}
                        >
                          {listItem.name}
                        </Text>
                      </Link>{' '}
                    </Box>
                  ))}
                  <Box
                    onClick={() => {
                      setTimeout(() => {
                        onClose();
                      }, 1000);
                    }}
                  >
                    <Link href="#contact" passHref>
                      <Text
                        color={menuColor}
                        fontWeight="bold"
                        fontSize="lg"
                        cursor="pointer"
                        _hover={{
                          bg: '#d80000',
                          rounded: '14',
                          color: 'white',
                        }}
                        p={3}
                      >
                        Contact
                      </Text>
                    </Link>
                  </Box>
                </Box>
              </DrawerBody>

              {/* <DrawerFooter>
                {' '}
                <Heading color={color} fontSize="3xl">
                  Can Çelik
                </Heading>
              </DrawerFooter> */}
            </DrawerContent>
          </Drawer>
          <IconButton
            colorScheme="red"
            bg="#ba000d"
            aria-label="Menu"
            onClick={toggleColorMode}
            icon={
              colorMode == 'light' ? (
                <SunIcon color="white" w="4" h="4" />
              ) : (
                <MoonIcon color="white" w="4" h="4" />
              )
            }
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default MyHeader;
