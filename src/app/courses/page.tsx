'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const courses = [
    {
      id: 1,
      title: "Hướng dẫn Luyện đề Đánh giá tuyển sinh CA 2025",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2Fa840bb4d-9bbc-4136-8960-d0e82f35dc71_476610940_1150239717102692_4791752638081684900_n.jpg&w=828&q=75",
      author: "HSA EDUCATION",
      category: "Khóa ôn thi đánh giá năng lực Bộ công An"
    },
    {
      id: 2,
      title: "2K8.V-ACT.PT01.Xuất phát sớm Đánh Giá Năng Lực ĐHQG HCM",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75",
      author: "HSA EDUCATION",
      price: 3900000,
      originalPrice: 7800000,
      discount: "-50%",
      category: "Khóa ôn thi đánh giá năng lực Hồ Chí Minh"
    },
    {
      id: 3,
      title: "2K7. CẤP TỐC LUYỆN ĐỀ SƯ PHẠM HÀ NỘI - ĐỢT 1",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F2d161da0-637f-4fe7-a4c8-52783d3b849b_bcb0451c-02ec-4947-9bbf-df63516ec0f0.jpg&w=828&q=75",
      author: "HSA EDUCATION",
      category: "Khóa ôn thi đánh giá năng lực Sư phạm Hà Nội"
    },
    {
      id: 4,
      title: "2K7. CẤP TỐC LUYỆN ĐỀ SƯ PHẠM HÀ NỘI - LỊCH SỬ",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F52d2d817-b02f-4a26-928d-d15ac2f8bcdd_476610940_1150239717102692_4791752638081684900_n.jpg&w=828&q=75",
      author: "HSA EDUCATION",
      category: "Khóa ôn thi đánh giá năng lực Sư phạm Hà Nội"
    },
    {
      id: 5,
      title: "2K7. CẤP TỐC LUYỆN ĐỀ SƯ PHẠM HÀ NỘI - SINH HỌC",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F75a27ced-7f30-4fd6-83aa-e363fedc26fd_z6375564852856_a96ac42f0e3784b4ebe7c5e883ff2212.jpg&w=828&q=75",
      author: "HSA EDUCATION",
      category: "Khóa ôn thi đánh giá năng lực Sư phạm Hà Nội"
    },
    {
      id: 6,
      title: "2K7. CẤP TỐC LUYỆN ĐỀ SƯ PHẠM HÀ NỘI - TOÁN",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3d8ef2ff-905b-457e-ba68-5ee6c05055fc_z6446517291364_5b9143c7c70516396a0faa743790c89a.jpg&w=828&q=75",
      author: "HSA EDUCATION",
      category: "Khóa ôn thi đánh giá năng lực Sư phạm Hà Nội"
    },
    {
      id: 7,
      title: "2K8.TSA.BK01 - XPS ĐÁNH GIÁ TƯ DUY ĐẠI HỌC BÁCH KHOA HÀ NỘI",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75",
      author: "HSA EDUCATION",
      price: 3900000,
      originalPrice: 7800000,
      discount: "-50%",
      category: "Khóa ôn đánh giá TSA Bách Khoa Hà Nội"
    },
    {
      id: 8,
      title: "Khóa học HSA Cơ bản",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75",
      author: "HSA EDUCATION",
      price: 2900000,
      originalPrice: 5800000,
      discount: "-50%",
      category: "Khóa ôn thi đánh giá năng lực HSA"
    },
    {
      id: 9,
      title: "Khóa học HSA Nâng cao",
      image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75",
      author: "HSA EDUCATION",
      price: 3900000,
      originalPrice: 7800000,
      discount: "-50%",
      category: "Khóa ôn thi đánh giá năng lực HSA"
    }
  ];

  const courseCategories = [
    {
      title: "Khóa ôn thi đánh giá năng lực HSA",
      href: "#"
    },
    {
      title: "Khóa ôn đánh giá tư duy TSA Bách Khoa Hà Nội",
      href: "#"
    },
    {
      title: "Khóa ôn thi đánh giá năng lực Hồ Chí Minh",
      href: "#"
    },
    {
      title: "Khóa ôn thi đánh giá năng lực Bộ công An",
      href: "#"
    },
    {
      title: "Khóa ôn thi đánh giá năng lực Sư phạm Hà Nội",
      href: "#"
    },
    {
      title: "ID sách Đánh giá năng lực HSA",
      href: "#"
    },
    {
      title: "ID sách Đánh giá năng lực HCM-VACT",
      href: "#"
    },
    {
      title: "ID sách Đánh giá năng lực BCA",
      href: "#"
    },
    {
      title: "ID sách Đánh giá Tư duy TSA",
      href: "#"
    },
    {
      title: "ID sách Đánh giá năng lực SPHN",
      href: "#"
    },
    {
      title: "Thi thử HSA cho đợt 1",
      href: "#"
    }
  ];

  const filteredCourses = selectedCategory 
    ? courses.filter(course => course.category === selectedCategory)
    : courses;

  const handleCategoryClick = (category: string, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-[calc(100vh-75px)] pt-[30px]">
          {/* Left Sidebar - Course Categories */}
          <div className="hidden md:block relative">
            <div className="sticky top-[75px] h-[calc(100vh-75px)]">
              <div className="h-full pr-2">
                <div className="h-full">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h2 className="font-medium mb-4">Danh mục khóa học</h2>
                    <div className="space-y-2">
                      {courseCategories.map((category, index) => (
                        <Link
                          key={index}
                          href={category.href}
                          onClick={(e) => handleCategoryClick(category.title, e)}
                          className={`block text-sm py-1 ${
                            selectedCategory === category.title 
                              ? 'text-[#4CAF50] font-medium' 
                              : 'text-gray-600 hover:text-[#4CAF50]'
                          }`}
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <main className="col-span-1 md:col-span-3">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
              <Link href="/" className="hover:text-[#4CAF50]">Trang chủ</Link>
              <span>/</span>
              <span>Khóa học</span>
              {selectedCategory && (
                <>
                  <span>/</span>
                  <span className="text-[#4CAF50]">{selectedCategory}</span>
                </>
              )}
            </div>

            {/* Title and Sort Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <h1 className="text-2xl font-bold">
                {selectedCategory || "Danh mục khóa học"}
              </h1>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 text-sm">
                  Mới nhất
                </button>
                <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 text-sm">
                  Giá tăng dần
                </button>
                <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 text-sm">
                  Giá giảm dần
                </button>
              </div>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative pt-[100%]">
                    {course.discount && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded z-10">
                        {course.discount}
                      </div>
                    )}
                    <Image 
                      src={course.image} 
                      alt={course.title}
                      fill
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{course.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{course.author}</span>
                    </div>
                    {course.price && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-green-600 font-medium">{course.price.toLocaleString()}đ</span>
                        <span className="text-gray-400 line-through text-sm">{course.originalPrice.toLocaleString()}đ</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Show message when no courses found */}
            {filteredCourses.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">Không tìm thấy khóa học nào trong danh mục này</p>
              </div>
            )}

            {/* Pagination */}
            {filteredCourses.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#4CAF50] text-white">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50">
                    3
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
} 