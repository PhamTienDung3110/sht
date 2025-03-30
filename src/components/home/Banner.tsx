'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const banners = [
  {
    image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2Fc8945014-5317-4861-b6a9-910f256e0e56_Ver01.1.jpg&w=1920&q=75",
  },
  {
    image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F45a039f3-e59f-4a07-a883-bc5b263a6af2_Ver01.2.jpg&w=1920&q=75",
  },
  {
    image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2Fcd7a35dd-fb4f-4a55-8f2f-b4da804ddd8b_Ver01.3.jpg&w=1920&q=75",
  }
];

const Banner = () => {
  return (
    <div className="relative w-full h-[280px] mb-4">
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