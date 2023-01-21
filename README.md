## ⌨️ 개요

### [React Hook Form](https://react-hook-form.com/)이 적용된, 재사용가능한 폼 컴포넌트(form, input)를 바탕한 로그인 기능 구현하는 코드 중 *클라이언트*를 담당하는 프로젝트입니다.

### 해당 강좌를 통해서 아이디어를 얻었습니다

- 💡 [React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios](https://www.youtube.com/watch?v=nI8PYZNFtac 'React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios')

- 💡 [How to create reusable form components with React Hook Forms and Typescript](https://www.thisdot.co/blog/how-to-create-reusable-form-components-with-react-hook-forms-and-typescript 'How to create reusable form components with React Hook Forms and Typescript')

- 💡 [File Upload with Chakra UI and react-hook-form](https://gist.github.com/brenopolanski/5efe54b46cad0882b3ce41dc8db64608 'File Upload with Chakra UI and react-hook-form')

[Chakra UI + React Hook Form](https://chakra-ui.com/getting-started/with-hook-form 'Chakra UI + React Hook Form')

## 🚀 프로젝트 착수계기

- 개인적인 이유

  - 이미 작성한 코드에서 개인적으로 부족한 부분을 찾을 수 있고, 바탕(the basement)을 만들어 간다는 믿음
  - 학습한 내용을 결과(포트폴리오)로 구현해보고 테스트 함
  - 지속적 개선을 통해 코드 품질 향상가능
  - 작성한 코드에서 개선 사항들 파악
  - 학습한 내용을 코드로 적용하는 연습

- 리액트 훅 폼을 프로젝트 목적으로 선택한 이유

  - 이전 포트폴리오에서 핵심적인 기능임
  - 폼(Form)은 모든 웹 개발에서 기본적인 기능이며, 서버로 값이 전달되는 진입점(Entry Point)
  - 폼 관리에 React Hook Form이 자주 사용
  - 이전 프로젝트에서 [Chakra UI + React Hook Form](https://chakra-ui.com/getting-started/with-hook-form 'Chakra UI + React Hook Form') 조합을 사용함
  - 타입스크립트를 사용하면서 이것이 적용된 버전은 어떻게 코드로 작성하는지 연습

### [이전 포트폴리오,fleamarketagora](https://github.com/searchme86/App_Final_Deployed '이전 포트폴리오,fleamarketagora') 코드를 다음의 이유로 개선하려고 합니다.

- Cannot read properties of undefined

  - 당시 JS코드 규모가 확장 될 수록, 값이 undefined이거나 이를 추적하기 어려운 경우가 종종 있었습니다. console.log를 통해 값의 타입이나, 형태를 알아내곤 했습니다.<br/>
    타입스크립트를 학습하면서 혹은 프로젝트에 적용해오면서, 타입이 주는 코드의 안정성에 큰 장점을 얻고 있습니다. 추가로 타입을 정의해야하는 번거로움이 있지만, 그것이 주는 안정성을 이전 프로젝트에 적용해보고 싶었습니다.

- token이 refresh 되지 않음

  - 이전 포트폴리오에서 로그인은 초기 생성한 토큰을 단지 로컬스토리지에 저장하고 이를 Get 하여 사용했습니다. Persistant login과 refresh token을 학습 한 이후, 보다 실제 로그인 방식에 가까운 방식으로 변경해보고 싶었습니다.

- React-Query가 비동기 상태를 관리할 수 있음을 알게 됨

  - React-Query을 학습한 이후, Redux Toolkit에 저장된 비동기-동기 상태를 구분해 관리해보고 싶었습니다.
    이로 인해, 비동기는 React-Query로, 프로젝트 상태는 Context로 처리해보려고 합니다.

- 이미지 업로드 모듈, ['react-file-base64'](https://www.npmjs.com/package/react-file-base64 'react-file-base64')에서 값이 삭제되지 않았던 경험

  - 폼 상태를 초기화(reset) 할 때, 모듈 'react-file-base64'에 저장된 값만 남아있어 이를 처리하기 어려웠습니다.
    이번에는 input의 값을 직접 처리해보고, 이미지를 다뤄보며 업로드하는 과정을 하나씩 학습 겸 구현해보려고 합니다.

- 스타일 라이브러리(CSS-in-JS)는 스타일을 꾸미는 본연의 목적에만 사용하도록 함

  - (Chakra UI) 주객이 전도 되는 상황 피하기

    - Chakra UI가 적용된 input 컴포넌트에서, ref로 input을 참조 되지 않는 버그🐛를 경험했습니다.
      jsx에서는 ref가 작동하지만, Chakra UI에서 current 값을 얻지 못했습니다.
      프로젝트 스타일 생산성 관점에서는 장점이지만, 이해 할 수 없는 버그 해결을 위해 주객전도 되는 상황을 방지하고자 이번 프로젝트에서는 Chakra UI를 사용하지 않았습니다.

  - (styled-components) 불필요한 스타일까지 컴포넌트로 변경했던 코드들 개선하기

    - 단지 컴포넌트를 감싸거나, 자식으로 props 전달 이외에 특별한 목적이 없는 div, 혹은 일반 스타일까지도, styled 컴포넌트로 만들어, 컴포넌트에 불필요한 코드가 낭비된 경험이 있습니다.
      이전 포트폴리오에서 의미없이 생성된 styled 컴포넌트 최대한 삭제하려고 노력했습니다.

- 컴포넌트의 코드 가독성이 좋지 않음

  - 관심사 분리에 따라 의미 별(비즈니스 로직 / 서버요청 등) 로 코드 분리
  - 의존성 있는 컴포넌트를 import 할 경우, 상대경로를 절대경로로 변경
  - 불필요하게 styled-components로 만든 스타일 코드, 중복되거나 불필요한 것 삭제

## 🔦 프로젝트 목적

- React Hook Form이 적용된, 추상성이 높은 폼 엘리먼트(form, input) 구현

  - 모든 폼 엘리먼트(form,input,select 등)는 React Hook Form이 적용된 커스텀 컴포넌트로 변경
    - 모든 폼은 React Hook Form 안에서 관리 가능
  - (Form 컴포넌트 안에서) 용도에 맞게 필요한 컴포넌트를 가져다 사용가능
    - Input Checkbox 컴포넌트
    - Input File Upload 컴포넌트
  - 주입되는 props를 통해 컴포넌트의 사용성을 결정
    - Input 컴포넌트
  - [Zod](https://github.com/colinhacks/zod 'zod')를 통해 Form의 Validation 구현
    - 타입스크립트의 타입을 통한 유효성 검사 가능

- Persistant Auth가 가능한 로그인 기능 구현

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

|   상태   |          카테고리           |                                                                    과업                                                                    |
| :------: | :-------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
|   완료   | 타입스크립트로 마이그레이션 |                                               베이스 JS리액트 코드를 TS버전으로 마이그레이션                                               |
|          |        프로젝트 구성        |                                                     TS리액트 프로젝트로 기본 구조 완성                                                     |
|          |      리펙토링 및 구현       | 기존 로그인 코드에 인라인 Axios 요청을 별도 컴포넌트로 하려고 함<br/> 액션(GET/POST)에 따른 커스텀 컴포넌트(useAxiosGet/useAxiosPost) 개발 |
|          |     구글링 및 코드이해      |                                           재사용가능한 React Hook Form에 대한 코드 및 이론 학습                                            |
|          |            구현             |                              재사용가능한 React Hook Form 구현 (이미지 업로드 -> 인풋 폼 -> 초기화/등록 버튼)                              |
|          |          리펙토링           |                                       베이스 JS리액트 코드에서 로그인/등록 페이지에서 핵심코드 추출                                        |
|          |          리펙토링           |                    베이스 JS리액트 코드의 로그인 로직과 이전 포트폴리오에서 로그인/등록 페이지에서 핵심코드를 리펙토링                     |
|          |            구현             |                                       재사용가능한 React Hook Form을 통해 등록 폼의 기본 골격을 만듦                                       |
|          |           구글링            |                                                    Context / localStorage 타입이슈 해결                                                    |
|          |       구글링 및 구현        |                                                Axios InterCeptor 학습 및 TS로 마이그레이션                                                 |
|          |   폴더 정리 및 코드 분할    |               Axios InterCeptor를 request(useAxiosRequest)/Response(useAxiosResponse)에 따라 함수를 각각의 컴포넌트로 구분함               |
|          |           구글링            |                                                          React-Query 학습 및 이해                                                          |
|          |    리펙토링 - 등록페이지    |                                                   등록(register) 폼 만들기 (디자인 포함)                                                   |
|          |   폴더 정리 및 코드 분할    |                                          로그인 및 등록 페이지의 뷰 컴포넌트를 분할해서 코드 정리                                          |
|          |           테스트            |                                 커스텀 React Hook Form에서 값 생성 및 초기화/등록 버튼 동작하는지 개발작업                                 |
|          |           테스트            |                                              등록 폼에서 Submit한 값이 서버로 전달되는지 확인                                              |
|          |            구현             |                                                           등록(register) 폼 완료                                                           |
|          |            구현             |                                                   로그인(login) 폼 만들기 (디자인 포함)                                                    |
|          |            구현             |                                             로그인(login)에 해당하는 Axios 및 React-Query 개발                                             |
|          |            구현             |                                            등록(Register)에 해당하는 Axios 및 React-Query 개발                                             |
|          |           테스트            |                                  로그인 및 등록 React-Query에서 요청하는 값이 서버에서 확인되는지 테스트                                   |
|          |            구현             |                                                           등록(register) 폼 완료                                                           |
|          |      리펙토링 및 구현       |                                          기존 Context에 상태관리 useState를 useReducer로 리펙토링                                          |
|          |   폴더 정리 및 코드 분할    |                                         유저의 Login/Register에 따라 React-Query코드를 나눠 정리함                                         |
| 진행예정 |           테스트            |                                           엑시오스 인터셉터와 백엔드의 리프레쉬 토큰 패칭 테스트                                           |
|          |            구현             |                                             백엔드로 Refresh Token을 요청하는 React-Query 개발                                             |
|          |           테스트            |                           AuthMiddleWare & Protected Router 백엔드로 Refresh Token을 요청하는 React-Query 테스트                           |
|          |            구현             |                                 React-Query와 Axios InterCeptor / Refresh Token이 서로 적용되는 코드 구현                                  |
|          |            배포             |                                                                 코드 배포                                                                  |

## 📦 폴더구조

- 1. 프로젝트 전체 코드
- 2. 프로젝트 커스텀 엘리먼트 코드
  - 커스텀 엘리먼트
  - 커스텀 엘리먼트가 적용된 컴포넌트
  - React-Query가 적용된 컴포넌트
  - Zod을 활용한 타입정의 컴포넌트
  - 로그인/등록 페이지의 뷰 컴포넌트
- 3. 프로젝트 로그인 코드
  - Auth 관련 컴포넌트
  - Axios 관련 컴포넌트

### 1. 프로젝트 전체 코드

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂context
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂server
 ┣ 📂types
 ┣ 📜.env
 ┣ 📜App.tsx
 ┣ 📜Layout.tsx
 ┣ 📜Router.tsx
 ┗ 📜index.tsx
```

|   폴더명   |                        내용                         |
| :--------: | :-------------------------------------------------: |
|   assets   |                       스타일                        |
| components |  커스텀 엘리먼트와 Navbar, Footer와 같은 컴포넌트   |
|  context   |           컨텍스트, 프로젝트 상태를 저장            |
|   hooks    |             공통으로 사용하는 공통 hook             |
|   pages    |     프로젝트 페이지(로그인 페이지/ 등록 페이지)     |
|   server   |            axios와 auth 및 토큰 미들웨어            |
|   types    |        env에서 사용하는 데이터의 type을 정의        |
| Layout.tsx | 페이지의 기본 레이아웃을 정의함, outlet 기능 포함됨 |
| Router.tsx |        프로젝트 라우트를 따로 분리해 정의함         |
| index.tsx  |                 프로젝트 기본 진입                  |

### 2. 프로젝트 코드 - 커스텀 엘리먼트

```
📦customElements
 ┣ 📂Form
 ┃ ┗ 📜FormElm.tsx
 ┣ 📂Input
 ┃ ┗ 📜InputElm.tsx
 ┣ 📂InputFile
 ┃ ┗ 📜SingleImageUploader.tsx
 ┗ 📂UtilElements
 ┃ ┣ 📜FormErrorMessage.tsx
 ┃ ┣ 📜PreElm.tsx
 ┃ ┣ 📜ResetBtnElm.tsx
 ┃ ┗ 📜SubmitBtnElm.tsx
```

|         파일명          |                                  내용                                   | 엘리먼트(HTML) 종류  |                                용도                                 |
| :---------------------: | :---------------------------------------------------------------------: | :------------------: | :-----------------------------------------------------------------: |
|       FormElm.tsx       |                 React Hook Form이 적용된, form 컴포넌트                 |         form         |               모든 폼 엘리먼트를 감싸는 부모 컴포넌트               |
|      InputElm.tsx       |                React Hook Form이 적용된, input 컴포넌트                 |    input type="?"    | props에 따라 input type값이 변경 (예: type="password", type="text") |
| SingleImageUploader.tsx |              하나(Single)의 이미지(Image) 업로드 컴포넌트               |  input type="file"   |                            이미지 업로드                            |
|  FormErrorMessage.tsx   |           React Hook Form에서 에러 메세지를 반환하는 컴포넌트           |          p           |                        에러메세지를 보여주기                        |
|       PreElm.tsx        | React Hook Form에서 watch메서드로 폼 입력한 값을 미리 보여주는 컴포넌트 |         pre          |                          입력 값 미리보기                           |
|     ResetBtnElm.tsx     |        React Hook Form에서 입력한 모든 값을 초기화 하는 컴포넌트        | button type="button" |                            입력값 초기화                            |
|    SubmitBtnElm.tsx     |        React Hook Form에서 입력한 모든 값을 submit 하는 컴포넌트        | button type="reset"  |                           입력 값 Submit                            |

### 2-1. 프로젝트 코드 - 커스텀 엘리먼트가 적용된 컴포넌트

```
📦pages
 ┣ 📂User
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂Form
 ┃ ┃ ┃ ┗ 📜LoginForm.tsx
 ┃ ┣ 📂Register
 ┃ ┃ ┣ 📂Form
 ┃ ┃ ┃ ┗ 📜RegisterForm.tsx
```

|      파일명      |   내용    |
| :--------------: | :-------: |
|  LoginForm.tsx   | 로그인 폼 |
| RegisterForm.tsx |  등록 폼  |

### 2-2. 프로젝트 코드 - React-Query가 적용된 컴포넌트

#### 🗒️ 유저(User)의 로그인(Login)과 등록(Register)액션에 따라 구분해 코드 정리 했습니다.

#### 🗒️ 각 액션에 따른 백앤드 요청을 위해 React-Query도 구분해 정리했습니다.

```
📦pages
 ┣ 📂User
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂Query
 ┃ ┃ ┃ ┗ 📜LoginQuery.tsx
 ┃ ┃ ┣ 📂Utils
 ┃ ┃ ┃ ┣ 📜LoginApi.ts
 ┃ ┣ 📂Register
 ┃ ┃ ┣ 📂Query
 ┃ ┃ ┃ ┗ 📜RegisterQuery.tsx
 ┃ ┃ ┣ 📂Utils
 ┃ ┃ ┃ ┣ 📜RegisterApi.ts
```

|      파일명       |                                   내용                                   |
| :---------------: | :----------------------------------------------------------------------: |
|  LoginQuery.tsx   |    LoginApi에서 정의한 Axios 요청을 활용한 Login관련 React-Query 코드    |
|    LoginApi.ts    |                       Login 관련한 Axios 요청코드                        |
| RegisterQuery.tsx | RegisterApi에서 정의한 Axios 요청을 활용한 Register관련 React-Query 코드 |
|  RegisterApi.ts   |                      Register 관련한 Axios 요청코드                      |

### 2-3. 프로젝트 코드 - Zod을 활용한 타입정의 컴포넌트

```
📦pages
 ┣ 📂User
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂Utils
 ┃ ┃ ┃ ┣ 📜LoginData.ts
 ┃ ┃ ┃ ┣ 📜LoginSchema.ts
 ┃ ┣ 📂Register
 ┃ ┃ ┣ 📂Utils
 ┃ ┃ ┃ ┣ 📜RegisterData.ts
 ┃ ┃ ┃ ┣ 📜RegisterSchema.ts
```

|      파일명       |                     내용                      |
| :---------------: | :-------------------------------------------: |
|   LoginData.ts    |    로그인 관련 데이터의 default 값을 정의     |
|  LoginSchema.ts   | 로그인에 사용될 값의 유효성을 검사하는 Schema |
|  RegisterData.ts  |         등록 관련 데이터의 default 값         |
| RegisterSchema.ts | 로그인에 사용될 값의 유효성을 검사하는 Schema |

### 2-4. 프로젝트 코드 - 로그인/등록 페이지의 뷰 컴포넌트

```
📦pages
 ┣ 📂User
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂View
 ┃ ┃ ┃ ┣ 📜Login.style.ts
 ┃ ┃ ┃ ┣ 📜LoginBackground.tsx
 ┃ ┃ ┃ ┣ 📜LoginBottom.tsx
 ┃ ┃ ┃ ┣ 📜LoginHeader.tsx
 ┃ ┃ ┃ ┗ 📜LoginMain.tsx
 ┃ ┃ ┗ 📜Login.tsx
 ┃ ┣ 📂Register
 ┃ ┃ ┣ 📂View
 ┃ ┃ ┃ ┣ 📜Register.style.ts
 ┃ ┃ ┃ ┣ 📜RegisterContainer.tsx
 ┃ ┃ ┃ ┗ 📜RegisterHead.tsx
 ┃ ┃ ┗ 📜Register.tsx

```

|        파일명         |                                               내용                                               |
| :-------------------: | :----------------------------------------------------------------------------------------------: |
|    Login.style.ts     |               styled-components로 뷰 컴포넌트를 만들때, props로 전달될 타입을 정의               |
|  LoginBackground.tsx  |                                  로그인 페이지의 레퍼 컴포넌트                                   |
|    LoginBottom.tsx    | 로그인 페이지의 로그인 버튼 클릭 후, 에러 메세지 및 등록폼으로 이동하는 링크를 반환하는 컴포넌트 |
|    LoginHeader.tsx    |           로그인 페이지의 헤더 영역으로, fontAwesome 이미지와 제목을 반환하는 컴포넌트           |
|     LoginMain.tsx     |                                로그인 폼을 반환하는 메인 컴포넌트                                |
|       Login.tsx       |                     이하 모든 로그인 컴포넌트를 모두 반환하는 레퍼 컴포넌트                      |
|   Register.style.ts   |               styled-components로 뷰 컴포넌트를 만들때, props로 전달될 타입을 정의               |
| RegisterContainer.tsx |                            등록 폼 컴포넌트를 담는 등록 메인 컴포넌트                            |
|   RegisterHead.tsx    |          등록 페이지의 헤더 영역으로, 로그인 페이지로 이동하는 링크를 반환하는 컴포넌트          |

### 3.프로젝트 로그인 코드

```
📦server
 ┣ 📂auth
 ┗ 📂axios
```

### 3-1. 프로젝트 코드 - Auth 관련 컴포넌트

```
📦auth
 ┣ 📜AuthMiddleware.tsx
 ┣ 📜AuthRequired.tsx
 ┗ 📜useAuthRefreshToken.tsx

```

|         파일명          |                                 내용                                  | 특이사항 |
| :---------------------: | :-------------------------------------------------------------------: | :------: |
|   AuthMiddleware.tsx    |      Auth정보가 있을 경우, children을 반환하는 미들웨어 컴포넌트      |  작업중  |
|    AuthRequired.tsx     | 토큰정보에서 유저의 Role에 따라 children을 반환하는 미들웨어 컴포넌트 |  작업중  |
| useAuthRefreshToken.tsx |    서버에 새로운 토큰을 요청하고 이를 context에 저장하는 컴포넌트     |  작업중  |

### 3-2. 프로젝트 코드 - Axios 관련 컴포넌트

```
📦axios
 ┣ 📂axiosCustom
 ┃ ┣ 📜useAxiosGet.tsx
 ┃ ┗ 📜useAxiosPost.tsx
 ┣ 📂axiosInterceptor
 ┃ ┣ 📜useAxiosInterCeptor.tsx
 ┃ ┣ 📜useAxiosRequest.tsx
 ┃ ┗ 📜useAxiosResponse.tsx
 ┣ 📜axiosCustom.ts
 ┗ 📜axiosType.ts

```

|         파일명          |                                       내용                                        | 특이사항 |
| :---------------------: | :-------------------------------------------------------------------------------: | :------: |
|     useAxiosGet.tsx     |          React-Query 도입 전, Axios Get 액션만 담당하는 커스텀 컴포넌트           | 삭제예정 |
|    useAxiosPost.tsx     |          React-Query 도입 전, Axios Post 액션만 담당하는 커스텀 컴포넌트          | 삭제예정 |
| useAxiosInterCeptor.tsx | Request(useAxiosRequest),Response(useAxiosResponse) 함수를 받는 Axios InterCeptor | 보완예정 |
|   useAxiosRequest.tsx   |                  Axios InterCeptor에서 Request, 요청 로직을 담당                  | 보완예정 |
|  useAxiosResponse.tsx   |                 Axios InterCeptor에서 Response, 반환 로직을 담당                  | 보완예정 |
|     axiosCustom.ts      |                               Axios를 커스텀한 코드                               |          |
|      axiosType.ts       |       Axios를 커스텀하거나 Axios InterCeptor 사용하는데 필요한 타입을 정의        |          |

## 🔧 프로젝트 스펙

|                               npm 모듈명                               |               사용목적               |                        사용이유                         |
| :--------------------------------------------------------------------: | :----------------------------------: | :-----------------------------------------------------: |
|                              @craco/craco                              |          프로젝트 경로설정           | 폴더가 중첩될 수록 경로 depth 때문에, 가독성으로 사용함 |
| @fortawesome/free-solid-svg-icons <br/> @fortawesome/react-fontawesome |            아이콘 이미지             |     이전 프로젝트에서 사용해왔고, 사용방법이 간단함     |
|                 react-hook-form // @hookform/resolvers                 |           React Hook Form            |                     React Hook Form                     |
|                         @tanstack/react-query                          |             React Query              |                       React Query                       |
|                       base-64 // @types/base-64                        | 이미지를 base64 형태로 인코딩/디코딩 |      이미지를 최종 base64 형태로 만들기 위해 필요       |
|                       browser-image-compression                        |          이미지 용량을 압축          |  이미지를 폼데이터에 저장할때, 조금은 용량을 줄일 용도  |
|                             framer-motion                              |       로그인 페이지 애니메이션       |                로그인 페이지 애니메이션                 |
|                                  zod                                   |      폼 인풋의 유효성 타입검사       |               폼 인풋 값의 유효성을 검사                |

## 🔬 코드 흐름

<!-- ------------------------------------------------------------------------------------------------------------- -->

## 🔮 코드 설명

### Custom Elements - [Provider] form (components > customElements > FormElm.tsx)

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
 * FormElmContainer : styled-components로 만든 스타일 컴포넌트
 * FormProvider : react-hook-form에 관련된 값을 자식 컴포넌트에 전달(Provioder)하는 역할
 * **/

// Form 엘리먼트를 정의
function FormElm<
  // React Hook Form 에서 Input 과 같은 폼에서 사용될 값의 타입을 정의
  // 키는 string 이, 값은 어떤 값이든 허용하기 위해 any
  DataSchema extends Record<string, any>,
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
  children: any;
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
    <FormElmContainer margin="10px 0 10px 0">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit as GenericOnSubmit)}>
          {children}
        </form>
      </FormProvider>
    </FormElmContainer>
  );
}
```

### Custom Elements - [Consumer] form (LoginSchema.ts / RegisterSchema.ts / LoginForm.tsx / RegisterForm.tsx)

```js

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
// SubmitHandler<LoginSchemaType>  : zod를 통해 만든 LoginFormSchema의 타입을 통해 타입을 추출/추론(infer)한 타입을 onSubmit 핸들러 타입에 연결함


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


/**
 * function FormElm<
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

  return (
    <FormElm<LoginSchemaType, typeof LoginFormSchema>
      onSubmit={onLoginSubmit}
      schema={LoginFormSchema}
    >
     ...중략...
    </FormElm>
  );
}

export default LoginForm;





```

<!-- ------------------------------------------------------------------------------------------------------------- -->

## 😭 작업 중 어려웠던 점

## ✍🏻 코드 작성하며 배운 점

## 🐛 버그

## 👀 수정사항 및 향후 계획
