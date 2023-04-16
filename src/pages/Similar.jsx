import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

import ListCard from './ListCar';

function Similar(props) {
  let data = props.data;
  return (
    <section className="similar mw">
      <p className="similarP">Similar Items</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="newlist"
      >
        {data.map((a, i) => {
          return (
            <SwiperSlide key={i}>
              <ListCard data={a} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Similar;
