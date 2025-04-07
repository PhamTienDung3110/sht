'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from '@/assets/img/banner-1.jpg';
import banner2 from '@/assets/img/banner-2.jpg';

const banners = [
  {
    image: banner1,
  },
  {
    image: banner2,
  },
  {
    image: banner1,
  },
  {
    image: banner2,
  },
  {
    image: banner1,
  },
  {
    image: banner2,
  }
];

const Banner = () => {
  return (
    <div className="relative w-full h-[340px] mb-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-2 h-2 bg-white opacity-50"></span>`;
          },
        }}
        className="w-full h-full rounded-lg"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={banner.image}
                  alt={`Banner ${index + 1}`}
                  width={1920}
                  height={400}
                  className="w-full h-full object-fit rounded-lg"
                  priority={index === 0}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner; 