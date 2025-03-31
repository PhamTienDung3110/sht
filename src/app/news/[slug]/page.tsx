'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function NewsDetailPage() {
  const relatedNews = [
    {
      id: 1,
      title: 'Thông báo lịch khai giảng khóa học V-ACT tháng 3/2024',
      image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75',
      date: '01/03/2024',
      category: 'Thông báo'
    },
    {
      id: 2,
      title: 'Hướng dẫn đăng ký thi thử V-ACT online tháng 3/2024',
      image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75',
      date: '28/02/2024',
      category: 'Hướng dẫn'
    },
    {
      id: 3,
      title: 'Tổng hợp đề thi V-ACT các năm từ 2021-2023',
      image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75',
      date: '25/02/2024',
      category: 'Tài liệu'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb - Ẩn trên mobile */}
        <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mt-4">
          <Link href="/" className="hover:text-[#3d82af]">Trang chủ</Link>
          <span>/</span>
          <Link href="/news" className="hover:text-[#3d82af]">Tin tức</Link>
          <span>/</span>
          <span className="text-[#3d82af] line-clamp-1">Thông báo lịch khai giảng khóa học V-ACT tháng 3/2024</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-75px)] pt-[30px]">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              {/* News Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="bg-[#3d82af] text-white px-3 py-1 rounded-full">Thông báo</span>
                  <span>01/03/2024</span>
                  <span>• 5 phút đọc</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                  Thông báo lịch khai giảng khóa học V-ACT tháng 3/2024
                </h1>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75"
                      alt="Author"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">HSA EDUCATION</div>
                    <div className="text-sm text-gray-600">Admin</div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative pt-[56.25%] mb-6">
                <Image
                  src="https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75"
                  alt="Featured image"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              {/* News Content */}
              <div className="prose max-w-none">
                <p className="mb-4">
                  HSA EDUCATION trân trọng thông báo lịch khai giảng các khóa học V-ACT trong tháng 3/2024. Với mục tiêu giúp các em học sinh có sự chuẩn bị tốt nhất cho kỳ thi đánh giá năng lực sắp tới, chúng tôi đã thiết kế các khóa học phù hợp với từng đối tượng và nhu cầu học tập khác nhau.
                </p>

                <h2 className="text-xl font-semibold mb-4">1. Các khóa học mới</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Khóa Toán học cơ bản - Khai giảng ngày 05/03/2024</li>
                  <li>Khóa Tiếng Việt nâng cao - Khai giảng ngày 10/03/2024</li>
                  <li>Khóa Tiếng Anh giao tiếp - Khai giảng ngày 15/03/2024</li>
                  <li>Khóa Tư duy logic - Khai giảng ngày 20/03/2024</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">2. Ưu đãi đặc biệt</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Giảm 20% học phí khi đăng ký trước ngày 10/03/2024</li>
                  <li>Tặng kèm tài liệu học tập độc quyền</li>
                  <li>Miễn phí thi thử online 3 lần</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">3. Hình thức học tập</h2>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Học trực tuyến qua Zoom</li>
                  <li>Lớp học tối đa 30 học viên</li>
                  <li>Giáo viên nhiều kinh nghiệm, tận tâm</li>
                  <li>Tương tác trực tiếp với giáo viên</li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium mb-2">Thông tin liên hệ:</p>
                  <ul className="space-y-1">
                    <li>Hotline: 0123.456.789</li>
                    <li>Email: contact@hsa.edu.vn</li>
                    <li>Website: hsavnu.edu.vn</li>
                  </ul>
                </div>

                <p className="italic text-gray-600">
                  Hãy nhanh tay đăng ký để nhận được những ưu đãi hấp dẫn!
                </p>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t">
                <span className="text-gray-600">Chia sẻ:</span>
                <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm mb-6">
              <h2 className="text-lg font-semibold mb-4">Tin tức liên quan</h2>
              <div className="space-y-4">
                {relatedNews.map((news) => (
                  <Link key={news.id} href={`/news/${news.title.toLowerCase().replace(/ /g, '-')}`}>
                    <div className="group">
                      <div className="relative pt-[56.25%] mb-2">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="rounded object-cover"
                        />
                      </div>
                      <span className="text-xs text-[#3d82af]">{news.category}</span>
                      <h3 className="text-sm font-medium group-hover:text-[#3d82af] line-clamp-2">
                        {news.title}
                      </h3>
                      <span className="text-xs text-gray-600">{news.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Danh mục</h2>
              <div className="space-y-2">
                <Link href="/news/category/thong-bao" className="flex items-center justify-between hover:text-[#3d82af]">
                  <span>Thông báo</span>
                  <span className="text-gray-600">(15)</span>
                </Link>
                <Link href="/news/category/huong-dan" className="flex items-center justify-between hover:text-[#3d82af]">
                  <span>Hướng dẫn</span>
                  <span className="text-gray-600">(8)</span>
                </Link>
                <Link href="/news/category/tai-lieu" className="flex items-center justify-between hover:text-[#3d82af]">
                  <span>Tài liệu</span>
                  <span className="text-gray-600">(12)</span>
                </Link>
                <Link href="/news/category/kinh-nghiem" className="flex items-center justify-between hover:text-[#3d82af]">
                  <span>Kinh nghiệm</span>
                  <span className="text-gray-600">(10)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 