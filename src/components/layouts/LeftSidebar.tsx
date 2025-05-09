'use client'

import Link from 'next/link';
import { useState } from 'react';

const LeftSidebar = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthYear: '',
    phone: '',
    examType: '',
    facebook: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log(formData);
  };

  const menuItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      ),
      text: 'Đăng nhập',
      href: '/login',
    },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    //     </svg>
    //   ),
    //   text: 'Khóa học',
    //   href: '/courses'
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
    //     </svg>
    //   ),
    //   text: 'Tin tức',
    //   href: '/news'
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    //     </svg>
    //   ),
    //   text: 'Sách ID',
    //   href: '/book-id'
    // },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: 'Đề thi',
      href: '/exams'
    },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    //     </svg>
    //   ),
    //   text: 'Hỏi đáp',
    //   href: '/qa'
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    //     </svg>
    //   ),
    //   text: 'Sách',
    //   href: '/books'
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    //     </svg>
    //   ),
    //   text: 'Tài liệu',
    //   href: '/documents'
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //     </svg>
    //   ),
    //   text: 'Tra số báo danh',
    //   href: '/search-id'
    // }
  ];

  const socialLinks = [
    {
      text: 'Page SHT Education',
      href: 'https://www.facebook.com/luyenthisht',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },
    // {
    //   text: 'Youtube ôn thi',
    //   href: '#',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    //     </svg>
    //   )
    // },
    // {
    //   text: 'Tiktok SHT official',
    //   href: '#',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    //     </svg>
    //   )
    // },
    {
      text: 'Zalo SHT',
      href: 'https://zaloapp.com/qr/p/nlgaz05x4sd9?src=qr',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 48 48" fill="currentColor">
          <path fill="#2962ff" d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"></path><path fill="#eee" d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"></path><path fill="#2962ff" d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"></path><path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"></path><path fill="#2962ff" d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"></path><path fill="#2962ff" d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"></path>
        </svg>
      )
    }
  ];

  const examTypes = [
    'Đánh giá năng lực HSA',
    'Đánh giá năng lực HCM',
    'Đánh giá tư duy ĐHBK',
    'Đánh giá năng lực Bộ Công An'
  ];

  const birthYears = Array.from({ length: 10 }, (_, i) => 2014 - i);

  return (
    <div className="w-full bg-white shadow-sm rounded-lg p-4">
      {/* Menu Items */}
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 ${'text-gray-700'
              }`}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>

      {/* Divider */}
      <div className="my-4 border-t"></div>

      {/* Liên kết */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Liên kết</h3>
        <div className="space-y-2">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 text-gray-700"
            >
              {link.icon}
              <span className="text-sm">{link.text}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Form đăng ký tư vấn */}
      {/* <div className="bg-[#3d82af] rounded-lg p-4">
        <h3 className="text-white font-medium text-center mb-4">ĐĂNG KÝ TƯ VẤN</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full px-3 py-2 rounded-lg text-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <select
            className="w-full px-3 py-2 rounded-lg text-sm bg-white"
            value={formData.birthYear}
            onChange={(e) => setFormData({ ...formData, birthYear: e.target.value })}
          >
            <option value="">Năm sinh</option>
            {birthYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full px-3 py-2 rounded-lg text-sm"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />

          <select
            className="w-full px-3 py-2 rounded-lg text-sm bg-white"
            value={formData.examType}
            onChange={(e) => setFormData({ ...formData, examType: e.target.value })}
          >
            <option value="">Em muốn được tư vấn kỳ thi nào?</option>
            {examTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Link Facebook"
            className="w-full px-3 py-2 rounded-lg text-sm"
            value={formData.facebook}
            onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
          />

          <button
            type="submit"
            className="w-full py-2 bg-[#FF9800] text-white rounded-lg hover:bg-[#F57C00] transition-colors font-medium"
          >
            Gửi
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default LeftSidebar; 