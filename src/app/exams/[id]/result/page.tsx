'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface Question {
  id: number;
  content: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  showResult: boolean;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    content: 'Câu 1: Đâu là đáp án đúng?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'a',
    showResult: false,
  },
  {
    id: 2,
    content: 'Câu 2: Chọn đáp án đúng nhất?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'b',
    showResult: false,
  },
  {
    id: 3,
    content: 'Câu 3: Đâu là đáp án chính xác?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'c',
    showResult: false,
  },
  {
    id: 4,
    content: 'Câu 4: Chọn đáp án đúng?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'd',
    showResult: false,
  },
  {
    id: 5,
    content: 'Câu 5: Đâu là đáp án chính xác nhất?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'a',
    showResult: false,
  },
  {
    id: 6,
    content: 'Câu 6: Chọn đáp án đúng?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'b',
    showResult: false,
  },
  {
    id: 7,
    content: 'Câu 7: Đâu là đáp án đúng?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'c',
    showResult: false,
  },
  {
    id: 8,
    content: 'Câu 8: Chọn đáp án chính xác?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'd',
    showResult: false,
  },
  {
    id: 9,
    content: 'Câu 9: Đâu là đáp án đúng nhất?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'a',
    showResult: false,
  },
  {
    id: 10,
    content: 'Câu 10: Chọn đáp án đúng?',
    options: {
      a: 'Đáp án A',
      b: 'Đáp án B',
      c: 'Đáp án C',
      d: 'Đáp án D',
    },
    correctAnswer: 'b',
    showResult: false,
  },
];

export default function ExamResultPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [examInfo, setExamInfo] = useState<any>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Lấy thông tin từ localStorage
    const info = JSON.parse(localStorage.getItem('examInfo') || '{}');
    const ans = JSON.parse(localStorage.getItem('examAnswers') || '{}');
    
    setExamInfo(info);
    setAnswers(ans);

    // Tính điểm
    let correctCount = 0;
    mockQuestions.forEach(question => {
      if (ans[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    setScore((correctCount / mockQuestions.length) * 10);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#3d82af] mb-6">Kết quả bài thi</h1>

        {/* Thông tin thí sinh */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Thông tin thí sinh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Họ và tên:</p>
              <p className="font-medium">{examInfo?.name}</p>
            </div>
            <div>
              <p className="text-gray-600">Email:</p>
              <p className="font-medium">{examInfo?.email}</p>
            </div>
            <div>
              <p className="text-gray-600">Số điện thoại:</p>
              <p className="font-medium">{examInfo?.phone}</p>
            </div>
            <div>
              <p className="text-gray-600">Điểm số:</p>
              <p className="font-medium text-2xl text-[#3d82af]">{score.toFixed(1)}</p>
            </div>
          </div>
        </div>

        {/* Chi tiết kết quả */}
        <div className="mt-8 space-y-6">
          {mockQuestions.map((question, index) => (
            <div key={question.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  Câu {index + 1}
                </h3>
                <p className="text-gray-700 mt-2">{question.content.replace(/^Câu \d+: /, '')}</p>
              </div>

              <div className="space-y-3">
                {Object.entries(question.options).map(([key, value]) => (
                  <div
                    key={key}
                    className={`p-3 border rounded-md ${
                      answers[question.id] === key
                        ? question.showResult && question.correctAnswer === key
                          ? 'border-green-500 bg-green-50'
                          : question.showResult && question.correctAnswer !== key
                          ? 'border-red-500 bg-red-50'
                          : 'border-blue-500 bg-blue-50'
                        : question.showResult && question.correctAnswer === key
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{key.toUpperCase()}.</span>
                      <span>{value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {question.showResult && (
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-600">
                    Đáp án đúng: {question.correctAnswer.toUpperCase()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push('/exams')}
            className="bg-[#3d82af] text-white py-2 px-6 rounded-md hover:bg-[#2c6a8f] transition-colors"
          >
            Quay lại danh sách đề thi
          </button>
        </div>
      </div>
    </div>
  );
} 