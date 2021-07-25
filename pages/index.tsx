import { ITechnologies } from 'interfaces/props.dto';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Cover from 'src/components/Cover';
import Layout from 'src/components/Layout';
import { getAllTechnologies } from 'src/lib/dato-cms';
// import useAuth from 'src/hooks/useAuth';

export default function Home({ technologies }: ITechnologies) {

  // const { user, signin } = useAuth();
  // console.log("User: ", user);
  return (
   <Layout>
     <Cover technologies={technologies}/>
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
