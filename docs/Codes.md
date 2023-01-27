## 다음 내용들을 다룹니다.

### 1. 🔧 프로젝트 스펙

### 2. 🔬 코드 흐름

### 3. 📦 폴더구조 및 코드

- 1. 프로젝트 전체 코드
- 2. 프로젝트 코드 - 커스텀 엘리먼트
  - 2-1. 프로젝트 코드 - 유저 로그인
  - 2-2. 프로젝트 코드 - 유저 등록하기

### 4. 🔮 코드 설명

- (커스텀 엘리먼트) formElement

  - [provider] : formElement.tsx
  - [consumer] : formElement.tsx / loginSchema.ts / registerSchema.ts / loginForm.tsx / registerForm.tsx

- (페이지) registerForm.tsx

  - [provider] : singleImageUploader.tsx
  - [consumer] : registerForm.tsx

- (커스텀 엘리먼트) : inputElement

  - [provider] : inputElement.tsx
  - [consumer] : inputElement.tsx

---

## 🔧 1. 프로젝트 스펙

|                               npm 모듈명                               |      사용목적      |                                    사용이유                                    |
| :--------------------------------------------------------------------: | :----------------: | :----------------------------------------------------------------------------: |
|                              @craco/craco                              | 프로젝트 경로설정  | 폴더가 중첩될수록 <br/> 경로 depth 때문에, <br/> 컴포넌트 가독성 목적으로 사용 |
| @fortawesome/free-solid-svg-icons <br/> @fortawesome/react-fontawesome |   아이콘 이미지    |                            이전 프로젝트에서 사용함                            |
|               react-hook-form <br/> @hookform/resolvers                |  React Hook Form   |                                React Hook Form                                 |
|                         @tanstack/react-query                          |    React Query     |                                  React Query                                   |
|                      base-64 <br/> @types/base-64                      |       base64       |                   이미지를 base64 형태로 <br/> 인코딩/디코딩                   |
|                       browser-image-compression                        | 이미지 용량을 압축 |          이미지를 폼데이터에 저장할 때, <br/> 보다 작은 용량으로 저장          |
|                             framer-motion                              |     애니메이션     |                            로그인 페이지 애니메이션                            |
|                                  zod                                   |  폼 인풋의 유효성  |                        폼 인풋 값의 <br/> 유효성을 검사                        |

## 🔬 2. 코드 흐름

### 기본 플로우

