'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Book {
  title: string;
  image: string;
  link: string;
  price: string;
  author: string;
  discount?: string;
}

const books: Book[] = [
  {
    title: 'Sách - Luyện đề thực chiến ĐGNL SHT (Phần Tiếng Anh)',
    image: 'https://hsa-education.sgp1.digitaloceanspaces.com/ae9bd8dc-7f19-4128-890d-421570f80f7d_466975946_1004485008388549_3815152670621235614_n.jpg',
    link: '/books/english',
    price: '149.000 đ',
    author: 'SHT Education',
    discount: '-5%'
  },
  {
    title: 'Sách - Luyện đề thực chiến ĐGNL SHT (Phần Khoa Học)',
    image: 'https://hsa-education.sgp1.digitaloceanspaces.com/e5071657-0642-4f23-a6ef-510911af3857_466735956_1004485071721876_905452842877969260_n.jpg', 
    link: '/books/science',
    price: '175.000 đ',
    author: 'SHT Education',
    discount: '-15%'
  },
  {
    title: 'Sách - Luyện đề thực chiến ĐGNL SHT (Phần Định Lượng)',
    image: 'https://hsa-education.sgp1.digitaloceanspaces.com/030ce69d-b811-4b94-9ed1-a7bf323fa76d_466616282_1004485055055211_8135197422883603607_n.jpg',
    link: '/books/math',
    price: '149.000 đ',
    author: 'SHT Education',
    discount: '-25%'
  },
  {
    title: 'Sách - Luyện đề thực chiến ĐGNL SHT (Phần Định Lượng)',
    image: 'https://hsa-education.sgp1.digitaloceanspaces.com/9f2643f2-4fcf-479c-a3eb-b309f09e54c0_466976155_1004485048388545_7251268112708003611_n.jpg',
    link: '/books/math',
    price: '149.000 đ',
    author: 'SHT Education',
    discount: '-11%'
  }
];

const BookSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === books.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? books.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="mb-4 p-3 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#3d82af]">
          Sách mới nhất
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
          {books.map((book, index) => (
            <div key={index} className="min-w-[33.333%] px-3">
              <Link href={book.link}>
                <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                  <div className="aspect-square bg-[#E8F5E9]">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {book.discount && (
                      <div className="absolute top-2 text-[12px] left-2 bg-red-500 text-white px-2 py-1 rounded-[50px] font-bold border-[2px] border-white">
                        {book.discount}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-center text-black font-medium">
                    {book.title}
                  </h4>
                  <div className="flex justify-between flex-col mt-2">
                    <span className="text-gray-600 text-sm">{book.author}</span>
                    <span className="text-[#3d82af] font-medium">{book.price}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSection; 