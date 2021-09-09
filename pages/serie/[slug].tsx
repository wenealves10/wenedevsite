import { IAllSeries, ISerie } from 'interfaces/props.dto';
import SerieView from 'src/components/SerieView';
import { getAllFullSeries } from 'src/lib/dato-cms';
import Layout from '../../components/Layout/index';

type Props = {
  serie: IAllSeries;
}

function SeriePage({ serie }: Props) {
  return (
    <Layout>
      <SerieView serie={serie} />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const series = await getAllFullSeries() as IAllSeries[];
  const serie = series.find((s) => s.slug === slug) || null;

  if (!serie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serie,
      allSeries: series,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const series = await getAllFullSeries() as IAllSeries[];
  const slugs = series.map((s) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
};


export default SeriePage;
