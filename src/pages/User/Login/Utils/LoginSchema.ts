import { z } from 'zod';

export const LoginFormSchema = z.object({
  //유저 로그인 닉네임
  LoginUserNickname: z
    .string()
    .min(3, { message: '문자는 적어도 3자를 충족해야 합니다.' })
    .regex(new RegExp('^[A-z][A-z0-9-_]{3,23}$'), {
      message:
        '닉네임은 문자로 시작합니다. 언더스코어 및 하이픈은 갯수에서 포함되지 않습니다.',
    }),

  //유저 로그인 비밀번호
  LoginUserPassword: z
    .string()
    .trim()
    .min(6, { message: '문자는 적어도 6자를 충족해야 합니다.' })
    .regex(
      new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$'),
      {
        message: '대문자와 소문자, 그리고 숫자와 특수문자를 포함해주세요..',
      }
    ),
});

export type LoginSchemaType = z.infer<typeof LoginFormSchema>;
