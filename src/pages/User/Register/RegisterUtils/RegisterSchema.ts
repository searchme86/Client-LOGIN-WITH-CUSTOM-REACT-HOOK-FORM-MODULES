import { z } from 'zod';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const RegisterFormSchema = z
  .object({
    // 유저 프로필 이미지
    userImage: z
      .any()
      .refine((files) => files?.length > 0, {
        message: '이미지를 등록해 주세요',
      })
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
        message: '파일 확장자는 jpg, jpeg, png, webp 만 가능합니다.',
      })
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
        message: '최대 5MB 까지 업로드 가능 합니다, 파일 용량을 체크해주세요',
      }),

    // 유저 닉네임
    userNickName: z
      .string()
      .min(3, { message: '문자는 적어도 3자를 충족해야 합니다.' })
      .regex(new RegExp('^[A-z][A-z0-9-_]{3,23}$'), {
        message:
          '닉네임은 문자로 시작합니다. 언더스코어 및 하이픈은 갯수에서 포함되지 않습니다.',
      }),

    // 유저 이메일
    userEmail: z
      .string()
      .email({ message: '올바른 형식의 이메일을 입력해주세요' }),

    // 유저 비밀번호
    userPassword: z
      .string()
      .min(6, { message: '문자는 적어도 6자를 충족해야 합니다.' })
      .regex(
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$'),
        {
          message: '대문자와 소문자, 그리고 숫자와 특수문자를 포함해주세요..',
        }
      ),

    // 유저 비밀번호 확인
    userConfirmPassword: z.string().email(),
  })
  .refine((data) => data.userPassword === data.userConfirmPassword, {
    message: '입력한 비밀번호와 일치하지 않습니다.',
    path: ['userConfirmPassword'],
  });

export type RegisterSchemaType = z.infer<typeof RegisterFormSchema>;
