import { Container } from '@chakra-ui/layout';
import React from 'react';
import EducationComponent from './components/EducationComponent';
import styles from '../styles/Photos.module.css';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';

function Education({ data }) {
  return (
    <Flex>
      <Box
        name="education"
        _before={{
          content: "' '",
          display: 'block',
          paddingTop: '80px',
          marginTop: '-10px',
        }}
        bgGradient={['linear(to-b, white, gray.300)']}
        bgClip="text"
      >
        <Container maxW="container.sm">
          <Text
            bgGradient={['linear(to-b, white, gray.300)']}
            bgClip="text"
            className={styles.photosText}
            textAlign="justify"
          >
            Yazılım, Tasarım ve Tecrübelerimi paylaştığım videoların listesi. Bu
            listedeki bütün videoları ücretsiz olarak izleyebilirsiniz.
          </Text>
        </Container>
        <EducationComponent data={data} />{' '}
      </Box>
    </Flex>
  );
}

export default Education;
