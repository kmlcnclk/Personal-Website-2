import { Flex } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import PhotosComponent from './components/PhotosComponent';
import styles from '../styles/Photos.module.css';

function Photo({ data }) {
  return (
    <Flex bg="#212121">
      <Box
        name="photo"
        _before={{
          content: "' '",
          display: 'block',
          paddingTop: '80px',
          marginTop: '-10px',
        }}
        bgGradient={['linear(to-b, white, gray.300)']}
        bgClip="text"
      >
        <div>
          <Container maxW="container.sm">
            <Box as="div" className={styles.photosText} textAlign="justify">
              Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor.
              Çevrem hakkında farkındalığı, detayları görebilmemi ve doğru anı
              yakalabilmeyi öğretiyor.
            </Box>
          </Container>
          <PhotosComponent data={data} />
        </div>
      </Box>
    </Flex>
  );
}

export default Photo;
