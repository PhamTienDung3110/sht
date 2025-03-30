'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Student {
  image: string;
}

const students: Student[] = [
  {
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F415e9cdb-8b07-4296-b09d-867df3d4921f_HSA.01.jpg&w=384&q=75'
  },
  {
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F89aa8496-9f64-49b0-a6bb-1071fc169c39_z5889492114040_002_4f8ef8872f300daa244349eec0c73c6f.jpg&w=384&q=75'
  },
  {
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F22e40215-66a3-4b99-b2c7-d2064fd67e0d_z5889492114040_003_f38beadff93bd38cb4a51e913cc4edb6.jpg&w=384&q=75'
  },
  {
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2Fdfca2cd9-4549-4c73-8d4c-a16ac2dc3ea5_z5889492114040_004_92603c4212ffbd88c8876a3395b0db53.jpg&w=384&q=75'
  }
];

const StudentHonorSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === students.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? students.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="mb-4 p-3 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-green-700">
          Vinh danh học sinh 2k6
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
          {students.map((student, index) => (
            <div key={index} className="min-w-[33.333%] px-3">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={student.image}
                  alt="Bảng vinh danh"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentHonorSection; 