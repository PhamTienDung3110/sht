import Image from 'next/image';
import Link from 'next/link';

interface Exam {
  studentName: string;
  time: string;
  duration: string;
  score: string;
  avatar: string;
}

interface QA {
  title: string;
  date: string;
  icon: string;
}

const ExamList = () => {
  const exams: Exam[] = [
    {
      studentName: 'Mạc Thanh Toàn',
      time: '18:36 23/03/2025',
      duration: '93.72 phút',
      score: '1160',
      avatar: 'M'
    },
    {
      studentName: 'Lương Trọng Lương',
      time: '10:43 22/03/2025',
      duration: '136.23 phút',
      score: '1130',
      avatar: 'L'
    },
    {
      studentName: 'Lê Đăng Khoa',
      time: '19:23 22/03/2025',
      duration: '146.23 phút',
      score: '1130',
      avatar: 'L'
    },
    {
      studentName: 'Nguyễn Công Nhân',
      time: '09:16 23/03/2025',
      duration: '144.86 phút',
      score: '1130',
      avatar: 'N'
    },
    {
      studentName: 'Nguyễn Lưu Bảo Chi',
      time: '15:27 23/03/2025',
      duration: '19.01 phút',
      score: '1100',
      avatar: 'N'
    },
    {
      studentName: 'Lê Thị Kiều nhỏ',
      time: '20:37 21/03/2025',
      duration: '130.69 phút',
      score: '1070',
      avatar: 'L'
    },
    {
      studentName: 'Nguyễn Hoàng Như Bảo',
      time: '12:20 23/03/2025',
      duration: '81.50 phút',
      score: '1070',
      avatar: 'N'
    },
    {
      studentName: 'Nguyễn Đình Dũng',
      time: '20:21 21/03/2025',
      duration: '115.78 phút',
      score: '1070',
      avatar: 'N'
    }
  ];

  const qaItems: QA[] = [
    {
      title: 'Đăng ký tài khoản thi Đánh giá năng lực 2025 tại ĐHQG Hà Nội.',
      date: '27/12/2024 16:08',
      icon: 'https://hsa-education.sgp1.digitaloceanspaces.com/084c9500-7414-4c44-9583-3a763bb3d889_fb6cc526-0462-42c2-947a-68c3efd129d6_hoi-dap-dgnl-hsa.jpg'
    },
    {
      title: 'TỔNG HỢP CÁC CÂU HỎI THẮC MẮC VỀ KỲ THI ĐÁNH GIÁ NĂNG LỰC',
      date: '03/11/2024 22:55',
      icon: 'https://hsa-education.sgp1.digitaloceanspaces.com/084c9500-7414-4c44-9583-3a763bb3d889_fb6cc526-0462-42c2-947a-68c3efd129d6_hoi-dap-dgnl-hsa.jpg'
    },
    {
      title: 'Những điểm mới trong kỳ thi Đánh giá năng lực HSA năm 2025',
      date: '03/01/2025 14:31',
      icon: 'https://hsa-education.sgp1.digitaloceanspaces.com/084c9500-7414-4c44-9583-3a763bb3d889_fb6cc526-0462-42c2-947a-68c3efd129d6_hoi-dap-dgnl-hsa.jpg'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="divide-y">
        {exams.map((exam, index) => (
          <div key={index} className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                {exam.avatar}
              </div>
              <div>
                <h3 className="text-[#3d82af] font-medium text-sm">
                  {exam.studentName}
                </h3>
                <p className="text-gray-500 text-xs">
                  {exam.time} ({exam.duration})
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="px-3 py-1 bg-[#E91E63] text-white rounded-full text-sm font-medium">
                {exam.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 text-center border-b">
        <button className="text-[#3d82af] font-medium text-sm hover:text-[#2E7D32] transition-colors duration-200">
          Kích hoạt thẻ
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Hỏi đáp</h3>
          <Link href="/qa" className="text-sm text-gray-500 hover:text-gray-700">
            Xem tất cả
          </Link>
        </div>
        <div className="space-y-4">
          {qaItems.map((item, index) => (
            <Link href="/qa" key={index} className="flex items-start space-x-3 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-[#E8F5E9]">
                <Image
                  src={item.icon}
                  alt="HSA Icon"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800 group-hover:text-[#3d82af] line-clamp-2 transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {item.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamList; 