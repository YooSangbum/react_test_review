import { useState } from 'react';
import ProductCard from './ProductCard';

function AllList(props) {
  let data = props.data;
  let [newList, setNewList] = useState(data);

  // 솔팅함수 사용
  function sortProducts(value) {
    let sortFn = [
      (a, b) => a._id - b._id,
      (a, b) => a.price - b.price,
      (a, b) => b.price - a.price,
      (a, b) => b.discount - a.discount,
    ];
    setNewList([...newList].sort(sortFn[value]));
  }
  return (
    <section className="AllList mw">
      <p>Shop The Latest</p>
      <div className="btns">
        <button
          value={0}
          onClick={(e) => {
            sortProducts(0);
          }}
        >
          등록순
        </button>
        <button
          value={1}
          onClick={(e) => {
            sortProducts(1);
          }}
        >
          낮은 가격
        </button>
        <button
          value={2}
          onClick={(e) => {
            sortProducts(2);
          }}
        >
          높은 가격
        </button>
        <button
          value={3}
          onClick={(e) => {
            sortProducts(3);
          }}
        >
          높은 할인율
        </button>
      </div>
      <ProductCard data={newList} />
    </section>
  );
}

export default AllList;
