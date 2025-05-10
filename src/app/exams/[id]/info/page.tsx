'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Vui lòng nhập họ và tên')
    .min(2, 'Họ và tên phải có ít nhất 2 ký tự')
    .max(50, 'Họ và tên không được quá 50 ký tự'),
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .email('Email không hợp lệ'),
  phone: yup
    .string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/^[0-9]{10}$/, 'Số điện thoại phải có 10 chữ số')
});

type FormData = {
  name: string;
  email: string;
  phone: string;
};

export default function ExamInfoPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const onSubmit = (data: FormData) => {
    // Lưu thông tin vào localStorage
    localStorage.setItem('examInfo', JSON.stringify(data));
    // Chuyển đến trang làm bài thi
    router.push(`/exams/${params.id}/test`);
  };

  return (
    <div className="bg-gray-50 container mx-auto mt-[100px]">
      <Box sx={{ maxWidth: 600, mx: 'auto', padding: '0 10px 0 10px' }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            textAlign: 'center',
            color: '#3d82af',
            fontWeight: 'bold',
            mb: 4
          }}
        >
          Thông tin thí sinh
        </Typography>
        
        <Box 
          component="form" 
          onSubmit={handleSubmit(onSubmit)}
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <TextField
            {...register('name')}
            label="Họ và tên"
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#3d82af',
                },
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3d82af',
              },
            }}
          />

          <TextField
            {...register('email')}
            label="Email"
            type="text"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#3d82af',
                },
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3d82af',
              },
            }}
          />

          <TextField
            {...register('phone')}
            label="Số điện thoại"
            error={!!errors.phone}
            helperText={errors.phone?.message}
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#3d82af',
                },
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3d82af',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              backgroundColor: '#3d82af',
              '&:hover': {
                backgroundColor: '#2c6a8f'
              },
              py: 1.5,
              mt: 2
            }}
          >
            {isSubmitting ? 'Đang xử lý...' : 'Bắt đầu làm bài'}
          </Button>
        </Box>
      </Box>
    </div>
  );
} 