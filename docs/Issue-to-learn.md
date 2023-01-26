## 😭 작업 중 어려웠던 점

### 1. watch()를 통해 값을 확인하면, Input type="file"에 등록된 value만 빈 객체로 확인됨

> "0,{}"
> { image: { '0': {} } }

### 원인

> JSON.stringify does not parse File objects. Your data is most likely a FileList containing one File object, hence the "0,{}". 0th index in the array, containing an unserializable File object.파일

### 참고

- [React hook error is returning an empty object](https://stackoverflow.com/questions/71415804/react-hook-error-is-returning-an-empty-object 'React hook error is returning an empty object')
- [How can I serialize an input File object to JSON?](https://stackoverflow.com/questions/24139216/how-can-i-serialize-an-input-file-object-to-json 'https://stackoverflow.com/questions/24139216/how-can-i-serialize-an-input-file-object-to-json')
- [Trouble with react hook form, using file as input](https://stackoverflow.com/questions/72007804/trouble-with-react-hook-form-using-file-as-input 'Trouble with react hook form, using file as input')
- [Image field uploaded with react-hook-form works on the frontend but in the next.js API route, the req.body.image is an empty object](https://stackoverflow.com/questions/67009524/image-field-uploaded-with-react-hook-form-works-on-the-frontend-but-in-the-next 'Image field uploaded with react-hook-form works on the frontend but in the next.js API route, the req.body.image is an empty object')

### 2. 리액트TS에서 컨텍스트의 타입 정의

[How to use React Context with TypeScript](https://felixgerschau.com/react-typescript-context/ 'How to use React Context with TypeScript')

### 3. 리액트TS에서 context에서 반환한 store가 'undefined'로 반환

![error  context_undefined_02](https://user-images.githubusercontent.com/47154709/213869378-bdbcfbeb-b278-4aeb-985d-890f70e4b40c.png)

[Creating a context with no default and no undefined check](https://www.carlrippon.com/react-context-with-typescript-p4/ 'Creating a context with no default and no undefined check')

### 4. 리액트TS에서 context와 useReducer를 사용하는데, 액선 생성자의 리턴타입에 대해 에러 발생

> TypeScript: Type 'T' does not satisfy the constraint '(...args: any) => any'

[TypeScript: Type 'T' does not satisfy the constraint '(...args: any) => any'](https://stackoverflow.com/questions/60879582/typescript-type-t-does-not-satisfy-the-constraint-args-any-any 'TypeScript: Type T does not satisfy the constraint (...args: any) => any')

### 5. 리액트TS에서 context와 useState를 사용하는데, initialState에 조건식을 넣어야 할 경우

[Set a conditional initial value for useState in React](https://bobbyhadz.com/blog/react-usestate-conditional-initial-value 'Set a conditional initial value for useState in React')

### 6. Axios-Intercepter에서 Header의 타입이 존재하지 않습니다.

![error  axios_header_type_3](https://user-images.githubusercontent.com/47154709/213869328-f12a1861-c0bc-4793-8770-ba42d26bd481.png)
![error  axios_header_type_4](https://user-images.githubusercontent.com/47154709/213869341-f6eab351-bc3c-46b8-b007-f9b5f240992e.png)

### 이전 코드 (useAxiosRequest.tsx)

```js
  if (!request.headers!['Authorization']) {
    request.headers!['Authorization'] = `Bearer ${auth?.accessToken}`;
  }
```

### 변경 코드 (useAxiosRequest.tsx)

```js
  if (!request.headers) {
    request['headers'] = request.headers ?? {};
    request.headers![
      'Authorization'
    ] = `Bearer ${contextValue?.authUser.accessToken}`;
  }
```

### 이전 코드 (useAxiosResponse.tsx)

```js
  prevRequest.headers![
    'Authorization'
  ] = `Bearer ${newAccessToken}`;
```

### 이후 코드 (useAxiosResponse.tsx)

```js
  prevRequest['headers'] = prevRequest.headers ?? {};
  (prevRequest.headers as RawAxiosRequestHeaders)[
    'Authorization'
  ] = `Bearer ${newAccessToken}`;
```

- [fix(types): fixed AxiosRequestConfig header interface by refactoring it to RawAxiosRequestConfig; #5420](https://github.com/axios/axios/pull/5420 'fix(types): fixed AxiosRequestConfig header interface by refactoring it to RawAxiosRequestConfig; #5420')
- [Property Authorization does not exists on type AxiosHeaders after upgrade to 1.2.2 #5416](https://github.com/axios/axios/issues/5416 'Property Authorization does not exists on type AxiosHeaders after upgrade to 1.2.2 #5416')

### 7. Enum에서 정의한 타입을 적용하기

### 문제 : zod에서 정의한 schema 타입이 아닌 모든 string을 받을 수 있음, 정의한 Enum 타입만 받을 수 있도록 변경

![enum_error_before_01](https://user-images.githubusercontent.com/47154709/213870339-a44eae1f-3caa-4e03-874f-e85e2027c56b.png)

### 문제 : 정의한 Enum 타입이 할당이 되지 않음

![enum_error_before_02](https://user-images.githubusercontent.com/47154709/213870348-3ea69598-2929-4884-921e-e0d0208102ef.png)

### 문제 해결

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
