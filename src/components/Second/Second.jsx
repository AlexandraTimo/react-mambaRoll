import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "../Second/Second.css";
import baner from "../../img/baner2.webp";
import baner2 from "../../img/baner1.webp";
// / Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Second(props) {
  return (
    <div className="second">
      <div className="second_wrapper">
        <img className="second__wrapper_image" src={baner} alt="logo" />
        <img className="second__wrapper_image" src={baner2} alt="logo" />
      </div>
      {/*  */}
      <>
        <Swiper
         modules={[Autoplay]}
          slidesPerView={1.5}
          autoplay ={true}
          spaceBetween={8}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="second__wrapper_image" src={baner} alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="second__wrapper_image" src={baner2} alt="logo" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
}
