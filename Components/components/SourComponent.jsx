import React from 'react';
import styles from '../../styles/Photos.module.css';
import styles1 from '../../styles/Education.module.css';
import { Flex } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';

function SourComponent({ sour, desk }) {
  return (
    <Flex justify="center" align="center">
      <div>
        <div>
          {desk.map((d) => (
            <div
              key={d.Id}
              className="text-center"
              style={{ marginLeft: '1rem', marginRight: '1rem' }}
            >
              <img
                src={d.Attachments[0].thumbnails.full.url}
                style={{ objectFit: 'contain', width: '100%' }}
              />
            </div>
          ))}
        </div>
        <div className={` row ${styles.mainDiv}`}>
          <div className="col-md-6">
            {sour.map((photo, index) => {
              if (index % 2 == 0) {
                return (
                  <div className={styles.ImageDiv} key={photo.Id}>
                    <div className="text-center">
                      <img
                        className={styles.img}
                        src={photo.Attachments[0].thumbnails.large.url}
                      />
                    </div>

                    <Box mt={3} className={styles1.educationName}>
                      <Heading
                        size="md"
                        bgGradient={['linear(to-b, white, gray.300)']}
                        bgClip="text"
                      >
                        {photo.Name}
                      </Heading>
                    </Box>
                    <div className={styles1.educationText}>
                      <Text
                        bgGradient={['linear(to-r, gray.300, gray.600)']}
                        bgClip="text"
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
            {sour.map((photo, index) => {
              if (index % 2 == 1) {
                return (
                  <div className={styles.ImageDiv} key={photo.Id}>
                    <div className="text-center">
                      <img
                        className={styles.img}
                        src={photo.Attachments[0].thumbnails.large.url}
                      />
                    </div>

                    <Box mt={3} className={styles1.educationName}>
                      <Heading
                        size="md"
                        bgGradient={['linear(to-b, white, gray.300)']}
                        bgClip="text"
                      >
                        {photo.Name}
                      </Heading>
                    </Box>
                    <div className={styles1.educationText}>
                      <Text
                        bgGradient={['linear(to-r, gray.300, gray.600)']}
                        bgClip="text"
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
      </div>
    </Flex>
  );
}

export default SourComponent;
