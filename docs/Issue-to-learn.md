## ๐ญ ๊ณ ๋ฏผ๋ ์  / ์ด๋ ค์ ๋ ์  / ๋ฐฐ์ด ์ 

- 1. ๐งฑ CUSTOM-REACT-HOOK-FORM-MODULES

  - โ๏ธ ํ๋ก์ ํธ ๊ธฐํ ๋ฐ ๋ชฉํ ์๋ฆฝ

    - ์ปดํฌ๋ํธ์ ๊ธฐ๋ฅ์ ์ด๋ค ๋จ๊ณ(level)๊น์ง [์ถ์ํ](https://dokhakdubini.tistory.com/395 '์ถ์ํ ์ ์') ํ  ์ง ์ ์

      - ์) ์ปค์คํ ๋ฒํผ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค ์ง, HTML ๋ฒํผ ์๋ฆฌ๋จผํธ๋ฅผ ์ฌ์ฉ ํ  ์ง

    - ์ค์ฒฉ๋ ์ปดํฌ๋ํธ ์ค๊ณ๋ฅผ ๊ณ ๋ คํ๋ฉด์, forwardRef์ ref์ ๋ํด ํ์ตํจ

      > <input type={type} ref={ref} {...HTMLAttributesProps} />

    - ํฅํ ์ ์ง๋ณด์ ๊ณ ๋ คํด, ์ฝ๋ ์ฃผ์๋ง ์๋ค๋ฉด, ๋๊ตฌ๋ ์ดํดํ  ์ ์๋ ์ ๋์ ์ฝ๋๋ก ๊ตฌํ

    - TS ๋ฆฌ์กํธ๋ฅผ ํตํด, ์ฝ๋ ์์ ์ฑ ํ๋ณด

  - ๐ง ํ๋ก์ ํธ ๊ตฌํ

    - TS๋ก ๋ง์ด๊ทธ๋ ์ด์

      - ์ฐธ๊ณ  ๊ฐ๋ฅํ ์ฝ๋๊ฐ ๋๋ถ๋ถ JS ๋ฆฌ์กํธ
        - ํ์(Type) ์ ๋ณด๊ฐ ์๊ฑฐ๋ ์ฝ๋ ์ถ๋ก ์ด ์ด๋ ค์ด ๋ณ์๊ฐ ์์ด, ์ฐธ๊ณ  ์์ค์ผ๋ก๋ฐ์ ์ฌ์ฉํ  ์ ์์์

    - Zod

      - File ํ์์ ์ด๊น๊ฐ(initialState)์ ์ ์
        - File์ ์ด๊น๊ฐ์ด๋ ๊ฒ์ด ์๊ณ /์๊ณ  ์๋ฐ, ์ด๋ฅผ ์ด๋ป๊ฒ ํํํ ์ง ์ด๋ ค์ ์
          - ์ด๊น๊ฐ์ ์ค์ ํ์ง ์๋ ๊ฒ์ผ๋ก ๋ณ๊ฒฝ

    - FormElement ๊ตฌํ

      - [ํ ๊ท์น](https://ko.reactjs.org/docs/hooks-rules.html 'ํ ๊ท์น')์ ์ค์ํ๋ฉฐ ์ปดํฌ๋ํธ ์์ฑ
        - 'Hook์ ์ผ๋ฐ์ ์ธ JavaScript ํจ์์์ ํธ์ถํ์ง ๋ง์ธ์.'
        - FormElement์ ๋ฐ์ดํฐ๋ 'ํจ์ onRegisterSubmit'์์๋ง ์ฐธ์กฐ ๊ฐ๋ฅํ๊ธฐ ๋๋ฌธ์
          - ๋ค์์ ์์์ ์ปดํฌ๋ํธ๋ก ๋ถ๋ฆฌํ  ์ ์๊ณ , 'ํจ์ onRegisterSubmit' ์์์ ๋ชจ๋ ์คํ ํด์ผ ํจ
            - ํผ ๋ฐ์ดํฐ (formData) ์์ฑ
            - ์ด๋ฏธ์ง ์์ถ(ImageCompression)
            - ํ์ผ (FileReader) ์ฒ๋ฆฌ

    - SingleImageUploader ๊ตฌํ

      - watch()๋ฅผ ํตํด ๊ฐ์ ํ์ธํ๋ฉด, Input type="file"์ value๋ง ๋น ๊ฐ์ฒด๋ก ํ์ธ๋จ
      - ๋ฑ๋ก๋ ์ด๋ฏธ์ง ๋ฏธ๋ฆฌ๋ณด๊ธฐ
        - 'base64', 'blob' ์ด๋ ๋ฐ์ดํฐ ํ์์ ๊ฒฝํ
        - 'blob'์์ 'base64'์ผ๋ก ๋ฐ์ดํฐ (ํ์) ๋ณํ ์ฝ๋๋ฅผ ์ ํด๋ด
          - 'encode', 'decode' ๊ฐ๋
          - ๋ฆฌ์กํธ์์ 'base64'์ 'encode', 'decode' ์ฝ๋
            - > import { decode as base64_decode, encode as base64_encode } from 'base-64';

- 2. ๐ ๏ธ TypeScript

  - Context & useReducer

    - Context ํ์ ์ ์
    - Context์์ ๋ฐํํ store๊ฐ 'undefined'๋ก ๋ฐํ๋จ
    - Context์ useReducer๋ฅผ ์ฌ์ฉํ๋๋ฐ, ์ก์  ์์ฑ์์ ๋ฆฌํดํ์์ ๋ํด ์๋ฌ ๋ฐ์

  - LocalStorage & useState

    - Context์ useState๋ฅผ ์ฌ์ฉํ๋๋ฐ, initialState์ ์กฐ๊ฑด์์ ๋ฃ์ด์ผ ํ  ๊ฒฝ์ฐ

  - Enum์ผ๋ก ์ ์ํ ํ์์ผ๋ก ์ ์ฉํ๊ธฐ

  - Axios-Intercepter์์ Header์ ํ์์ด ์กด์ฌํ์ง ์์ต๋๋ค.

- 3. โฑ๏ธ Styled-components
  - ์ด๋ ์์ค๊น์ง ์คํ์ผ์ Styled-components๋ก ๋ณ๊ฒฝ ํด์ผ ํ๋์ง ๊ฒฐ์ ํ๊ธฐ ์ด๋ ค์
  - ๊ณตํต ์คํ์ผ ๋ชจ๋์ ๋ง๋ค์ด๋, ํ์ํ๋ฉด ์๋ก ๋ง๋ค์ด์ผ ํ๋ ๊ฒฝ์ฐ ๋ฐ์
  - ๊ธฐ๋ณธ ํ์ํ๋ฉด์ ๋์์ ๋ถํ์ํ ์ฝ๋ ๋ฐ์
  - ์คํ์ผ ๋ชจ๋๋ช(๋ณ์๋ช)์ ๊ฐ๋์ฑ ์๊ฒ ๋ง๋ค์ด์ผ ํจ

---

### 1. watch()๋ฅผ ํตํด ๊ฐ์ ํ์ธํ๋ฉด, Input type="file"์ ๋ฑ๋ก๋ value๋ง ๋น ๊ฐ์ฒด๋ก ํ์ธ๋จ

> "0,{}"
> { image: { '0': {} } }

### ์์ธ

> JSON.stringify does not parse File objects. Your data is most likely a FileList containing one File object, hence the "0,{}". 0th index in the array, containing an unserializable File object.ํ์ผ

### ์ฐธ๊ณ 

- [React hook error is returning an empty object](https://stackoverflow.com/questions/71415804/react-hook-error-is-returning-an-empty-object 'React hook error is returning an empty object')
- [How can I serialize an input File object to JSON?](https://stackoverflow.com/questions/24139216/how-can-i-serialize-an-input-file-object-to-json 'https://stackoverflow.com/questions/24139216/how-can-i-serialize-an-input-file-object-to-json')
- [Trouble with react hook form, using file as input](https://stackoverflow.com/questions/72007804/trouble-with-react-hook-form-using-file-as-input 'Trouble with react hook form, using file as input')
- [Image field uploaded with react-hook-form works on the frontend but in the next.js API route, the req.body.image is an empty object](https://stackoverflow.com/questions/67009524/image-field-uploaded-with-react-hook-form-works-on-the-frontend-but-in-the-next 'Image field uploaded with react-hook-form works on the frontend but in the next.js API route, the req.body.image is an empty object')

### 2. ๋ฆฌ์กํธTS์์ ์ปจํ์คํธ์ ํ์ ์ ์

[How to use React Context with TypeScript](https://felixgerschau.com/react-typescript-context/ 'How to use React Context with TypeScript')

### 3. ๋ฆฌ์กํธTS์์ context์์ ๋ฐํํ store๊ฐ 'undefined'๋ก ๋ฐํ

![error  context_undefined_02](https://user-images.githubusercontent.com/47154709/213869378-bdbcfbeb-b278-4aeb-985d-890f70e4b40c.png)

[Creating a context with no default and no undefined check](https://www.carlrippon.com/react-context-with-typescript-p4/ 'Creating a context with no default and no undefined check')

### 4. ๋ฆฌ์กํธTS์์ context์ useReducer๋ฅผ ์ฌ์ฉํ๋๋ฐ, ์ก์  ์์ฑ์์ ๋ฆฌํดํ์์ ๋ํด ์๋ฌ ๋ฐ์

> TypeScript: Type 'T' does not satisfy the constraint '(...args: any) => any'

[TypeScript: Type 'T' does not satisfy the constraint '(...args: any) => any'](https://stackoverflow.com/questions/60879582/typescript-type-t-does-not-satisfy-the-constraint-args-any-any 'TypeScript: Type T does not satisfy the constraint (...args: any) => any')

### 5. ๋ฆฌ์กํธTS์์ context์ useState๋ฅผ ์ฌ์ฉํ๋๋ฐ, initialState์ ์กฐ๊ฑด์์ ๋ฃ์ด์ผ ํ  ๊ฒฝ์ฐ

[Set a conditional initial value for useState in React](https://bobbyhadz.com/blog/react-usestate-conditional-initial-value 'Set a conditional initial value for useState in React')

### 6. Axios-Intercepter์์ Header์ ํ์์ด ์กด์ฌํ์ง ์์ต๋๋ค.

![error  axios_header_type_3](https://user-images.githubusercontent.com/47154709/213869328-f12a1861-c0bc-4793-8770-ba42d26bd481.png)
![error  axios_header_type_4](https://user-images.githubusercontent.com/47154709/213869341-f6eab351-bc3c-46b8-b007-f9b5f240992e.png)

### ์ด์  ์ฝ๋ (useAxiosRequest.tsx)

```js
  if (!request.headers!['Authorization']) {
    request.headers!['Authorization'] = `Bearer ${auth?.accessToken}`;
  }
```

### ๋ณ๊ฒฝ ์ฝ๋ (useAxiosRequest.tsx)

```js
  if (!request.headers) {
    request['headers'] = request.headers ?? {};
    request.headers![
      'Authorization'
    ] = `Bearer ${contextValue?.authUser.accessToken}`;
  }
```

### ์ด์  ์ฝ๋ (useAxiosResponse.tsx)

```js
  prevRequest.headers![
    'Authorization'
  ] = `Bearer ${newAccessToken}`;
```

### ์ดํ ์ฝ๋ (useAxiosResponse.tsx)

```js
  prevRequest['headers'] = prevRequest.headers ?? {};
  (prevRequest.headers as RawAxiosRequestHeaders)[
    'Authorization'
  ] = `Bearer ${newAccessToken}`;
```

- [fix(types): fixed AxiosRequestConfig header interface by refactoring it to RawAxiosRequestConfig; #5420](https://github.com/axios/axios/pull/5420 'fix(types): fixed AxiosRequestConfig header interface by refactoring it to RawAxiosRequestConfig; #5420')
- [Property Authorization does not exists on type AxiosHeaders after upgrade to 1.2.2 #5416](https://github.com/axios/axios/issues/5416 'Property Authorization does not exists on type AxiosHeaders after upgrade to 1.2.2 #5416')

### 7. Enum์ผ๋ก ์ ์ํ ํ์์ผ๋ก ์ ์ฉํ๊ธฐ

### ๋ฌธ์  : zod์์ ์ ์ํ schema ํ์์ด ์๋ ๋ชจ๋  string์ ๋ฐ์ ์ ์์, ์ ์ํ Enum ํ์๋ง ๋ฐ์ ์ ์๋๋ก ๋ณ๊ฒฝ

![enum_error_before_01](https://user-images.githubusercontent.com/47154709/213870339-a44eae1f-3caa-4e03-874f-e85e2027c56b.png)

### ๋ฌธ์  : ์ ์ํ Enum ํ์์ด ํ ๋น์ด ๋์ง ์์

![enum_error_before_02](https://user-images.githubusercontent.com/47154709/213870348-3ea69598-2929-4884-921e-e0d0208102ef.png)

### ๋ฌธ์  ํด๊ฒฐ

![enum_error_cleared](https://user-images.githubusercontent.com/47154709/213870357-c6ca0056-c4fe-4c54-8b34-3dd0e447ad56.png)

```js
  export const Tiers = [
    {
      id: 'BRONZE',
      name: 'Bronze',
      description: 'Get average points',
      price: 0.99,
    },
    {
      id: 'SILVER',
      name: 'Silver',
      description: 'Get extra points',
      price: 4.99,
    },
    {
      id: 'GOLD',
      name: 'Gold',
      description: 'The highest possible tier',
      price: 19.99,
    },
  ] as const;

```

```js
export type TireIDType = typeof Tiers[number]['id'];

export const TireIDEnum: [TireIDType, ...TireIDType[]] = [
  Tiers[0].id,
  ...Tiers.slice(1).map((p) => p.id),
];


```

```js
 tier: z
    .enum(TireIDEnum)
    .refine((val) => Tiers.map((tier) => tier.id).includes(val)),

```

[TypeScript: How to get types from arrays](https://steveholgado.com/typescript-types-from-arrays/ 'TypeScript: How to get types from arrays')
