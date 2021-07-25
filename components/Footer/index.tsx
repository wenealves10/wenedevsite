import React from 'react';
import NextLink from 'next/link';
import { Link, Flex } from '@chakra-ui/react';

const Footer = () => (
  <Flex mb={8} mt={24} justify="center">
    <NextLink href="/privacy" passHref>
      <Link fontSize="sm" mr={4} fontWeight="medium" color="gray.500">
        Privacidade
      </Link>
    </NextLink>
    <Link
      fontSize="sm"
      mr={4}
      fontWeight="medium"
      color="gray.500"
      target="_blank"
      href="https://github.com/wenealves10"
    >
      Github
    </Link>
    <Link
      fontSize="sm"
      mr={4}
      fontWeight="medium"
      color="gray.500"
      target="_blank"
      href="https://www.instagram.com/wn_allvess/"
    >
      Instagram
    </Link>
    <Link
      fontSize="sm"
      mr={4}
      fontWeight="medium"
      color="gray.500"
      target="_blank"
      href="https://www.linkedin.com/in/wenealvesfullstack/"
    >
      LinkedIn
    </Link>
  </Flex>
);

export default Footer;
