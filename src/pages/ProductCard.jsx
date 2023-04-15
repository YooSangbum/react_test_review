import { Link } from "react-router-dom";

function ProdutCard(props) {
  let data = props.data;
  return (
    <ul className="list_wrap">
      {data.map((a, i) => {
        return (
          <li className="list" key={i}>
            <div className="img_con">
              <p className="discount">{a.discount}%</p>
              <img
                src={`${process.env.PUBLIC_URL}/img/${a.img}`}
                alt={a.title}
              />
              <Link to="/Shop">ADD TO CART</Link>
            </div>
            <p className="title">{a.title}</p>
            <p className="price">{a.price}원</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ProdutCard;
