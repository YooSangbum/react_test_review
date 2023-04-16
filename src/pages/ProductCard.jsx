import { Link } from 'react-router-dom';

function ProductCard(props) {
  let data = props.data;
  return (
    <ul className="list_wrap">
      {data.map((a, i) => {
        return (
          <li className="list" key={i}>
            <div className="img_con">
              {a.discount == 0 ? null : (
                <p className="discount">{a.discount}%</p>
              )}
              {a.category == 'new' ? (
                <p className="category">{a.category}</p>
              ) : null}

              <img
                src={`${process.env.PUBLIC_URL}/img/${a.img}`}
                alt={a.title}
              />
              <Link to="/Shop">ADD TO CART</Link>
            </div>
            <p className="title">{a.title}</p>
            <p className="price">{a.price}원</p>
            <Link to={`/Detail/${a._id}`}></Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductCard;
