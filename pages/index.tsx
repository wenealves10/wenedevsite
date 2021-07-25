import { GetStaticProps, GetStaticPropsContext } from 'next';
import Layout from 'src/components/Layout';
import Cover from 'src/components/Cover';
import { ITechnologies } from 'interfaces/props.dto';
import { getAllTechnologies } from 'src/lib/dato-cms';
import Footer from 'src/components/Footer';
import { Box } from '@chakra-ui/react';

export default function Home({ technologies }: ITechnologies) {
  return (
   <Layout>
     <Box pb={10}>
        <Cover technologies={technologies}/>
        <Footer/>
     </Box>
   </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

  const technologies = await getAllTechnologies() as ITechnologies;

  return {
    props: {
      technologies,
    },
    revalidate: 120,
  }
}
