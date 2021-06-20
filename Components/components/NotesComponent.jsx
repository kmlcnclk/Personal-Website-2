import { Text } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import React from 'react';
import styles from '../../styles/Notes.module.css';

function NotesComponent({ data }) {
  return (
    <Box mt={7} mb={14} >
      {data.map((note) => (
        <Box key={note.Id}>
          <Heading size="md" m={4} mb={1}>
            {note.Name}
          </Heading>
          <Text fontSize="sm" color="gray.600" m={4} mt={1}>
            {formatDistanceToNowStrict(parseISO(note.Created), {
              addSuffix: true,
              locale: enGB,
            })}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default NotesComponent;
