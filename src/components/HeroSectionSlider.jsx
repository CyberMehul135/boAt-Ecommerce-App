// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "../styles/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSectionSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full"
            src="/heroImages/Hero1.jpg"
            alt="earphone-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="/heroImages/Hero2.jpg"
            alt="earphone-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="/heroImages/Hero3.jpg"
            alt="earphone-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="/heroImages/Hero4.jpg"
            alt="earphone-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="/heroImages/Hero5.jpg"
            alt="earphone-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="/heroImages/Hero6.jpg"
            alt="earphone-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="/heroImages/Hero7.jpg"
            alt="earphone-image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
