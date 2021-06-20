import { Box } from '@chakra-ui/layout';
import Head from 'next/head';
import React from 'react';
import MyHeader from './MyHeader';
import Scroll from './Scroll';

function Layout({ children }) {
  return (
    <Box name="home" bgGradient="linear(to-l, #d80000, #ba000d)">
      <Head>
        <title>Cristiano Ronaldo</title>
        {/* <meta name="description" content="I am Can Çelik. I am 20 years old." /> */}
        {/* <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:url" content="https://cancelik.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Can Celik" />
        <meta property="og:description" content="Web uygulamaları yapıyorum" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://cancelik.vercel.app" />
        <meta name="twitter:title" content="Adem ilter" />
        <meta name="twitter:description" content="Web uygulamaları yapıyorum" /> */}
        {/* <meta content="#ffffff" name="theme-color" /> */}
        {/* <meta content="#ffffff" name="msapplication-TileColor" /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <meta name="next-head-count" content="3" /> */}
      </Head>
      <Scroll />
      <MyHeader />
      <Box>{children}</Box>
    </Box>
  );
}

export default Layout;
