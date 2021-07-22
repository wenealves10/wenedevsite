import Cover from 'src/components/Cover';
import Layout from 'src/components/Layout';
// import useAuth from 'src/hooks/useAuth';

export default function Home() {

  // const { user, signin } = useAuth();
  // console.log("User: ", user);
  return (
   <Layout>
     <Cover/>
   </Layout>
  )
}
