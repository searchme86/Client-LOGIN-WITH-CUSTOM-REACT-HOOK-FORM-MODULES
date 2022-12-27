import { z } from 'zod';
import { Tiers } from './LoginFormData';
import { TireIDEnum } from './LoginFormType';

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

export const FormSchema = z.object({
  email: z.string().trim().email(),
  username: z
    .string()
    .trim()
    .min(3, { message: 'Must be more than 3 characters' }),
  pizzaChoice: z.string(),
  accept: z.literal(true, {
    errorMap: () => ({
      message: 'You must accept Terms and Conditions.',
    }),
  }),
  // accept: z.coerce.boolean().parse(true, {
  //   errorMap: () => ({
  //     message: 'You must accept Terms and Conditions.',
  //   }),
  // }),
  tier: z
    .enum(TireIDEnum)
    .refine((val) => Tiers.map((tier) => tier.id).includes(val)),
});
