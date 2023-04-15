import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function MainEvent() {
  return (
    <section className="MainEvent mw">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="main_sec1 bg1">
            <h2 className="sec1_wrap">
              <p>Gold big hoops</p>
              <p>$ 68,00</p>
              <button>View Product</button>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main_sec1 bg2">
            <h2 className="sec1_wrap">
              <p>Gold big hoops</p>
              <p>$ 68,00</p>
              <button>View Product</button>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main_sec1 bg3">
            <h2 className="sec1_wrap">
              <p>Gold big hoops</p>
              <p>$ 68,00</p>
              <button>View Product</button>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainEvent;
