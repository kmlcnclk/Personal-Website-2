import React from 'react';
// import groupBy from 'lodash.groupby';
// import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { tr, enGB } from 'date-fns/locale';
import { format, formatDistanceToNowStrict } from 'date-fns';
// import Image from 'next/image';
import styles from '../../styles/Bookmarks.module.css';
import Link from 'next/link';
import { Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

function BookmarksComponent({ rain }) {
  return (
    <div className={styles.rainDiv}>
      <Link href={rain.link}>
        <a target="_blank">
          <Image
            objectFit="contain"
            width="100%"
            height="auto"
            alt={rain.title}
            src={rain.cover}
          />
        </a>
      </Link>

      <Text textAlign="left" fontSize="lg" mt={1} p="1" fontWeight="semibold">
        {rain.title}
      </Text>
      <Text textAlign="left" fontSize="md" p="1" pt="0" color="gray.600">
        {rain.domain} -{' '}
        {formatDistanceToNowStrict(parseISO(rain.created), {
          addSuffix: true,
          locale: enGB,
        })}
      </Text>
    </div>
  );
}

export default BookmarksComponent;
