import { useParams } from 'react-router-dom';

import ProductInfo from './ProductInfo';
import EctInfo from './EctInfo';
import Similar from './Similar';

function Detail(props) {
  let { id } = useParams();
  let data = props.data[id - 1];
  // props.data(10개)에서
  let samecate = props.data.filter((a) => a.category == data.category);
  return (
    <>
      <ProductInfo data={data} />
      <EctInfo />
      <Similar data={samecate} />
    </>
  );
}

export default Detail;
