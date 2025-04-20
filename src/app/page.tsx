import Banner from '@/components/home/Banner';
import SearchSection from '@/components/home/SearchSection';
import TeacherSection from '@/components/home/TeacherSection';
import ExamTypeSection from '@/components/home/ExamTypeSection';
import BookSection from '@/components/home/BookSection';
import StudentHonorSection from '@/components/home/StudentHonorSection';
import StudentFeedbackSection from '@/components/home/StudentFeedbackSection';
import ExamList from '@/components/home/ExamList';
import LeftSidebar from '@/components/layouts/LeftSidebar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 min-h-[calc(100vh-75px)] pt-[30px]">
          {/* Left Sidebar - Ẩn trên mobile, hiện trên desktop */}
          <div className="hidden md:block relative">
            <div className="sticky top-[75px] h-[calc(100vh-75px)]">
              <div className="h-full">
                <div className="h-full overflow-y-auto custom-scrollbar">
                  <LeftSidebar />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Full width trên mobile, 2/4 width trên desktop */}
          <main className="col-span-1 md:col-span-2">
            <div className="space-y-4">
              <Banner />
              <SearchSection />
              <TeacherSection />
              {/* <ExamTypeSection /> */}
              {/* <StudentHonorSection /> */}
              {/* <StudentFeedbackSection /> */}
              {/* <BookSection /> */}
            </div>
          </main>

          {/* Right Sidebar - Ẩn trên mobile, hiện trên desktop */}
          {/* <div className="hidden md:block relative">
            <div className="sticky top-[75px] h-[calc(100vh-75px)]">
              <div className="h-full pr-2">
                <div className="h-full overflow-y-auto custom-scrollbar">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h2 className="text-[18px] font-semibold mb-6">
                      BXH Đề thi thử Đánh Giá Năng Lực HCM ĐỢT Tháng 3 Lần 2
                    </h2>
                    <ExamList />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
