import { Box, Button, Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import CustomTextField from '../components/common/CustomTextField';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required('Vui lòng nhập họ tên'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Số điện thoại phải có 10 chữ số').required('Vui lòng nhập số điện thoại'),
});

const Information = () => {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
    router.push('/test');
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Thông tin cá nhân
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%' }}>
          <CustomTextField
            name="fullName"
            control={control}
            label="Họ và tên"
            margin="normal"
          />
          <CustomTextField
            name="email"
            control={control}
            label="Email"
            margin="normal"
          />
          <CustomTextField
            name="phone"
            control={control}
            label="Số điện thoại"
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#3d82af',
              '&:hover': {
                backgroundColor: '#2c5f7e',
              },
            }}
          >
            Bắt đầu làm bài
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Information; 