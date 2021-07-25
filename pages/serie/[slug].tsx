import Layout from '../../components/Layout/index';

function SeriePage({ serie }) {
  return (
    <Layout
      title={serie.name}
      path={`/${serie.slug}`}
      description={serie.description}
    >

    </Layout>
  )
}

export default SeriePage;
