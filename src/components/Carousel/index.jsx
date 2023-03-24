import React from 'react';
import './index.css';
import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carousel() {
  return (
    <>
      <Swiper
        className='swiper-container'
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay, Pagination, A11y]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
        Autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}>
        <SwiperSlide className='relative'>
          <img src={require('../../assets/carousel1.png')} alt='1' />
          <div className='absolute bottom-[30px] left-[10px] w-[50vw] text-white'></div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={require('../../assets/carousel1.png')} alt='2' />
          <div className='absolute bottom-[30px] left-[10px] w-[50vw] text-white'></div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={require('../../assets/carousel1.png')} alt='3' />
          <div className='absolute bottom-[30px] left-[10px] w-[50vw] text-white'></div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={require('../../assets/carousel1.png')} alt='4' />
          <div className='absolute bottom-[30px] left-[10px] w-[50vw] text-white'></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
