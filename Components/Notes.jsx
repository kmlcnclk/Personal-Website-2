import { Container } from '@chakra-ui/layout';
import React from 'react';
import styles from '../styles/Photos.module.css';
import styles1 from '../styles/Notes.module.css';
import NotesComponent from './components/NotesComponent';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';

function Notes({ data }) {
  return (
    <Flex bg="#212121" w="100%">
      <Box
        name="notes"
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
          <Heading m={2}>Kendime notlar</Heading>
          <Text color="gray.500" p={2}>
            bu sayfa henüz beta aşamasında. medium'da yayınladığım yazıları en
            kısa sürede buraya taşıyacağım inş{' :)'}
          </Text>
          <NotesComponent data={data} />
        </Container>
      </Box>
    </Flex>
  );
}

export default Notes;
