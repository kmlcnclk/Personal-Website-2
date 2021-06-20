import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Input } from '@chakra-ui/input';
import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import Social from './Social';

function Contact() {
  return (
    <Flex>
      <Box
        bgGradient={['linear(to-b, white, gray.300)']}
        bgClip="text"
        // w="auto"
        w="100%"
      >
        <Container mt="5" mb="5" mr="0" ml="0" maxW="container.sm">
          {/* <Flex
            as="from"
            p="5"
            direction="column"
            justify="center"
            align="center"
            bgGradient={[
              'linear(to-tr, teal.300,yellow.400)',
              'linear(to-t, blue.200, teal.500)',
              'linear(to-b, white, gray.300)',
            ]}
            bgClip="text"
          >
            <Heading mb="9">Contact</Heading>
            <Input
              type="email"
              required
              bg="#212121"
              _hover={{ bg: '#212121', borderColor: '#ba000d' }}
              color="white"
              _focus={{ bg: '#212121', borderColor: '#ba000d' }}
              borderColor="#212121"
              placeholder="example@gmail.com"
              mb="4"
            />
            <Textarea
              variant="filled"
              required
              bg="#212121"
              _hover={{ bg: '#212121', borderColor: '#ba000d' }}
              color="white"
              _focus={{ bg: '#212121', borderColor: '#ba000d' }}
              placeholder="Your Message"
              mb="4"
            />
            <Button colorScheme="teal" w="100%">
              Send
            </Button>
          </Flex>
       */}
          <Flex justify="center" align="center">
            <Flex
              justify="center"
              align="center"
              w="min"
              p="3"
              bg="#212121"
              rounded="14"
            >
              <Social />
            </Flex>{' '}
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}

export default Contact;
