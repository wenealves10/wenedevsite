import { GetStaticProps, GetStaticPropsContext } from 'next';
import Layout from 'src/components/Layout';
import Cover from 'src/components/Cover';
import { ISeries, ITechnologies } from 'interfaces/props.dto';
import { getAllSeries, getAllTechnologies } from 'src/lib/dato-cms';
import Footer from 'src/components/Footer';
import { Box } from '@chakra-ui/react';
import Series from 'src/components/Series';



export default function Home({ technologies, series}) {
  return (
   <Layout>
     <Box pb={10}>
        <Cover technologies={technologies}/>
        <Series series={series} />
        <Footer/>
     </Box>
   </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

  const technologies = await getAllTechnologies() as ITechnologies;
  const series = await getAllSeries() as ISeries;

  return {
    props: {
      technologies,
      series
    },
    revalidate: 120,
  }
}
