import Image from 'next/image';

interface Teacher {
  name: string;
  image: string;
  title: string;
}

const teachers: Teacher[] = [
  {
    name: 'Thầy Lê Văn Hoa',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F14b2eba8-5913-4334-b31c-98bfc152d126_2ed94b0d-fd46-4c8f-a742-06137c9de371.jpeg&w=128&q=75',
    title: 'Giảng viên'
  },
  {
    name: 'TS. Đặng Ngọc Khuông',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F905144ca-ba0c-4d5b-a5f7-9a4c08cc2b94_4.png&w=128&q=75',
    title: 'Tiến sĩ'
  },
  {
    name: 'Thầy Đỗ Xuân Thắng',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F03cd223f-2394-4e7e-8c74-ae2478dfe14b_6.png&w=128&q=75',
    title: 'Giảng viên'
  },
  {
    name: 'Thầy Nguyễn Hồng Quân',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F35c4ee7c-399a-4612-a65e-417fd92f7a7d_3.png&w=128&q=75',
    title: 'Giảng viên'
  },
  {
    name: 'Cô Nguyễn Hương Sen',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F722b0897-511c-4b3c-9e5f-81448268f06c_1.png&w=128&q=75',
    title: 'Giảng viên'
  },
  {
    name: 'Cô Phạm Thị Diễm',
    image: 'https://hsavnu.edu.vn/_next/image?url=https%3A%2F%2Fhsa-education.sgp1.digitaloceanspaces.com%2F6d02eb12-a368-4202-bf9a-cd0be8ead3f4_2.png&w=128&q=75',
    title: 'Giảng viên'
  }
];

const TeacherSection = () => {
  return (
    <div className="mb-4 p-3 bg-white rounded-lg">
      <h2 className="text-xl font-medium text-gray-800 mb-4">Đội ngũ giáo viên chất lượng</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {teachers.map((teacher, index) => (
          <div key={index} className="relative group cursor-pointer rounded-lg">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#E8F5E9]">
              <Image
                src={teacher.image}
                alt={teacher.name}
                width={200}
                height={267}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
              <h3 className="text-white text-sm font-medium truncate group-hover:text-green-400 transition-colors duration-300">
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