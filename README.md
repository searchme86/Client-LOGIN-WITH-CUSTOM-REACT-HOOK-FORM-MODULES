## 📝 프로젝트 README.md

|      파일명       |           내용           | 경로  |
| :---------------: | :----------------------: | :---: |
|     README.md     |  프로젝트 소개 및 이해   | root  |
|     Codes.md      |  프로젝트 코드 및 폴더   | /docs |
| Issue-to-learn.md | 이슈 및 해결사항, 배운점 | /docs |
|  Constraints.md   |     프로젝트의 한계      | /docs |

## ⌨️ 프로젝트 개요

|                                                카테고리                                                |        내용         |
| :----------------------------------------------------------------------------------------------------: | :-----------------: |
|                                               코드 Role                                                |     클라이언트      |
|                                           프로젝트 코드 구현                                           | 11.16 ~ 12.30. 2022 |
|                                           프로젝트 리펙토링                                            |  01.02.2022 ~ 현재  |
|                                            프로젝트 기여도                                             |      본인 100%      |
|                                               클라이언트                                               |      TS React       |
| [백엔드](https://github.com/searchme86/Server-LOGIN-WITH-CUSTOM-REACT-HOOK-FORM-MODULES '백엔드 코드') |      JS Nodejs      |

## 👋🏻 프로젝트 제목

### [React Hook Form](https://react-hook-form.com/)과 [Zod](https://github.com/colinhacks/zod 'zod')가 기본 적용된, 폼 엘리먼트(form, input) 구현과 활용(로그인)

## ❕프로젝트 시작하게 된 계기

- 💪🏻 [이전 포트폴리오,fleamarketagora](https://github.com/searchme86/App_Final_Deployed '이전 포트폴리오,fleamarketagora')의 코드를 리펙토링하고 개선을 통해, 스스로 기술적 성장을 목표함

- 🔑 '상품 등록하기'에서, 폼(Form)과 React Hook Form을 통한 유효성 검사가 핵심기능 이었음
- 💡 폼과 React Hook Form이 한 쌍으로 자주 사용되어, 함께 모듈화되는 방법이 없을까 생각이 들었음

  #### 📒 참고 자료

  - 📒 [How to create reusable form components with React Hook Forms and Typescript](https://www.thisdot.co/blog/how-to-create-reusable-form-components-with-react-hook-forms-and-typescript 'How to create reusable form components with React Hook Forms and Typescript')
  - 📒 [File Upload with Chakra UI and react-hook-form](https://gist.github.com/brenopolanski/5efe54b46cad0882b3ce41dc8db64608 'File Upload with Chakra UI and react-hook-form')

  - 📒 [Chakra UI + React Hook Form](https://chakra-ui.com/getting-started/with-hook-form 'Chakra UI + React Hook Form')

  - #### 🙏 개선 목표

    |                                       AS-IS                                       |                                                          개선 이유                                                          |                                                    TO-BE                                                    |
    | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
    |                        Cannot read properties of undefined                        |    - 코드 규모가 확장 될 수록, <br/> 값이 undefined이거나 <br/> 추적하기 어려움 <br/> - 값 형태/타입을 <br/> 찾기 어려움    |                            타입스크립트 <br/> 적용을 통해 <br/> 코드 안정성 확보                            |
    | Token 상태 및 관리 <br/> - refresh 되지 않음 <br/> - LocalStorage에 저장하여 관리 |                             - Token은 refresh 해야함 <br/> - LocalStorage에 <br/> 저장하면 안됨                             | - Token에 <br/> refresh 특성부여 <br/> - 서버에서 생성해 토큰 갱신 <br/> - Persistant login 으로 <br/> 전환 |
    |                 npm, 'react-file-base64'으로 <br/> 이미지 업로드                  | 폼 상태 초기화(reset) 할 때, <br/> 모듈 'react-file-base64'에 <br/> 이미지 값(base64)만 남아있어 <br/> 이를 처리하기 어려움 |                                    이미지 업로드 <br/> 과정 하나씩 구현                                     |
    |               (Chakra UI) <br/> Chakra UI를 통한, 폼 컴포넌트 구현                |                                      ref로 input을 참조 되지 않는 <br/> 버그🐛를 경험                                       |                                               Chakra UI 제외                                                |
    |                의존하는 컴포넌트의 <br/> Import depth “../”가 많음                |                                             컴포넌트의 가독성이 <br/> 좋지 않음                                             |                                               절대경로를 사용                                               |
    |              Redux에 <br/>비동기/동기 상태가 <br/>함께 저장되어 사용              |                   비동기 상태를 관리하는 <br/>React-Query를 통해 <br/> 프로젝트 상태를 <br/> 분리해 관리                    |                비동기는 <br/> React-Query에서, <br/> 동기상태는 <br/> Context로 이원해 관리                 |

- ✏️ 학습 내용을 코드에 적용
  - TypeScript
  - React-Query
  - Persistant Login
    - 💡 [React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios](https://www.youtube.com/watch?v=nI8PYZNFtac 'React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios')

## 🔦 프로젝트 특징 및 장점

- 1. 폼 엘리먼트(form,input,select 등)에 React Hook Form 과 Zod 기능이 포함되어 있음

  - [Zod](https://github.com/colinhacks/zod 'zod')가 Form의 Validation 담당

- 2. 주입되는 props 값에 따라 폼(Form)/ 스타일(Style) 컴포넌트의 타입과 용도가 결정

  - 2-1. (FormElement 컴포넌트 안에서) 필요한 컴포넌트 를 가져와 사용가능
    | 타입 | 용도 |
    | :-------------------: | :----------------------------------------: |
    | input type="file" | SingleImageUploader.tsx (input file="file") |
    | input type="text" | Input 텍스트 입력 (예 : inputType="text") |
    | input type="password" | Input 비밀번호 (예: inputType="password") |

    ```js
    <Li margin="0 0 10px 0">
      <InputElement<LoginSchemaType>
        zodValidationKey="LoginUserNickname"
        LabelTxt="닉네임"
        LabelHide={true}
        labelWeight={500}
        labelSize="16px"
        labelMargin="0 0 5px 0"
        inputWidth="100%"
        inputHeight="40px"
        inputType="text"
        placeholder="닉네임을 입력해주세요"
        inputID="loginUserNickName"
        inputPadding="0 10px 0 10px"
        autoComplete="username"
      />
    </Li>
    ```

    - Li : Styled-components로 만든 HTML, li 엘리먼트
    - InputElement : React Hook Form과 Zod가 적용된 커스텀 Input 엘리먼트

  - 2-2. Styled-components에 props를 받아, 원하는 스타일로 변경 가능

    ```js
    type justifyContentType =
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly';
    type alignItemsType = 'start' | 'center' | 'end';
    type flexDirectionType =
      | 'column'
      | 'column-reverse'
      | 'row'
      | 'row-reverse';
    type textAlignType = 'center' | 'left' | 'right';

    export interface StyleProps {
      display?: string;
      width?: string;
      height?: string;
      padding?: string;
      margin?: string;
      bgColor?: string;
      fontSize?: string;
      fontColor?: string;
      borderRadius?: string;
      fontWeight?: number;
      LabelHide?: boolean;
      justifyContent?: justifyContentType;
      alignItems?: alignItemsType;
      flexDirection?: flexDirectionType;
      textAlign?: textAlignType;
    }
    ```

    ```js
    import styled from 'styled-components';
    import { StyleProps } from './common/style.type';

    export const Button =
      styled.button <
      StyleProps >
      `
        display: ${({ display }) => display};
        width: ${({ width }) => width};
        height: ${({ height }) => height};
        margin: ${({ margin }) => (margin ? margin : 0)};
        padding: ${({ padding }) => (padding ? padding : 0)};
        background-color: ${({ bgColor }) => bgColor};
        border-radius: ${({ borderRadius }) => borderRadius};
        color: ${({ fontColor }) => fontColor};
        text-align: center;
        cursor: pointer;
      `;
    ```

- 3. ‼️ (향후진행 예정) Persistant Auth가 가능한 로그인 기능 구현

## 🔌 이전 프로젝트와 비교

<table>
 <thead>
   <tr>
     <th>포트폴리오</th>
     <th>fleamarketagora</th>
     <th>Client_TS-React-Hook-Module</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <th>목적</th>
     <td align="center">상품/유저의 CRUD </td>
     <td align="center" rowspan="2">
       <ul>
         <li>재사용과 추상화 특징을 갖는<br/> React Hook Form 적용된 <br/>폼 엘리먼트(form,input) 컴포넌트</li>
         <li>리프레쉬 토큰 기반의 로그인</li>
       </ul>
     </td>
   </tr>
   <tr>
     <th>특징</th>
     <td align="center">웹접근성을 준수하려는<br/>컴포넌트 코드 구현</td>
   </tr>
   <tr>
     <th>리액트</th>
     <td align="center">JS 리액트</td>
     <td align="center">TS 리액트</td>
   </tr>
   <tr>
     <th>CSS-in-JS</th>
     <td align="center">
       <ul>
         <li>Chakra UI</li>
         <li>styled-components</li>
       </ul>
     </td>
     <td align="center">styled-components</td>
   </tr>
   <tr>
     <th>폼 유효성 관리</th>
     <td align="center">React Hook Form</td>
     <td align="center">Zod</td>
   </tr>
   <tr>
     <th>상태관리</th>
     <td align="center">Redux-toolkit</td>
     <td align="center">
       <ul>
         <li>Context Api</li>
         <li>React Query</li>
       </ul>
     </td>
   </tr>
   <tr>
     <th>토큰관리</th>
     <td align="center">localStorage에 저장</td>
     <td align="center">Access Token + Refresh Token</td>
   </tr>
   <tr>
     <th>서버요청(Axios)</th>
     <td align="center">커스텀 Axios</td>
     <td align="center">
       <ul>
         <li>커스텀 Axios</li>
         <li>Axios Interceptors</li>
       </ul>
     </td>
   </tr>
   <tr>
     <th>라우팅(Route)</th>
     <td align="center">기본 라우팅</td>
     <td align="center">
       <ul>
         <li>Protected Route Role based</li>
         <li>이전 Location을 저장해,<br/> 로그인 후 해당 경로로 리다이렉트</li>
       </ul>
     </td>
   </tr>
   <tr>
     <th>이미지 업로드 npm</th>
     <td align="center">react-file-base64</td>
     <td align="center">
       <ul>
         <li>multer</li>
         <li>cloudinary</li>
       </ul>
     </td>
   </tr>
   <tr>
     <th>대표 npm</th>
     <td align="center">react-daum-postcode</td>
     <td align="center">
       <ul>
         <li>browser-image-compression</li>
         <li>craco</li>
       </ul>
     </td>
   </tr>
   <tr>
     <th>폴더경로</th>
     <td align="center">상대경로</td>
     <td align="center">상대경로와 절대경로 혼용</td>
   </tr>
 </tbody>
</table>

## 📈 작업 히스토리 및 현황

- [x] React Hook Form 과 Zod이 적용된 커스텀 폼 엘리먼트(form,input,select 등) 구현
- [x] 등록하기(register) : 등록폼(registerForm.tsx)에서 입력한 정보, DB 저장
- [x] 로그인(login) : 등록폼(loginForm.tsx)에서 입력한 정보를 클라이언트에서 Fetch
- [ ] React-Query와 Axios Interceptor를 이용한 Refresh token 적용
- [ ] 유저 role에 따른 Auth Middleware 구현
- [ ] 배포

|   상태   |             카테고리              |                                                                       과업                                                                       |
| :------: | :-------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
|   완료   | 타입스크립트로 <br/> 마이그레이션 |                                               베이스 JS리액트 코드를 <br/> TS버전으로 마이그레이션                                               |
|          |           프로젝트 구성           |                                                        TS리액트 프로젝트로 기본 구조 완성                                                        |
|          |       리펙토링 및<br/> 구현       | 기존 로그인 코드에 인라인 Axios 요청을 별도 컴포넌트로 하려고 함<br/> 액션(GET/POST)에 따른 <br/> 커스텀 컴포넌트(useAxiosGet/useAxiosPost) 개발 |
|          |        구글링 및 코드이해         |                                              재사용가능한 React Hook Form에 대한 코드 및 이론 학습                                               |
|          |               구현                |                              재사용가능한 React Hook Form 구현 <br/>(이미지 업로드 -> 인풋 폼 -> 초기화/등록 버튼)                               |
|          |             리펙토링              |                                          베이스 JS리액트 코드에서 로그인/등록 페이지에서 핵심코드 추출                                           |
|          |             리펙토링              |                     베이스 JS리액트 코드의 로그인 로직과 <br/>이전 포트폴리오에서 로그인/등록 페이지에서 핵심코드를 리펙토링                     |
|          |               구현                |                                          재사용가능한 React Hook Form을 통해 등록 폼의 기본 골격을 만듦                                          |
|          |              구글링               |                                                       Context / localStorage 타입이슈 해결                                                       |
|          |          구글링 및 구현           |                                                   Axios InterCeptor 학습 및 TS로 마이그레이션                                                    |
|          |    폴더 정리 및<br/> 코드 분할    |                Axios InterCeptor를<br/> request(useAxiosRequest)<br/> /Response(useAxiosResponse)<br/> 커스텀 훅으로 구분해 구현                 |
|          |              구글링               |                                                             React-Query 학습 및 이해                                                             |
|          |    리펙토링<br/> - 등록페이지     |                                                      등록(register) 폼 만들기 (디자인 포함)                                                      |
|          |    폴더 정리 및<br/> 코드 분할    |                                          로그인 및 등록 페이지의 뷰 컴포넌트를<br/> 분할해서 코드 정리                                           |
|          |              테스트               |                                 커스텀 React Hook Form에서<br/> 값 생성 및 초기화/등록 버튼 동작하는지 개발작업                                  |
|          |              테스트               |                                                 등록 폼에서 Submit한 값이 서버로 전달되는지 확인                                                 |
|          |               구현                |                                                              등록(register) 폼 완료                                                              |
|          |               구현                |                                                      로그인(login) 폼 만들기 (디자인 포함)                                                       |
|          |               구현                |                                                로그인(login)에 해당하는 Axios 및 React-Query 개발                                                |
|          |               구현                |                                               등록(Register)에 해당하는 Axios 및 React-Query 개발                                                |
|          |              테스트               |                                  로그인 및 등록 React-Query에서 요청하는 값이 <br/> 서버에서 확인되는지 테스트                                   |
|          |               구현                |                                                              등록(register) 폼 완료                                                              |
|          |       리펙토링 및<br/> 구현       |                                             기존 Context에 상태관리 useState를 useReducer로 리펙토링                                             |
|          |    폴더 정리 및<br/> 코드 분할    |                                            유저의 Login/Register에 따라 React-Query코드를 나눠 정리함                                            |
| 진행예정 |              테스트               |                                              엑시오스 인터셉터와 백엔드의 리프레쉬 토큰 패칭 테스트                                              |
|          |               구현                |                                                백엔드로 Refresh Token을 요청하는 React-Query 개발                                                |
|          |              테스트               |                     AuthMiddleWare & Protected Router을 통해 <br/> 백엔드로 Refresh Token을 요청하는 <br/>React-Query 테스트                     |
|          |               구현                |                                  React-Query와 Axios InterCeptor <br/>/ Refresh Token이 서로 적용되는 코드 구현                                  |
|          |               배포                |                                                                    코드 배포                                                                     |

```

```
