import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, Circle, Link, Text } from '@chakra-ui/layout';
import React from 'react';
import { RiTwitterFill, RiGithubFill } from 'react-icons/ri';
import { SiYoutube } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';
import siteConfig from '../site.config';
import { IconButton } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';

function SocialButton({ href, children, socialBackground }) {
  return (
    <Link href={href} target="blank">
      <IconButton
        isRound
        size="md"
        icon={children}
        m={1}
        bg={socialBackground}
        color="white"
        _hover={{ opacity: '0.7', cursor: 'pointer' }}
      />
    </Link>
  );
}

function Social() {
  const socialBackground = useColorModeValue('#ba000d', 'gray.600');

  return (
    <Flex justify="center" align="center" as="div" d="flex">
      <SocialButton
        socialBackground={socialBackground}
        href={siteConfig.social.twitter}
      >
        <RiTwitterFill size={25} />
      </SocialButton>
      <SocialButton
        socialBackground={socialBackground}
        href={siteConfig.social.youtube}
      >
        <SiYoutube size={25} />
      </SocialButton>{' '}
      <Link
        href={'mailto:' + siteConfig.author.email}
        target="blank"
        _hover={{ color: 'white' }}
      >
        <Box
          as="div"
          rounded="full"
          p="2"
          pl="4"
          pr="4"
          m={1}
          _hover={{ opacity: '0.7', cursor: 'pointer' }}
          bg={socialBackground}
          color="white"
        >
          <Center alignItems="center" d="flex" justifyContent="center">
            <Text fontSize="lg" fontWeight="bold">
              Email
            </Text>
          </Center>
        </Box>
      </Link>
      <SocialButton
        socialBackground={socialBackground}
        href={siteConfig.social.github}
      >
        <RiGithubFill size={26} />
      </SocialButton>
      <SocialButton
        socialBackground={socialBackground}
        href={siteConfig.social.instagram}
      >
        <FaInstagram size={25} />
      </SocialButton>
    </Flex>
  );
}

export default Social;
