import { Link } from 'react-router-dom';

function ListCard(props) {
  let data = props.data;
  return (
    <>
      <ul className="list_wrap">
        <li className="list">
          <div className="img_con">
            {data.discount === 0 ? null : (
              <p className="discount">{data.discount}%</p>
            )}
            {data.category === 'new' ? (
              <p className="category">{data.category}</p>
            ) : null}

            <img
              src={`${process.env.PUBLIC_URL}/img/${data.img}`}
              alt={data.title}
            />
            <Link to="/Shop">ADD TO CART</Link>
          </div>
          <p className="title">{data.title}</p>
          <p className="price">{data.price}원</p>
          <Link to={`/Detail/${data._id}`}></Link>
        </li>
      </ul>
    </>
  );
}

export default ListCard;
