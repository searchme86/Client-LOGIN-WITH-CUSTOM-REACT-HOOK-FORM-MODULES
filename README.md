## ⌨️ 개요

### [React Hook Form](https://react-hook-form.com/)이 적용된, 재사용가능한 폼 컴포넌트(form, input)를 바탕한 로그인 기능 구현하는 코드 중 클라이언트를 담당하는 프로젝트입니다.

### 해당 강좌를 통해서 아이디어를 얻었습니다

- 💡 [React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios](https://www.youtube.com/watch?v=nI8PYZNFtac 'React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios')

- 💡 [How to create reusable form components with React Hook Forms and Typescript](https://www.thisdot.co/blog/how-to-create-reusable-form-components-with-react-hook-forms-and-typescript 'How to create reusable form components with React Hook Forms and Typescript')

- 💡 [File Upload with Chakra UI and react-hook-form](https://gist.github.com/brenopolanski/5efe54b46cad0882b3ce41dc8db64608 'File Upload with Chakra UI and react-hook-form')

## 🚀 프로젝트 착수계기

### [이전 포트폴리오,fleamarketagora](https://github.com/searchme86/App_Final_Deployed '이전 포트폴리오,fleamarketagora') 코드를 다음의 이유로 개선하려고 합니다.

- Cannot read properties of undefined, 타입스크립트 적용.

  - JS코드 규모가 커질 수록, 사용하려는 값/전달받은 값이 undefined일 경우가 생겨 이를 추적하기 애 먹은적 있었습니다. 타입스크립트를 연습하면서, TS로 프로젝트 코드를 변경했습니다.

- Persistant login, refresh token 을 적용한 로그인으로 변경.

  - 이전 포트폴리오에서 로그인은 한번 생성한 토큰을 로컬스토리지에 저장해서 사용했지만, refresh token 개념을 적용해 지속적으로 토큰이 갱신되는 과정으로 적용하려고 합니다.

- 비동기 상태는 React-Query로, 프로젝트 상태는 Context로 구분해 상태관리.

  - 비동기-동기 상태를 모두 Redux Toolkit에서 저장했던 방식을 React-Query를 학습한 이후, 코드를 분리해 프로젝트 구성하려고 합니다.

- 이미지 업로드 모듈, 'react-file-base64'을 다른 방식으로 대체.

  - 이전 포트폴리오에서 폼 상태를 초기화(reset) 할 때, 이미지 모듈에 저장된 값만 남아있어 이를 처리하기 어려웠습니다. 특별히 백엔드(노드)에서 이미지 처리를 하지 않아도 되는 장점이 있었지만, 이번에는 이미지 업로드 과정을 하나씩 구현해보려고 합니다.

- (이전 포트폴리오) 컴포넌트의 코드 자체를 개선,
  - 관심사 분리에 따라 의미 별(비즈니스 로직 / 서버요청 등등) 로 코드 분리
  - 의존성 있는 컴포넌트를 import 할 경우, 상대경로를 절대경로로 변경
  - 불필요하게 styled-components로 만든 스타일 코드, 중복되거나 불필요한 것 삭제

## 🔦 프로젝트 목적

- React Hook Form이 적용된, 추상성이 높은 폼 엘리먼트(form, input) 구현
- Persistant Auth가 가능한 로그인 기능 구현

## 📦 폴더구조

## 🔌 이전 프로젝트와 비교

## 🔧 프로젝트 스펙

## 📈 작업현황

## 📆 작업 히스토리

## 🔬 코드 흐름

## 🔮 코드 설명

## 😭 작업 중 어려웠던 점

## ✍🏻 코드 작성하며 배운 점

## 🐛 버그

## 👀 수정사항 및 향후 계획
