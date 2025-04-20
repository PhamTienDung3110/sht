import Image from 'next/image';
import thayBaTrung from '@/assets/img/thay-ba-trung.jpg';
import coPhanThiThuHa from '@/assets/img/co-phan-thi-thu-ha.jpg';
import coNgoc from '@/assets/img/co-ngoc.jpg';
import coPhuongSu from '@/assets/img/co-phuong-su.jpg';
import coMinhAnh from '@/assets/img/co-minh-anh.jpg';
import coMysinh from '@/assets/img/co-my-sinh.png';
import coThanhHuong from '@/assets/img/co-thanh-huong.jpg';
import coQuyenSinh from '@/assets/img/co-quyen-sinh.jpg';

interface Teacher {
  name: string;
  image: any;
  title: string;
}

const teachers: Teacher[] = [
  {
    name: 'Thầy Ba Trung',
    image: thayBaTrung,
    title: 'Giảng viên'
  },
  {
    name: 'Cô Phạm Thị Thu Hà',
    image: coPhanThiThuHa,
    title: 'Tiến sĩ'
  },
  {
    name: 'Cô Ngọc',
    image: coNgoc,
    title: 'Giảng viên'
  },
  {
    name: 'Cô Phương (Sử)',
    image: coPhuongSu,
    title: 'Giảng viên'
  },
  {
    name: 'Cô Minh Anh',
    image: coMinhAnh,
    title: 'Giảng viên'
  },
  // {
  //   name: 'Cô My (sinh)',
  //   image: coMysinh,
  //   title: 'Giảng viên'
  // },
  // {
  //   name: 'Cô Thanh Hương',
  //   image: coThanhHuong,
  //   title: 'Giảng viên'
  // },
  // {
  //   name: 'Cô Quyên (Sinh)',
  //   image: coQuyenSinh,
  //   title: 'Giảng viên'
  // }
];

const TeacherSection = () => {
  return (
    <div className="mb-4 p-3 bg-white rounded-lg">
      <h2 className="text-xl font-medium text-[#3d82af] mb-4">Đội ngũ giáo viên chất lượng</h2>
      <div className="flex overflow-x-auto scrollbar-none gap-4 pb-2 no-scrollbar">
        {teachers.map((teacher, index) => (
          <div key={index} className="relative group cursor-pointer rounded-lg w-[16%] min-w-[16%]">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#E8F5E9]">
              <Image
                src={teacher.image}
                alt={teacher.name}
                width={200}
                height={267}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
              <h3 className="text-white text-sm font-medium truncate group-hover:text-[#3d82af] transition-colors duration-300">
                {teacher.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSection; 