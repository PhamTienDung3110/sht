import Link from 'next/link';

const exams = [
  {
    id: 1,
    title: 'Đề thi thử THPT Quốc Gia 2024 - Môn Toán',
    duration: 90,
    totalQuestions: 50,
    subject: 'Toán',
  },
  {
    id: 2,
    title: 'Đề thi thử THPT Quốc Gia 2024 - Môn Vật Lý',
    duration: 50,
    totalQuestions: 40,
    subject: 'Vật Lý',
  },
  {
    id: 3,
    title: 'Đề thi thử THPT Quốc Gia 2024 - Môn Hóa Học',
    duration: 50,
    totalQuestions: 40,
    subject: 'Hóa Học',
  },
];

export default function ExamsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#3d82af] mb-6">Danh sách đề thi</h1>
      <div className="grid gap-6">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{exam.title}</h2>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
              <div>
                <span className="font-medium">Thời gian:</span> {exam.duration} phút
              </div>
              <div>
                <span className="font-medium">Số câu hỏi:</span> {exam.totalQuestions}
              </div>
              <div>
                <span className="font-medium">Môn:</span> {exam.subject}
              </div>
            </div>
            <Link 
              href={`/exams/${exam.id}/info`}
              className="inline-block bg-[#3d82af] text-white px-4 py-2 rounded-md hover:bg-[#2c6a8f] transition-colors"
            >
              Bắt đầu thi
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 