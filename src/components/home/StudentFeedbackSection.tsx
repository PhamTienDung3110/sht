'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Feedback {
  image: string;
}

const feedbacks: Feedback[] = [
  {
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F4070ccc6-0f8c-4609-84c2-8dfa62244098_4.png&w=384&q=75'
  },
  {
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F87f0dcc7-b83d-4644-b3d5-5b7cafe97f0a_3.png&w=384&q=75'
  },
  {
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2Fa35e5690-9c19-4fd0-ab75-0b0afaad5706_2.png&w=384&q=75'
  },
  {
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F17184718-c8b3-46ed-80e7-1f8005a4e459_1.png&w=384&q=75'
  }
];

const StudentFeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === feedbacks.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? feedbacks.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="mb-4 p-3 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#3d82af]">
          Cảm nhận của học sinh
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#3d82af] text-[#3d82af] hover:bg-[#3d82af] hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[#3d82af] text-[#3d82af] hover:bg-[#3d82af] hover:text-white transition-colors"
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
          {feedbacks.map((feedback, index) => (
            <div key={index} className="min-w-[33.333%] px-3">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={feedback.image}
                  alt="Cảm nhận học sinh"
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

export default StudentFeedbackSection; 