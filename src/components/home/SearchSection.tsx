import Link from 'next/link';

const SearchSection = () => {
  const searchItems = [
    {
      text: 'Theo dõi thông tin kỳ thi ở đâu?',
      href: '/exam-tracking',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      text: 'Cách đăng ký khóa học',
      href: '/course-registration',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      text: 'Hỏi đáp về kỳ thi',
      href: '/exam-qa',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      text: 'Tài liệu ôn thi sht',
      href: '/practice-materials',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      text: 'Từ khóa 5',
      href: '/course-5',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      text: 'Thông tin về kỳ thi sht',
      href: '/exam-info',
      bgColor: 'bg-[#E8F5E9]'
    }
  ];

  return (
    <div className="mb-4 p-3 bg-white rounded-lg">
      <h2 className="text-xl font-medium text-[#3d82af] mb-4">Bạn đang tìm kiếm gì?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${item.bgColor} hover:bg-[#3d82af] hover:text-white bg-[#bfdff5] p-3 rounded-lg text-center shadow-sm transition-colors duration-200 text-gray-700 text-sm`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchSection; 