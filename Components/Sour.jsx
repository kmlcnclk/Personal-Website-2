import { Container } from '@chakra-ui/layout';
import React from 'react';
import SourComponent from './components/SourComponent';
import styles from '../styles/Photos.module.css';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';

function Sour({ sour, desk }) {
  return (
    <Flex w="100%">
      <Box
        name="sour"
        _before={{
          content: "' '",
          display: 'block',
          paddingTop: '80px',
          marginTop: '-10px',
        }}
        bgGradient={['linear(to-b, white, gray.300)']}
        bgClip="text"
        w="100%"
      >
        <Container maxW="container.sm" w="100%">
          <div className={styles.photosText}>
            <Text
              textAlign="center"
              fontSize="lg"
              fontWeight="semibold"
              mb={14}
            >
              İşlerimi yaparken ve günlük hayatta sık kullandığım araçların
              listesi.
            </Text>
          </div>
        </Container>
        <SourComponent sour={sour} desk={desk} />
      </Box>
    </Flex>
  );
}

export default Sour;
