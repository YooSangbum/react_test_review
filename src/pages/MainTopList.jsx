import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function MainTopList(props) {
  let data = props.data;
  let dataSet = data.filter((a) => a.category === 'top');
  return (
    <section className="MainTopList mw">
      <div className="MainTopList_title">
        <p>Shop The Latest</p>
        <Link to="Shop">View All</Link>
      </div>
      <ProductCard data={dataSet} />
    </section>
  );
}

export default MainTopList;
