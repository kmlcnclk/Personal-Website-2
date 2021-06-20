import React from 'react';
import { Container } from '@chakra-ui/layout';
import styles from '../styles/Photos.module.css';
import styles1 from '../styles/Bookmarks.module.css';
import BookmarksComponent from './components/BookmarksComponent';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';

function Bookmarks({ data, dates }) {
  return (
    <Flex bg="#212121" w="100%">
      <Box
        name="bookmarks"
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
        <Container maxW="container.sm">
          <div className={styles.photosText}>
            <Text fontSize="lg" fontWeight="semibold" textAlign="center">
              İnternette gezinirken beğendiğim ve beni takip edenlerin de
              beğeneceğini düşündüğüm, belli bir kategorisi olmayan karışık
              şeyler.
            </Text>
            {dates[0] ? (
              <Box mt="14">
                {dates.map((date, index) => (
                  <div key={index}>
                    <Heading
                      m={4}
                      size="md"
                      bgGradient={['linear(to-b, white, gray.300)']}
                      bgClip="text"
                    >
                      {date.week}. Week, {date.year}
                    </Heading>
                    <div className={`text-center ${styles1.mainData}`}>
                      {data.map((rain) => {
                        if (
                          format(parseISO(rain.created), 'w', {
                            locale: enGB,
                          }) == date.week
                        ) {
                          return (
                            <BookmarksComponent key={rain._id} rain={rain} />
                          );
                        }
                      })}
                    </div>
                  </div>
                ))}
              </Box>
            ) : null}
          </div>
        </Container>
      </Box>
    </Flex>
  );
}

export default Bookmarks;
