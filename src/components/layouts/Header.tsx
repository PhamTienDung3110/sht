'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
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
              <span className="text-xl font-bold text-[#FF6634]">SHT</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className={`p-2 rounded-lg ${isActive('/') ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>

              {/* <Link
                href="/courses"
                className={`p-2 rounded-lg ${isActive('/courses') ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link> */}

              {/* <Link
                href="/news"
                className={`p-2 rounded-lg ${isActive('/news') ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                </svg>
              </Link>

              <Link
                href="/edit"
                className={`p-2 rounded-lg ${isActive('/edit') ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </Link> */}

              {/* <Link
                href="/chat"
                className={`p-2 rounded-lg ${isActive('/chat') ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </Link> */}

              {/* <Link
                href="/library"
                className={`p-2 rounded-lg ${isActive('/library') ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </Link> */}

              {/* <Link
                href="/documents"
                className={`p-2 rounded-lg ${isActive('/documents') ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link> */}

              {/* <Link
                href="/search"
                className={`p-2 rounded-lg ${isActive('/search') ? 'bg-gray-100 text-[#3d82af]' : 'hover:bg-gray-100 text-black'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link> */}
            </div>
            <div>
              <Link href="/login" className="ml-4 px-4 py-2 bg-[#3d82af] text-white rounded-lg hover:bg-[#45a049]">
                Đăng nhập
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-[50px]"></div>
    </>
  );
};

export default Header;
