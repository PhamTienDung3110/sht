'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaClock } from 'react-icons/fa';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from '@mui/material';

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
  showResult?: boolean; // Cấu hình có hiển thị kết quả hay không
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
    showResult: true
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
  },
];

export default function ExamTestPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 phút
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQuestionList, setShowQuestionList] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [openSubmitDialog, setOpenSubmitDialog] = useState(false);
  const [openTimeUpDialog, setOpenTimeUpDialog] = useState(false);

  useEffect(() => {
    // Kiểm tra xem có đang trong bài thi không
    const examInfo = localStorage.getItem('examInfo');
    if (!examInfo) {
      router.push(`/exams/${params.id}/info`);
      return;
    }

    // Kiểm tra xem có phải bài thi mới không
    const savedState = localStorage.getItem('examState');
    if (savedState) {
      const { examId } = JSON.parse(savedState);
      if (examId !== params.id) {
        // Nếu là bài thi mới, xóa dữ liệu cũ
        localStorage.removeItem('examAnswers');
        localStorage.removeItem('examState');
      }
    }

    // Khôi phục câu trả lời từ localStorage
    const savedAnswers = localStorage.getItem('examAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }

    // Khôi phục thời gian và câu hỏi hiện tại
    if (savedState) {
      const { currentQuestion: savedQuestion, startTime: savedStartTime } = JSON.parse(savedState);
      setCurrentQuestion(savedQuestion);
      setStartTime(savedStartTime);
      
      // Tính thời gian còn lại
      const elapsedTime = Math.floor((Date.now() - savedStartTime) / 1000);
      const remainingTime = Math.max(0, 90 * 60 - elapsedTime);
      setTimeLeft(remainingTime);
    } else {
      // Lần đầu vào bài thi
      const newStartTime = Date.now();
      setStartTime(newStartTime);
      localStorage.setItem('examState', JSON.stringify({
        currentQuestion: 0,
        startTime: newStartTime,
        examId: params.id
      }));
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setOpenTimeUpDialog(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Lưu trạng thái khi chuyển câu hỏi
  useEffect(() => {
    if (startTime) {
      localStorage.setItem('examState', JSON.stringify({
        currentQuestion,
        startTime,
        examId: params.id
      }));
    }
  }, [currentQuestion, startTime, params.id]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: number, answer: string) => {
    const newAnswers = {
      ...answers,
      [questionId]: answer,
    };
    setAnswers(newAnswers);
    // Lưu câu trả lời vào localStorage
    localStorage.setItem('examAnswers', JSON.stringify(newAnswers));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const examInfo = JSON.parse(localStorage.getItem('examInfo') || '{}');
      const result = {
        examId: params.id,
        studentInfo: examInfo,
        answers,
        timeSpent: 90 * 60 - timeLeft,
        questions: mockQuestions.map(q => ({
          ...q,
          showResult: q.showResult
        }))
      };

      // TODO: Gửi kết quả lên server
      console.log('Kết quả bài thi:', result);

      // Xóa dữ liệu bài thi sau khi nộp
      localStorage.removeItem('examAnswers');
      localStorage.removeItem('examState');

      router.push(`/exams/${params.id}/result`);
    } catch (error) {
      console.error('Lỗi khi nộp bài:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenSubmitDialog = () => {
    setOpenSubmitDialog(true);
  };

  const handleCloseSubmitDialog = () => {
    setOpenSubmitDialog(false);
  };

  const handleConfirmSubmit = () => {
    handleCloseSubmitDialog();
    handleSubmit();
  };

  const handleTimeUp = () => {
    setOpenTimeUpDialog(false);
    handleSubmit();
  };

  const currentQuestionData = mockQuestions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-[#3d82af]">Bài thi thử</h1>
        <div className="text-xl font-bold text-red-600">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Bảng câu hỏi */}
        <div className="lg:w-1/5">
          <div className="bg-white rounded-lg shadow-md p-3">
            <h2 className="text-sm font-semibold mb-3">Danh sách câu hỏi</h2>
            <div className="grid grid-cols-5 gap-1">
              {mockQuestions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => setCurrentQuestion(index)}
                  className={`relative p-1.5 rounded-md text-center text-sm ${
                    currentQuestion === index
                      ? 'bg-[#3d82af] text-white'
                      : answers[question.id]
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <span className="relative z-10">{index + 1}</span>
                  {answers[question.id] && (
                    <FaCheckCircle className="absolute top-0.5 right-0.5 w-3 h-3 text-green-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Nội dung câu hỏi */}
        <div className="lg:w-4/5">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">
                Câu {currentQuestion + 1}/{mockQuestions.length}
              </h2>
              <p className="text-gray-700 mb-4">{currentQuestionData.content}</p>
              <div className="space-y-3">
                {Object.entries(currentQuestionData.options).map(([key, value]) => (
                  <label
                    key={key}
                    className={`block p-3 border rounded-md cursor-pointer hover:bg-gray-50 ${
                      answers[currentQuestionData.id] === key
                        ? 'border-[#3d82af] bg-blue-50'
                        : 'border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestionData.id}`}
                      value={key}
                      checked={answers[currentQuestionData.id] === key}
                      onChange={() => handleAnswerSelect(currentQuestionData.id, key)}
                      className="mr-2"
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
              >
                Câu trước
              </button>
              <button
                onClick={() => setCurrentQuestion((prev) => Math.min(mockQuestions.length - 1, prev + 1))}
                disabled={currentQuestion === mockQuestions.length - 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50"
              >
                Câu tiếp
              </button>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleOpenSubmitDialog}
              disabled={isSubmitting}
              className="w-full bg-[#3d82af] text-white py-2 px-4 rounded-md hover:bg-[#2c6a8f] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Đang nộp bài...' : 'Nộp bài'}
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={openSubmitDialog}
        onClose={handleCloseSubmitDialog}
        aria-labelledby="submit-dialog-title"
        PaperProps={{
          sx: {
            borderRadius: '12px',
            width: '100%',
            maxWidth: {
              xs: '90%', // Mobile
              sm: '400px', // Tablet
              md: '500px' // Desktop
            },
            m: {
              xs: 2, // Mobile
              sm: 3 // Desktop
            },
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <Box sx={{ 
          p: {
            xs: 2, // Mobile
            sm: 3 // Desktop
          }
        }}>
          <DialogTitle 
            id="submit-dialog-title"
            sx={{
              textAlign: 'center',
              color: '#3d82af',
              fontSize: {
                xs: '1.25rem', // Mobile
                sm: '1.5rem' // Desktop
              },
              fontWeight: 'bold',
              pb: 1
            }}
          >
            Xác nhận nộp bài
          </DialogTitle>
          <DialogContent sx={{ 
            textAlign: 'center', 
            py: 2,
            px: {
              xs: 1, // Mobile
              sm: 2 // Desktop
            }
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 2,
              color: '#3d82af'
            }}>
              <FaCheckCircle size={40} />
            </Box>
            <Typography variant="body1" sx={{ 
              color: '#4a5568',
              fontSize: {
                xs: '1rem', // Mobile
                sm: '1.1rem' // Desktop
              },
              mb: 1
            }}>
              Bạn có chắc chắn muốn nộp bài?
            </Typography>
            <Typography variant="body2" sx={{ 
              color: '#718096',
              fontSize: {
                xs: '0.9rem', // Mobile
                sm: '0.95rem' // Desktop
              }
            }}>
              Sau khi nộp bài, bạn sẽ không thể thay đổi câu trả lời.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ 
            justifyContent: 'center',
            gap: 2,
            pt: 2,
            flexDirection: {
              xs: 'column', // Mobile
              sm: 'row' // Desktop
            }
          }}>
            <Button 
              onClick={handleCloseSubmitDialog}
              variant="outlined"
              fullWidth
              sx={{
                color: '#3d82af',
                borderColor: '#3d82af',
                '&:hover': {
                  borderColor: '#2c6a8f',
                  backgroundColor: 'rgba(61, 130, 175, 0.04)'
                },
                py: 1
              }}
            >
              Hủy
            </Button>
            <Button 
              onClick={handleConfirmSubmit}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#3d82af',
                '&:hover': {
                  backgroundColor: '#2c6a8f'
                },
                py: 1
              }}
            >
              Xác nhận nộp bài
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Dialog hết thời gian */}
      <Dialog
        open={openTimeUpDialog}
        aria-labelledby="timeup-dialog-title"
        PaperProps={{
          sx: {
            borderRadius: '12px',
            width: '100%',
            maxWidth: {
              xs: '90%',
              sm: '400px',
              md: '500px'
            },
            m: {
              xs: 2,
              sm: 3
            },
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        <Box sx={{ 
          p: {
            xs: 2,
            sm: 3
          }
        }}>
          <DialogTitle 
            id="timeup-dialog-title"
            sx={{
              textAlign: 'center',
              color: '#e53e3e',
              fontSize: {
                xs: '1.25rem',
                sm: '1.5rem'
              },
              fontWeight: 'bold',
              pb: 1
            }}
          >
            Hết thời gian làm bài
          </DialogTitle>
          <DialogContent sx={{ 
            textAlign: 'center', 
            py: 2,
            px: {
              xs: 1,
              sm: 2
            }
          }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 2,
              color: '#e53e3e'
            }}>
              <FaClock size={40} />
            </Box>
            <Typography variant="body1" sx={{ 
              color: '#4a5568',
              fontSize: {
                xs: '1rem',
                sm: '1.1rem'
              },
              mb: 1
            }}>
              Thời gian làm bài đã kết thúc
            </Typography>
            <Typography variant="body2" sx={{ 
              color: '#718096',
              fontSize: {
                xs: '0.9rem',
                sm: '0.95rem'
              }
            }}>
              Hệ thống sẽ tự động nộp bài của bạn
            </Typography>
          </DialogContent>
          <DialogActions sx={{ 
            justifyContent: 'center',
            pt: 2
          }}>
            <Button 
              onClick={handleTimeUp}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#e53e3e',
                '&:hover': {
                  backgroundColor: '#c53030'
                },
                py: 1
              }}
            >
              Đồng ý
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
} 