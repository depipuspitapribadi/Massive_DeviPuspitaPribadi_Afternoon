// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Card = () => {
    return (
        <div className="text-center pb-12 bg-hero-image pt-10">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                Albums
            </h1>
            <h2 class="text-base  text-white pt-5">
            <p>"This Is Our Albums From Debut Until Now"</p>
            </h2>
    <Swiper c
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    
      <SwiperSlide><img className='px-10 pt-11 ' src={"./album2.png"}/></SwiperSlide>
      <SwiperSlide><img className='px-10 pt-11' src={"./album3.png"}/></SwiperSlide>
      <SwiperSlide><img className='px-10 pt-11' src={"./album4.png"}/></SwiperSlide>
      <SwiperSlide><img className='px-10 pt-11' src={"./album5.png"}/></SwiperSlide>
      <SwiperSlide><img className='px-10 pt-11' src={"./album6.png"}/></SwiperSlide>
    </Swiper>
    </div>
  );
};
export default Card;