import { useState } from 'react';

function ProductInfo(props) {
  let data = props.data;

  let [count, setCount] = useState(1);
  let [hcount, setHCount] = useState(0);

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
            <p className="like">
              <svg
                viewBox="-5 -28 521.00002 512"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setHCount(hcount + 1);
                }}
              >
                <path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" />
              </svg>
            </p>
            <p className="hcount">{hcount}</p>
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
