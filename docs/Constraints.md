## ๐ ๋ฒ๊ทธ ๋ฐ ํ๊ณ

- ๐ช React Hook Form

  - SingleImageUplpader

    - ํ๋์ ์ด๋ฏธ์ง๋ง ์๋ก๋ ๊ฐ๋ฅ
    - ์ด๋ฏธ์ง ์ฌ์ด์ฆ ๋ฐ ํ์ฉ ๊ฐ๋ฅํ ํ์์ ์ ํ์ ๋์์๋ ๊ธฐ๋ฅ์ด ์๋ํ์ง ์์
    - file์ ๋ํด any() ๋ผ๊ณ  ์ ์ํ์

      - registerSchema.ts ์ค

        ```js
        const MAX_FILE_SIZE = 500000;
        const ACCEPTED_IMAGE_TYPES = [
          'image/jpeg',
          'image/jpg',
          'image/png',
          'image/webp',
        ];

          ...์ค๋ต...

        userImage: z
          .any()
          .refine((files) => files?.length > 0, {
            message: '์ด๋ฏธ์ง๋ฅผ ๋ฑ๋กํด ์ฃผ์ธ์',
          })
          .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
            message: 'ํ์ผ ํ์ฅ์๋ jpg, jpeg, png, webp ๋ง ๊ฐ๋ฅํฉ๋๋ค.',
          })
          .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
            message: '์ต๋ 5MB ๊น์ง ์๋ก๋ ๊ฐ๋ฅ ํฉ๋๋ค, ํ์ผ ์ฉ๋์ ์ฒดํฌํด์ฃผ์ธ์',
          }),

        ```

    - ์ด๋ฏธ์ง ์ญ์  ๊ธฐ๋ฅ์ ์ถ๊ฐํ์ง ๋ชปํจ

  - resetElement

    - Reset ์ด๊ธฐํ ๋ฒํผ์ ๋๋ฅด๋ฉด, input type="file" ๊ฐ์ด ์ญ์ ๋์ง ์์

  - InputElement

    - Input ํผ ๊ฐ์ ์๋ ฅ ์ง์ฐ์ ์ํ, useDebounce ํ์ ์ ์ฉํ์ง ๋ชปํจ

      - React Hook Form์์ Input, onChange ์ด๋ฒคํธ์ ํด๋นํ๋ ํธ๋ค๋ฌ ์ ์ฉ์ ๋ ์ฐ๊ตฌํด์ผํจ

      - input type์ ์กฐ๊ฑด์์ ๋์ด, ๊ฐ์ด true/false์ ๋ฐ๋ผ, input type="text" / input type="passowrd"๋ก ๋ณ๊ฒฝ๊ธฐ๋ฅ ์ถ๊ฐ ๋ชปํจ
        - ๋ชฉํ: ์ธํ ๋น๋ฐ๋ฒํธ, ์ฐ์ธก์ ๋ฒํผ์ด ์๊ณ , ์ด๋ฅผ ํด๋ฆญ ์, ๋น๋ฐ๋ฒํธ ๋ณด์ด๊ธฐ ํ ๊ธ๊ธฐ๋ฅ

  - ๊ทธ ์ธ
    - input type="checkbox", select ์ปดํฌ๋ํธ ์ฝ๋๊ฐ ์์์ง๋ง, ํ๋ก์ ํธ ๋ด ์ฌ์ฉ ํ  ๋ชฉ์ ์ด ์์ด ์ฝ๋ ์ญ์ ํจ

- ๐ง Axios Error Message ์ฒ๋ฆฌ

  - ๋ฐฑ์๋์์ ๋ฐํ๋๋ Axios Error Message๋ฅผ RegisterForm/LoginForm์์ ๋ณด์ฌ์ฃผ์ง ๋ชปํจ

    - Axios Error ํ์์ string์ ํ ๋น? ํ๋ ๋ฐฉ์์ ์ฐ๊ตฌํด์ผํจ

      - ์ด์  ํฌํธํด๋ฆฌ์ค(JS๋ฆฌ์กํธ)์์๋ ํ์ ์ ๋ณด๋ฅผ ํ์ธํ์ง ์๊ธฐ ๋๋ฌธ์, string์ผ๋ก ์ธ์ํ์ฌ ํด๋น Axios Error Message ์ ์ฅํด ์ฌ์ฉํ์
      - TS๋ฆฌ์กํธ์์ Axios Error๋ 'Axios ERROR'๋ผ๋ ํ์์ด ์กด์ฌํด, 'Axios ERROR'๋ฅผ 'string'์ ํ ๋น ํ  ์ ์์

- ๐จ Authentication(๋ก๊ทธ์ธ) & Authorization(๊ถํ) with Axios interceptor

  - React Hook Form ์๋ฆฌ๋จผํธ ๊ตฌํ์ ๋ง์ ์๊ฐ์ ์์ํด, Auth ๊ตฌํ์ ์๋ฒฝํ ์ฒ๋ฆฌ ๋ชปํจ
  - ํ์ฌ ๋ฑ๋กํ๊ธฐ & ๋ก๊ทธ์ธ ๋ง ๊ฐ๋ฅ

  - Authentication(๋ก๊ทธ์ธ)

    - refresh Token์ ์์ฒญํ๋ React-Query ๊ตฌํ ๋ชปํจ

  - Authorization(๊ถํ)

    - role์ ๋ฐ๋ฅธ ์ ์  ๋ผ์ฐํธ filter ๊ตฌํ ๋ชปํจ
      - Protected Auth Router
