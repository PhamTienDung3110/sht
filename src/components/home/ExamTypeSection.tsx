'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ExamType {
  title: string;
  image: string;
  link: string;
  subtitle?: string;
}

const examTypes: ExamType[] = [
  {
    title: 'Thi thử Đánh giá năng lực HSA',
    subtitle: 'Thi thử Đánh giá năng lực HSA',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2Fbb049fa8-b9c9-492d-8cf3-811a544975ef_hsa.jpg&w=384&q=75',
    link: '/exam-types/hsa'
  },
  {
    title: 'Thi thử Đánh giá năng lực Hồ Chí Minh -APT',
    subtitle: 'Thi thử Đánh giá năng lực Hồ Chí Minh -APT',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F46263acb-50a0-4fa7-aac7-7e4107778f3a_hcm.jpg&w=384&q=75', 
    link: '/exam-types/hcm-apt'
  },
  {
    title: 'Thi thử Đánh giá năng lực Bộ Công an',
    subtitle: 'Thi thử Đánh giá năng lực Bộ Công an',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F4eff77c8-ef0a-4e5f-b516-2cfd5a259797_bca.jpg&w=384&q=75',
    link: '/exam-types/bo-cong-an'
  },
  {
    title: 'Thi thử Đánh giá năng lực Bộ Công an',
    subtitle: 'Thi thử Đánh giá năng lực Bộ Công an',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F26eeec71-0c67-46fe-9526-d445f22c6764_z6053338934170_4b55e8e46454a67f5e9d66c5dd2d07ea.jpg&w=384&q=75',
    link: '/exam-types/bo-cong-an'
  }
];

const ExamTypeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === examTypes.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? examTypes.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="mb-6 p-3 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-green-700">
          Thi thử đánh giá năng lực- đánh giá tư duy
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {examTypes.map((examType, index) => (
            <div key={index} className="min-w-[33.333%] px-3">
              <Link href={examType.link}>
                <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                  <div className="aspect-[4/3] bg-[#E8F5E9]">
                    <Image
                      src={examType.image}
                      alt={examType.title}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                </div>
                {examType.subtitle && (
                  <h4 className="mt-3 text-center text-green-700 font-medium">
                    {examType.subtitle}
                  </h4>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamTypeSection; 