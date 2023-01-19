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
  - (Form 컴포넌트 안에서) 용도에 맞게 필요한 컴포넌트를 가져다 사용가능
    - Input Checkbox 컴포넌트
    - Input File Upload 컴포넌트
  - 주입되는 props를 통해 컴포넌트의 사용성을 결정
    - Input 컴포넌트
  - [Zod](https://github.com/colinhacks/zod 'zod')를 통해 Form의 Validation 구현

- Persistant Auth가 가능한 로그인 기능 구현

## 🔌 이전 프로젝트와 비교

| **포트폴리오** |             fleamarketagora              | Client_TS-React-Hook-Module                                                                                                    |
| :------------: | :--------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------ |
|    **목적**    |             상품/유저의 CRUD             | 재사용과 추상화 특징을 갖는<br/> React Hook Form 적용된 <br/>폼 엘리먼트(form,input) 컴포넌트<br/> 리프레쉬 토큰 기반의 로그인 |
|    **특징**    | 웹접근성을 준수하려는 컴포넌트 코드 구현 | ^                                                                                                                              |

## 📦 폴더구조

## 🔧 프로젝트 스펙

## 📈 작업현황

## 📆 작업 히스토리

## 🔬 코드 흐름

## 🔮 코드 설명

## 😭 작업 중 어려웠던 점

## ✍🏻 코드 작성하며 배운 점

## 🐛 버그

## 👀 수정사항 및 향후 계획
