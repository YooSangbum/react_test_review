import { useState } from 'react';

function ProductInfo(props) {
  let data = props.data;

  let [count, setCount] = useState(1);

  return (
    <section className="mw">
      <div className="detail">
        <div className="detail_img">
          {data.discount === 0 ? null : (
            <p className="detail_discount">{data.discount}%</p>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/img/${data.img}`}
            alt={data.title}
          />
        </div>
        <div className="detailCon">
          <p className="detail_title">{data.title}</p>
          <p className="detail_price">{data.price}원</p>
          <p className="detail_contents">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat
            eligendi aliquid ipsam iure, vel ab quia modi adipisci rem
            architecto dicta minima, magnam iusto eos, eius quidem in autem.
          </p>
          <div className="cb_wrap">
            <div className="countBtn">
              <span
                className="minus"
                onClick={() => {
                  setCount(count > 1 ? count - 1 : count);
                }}
              >
                -
              </span>
              {count > 0 ? (
                <span className="count">{count}</span>
              ) : (
                setCount(count)
              )}

              <span
                className="plus"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </span>
            </div>
            <button className="addtocart">ADD TO CART</button>
          </div>
          <div className="detailIcon">
            <p className="like"></p>
            <p className="sns">
              <i className="fa-regular fa-envelope"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </p>
          </div>
          <p className="detailNum">SKU: {data._id}</p>
          <p className="detailCate">Categories: {data.category}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
