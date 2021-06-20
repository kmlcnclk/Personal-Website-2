import { Flex } from '@chakra-ui/layout';
import React from 'react';
import Social from './Social';

function Footer() {
  return (
    <Flex name="contact" justify="center" p={3} align="center">
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
    </Flex>
  );
}

export default Footer;
