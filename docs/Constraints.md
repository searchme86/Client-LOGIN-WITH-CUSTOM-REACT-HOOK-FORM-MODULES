## 🐛 버그 및 한계

- 🪛 React Hook Form

  - SingleImageUplpader

    - 하나의 이미지만 업로드 가능
    - 이미지 사이즈 및 허용 가능한 타입에 제한을 뒀음에도 기능이 작동하지 않음
    - file에 대해 any() 라고 정의했음

      - registerSchema.ts 중

      ```js
      const MAX_FILE_SIZE = 500000;
      const ACCEPTED_IMAGE_TYPES = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
      ];

         userImage: z
      .any()
      .refine((files) => files?.length > 0, {
        message: '이미지를 등록해 주세요',
      })
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
        message: '파일 확장자는 jpg, jpeg, png, webp 만 가능합니다.',
      })
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
        message: '최대 5MB 까지 업로드 가능 합니다, 파일 용량을 체크해주세요',
      }),

      ```

    - 이미지 삭제 기능을 추가하지 못함

  - resetElement

    - Reset 초기화 버튼을 누르면, input type="file" 값이 삭제되지 않음

  - InputElement

    - Input 폼 값의 입력 지연을 위한, useDebounce 훅을 적용하지 못함

      - React Hook Form에서 Input, onChange 이벤트에 해당하는 핸들러 적용을 더 연구해야함

      - input type에 조건식을 두어, 값이 true/false에 따라, input type="text" / input type="passowrd"로 변경기능 추가 못함
        - 목표: 인풋 비밀번호, 우측에 버튼이 있고, 이를 클릭 시, 비밀번호 보이기 토글기능

  - 그 외
    - input type="checkbox", select 컴포넌트 코드가 있었지만, 프로젝트 내 사용 할 목적이 없어 코드 삭제함

- 🔧 Axios Error Message 처리

  - 백엔드에서 반횐되는 Axios Error Message를 RegisterForm/LoginForm에서 보여주지 못함

    - Axios Error 타입을 string에 할당? 하는 방안을 연구해야함

      - 이전 포트폴리오(JS리액트)에서는 타입 정보를 확인하지 않기 때문에, string으로 인식하여 해당 Axios Error Message 저장해 사용했음
      - TS리액트에서 Axios Error는 'Axios ERROR'라는 타입이 존재해, 'Axios ERROR'를 'string'에 할당 할 수 없음

- 🔨 Authentication(로그인) & Authorization(권한) with Axios interceptor

  - React Hook Form 엘리먼트 구현에 많은 시간을 소요해, Auth 구현을 완벽히 처리 못함
  - 현재 등록하기 & 로그인 만 가능

  - Authentication(로그인)

    - refresh Token을 요청하는 React-Query 구현 못함

  - Authorization(권한)

    - role에 따른 유저 라우트 filter 구현 못함
      - Protected Auth Router
