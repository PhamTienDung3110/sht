'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface VideoPopupProps {
  videoId: string;
  onClose: () => void;
}

const VideoPopup = ({ videoId, onClose }: VideoPopupProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white z-10 hover:text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default function CourseDetailPage() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const courseSections = {
    'math': {
      title: 'PHẦN I: TOÁN HỌC',
      lessons: [
        { title: 'Buổi 1: Số học và Đại số', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 2: Hình học và Đo lường', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 3: Thống kê và Xác suất', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 4: Tư duy Logic Toán học', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 5: Bài tập tổng hợp', videoId: 'dQw4w9WgXcQ' }
      ]
    },
    'vietnamese': {
      title: 'PHẦN II: TIẾNG VIỆT',
      lessons: [
        { title: 'Buổi 1: Ngữ âm và Từ vựng', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 2: Ngữ pháp và Cấu trúc câu', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 3: Đọc hiểu văn bản', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 4: Viết đoạn và bài văn', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 5: Bài tập tổng hợp', videoId: 'dQw4w9WgXcQ' }
      ]
    },
    'english': {
      title: 'PHẦN III: TIẾNG ANH',
      lessons: [
        { title: 'Buổi 1: Grammar and Vocabulary', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 2: Reading Comprehension', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 3: Listening Skills', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 4: Writing Skills', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 5: Practice Tests', videoId: 'dQw4w9WgXcQ' }
      ]
    },
    'analysis': {
      title: 'PHẦN IV: PHÂN TÍCH SỐ LIỆU- TƯ DUY LOGIC',
      lessons: [
        { title: 'Buổi 1: Phân tích dữ liệu cơ bản', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 2: Suy luận logic', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 3: Giải quyết vấn đề', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 4: Tư duy phản biện', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 5: Bài tập tổng hợp', videoId: 'dQw4w9WgXcQ' }
      ]
    },
    'science': {
      title: 'PHẦN V: KHOA HỌC',
      lessons: [
        { title: 'Buổi 1: Vật lý cơ bản', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 2: Hóa học đại cương', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 3: Sinh học cơ bản', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 4: Khoa học tự nhiên tổng hợp', videoId: 'dQw4w9WgXcQ' },
        { title: 'Buổi 5: Bài tập thực hành', videoId: 'dQw4w9WgXcQ' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50  mt-[50px]">
      {activeVideo && (
        <VideoPopup
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
      <div className="container mx-auto px-4">
        {/* Breadcrumb - Ẩn trên mobile */}
        <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mt-4">
          <Link href="/" className="hover:text-[#3d82af]">Trang chủ</Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-[#3d82af]">Khóa ôn thi đánh giá năng lực Hồ Chí Minh</Link>
          <span>/</span>
          <span className="text-[#3d82af] line-clamp-1">2K8.V-ACT.PT01.Xuất phát sớm Đánh Giá Năng Lực V-ACT 2K8-2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-75px)] pt-[30px]">
          {/* Right Sidebar hiển thị đầu tiên trên mobile */}
          <div className="lg:order-2 lg:col-span-1">
            <div className="lg:sticky lg:top-[75px]">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative pt-[60%]">
                  <Image
                    src="https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75"
                    alt="Course thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                    -50%
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-[#3d82af]">3.900.000đ</div>
                    <div className="text-gray-400 line-through">7.800.000đ</div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">Thời lượng: 0 giờ 0 phút</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-sm">Giáo trình: 25 bài học</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span className="text-sm">Học mọi lúc mọi nơi</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Học trên mọi thiết bị: Mobile, TV, PC</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-[#3d82af] text-white rounded-lg hover:bg-[#45a049] transition-colors font-medium">
                    ĐĂNG KÝ HỌC
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:order-1 lg:col-span-3">
            {/* Course Title */}
            <h1 className="text-xl sm:text-2xl font-bold mb-6">
              2K8.V-ACT.PT01.Xuất phát sớm Đánh Giá Năng Lực V-ACT 2K8-2026
            </h1>

            {/* Course Content */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-[#4BA0D8] mb-4">Giới thiệu khóa học</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Khóa học &quot;2K8.V-ACT.PT01.Xuất phát sớm Đánh Giá Năng Lực V-ACT 2K8-2026&quot; là chương trình đào tạo chuyên sâu được thiết kế đặc biệt cho học sinh 2K8 (lớp 9) chuẩn bị cho kỳ thi đánh giá năng lực sắp tới.
                  </p>

                  <div className="pl-4 space-y-2">
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4BA0D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Lộ trình học tập được thiết kế khoa học, bài bản theo chuẩn V-ACT mới nhất</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4BA0D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Đội ngũ giảng viên giàu kinh nghiệm, tận tâm hướng dẫn</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4BA0D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Tài liệu học tập độc quyền, cập nhật theo xu hướng đề thi mới nhất</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#4BA0D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Phương pháp học tập hiệu quả, tập trung vào rèn luyện kỹ năng làm bài thi</span>
                    </p>
                  </div>

                  <p className="font-medium">
                    Sau khi hoàn thành khóa học, học viên sẽ:
                  </p>

                  <div className="pl-4 space-y-2">
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#3d82af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Nắm vững kiến thức cơ bản và nâng cao trong các môn học</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#3d82af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Phát triển tư duy logic và kỹ năng giải quyết vấn đề</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#3d82af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Tự tin làm bài thi với các dạng đề V-ACT khác nhau</span>
                    </p>
                    <p className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#3d82af]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Có chiến lược làm bài hiệu quả và quản lý thời gian tốt</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-[#4BA0D8] mb-4">Nội dung khóa học</h2>
                <div className="space-y-4">
                  {Object.entries(courseSections).map(([sectionId, section]) => (
                    <div key={sectionId} className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full p-3 sm:p-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
                        onClick={() => toggleSection(sectionId)}
                      >
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5" disabled />
                          <span className="font-medium text-sm sm:text-base">{section.title}</span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transition-transform ${expandedSections[sectionId] ? 'transform rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedSections[sectionId] && (
                        <div className="border-t">
                          {section.lessons.map((lesson, index) => (
                            <button
                              key={index}
                              className="w-full p-3 sm:p-4 flex items-center space-x-2 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                              onClick={() => setActiveVideo(lesson.videoId)}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-sm sm:text-base text-gray-700">{lesson.title}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#4BA0D8] mb-4">Thông tin giáo viên</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 relative flex-shrink-0">
                    <Image
                      src="https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75"
                      alt="HSA EDUCATION"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">HSA EDUCATION</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <span>4.5 xếp hạng giảng viên</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>15000 học viên</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>10 khóa học</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 