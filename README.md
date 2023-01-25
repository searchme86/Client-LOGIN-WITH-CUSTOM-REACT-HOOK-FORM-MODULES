## ⌨️ 개요

### [React Hook Form](https://react-hook-form.com/)이 적용된, 재사용가능한 폼 컴포넌트(form, input)를 바탕한 로그인 기능 구현하는 코드 중 *클라이언트*를 담당하는 코드

## 📝 프로젝트 README

|      파일명       |            내용             | 위치폴더 |
| :---------------: | :-------------------------: | :------: |
|     README.md     |    프로젝트 소개 및 이해    |   root   |
|     Codes.md      |    프로젝트 코드 및 폴더    |  /docs   |
| Issue-to-learn.md |  이슈 및 해결사항, 배운점   |  /docs   |
|  Constraints.md   | 프로젝트의 한계 및 향후계획 |  /docs   |

---

### 프로젝트 제목

### [React Hook Form](https://react-hook-form.com/)이 기본 적용된, 재사용가능한 폼 컴포넌트(form, input) 구현과 활용

## 🔦 프로젝트 특징

- React Hook Form이 적용된, 추상성이 높은 폼 엘리먼트(form, input) 구현

  - 모든 폼 엘리먼트(form,input,select 등)는 React Hook Form이 적용된 커스텀 컴포넌트로 변경
  - (Form 컴포넌트 안에서) 타입 (input type="file", input type="text", input type="checkbox", select )에 맞게 필요한 컴포넌트를 가져와 사용가능
    | 타입 | 컴포넌트 명 | 용도 |
    | :---------------: | :-------------------------: | :--: |
    |input type="file"|SingleImageUploader|하나의 파일 업로드|
    |input type="text"|InputElm|텍스트 입력 Input|

  - 주입되는 props를 통해 컴포넌트의 사용성을 결정

    - input type="text"
    - input type="file"

  - [Zod](https://github.com/colinhacks/zod 'zod')를 통해 Form의 Validation 구현
    - 타입스크립트의 타입을 통한 유효성 검사 가능

- Persistant Auth가 가능한 로그인 기능 구현

### ❕ 프로젝트 시작하게 된 계기

- 💪🏻 1. [이전 포트폴리오,fleamarketagora](https://github.com/searchme86/App_Final_Deployed '이전 포트폴리오,fleamarketagora')의 코드를 리펙토링하고 개선하여, 스스로 기술적 성장을 목표함

  - 🔑 '상품 등록하기'에서, 폼(Form)과 React Hook Form을 통한 유효성 검사가 핵심기능 이었음
  - 💡 폼과 React Hook Form이 한 쌍으로 자주 사용되어, 함께 모듈화되는 방법이 없을까 생각하는 중, 관련 자료들을 발견하게 됨

    ### 📒 관련 자료

    - 📒 [How to create reusable form components with React Hook Forms and Typescript](https://www.thisdot.co/blog/how-to-create-reusable-form-components-with-react-hook-forms-and-typescript 'How to create reusable form components with React Hook Forms and Typescript')
    - 📒 [File Upload with Chakra UI and react-hook-form](https://gist.github.com/brenopolanski/5efe54b46cad0882b3ce41dc8db64608 'File Upload with Chakra UI and react-hook-form')

    - 📒 [Chakra UI + React Hook Form](https://chakra-ui.com/getting-started/with-hook-form 'Chakra UI + React Hook Form')

    - ### 🙏 개선 희망사항
      |                                                       AS-IS                                                        |                                                                            개선 이유                                                                             |                                              TO-BE                                              |
      | :----------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
      |                                        Cannot read properties of undefined                                         |                          - 코드 규모가 확장 될 수록, 값이 undefined이거나 이를 추적하기 어려움 <br/> - 값의 형태/타입을 찾아내기 어려움                          |                            타입스크립트 적용을 통해 코드 안정성 확보                            |
      |                 Token 상태 및 관리 <br/> - refresh 되지 않음 <br/> - LocalStorage에 저장하여 관리                  |                                                  - Token은 refresh 해야함 <br/> - LocalStorage에 저장하면 않됨                                                   | - Token에 refresh 특성부여 <br/> - 서버에서 생성해 토큰 갱신 <br/> - Persistant login 으로 전환 |
      | ['react-file-base64'](https://www.npmjs.com/package/react-file-base64 'react-file-base64’)을 통해 이미지 업로드 함 |                               폼 상태를 초기화(reset) 할 때, 모듈 'react-file-base64'에 저장된 값만 남아있어 이를 처리하기 어려움                                |                                 이미지 업로드 과정 하나씩 구현                                  |
      |                                   (Chakra UI) Chakra UI를 통한 폼 컴포넌트 구현                                    |                                                            ref로 input을 참조 되지 않는 버그🐛를 경험                                                            |                                     Chakra UI 사용하지 않기                                     |
      |                              (styled-components) styled-components를 통한 스타일 구현                              | 컴포넌트를 감싸거나, 자식으로 props 전달 이외에 특별한 목적이 없는 div, 혹은 일반 스타일까지도, styled 컴포넌트로 만들어,<br/> 컴포넌트에 불필요한 코드가 낭비됨 |                                 의미없는 스타일 코드 생성 방지                                  |
      |                                   의존하는 컴포넌트의 Import depth “../”가 많음                                    |                                                                  컴포넌트의 가독성이 좋지 않음                                                                   |                                         절대경로를 사용                                         |
      |                                    Redux에 비동기/동기 상태가 함께 저장해 사용                                     |                                             비동기 상태를 관리하는 React-Query를 통해 프로젝트 상태를 분리해서 관리                                              |                   비동기는 React-Query에서, 동기상태는 Context로 이원해 관리                    |

- 2. 학습 내용을 코드에 직접 적용
  - TypeScript
  - React-Query
  - Persistant Login
    - 💡 [React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios](https://www.youtube.com/watch?v=nI8PYZNFtac 'React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios')

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
|          |    리펙토링 및<br/> 구현    | 기존 로그인 코드에 인라인 Axios 요청을 별도 컴포넌트로 하려고 함<br/> 액션(GET/POST)에 따른 커스텀 컴포넌트(useAxiosGet/useAxiosPost) 개발 |
|          |     구글링 및 코드이해      |                                           재사용가능한 React Hook Form에 대한 코드 및 이론 학습                                            |
|          |            구현             |                              재사용가능한 React Hook Form 구현 (이미지 업로드 -> 인풋 폼 -> 초기화/등록 버튼)                              |
|          |          리펙토링           |                                       베이스 JS리액트 코드에서 로그인/등록 페이지에서 핵심코드 추출                                        |
|          |          리펙토링           |                    베이스 JS리액트 코드의 로그인 로직과 이전 포트폴리오에서 로그인/등록 페이지에서 핵심코드를 리펙토링                     |
|          |            구현             |                                       재사용가능한 React Hook Form을 통해 등록 폼의 기본 골격을 만듦                                       |
|          |           구글링            |                                                    Context / localStorage 타입이슈 해결                                                    |
|          |       구글링 및 구현        |                                                Axios InterCeptor 학습 및 TS로 마이그레이션                                                 |
|          | 폴더 정리 및<br/> 코드 분할 |               Axios InterCeptor를 request(useAxiosRequest)/Response(useAxiosResponse)에 따라 함수를 각각의 컴포넌트로 구분함               |
|          |           구글링            |                                                          React-Query 학습 및 이해                                                          |
|          | 리펙토링<br/> - 등록페이지  |                                                   등록(register) 폼 만들기 (디자인 포함)                                                   |
|          | 폴더 정리 및<br/> 코드 분할 |                                          로그인 및 등록 페이지의 뷰 컴포넌트를 분할해서 코드 정리                                          |
|          |           테스트            |                                 커스텀 React Hook Form에서 값 생성 및 초기화/등록 버튼 동작하는지 개발작업                                 |
|          |           테스트            |                                              등록 폼에서 Submit한 값이 서버로 전달되는지 확인                                              |
|          |            구현             |                                                           등록(register) 폼 완료                                                           |
|          |            구현             |                                                   로그인(login) 폼 만들기 (디자인 포함)                                                    |
|          |            구현             |                                             로그인(login)에 해당하는 Axios 및 React-Query 개발                                             |
|          |            구현             |                                            등록(Register)에 해당하는 Axios 및 React-Query 개발                                             |
|          |           테스트            |                                  로그인 및 등록 React-Query에서 요청하는 값이 서버에서 확인되는지 테스트                                   |
|          |            구현             |                                                           등록(register) 폼 완료                                                           |
|          |    리펙토링 및<br/> 구현    |                                          기존 Context에 상태관리 useState를 useReducer로 리펙토링                                          |
|          | 폴더 정리 및<br/> 코드 분할 |                                         유저의 Login/Register에 따라 React-Query코드를 나눠 정리함                                         |
| 진행예정 |           테스트            |                                           엑시오스 인터셉터와 백엔드의 리프레쉬 토큰 패칭 테스트                                           |
|          |            구현             |                                             백엔드로 Refresh Token을 요청하는 React-Query 개발                                             |
|          |           테스트            |                           AuthMiddleWare & Protected Router 백엔드로 Refresh Token을 요청하는 React-Query 테스트                           |
|          |            구현             |                                 React-Query와 Axios InterCeptor / Refresh Token이 서로 적용되는 코드 구현                                  |
|          |            배포             |                                                                 코드 배포                                                                  |
