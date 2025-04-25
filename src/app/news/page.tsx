// 'use client'

// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';

// export default function NewsPage() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const news = [
//     {
//       id: 1,
//       title: "Thông báo về lịch thi thử HSA đợt 1 năm 2024",
//       image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2Fa840bb4d-9bbc-4136-8960-d0e82f35dc71_476610940_1150239717102692_4791752638081684900_n.jpg&w=828&q=75",
//       author: "HSA EDUCATION",
//       date: "30/03/2024",
//       category: "Thông báo"
//     },
//     {
//       id: 2,
//       title: "Hướng dẫn chi tiết về kỳ thi đánh giá năng lực HSA 2024",
//       image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F3ebaa1ad-9842-4ed5-bd0c-d8fba82d3d4c_T%25E1%25BA%25B7ng%2520s%25C3%25A1ch.png&w=828&q=75",
//       author: "HSA EDUCATION",
//       date: "29/03/2024",
//       category: "Hướng dẫn"
//     },
//     {
//       id: 3,
//       title: "Kết quả thi thử HSA đợt 1 - Tháng 3/2024",
//       image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F2d161da0-637f-4fe7-a4c8-52783d3b849b_bcb0451c-02ec-4947-9bbf-df63516ec0f0.jpg&w=828&q=75",
//       author: "HSA EDUCATION",
//       date: "28/03/2024",
//       category: "Kết quả"
//     },
//     {
//       id: 4,
//       title: "Tuyển sinh 2024: Những thay đổi mới trong kỳ thi HSA",
//       image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F52d2d817-b02f-4a26-928d-d15ac2f8bcdd_476610940_1150239717102692_4791752638081684900_n.jpg&w=828&q=75",
//       author: "HSA EDUCATION",
//       date: "27/03/2024",
//       category: "Tuyển sinh"
//     },
//     {
//       id: 5,
//       title: "Phương pháp ôn thi hiệu quả cho kỳ thi HSA",
//       image: "https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F75a27ced-7f30-4fd6-83aa-e363fedc26fd_z6375564852856_a96ac42f0e3784b4ebe7c5e883ff2212.jpg&w=828&q=75",
//       author: "HSA EDUCATION",
//       date: "26/03/2024",
//       category: "Phương pháp học tập"
//     }
//   ];

//   const newsCategories = [
//     {
//       title: "Thông báo",
//       href: "#"
//     },
//     {
//       title: "Hướng dẫn",
//       href: "#"
//     },
//     {
//       title: "Kết quả",
//       href: "#"
//     },
//     {
//       title: "Tuyển sinh",
//       href: "#"
//     },
//     {
//       title: "Phương pháp học tập",
//       href: "#"
//     },
//     {
//       title: "Sự kiện",
//       href: "#"
//     },
//     {
//       title: "Tin tức chung",
//       href: "#"
//     }
//   ];

//   const filteredNews = selectedCategory 
//     ? news.filter(item => item.category === selectedCategory)
//     : news;

//   const handleCategoryClick = (category: string, e: React.MouseEvent) => {
//     e.preventDefault();
//     setSelectedCategory(selectedCategory === category ? null : category);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50  mt-[50px]">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-[calc(100vh-75px)] pt-[30px]">
//           {/* Left Sidebar - News Categories */}
//           <div className="hidden md:block relative">
//             <div className="sticky top-[75px] h-[calc(100vh-75px)]">
//               <div className="h-full pr-2">
//                 <div className="h-full">
//                   <div className="bg-white rounded-lg p-4 shadow-sm">
//                     <h2 className="font-medium mb-4">Danh mục tin tức</h2>
//                     <div className="space-y-2">
//                       {newsCategories.map((category, index) => (
//                         <Link
//                           key={index}
//                           href={category.href}
//                           onClick={(e) => handleCategoryClick(category.title, e)}
//                           className={`block text-sm py-1 ${
//                             selectedCategory === category.title 
//                               ? 'text-[#3d82af] font-medium' 
//                               : 'text-gray-600 hover:text-[#3d82af]'
//                           }`}
//                         >
//                           {category.title}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <main className="col-span-1 md:col-span-3">
//             {/* Breadcrumb */}
//             <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
//               <Link href="/" className="hover:text-[#3d82af]">Trang chủ</Link>
//               <span>/</span>
//               <span>Tin tức</span>
//               {selectedCategory && (
//                 <>
//                   <span>/</span>
//                   <span className="text-[#3d82af]">{selectedCategory}</span>
//                 </>
//               )}
//             </div>

//             {/* Title and Sort Section */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
//               <h1 className="text-2xl font-bold">
//                 {selectedCategory || "Tin tức"}
//               </h1>
//               <div className="flex flex-wrap gap-2">
//                 <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 text-sm">
//                   Mới nhất
//                 </button>
//                 <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 text-sm">
//                   Xem nhiều nhất
//                 </button>
//               </div>
//             </div>

//             {/* News Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {filteredNews.map((news) => (
//                 <Link 
//                   key={news.id} 
//                   href={`/news/${news.title.toLowerCase().replace(/ /g, '-')}`}
//                   className="block h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <div className="h-full flex flex-col">
//                     <div className="relative pt-[75%]">
//                       <Image
//                         src={news.image}
//                         alt={news.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     <div className="p-4 flex flex-col flex-grow">
//                       <div className="flex items-center space-x-4 mb-3">
//                         <span className="text-xs text-[#3d82af]">{news.category}</span>
//                         <span className="text-xs text-gray-600">{news.date}</span>
//                       </div>
//                       <h3 className="font-medium text-base mb-2 line-clamp-2 group-hover:text-[#3d82af] flex-grow">
//                         {news.title}
//                       </h3>
//                       <div className="flex items-center text-sm text-gray-600 mt-auto">
//                         <span>{news.author}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Show message when no news found */}
//             {filteredNews.length === 0 && (
//               <div className="text-center py-8">
//                 <p className="text-gray-500">Không tìm thấy tin tức nào trong danh mục này</p>
//               </div>
//             )}

//             {/* Pagination */}
//             {filteredNews.length > 0 && (
//               <div className="mt-8 flex justify-center">
//                 <div className="flex items-center space-x-2">
//                   <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                   <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#3d82af] text-white">
//                     1
//                   </button>
//                   <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50">
//                     2
//                   </button>
//                   <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50">
//                     3
//                   </button>
//                   <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// } 