![기본00](https://user-images.githubusercontent.com/47154709/213873799-9242853d-f451-4fd7-8e61-06710499a5cb.png)

### 등록

![등록하기01](https://user-images.githubusercontent.com/47154709/213873806-4e7405d5-ba1f-447b-b6b0-5d20d6702ca5.png)

### 로그인

![로그인02](https://user-images.githubusercontent.com/47154709/213873816-bec1d5e7-4cca-4a5e-b953-e513140fdcf0.png)

### 뷰

![뷰파일03](https://user-images.githubusercontent.com/47154709/213873820-4985da7c-ec1e-4312-87c1-be9df4e5efa1.png)

### 상태저장

![상태관리_요청04](https://user-images.githubusercontent.com/47154709/213873822-80714725-9a6b-4547-96f2-cc539569443e.png)

### Axios InterCeptor

![엑시오스05](https://user-images.githubusercontent.com/47154709/213873828-f4e7e327-081c-41e5-b2dd-ffe1ec49b842.png)

## 📦 3. 폴더구조 및 코드

### 1. 프로젝트 전체 코드

```
📦src
┣ 📂assets
┣ 📂components
┣ 📂config
┣ 📂context
┣ 📂hooks
┣ 📂pages
┣ 📂types
┣ 📜.env
┣ 📜App.tsx
┣ 📜index.tsx
┣ 📜layout.tsx
┗ 📜router.tsx
```

|   폴더명   |                                                 내용                                                  |
| :--------: | :---------------------------------------------------------------------------------------------------: |
|   assets   |                                              이미지 파일                                              |
| components | customElements, <br/> design(디자인 컴포넌트), <br/> styles(styled-components로 만든 스타일 컴포넌트) |
|   config   |                                      Auth와 Axios 관련 파일 관리                                      |
|  context   |                                  컨텍스트, <br/>프로젝트 상태를 저장                                  |
|   hooks    |                                   공통으로 사용하는 <br/>공통 hook                                    |
|   pages    |                           프로젝트 페이지 <br/>(로그인 페이지/ 등록 페이지)                           |
|   types    |                              env에서 사용하는 <br/> 데이터의 type을 정의                              |
|    .env    |                                           프로젝트 환경변수                                           |
| layout.tsx |                         페이지의 <br/>기본 레이아웃을 정의함, <br/> (outlet)                          |
| router.tsx |                              프로젝트 라우트를 <br/> 따로 분리해 정의함                               |
| index.tsx  |                                          프로젝트 기본 진입                                           |

### 2. 프로젝트 코드 - 커스텀 엘리먼트

```
📦customElements
┣ 📂form
┃ ┗ 📜formElement.tsx
┣ 📂input
┃ ┗ 📜inputElement.tsx
┣ 📂inputFile
┃ ┗ 📜singleImageUploader.tsx
┗ 📂utilElements
┃ ┣ 📜formErrorMessage.tsx
┃ ┣ 📜preElm.tsx
┃ ┣ 📜resetBtnElm.tsx
┃ ┗ 📜submitBtnElm.tsx
```

|         파일명          |     내용 <br/>(React Hook Form / Zod가 적용된)     | 엘리먼트(HTML) <br/> 타입 |                                     용도                                      |
| :---------------------: | :------------------------------------------------: | :-----------------------: | :---------------------------------------------------------------------------: |
|     formElement.tsx     |                   form 컴포넌트                    |           form            |                    모든 폼 엘리먼트를 감싸는 부모 컴포넌트                    |
|    inputElement.tsx     |                   input 컴포넌트                   |      input type="?"       | props에 따라 <br/>input type값이 변경 <br/>(예: type="password", type="text") |
| singleImageUploader.tsx | 하나(Single)의 <br/> 이미지(Image) 업로드 컴포넌트 |     input type="file"     |                                 이미지 업로드                                 |
|  formErrorMessage.tsx   |       에러 메세지를 <br/> 반환하는 컴포넌트        |             p             |                             에러메세지를 보여주기                             |
|       preElm.tsx        |     폼 입력한 값을 <br/>미리 보여주는 컴포넌트     |            pre            |                               입력 값 미리보기                                |
|     resetBtnElm.tsx     |       (모든 값을) <br/> 초기화 하는 컴포넌트       |   button type="button"    |                                 입력값 초기화                                 |
|    submitBtnElm.tsx     |                  submit 컴포넌트                   |    button type="reset"    |                                입력 값 Submit                                 |

### 2-1. 프로젝트 코드 - 유저 로그인

```
📦pages
┣ 📂user
┃ ┣ 📂login
┃ ┃ ┣ 📂form
┃ ┃ ┃ ┗ 📜loginForm.tsx
┃ ┃ ┣ 📂query
┃ ┃ ┃ ┗ 📜loginQuery.tsx
┃ ┃ ┣ 📂utils
┃ ┃ ┃ ┣ 📜loginApi.ts
┃ ┃ ┃ ┣ 📜loginData.ts
┃ ┃ ┃ ┣ 📜loginSchema.ts
┃ ┃ ┃ ┗ 📜loginType.ts
┃ ┃ ┣ 📂view
┃ ┃ ┃ ┣ 📜login.style.ts
┃ ┃ ┃ ┣ 📜loginBackground.tsx
┃ ┃ ┃ ┣ 📜loginBottom.tsx
┃ ┃ ┃ ┣ 📜loginHeader.tsx
┃ ┃ ┃ ┗ 📜loginMain.tsx
┃ ┃ ┗ 📜login.tsx

```

|       파일명        |               내용                |                    의존                    |
| :-----------------: | :-------------------------------: | :----------------------------------------: |
|    loginForm.tsx    |             로그인 폼             |    커스텀 엘리먼트, <br/> loginData.ts     |
|   loginQuery.tsx    | 로그인 api를 담당하는 리액트 쿼리 |                loginApi.ts                 |
|     loginApi.ts     |    로그인 api(로그인/로그아웃)    |                loginType.ts                |
|    loginData.ts     |           로그인 초기값           |                    zod                     |
|   loginSchema.ts    |    로그인 인풋값의 유효성관리     |                    zod                     |
|    loginType.ts     |  로그인에 사용되는 모든 타입정의  |                                            |
|   login.style.ts    |     로그인 styled-components      |             styled-components              |
| loginBackground.tsx |             로그인 뷰             |                                            |
|   loginBottom.tsx   |             로그인 뷰             |                                            |
|    loginMain.tsx    |             로그인 뷰             | loginBottom.tsx , <br/>loginBackground.tsx |
|      login.tsx      |           로그인 페이지           |              모든 로그인 파일              |

### 2-2. 프로젝트 코드 - 유저 등록하기

```
📦register
 ┣ 📂form
 ┃ ┗ 📜registerForm.tsx
 ┣ 📂query
 ┃ ┗ 📜registerQuery.tsx
 ┣ 📂utils
 ┃ ┣ 📜registerApi.ts
 ┃ ┣ 📜registerData.ts
 ┃ ┣ 📜registerSchema.ts
 ┃ ┗ 📜registerType.ts
 ┣ 📂view
 ┃ ┣ 📜register.style.ts
 ┃ ┣ 📜registerContainer.tsx
 ┃ ┗ 📜registerHead.tsx
 ┗ 📜register.tsx

```

|        파일명         |               내용                |                                                            의존                                                            |
| :-------------------: | :-------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|   registerForm.tsx    |            등록하기 폼            | 커스텀 엘리먼트, <br/> registerData.ts, <br/> useImageCompression훅, <br/> formData, <br/> SubmitBtnElm, <br/> ResetBtnElm |
|   registerQuery.tsx   | 로그인 api를 담당하는 리액트 쿼리 |                                                       registerApi.ts                                                       |
|    registerApi.ts     |             등록 api              |                                                      registerType.ts                                                       |
|    registerData.ts    |            등록 초기값            |                                                            zod                                                             |
|   registerSchema.ts   |     등록 인풋값의 유효성관리      |                                                            zod                                                             |
|    registerType.ts    |   등록에 사용되는 모든 타입정의   |                                                                                                                            |
|   register.style.ts   |      등록 styled-components       |                                                     styled-components                                                      |
| registerContainer.tsx |            등록하기 뷰            |                                                                                                                            |
|   registerHead.tsx    |            등록하기 뷰            |                                                                                                                            |
|     register.tsx      |          등록하기 페이지          |                                                     모든 등록하기 파일                                                     |

### 4. 🔮 코드 설명

### Custom Elements - [Provider] form (components > customElements > formElement.tsx)

```js

/**
 * @name : Form엘리먼트 정의
 *
 * @param : schema, onSubmit , children , defaultValues
 * schema : Form 엘리먼트에 적용되는 zod Schema
 * onSubmit : Form에서 사용 될 이벤트 핸들러
 * children : Form 엘리먼트 하위에 사용 될 폼 엘리먼트(Input / Select 등등)
 * defaultValues : 자식 엘리먼트(Input / Select 등등)이 갖는 값의 default values
 *
 * @type : DataSchema , z.Schema
 * DataSchema : string, any형태의 객체를 상속하는 값의 집합
 * z.Schema : zod에서 사용자가 schema를 생성되는 타입 값
 *
 * @returns : Form 엘리먼트
 * FormElementContainer : styled-components로 만든 스타일 컴포넌트
 * FormProvider : react-hook-form에 관련된 값을 자식 컴포넌트에 전달(Provioder)하는 역할
 * **/

// Form 엘리먼트를 정의
function FormElement<
  // React Hook Form 에서 Input 과 같은 폼에서 사용될 값의 타입을 정의
  // Input에서 받는 값의 키와 값은 모두 string
   DataSchema extends Record<string, string>,
  // zod로 Schema를 만들 경우, 해당 Schema에서 사용 할 값의 타입
  // 어떤 값이 올 지 모르기 때문에 any, any
  Schema extends z.Schema<any, any>
>({
  schema,
  onSubmit,
  children,
  defaultValues,
}: {
  // 사용자가 사용할 zod schema를 받는 것을 준비
  schema: Schema;
  onSubmit: (data: DataSchema, event?: BaseSyntheticEvent) => void;
  children: ReactNode;
  defaultValues?: Record<string, any>;
}) {

  // *methods 에 React Hook Form을 커스텀 할 수 있는 기능들을 사용할 수 있음
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

// methods를 통해 React Hook Form에서 사용할 handleSubmit 메서드를 호출 함
  const handleSubmit = methods.handleSubmit;

  return (
    <FormElementContainer margin="10px 0 10px 0">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit as GenericOnSubmit)}>
          {children}
        </form>
      </FormProvider>
    </FormElementContainer>
  );
}
```

### Custom Elements - [Consumer] form (loginSchema.ts / registerSchema.ts / loginForm.tsx / registerForm.tsx)

```js

/**
 * function FormElement<
  DataSchema extends Record<string, any>,
  Schema extends z.Schema<any, any>
>({
 *

 @param : DataSchema , Schema
  : onSubmit: (data: DataSchema, event?: BaseSyntheticEvent) => void; 에서 data를 받기 때문

  정의(Define)한
  1)
    DataSchema extends Record<string, any>에
    <LoginSchemaType> 타입을 할당함
    *LoginSchemaType : 사용자가 정의한, zod를 통해 만든 Schema 타입,
    => 사용자가 원하는 zod Schema 타입을 할당하면 됨

  2)
    Schema extends z.Schema<any, any>에
    typeof LoginFormSchema 할당함
    *LoginFormSchema : 사용자가 정의한, zod를 통해 만든 validation zod 객체
    => 사용자가 원하는 zod validation 객체를 전달하면 됨
 *
*/

// LoginSchema.ts

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

// SubmitHandler : react-hook-formd에서 onSubmit의 타입
// SubmitHandler<LoginSchemaType>
// : zod를 통해 만든 LoginFormSchema의 타입을 통해 타입을 추출/추론(infer)한 타입을 onSubmit 핸들러 타입에 연결함


function LoginForm() {

// React-Query 훅을 Import해서 사용함
// LoginApi.tsx , RegisterApi에서 정의한 Axios를 사용함
  const {
    LoginQuery: { mutate: LoginUser },
  } = LoginQuery();


  const onLoginSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    if (data) {
      LoginUser(data);
    }
  };

  return (
    <FormElement<LoginSchemaType, typeof LoginFormSchema>
      onSubmit={onLoginSubmit}
      schema={LoginFormSchema}
    >
     ...중략...
    </FormElement>
  );
}

```

### Custom Elements - [Provider] Input type="file",(components > Input > singleImageUploader.tsx)

```js

/**
 * @param Model extends Record<string, any>
 * : SingleImageUploader 컴포넌트가 받을 타입
 * : RegisterSchemaType을 전달함
 *
 * <SingleImageUploader<RegisterSchemaType>
    zodValidationKey="userImage"
    btnTxt="파일 등록"
  />
 *
*/

function SingleImageUploader<Model extends Record<string, string>>({
  zodValidationKey,
  btnTxt,
}: {
  zodValidationKey: keyof Model;
  btnTxt: string;
}) {
  const [base64, setBase64] = useState<string>();

  // 이미지 압축 모듈로 만든 훅
  const { CompressImage } = useImageCompression();

// useFormContext을 통해 React Hook Form 기능을 사용
  const {
    watch,
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  // isImage :  이미지가 현재 존재하는지 여부를 검사
  // 업로드한 이미지의 타이틀이 화면에 출력되기 위해 사용함
  // *zodValidationKey : input name에 값을 받기 위한 placeHolder 역할
  // input type="file"의 경우 [0]위치에 해당 이미지 값이 존재함
  let isImage =
    watch(zodValidationKey.toString()) && watch(zodValidationKey.toString())[0];

  // 이미지 미리보기 기능을 위해서 Base64 형태로 변환
  // CompressImage : 이미지 압축을 담당하는 기능의 훅(hooks > useImageCompression.tsx)
  // Compress이 될 경우, 이미지는 Blob으로 변경됨, File을 통해서 이미지를 읽기
  useEffect(() => {
    const transformBase64 = async () => {
      if (
        watch(zodValidationKey.toString()) &&
        watch(zodValidationKey.toString())[0]
      ) {
        let compressed = await CompressImage(
          watch(zodValidationKey.toString())[0]
        );
        const reader = new FileReader();
        if (compressed) reader.readAsDataURL(compressed);
        reader.onloadend = () => {
          setBase64(reader?.result as string);
        };
      }
    };
    transformBase64();
  }, [isImage]);

  return (
   <ImageContainer>
      <ContentBox display="flex">
        <ImageHolder width="60%" height="80px">
          {base64 ? (
            <Image src={base64} alt="upload" />
          ) : (
            <Image src={upload} alt="upload" />
          )}
        </ImageHolder>

        <input
          type="file"
          id="fileupload"
          disabled={isSubmitting}
          {...register(zodValidationKey.toString())}
          style={{ display: 'none' }}
        />

        <ImageFileNameView
          display="flex"
          width="60%"
          flexDirection="column"
          textAlign="left"
          padding="10px"
          margin="auto 0 0 0"
        >
          <ImageButton htmlFor="fileupload">{btnTxt}</ImageButton>
          {watch(zodValidationKey.toString()) &&
          watch(zodValidationKey.toString())[0] ? (
            <ImageTitle>
              {watch(zodValidationKey.toString())[0]?.name}
            </ImageTitle>
          ) : null}
        </ImageFileNameView>
      </ContentBox>

      {errors[zodValidationKey.toString()] ? (
        <ImageErrorMessage>
          {errors[zodValidationKey.toString()]?.message?.toString()}
        </ImageErrorMessage>
      ) : null}
    </ImageContainer>
  );
}

export default SingleImageUploader;

```

### Custom Elements - [Consumer] Input type="file" (registerForm.tsx)

```js

 <SingleImageUploader<RegisterSchemaType>
    zodValidationKey="userImage"
    btnTxt="파일 등록"
  />

```

### Custom Elements - [Provider] input

```js

/**
 * 기능 1) Input-Label을 하나의 모듈로 정의
 * 기능 2) Input-Label의 기본 속성을 Props로 전달
 * 기능 3) Input-Label의 스타일을 정의가능 (LabelHide)을 통해 label을 숨길 수 있음
 * 기능 4) 웹접근성 관점에서 Input-Label을 사용하기 편하도록 정의(*스타일 속성 이외는 TS를 통해 필수 입력하도록 설정함)
 *
 * @param
 * <Model extends Record<string, any>> : 인풋 값에 대한 타입정보
 *
 *[string] zodValidationKey : 인풋의 name을 정의
  [string] inputType : input file type을 정의하기 위한 값 (string)
  [string] LabelTxt :인풋 라벨의 텍스트
  [boolean] LabelHide : 인풋 라벨이 보일지 말지를 값을 전달함(boolean)
  [string] inputID : (웹접근성) 인풋과 라벨(htmlFor)을 연결하기 위한 값
  [string] autoComplete : 폼과 관련해 브라우저가 값을 가져야 하기 때문에

  [string] placeholder :  인풋의 placeholder
  [string] inputWidth : (스타일) 인풋의 너비
  [string] inputHeight : (스타일) 인풋의 높이
  [string] labelWeight : (스타일) 라벨의 폰트 웨이트
  [string] labelSize : (스타일) 라벨 폰트 사이즈
  [string] labelMargin : (스타일) 라벨의 마진
  [string] inputPadding : (스타일) 폼의 패딩
 *
*/

function InputElement<Model extends Record<string, string>>({
  zodValidationKey,
  LabelTxt,
  LabelHide,
  labelWeight,
  labelSize,
  labelMargin,
  inputType,
  inputID,
  autoComplete,
  inputPadding,
  placeholder,
  inputWidth,
  inputHeight,
}: {
  zodValidationKey: keyof Model;
  LabelTxt: string;
  labelSize?: string;
  labelWeight?: number;
  labelMargin?: string;
  inputType: HTMLInputTypeAttribute;
  inputID: string;
  placeholder: string;
  autoComplete?: string;
  inputWidth?: string;
  inputHeight?: string;
  inputPadding?: string;
  LabelHide?: boolean;
}) {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <>
      <InputContainer>
        <InputLabel
          htmlFor={inputID}
          display="block"
          fontWeight={labelWeight}
          fontSize={labelSize}
          margin={labelMargin}
          LabelHide={LabelHide}
        >
          {LabelTxt}
        </InputLabel>
        <InputWrapper width={inputWidth}>
          <Input
            type={inputType}
            id={inputID}
            {...register(zodValidationKey.toString())}
            autoComplete={autoComplete}
            placeholder={placeholder}
            padding={inputPadding}
            height={inputHeight}
            disabled={isSubmitting}
          />

          <TFormErrorMessage name={zodValidationKey.toString()} />
        </InputWrapper>
      </InputContainer>
    </>
  );
}

export default InputElement;

```

### Custom Elements - [Consumer] input

```js

/**
 * @param
 * <RegisterSchemaType> : 커스텀 Input엘리먼트에 들어올 값의 타입을 정의해줌
 * zodValidationKey: input의 속성 name의 값
   inputType="text" :  input의 type
   inputID="userNickname" : 웹접근성을 위해 input과 Lable연결
   LabelTxt="닉네임" : Label 텍스트
   labelWeight={500} : Label의 폰트웨이트
   labelSize="16px" : Label 폰트 사이즈
   labelMargin="0 0 5px 0" : Label의 margin
   inputWidth="100%" : input의 width
   inputHeight="40px" : input의 height
   placeholder="닉네임을 등록해주세요" : input의 placeholder
   inputPadding="0 10px 0 10px" : input의 패딩
 *
*/

 <InputElement<RegisterSchemaType>
  zodValidationKey="userNickName"
  LabelTxt="닉네임"
  labelWeight={500}
  labelSize="16px"
  labelMargin="0 0 5px 0"
  inputWidth="100%"
  inputHeight="40px"
  inputType="text"
  placeholder="닉네임을 등록해주세요"
  inputID="userNickname"
  inputPadding="0 10px 0 10px"
/>



```
