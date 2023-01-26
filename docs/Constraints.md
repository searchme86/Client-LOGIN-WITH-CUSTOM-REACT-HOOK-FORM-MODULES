## 다음 내용들을 다룹니다.

### 🐛 버그 및 한계 / 시도했지만 실패

---

## 🐛 버그 및 한계 / 시도했지만 실패

### React Hook Form

### 1. React Hook Form 엘리먼트 구현에 집중하게 되어 Auth 구현을 완벽히 처리 못함

### 2. Reset 버튼 엘리먼트

- Reset초기화 버튼을 누르면 input type="file" 값이 삭제되지 않음

### 3. Input 엘리먼트

- debounce 훅을 적용하지 못함
- type="password" / type="text" 의 type을 변경하는 버튼 추가 실패
  - 입력한 비밀번호 보기 버튼 기능을 넣기 위해, type={}에 조건식을 통해 password/type으로, 변경하려 했지만 실패함

### 그 외

### 1. 컴포넌트 분리

- File 및 FormData를 각각 담당하는 컴포넌트를 만드려 했지만, [Hook의 규칙](https://ko.reactjs.org/docs/hooks-rules.html 'Hook의 규칙')에 위배되기 때문에, 따로 컴포넌트를 만들지 않고, onSubmit 함수에 모두 정의함
  - 'Hook을 일반적인 JavaScript 함수에서 호출하지 마세요.'
    - React Hook Form의 모든 data는 onSubmit함수에서 생성되기 때문에, 해당 함수 외부에서는 폼 데이터 접근이 불가능함

### 2. Axios Error Message

- 백엔드에서 반횐되는 Axios Error Message를 RegisterForm/LoginForm에서 보여주지 못함

  - 이전 포트폴리오(JS리액트)에서는 타입 정보를 확인하지 않기 때문에, string으로 인식하여 해당 Axios Error Message 저장이 가능함
  - TS리액트에서 Axios Error는 'Axios ERROR'라는 타입이 존재해, 'Axios ERROR'를 'string'에 할당 할 수 없음

### 3. Auth & RefreshToken

- 현재 Register / Login 만 가능함
- Auth 체크가 되질 않아, Protected Auth Router가 작동않됨
