import { Heading } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import siteConfig from '../site.config';

function MrSteelCan() {
  return (
    <Flex justify="center" align="center">
      <Flex
        justify="center"
        align="center"
        bg="#212121"
        mb={4}
        p={5}
        rounded="12"
        boxShadow="md"
      >
        <Flex
          h="auto"
          justify="center"
          //   bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
          bgGradient="linear(to-r, red.500, yellow.500)"
          bgClip="text"
          align="center"
        >
          <Link
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)',
              bgClip: 'text',
              cursor: 'pointer',
            }}
            href={siteConfig.author.emails}
            target="blank"
          >
            <Heading>Mr.SteelCan</Heading>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MrSteelCan;
