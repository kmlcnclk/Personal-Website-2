import React from 'react';
import styles from '../../styles/Photos.module.css';
import styles1 from '../../styles/Education.module.css';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

function EducationComponent({ data }) {
  return (
    <Box bgGradient={['linear(to-b, white, gray.300)']} bgClip="text">
      <div className={` row ${styles.mainDiv}`}>
        <div className="col-md-6">
          {data.map((photo, index) => {
            if (index % 2 == 0) {
              return (
                <div className={styles.ImageDiv} key={photo.Id}>
                  <div className="text-center">
                    <Image
                      className={styles.img}
                      src={photo.Attachments[0].thumbnails.large.url}
                      alt={`${photo.Name}`}
                    />
                  </div>

                  <div className={styles1.educationName}>
                    <Text
                      bgGradient={['linear(to-b, white, gray.300)']}
                      bgClip="text"
                      fontSize="lg"
                    >
                      {photo.Name}
                    </Text>
                  </div>
                  <div className={styles1.educationText}>
                    <Text
                      bgGradient={['linear(to-r, gray.300, gray.600)']}
                      bgClip="text"
                      fontSize="lg"
                    >
                      {photo.Category}, {photo.Notes}
                    </Text>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="col-md-6">
          {data.map((photo, index) => {
            if (index % 2 == 1) {
              return (
                <div className={styles.ImageDiv} key={photo.Id}>
                  <div className="text-center">
                    <Image
                      className={styles.img}
                      src={photo.Attachments[0].thumbnails.large.url}
                      alt={`${photo.Name}`}
                    />
                  </div>

                  <div className={styles1.educationName}>
                    <Text
                      bgGradient={['linear(to-b, white, gray.300)']}
                      bgClip="text"
                      fontSize="lg"
                    >
                      {photo.Name}
                    </Text>
                  </div>
                  <div className={styles1.educationText}>
                    <Text
                      bgGradient={['linear(to-r, gray.300, gray.600)']}
                      bgClip="text"
                      fontSize="lg"
                    >
                      {photo.Category}, {photo.Notes}
                    </Text>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </Box>
  );
}

export default EducationComponent;
