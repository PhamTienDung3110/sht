'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { theme } from '@/styles/theme';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const menuItems = [
    {
      path: '/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      text: 'Trang chủ'
    },
    // {
    //   path: '/courses',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    //     </svg>
    //   ),
    //   text: 'Khóa học'
    // },
    {
      path: '/exams',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: 'Đề thi'
    },
    // {
    //   path: '/news',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
    //     </svg>
    //   ),
    //   text: 'Tin tức'
    // },
    // {
    //   path: '/edit',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    //     </svg>
    //   ),
    //   text: 'Chỉnh sửa'
    // },
    // {
    //   path: '/chat',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    //     </svg>
    //   ),
    //   text: 'Chat'
    // },
    // {
    //   path: '/library',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    //     </svg>
    //   ),
    //   text: 'Thư viện'
    // },
    // {
    //   path: '/documents',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    //     </svg>
    //   ),
    //   text: 'Tài liệu'
    // },
    // {
    //   path: '/search',
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //     </svg>
    //   ),
    //   text: 'Tìm kiếm'
    // }
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50" 
        style={{
          backgroundColor: theme.colors.background.default,
          boxShadow: theme.shadows.DEFAULT,
        }}
      >
        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="relative w-15">
                <Image
                  src="/logo.png"
                  alt="SHT Education"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
              <span 
                className="text-xl font-bold" 
                style={{ color: theme.colors.secondary.main }}
              >
                SHT
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`p-2 rounded-lg ${isActive(item.path) ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
                  style={{
                    backgroundColor: isActive(item.path) ? theme.colors.background.gray : 'transparent',
                    color: isActive(item.path) ? theme.colors.primary.main : theme.colors.text.primary,
                  }}
                >
                  {item.icon}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                color: theme.colors.text.primary,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Login Button */}
            <div className="hidden md:block">
              <Link 
                href="/login" 
                className="ml-4 px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: theme.colors.primary.main,
                  color: theme.colors.primary.contrastText,
                }}
              >
                Đăng nhập
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              className="md:hidden mt-2 py-2 border-t"
              style={{
                borderColor: theme.colors.border.light,
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`p-2 rounded-lg flex items-center space-x-2`}
                    style={{
                      backgroundColor: isActive(item.path) ? theme.colors.background.gray : 'transparent',
                      color: isActive(item.path) ? theme.colors.primary.main : theme.colors.text.primary,
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="text-sm">{item.text}</span>
                  </Link>
                ))}
                <Link
                  href="/login"
                  className="p-2 rounded-lg text-center col-span-2"
                  style={{
                    backgroundColor: theme.colors.primary.main,
                    color: theme.colors.primary.contrastText,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
