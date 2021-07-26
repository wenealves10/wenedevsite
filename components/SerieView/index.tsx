import { IAllSeries } from 'interfaces/props.dto';
import SerieViewContent from '../SerieViewContent';
import SerieViewHeader from '../SerieViewHeader';

type Props = {
  serie: IAllSeries;
}


function SerieView({ serie }: Props) {
  return (
    <>
      <SerieViewHeader serie={serie} />
      <SerieViewContent serie={serie} />
    </>
  );
}

export default SerieView;
