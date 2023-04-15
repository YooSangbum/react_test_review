import ProdutCard from "./ProductCard";

function AllList(props) {
  let data = props.data;
  console.log(data);
  return (
    <section className="AllList mw">
      <p>Shop The Latest</p>
      <div className="btns">
        <button onChange={(e) => {}}>등록순</button>
        <button>낮은 가격</button>
        <button>높은 가격</button>
        <button>높은 할인율</button>
      </div>
      <ProdutCard data={data} />
    </section>
  );
}

export default AllList;
