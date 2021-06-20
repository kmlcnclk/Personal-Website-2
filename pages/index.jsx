import { Text } from '@chakra-ui/layout';
import { SimpleGrid } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import Head from 'next/head';
import { Image } from '@chakra-ui/react';
// import Image from 'next/image';
import Layout from '../Components/Layout';
import Photo from '../Components/Photo';
import styles from '../styles/Home.module.css';
import { getTable } from '../airtable';
import Education from '../Components/education';
import Notes from '../Components/Notes';
import Sour from '../Components/Sour';
import { getBookmarks } from '../raindrop';
import Bookmarks from '../Components/bookmarks';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Contact from '../Components/Contact';
import MrSteelCan from '../Components/MrSteelCan';
import Footer from '../Components/Footer';
import Social from '../Components/Social';

export default function Home({
  dataPhotos,
  dataEducation,
  dataNotes,
  sour,
  desk,
  dataBookmarks,
  dates,
}) {
  return (
    <Layout>
      <Head>
        <title>Cristiano Ronaldo</title>
        <meta name="description" content="Cristiano Ronaldo" />
        <meta name="author" content="Mr.SteelCan" />
        <meta
          name="keywords"
          content="Cristiano, Ronaldo, Cristiano Ronaldo, Cr7, cr7"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://cristianoronaldo.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cristiano Ronaldo" />
        <meta property="og:description" content="Cristiano Ronaldo" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://cristianoronaldo.vercel.app"
        />
        <meta name="twitter:title" content="Cristiano Ronaldo" />
        <meta name="twitter:description" content="Cristiano Ronaldo" />
      </Head>
      <Flex justify="space-between">
        <SimpleGrid w="100%" columns={{ lg: 2, md: 2 }} pt={4}>
          <Flex justify="center" w="100%" h="100%">
            <Image
              width={'auto'}
              height={'auto'}
              src="/a.png"
              objectFit="contain"
            />
          </Flex>

          <Flex justify="center" align="center" w="100%">
            <Flex
              direction="column"
              justify="space-around"
              align="center"
              h="100%"
              w="100%"
              mb={4}
            >
              <Text
                p={4}
                bgGradient={['linear(to-b, white, gray.300)']}
                fontWeight="semibold"
                bgClip="text"
              >
                {/* Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
                metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
                sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
                dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da
                içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda
                Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü
                yayıncılık yazılımları ile popüler olmuştur. */}
                Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese
                pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a
                Portuguese professional footballer who plays as a forward for
                Serie A club Juventus and captains the Portugal national team.
                Often considered the best player in the world and widely
                regarded as one of the greatest players of all time, Ronaldo has
                won five Ballon d&apos;Or awards[note 3] and four European
                Golden Shoes, both of which are records for a European player.
                He has won 32 major trophies in his career, including seven
                league titles, five UEFA Champions Leagues, one UEFA European
                Championship, and one UEFA Nations League title. Ronaldo holds
                the records for the most goals (134) in the Champions League and
                the most goals (12) in the European Championship. He is one of
                the few recorded players to have made over 1,100 professional
                career appearances and has scored over 790 official senior
                career goals for club and country. He is also the second male to
                score 100 international goals and the first European male to
                achieve the feat.
              </Text>
              {/* <Contact /> */}
              <Flex justify="center" align="center">
                <Flex
                  justify="center"
                  align="center"
                  w="min"
                  p="3"
                  bg="#212121"
                  rounded="14"
                >
                  <Social />
                </Flex>{' '}
              </Flex>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>
      <Photo data={dataPhotos} />
      <Education data={dataEducation} />
      <Notes data={dataNotes} />
      <Sour sour={sour} desk={desk} />
      <Bookmarks data={dataBookmarks} dates={dates} />
      <Footer />
      <MrSteelCan />
    </Layout>
  );
}

export async function getStaticProps({}) {
  const dataPhotos = await getTable('photos');
  const home = dataPhotos.filter((o) => o.Category == 'photos');

  const dataEducation = await getTable('education');

  const dataNotes = await getTable('notes');

  const dataSour = await getTable('sour');

  const sour = dataSour.filter((o) => o.Category == 'Sour');
  const desk = dataSour.filter((o) => o.Category == 'Desk');

  const dataBookmarks = await getBookmarks();

  var weeks = [];
  var years = [];
  var dates = [];

  for (let i = 0; i < dataBookmarks.items.length; i++) {
    const week = await format(parseISO(dataBookmarks.items[i].created), 'w', {
      locale: enGB,
    });
    const year = await format(parseISO(dataBookmarks.items[i].created), 'y', {
      locale: enGB,
    });

    const date = { year, week };
    if (dates[0]) {
      for (let a = 0; a < dates.length; a++) {
        if (!weeks.includes(week)) {
          await dates.push(date);
          await years.push(year);
          await weeks.push(week);
        }
      }
    } else {
      await dates.push(date);
    }
  }

  return {
    props: {
      dataPhotos: [...home],
      dataEducation: dataEducation,
      dataNotes: dataNotes,
      sour: [...sour],
      desk: [...desk],
      dataBookmarks: dataBookmarks.items,
      dates: dates,
    },
    revalidate: 60,
  };
}
