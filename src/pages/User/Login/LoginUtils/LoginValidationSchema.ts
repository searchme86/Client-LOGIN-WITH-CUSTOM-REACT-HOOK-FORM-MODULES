import { z } from 'zod';

export const signUpFormSchema = z.object({
  firstName: z.string().min(1, 'First Name must be atleast 1 characters long!'),
  username: z
    .string()
    .min(1, 'Username must be atleast 1 characters long!')
    .max(10, 'Consider using shorter username.'),
  email: z.string().email('Please enter a valid email address.'),
  password: z
    .string()
    .min(6, 'Please choose a longer password')
    .max(256, 'Consider using a short password'),
  // add your fancy password requirements 👿
});

export const validationSchema = z.object({
  userNickname: z.string().min(1, { message: '닉네임이 입력되지 않았습니다.' }),
  userPassword: z
    .string()
    .min(1, { message: '패스워드가 입력되지 않았습니다.' }),
});
