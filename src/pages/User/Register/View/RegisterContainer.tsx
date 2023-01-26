import React, { ReactNode } from 'react';

import {
  RegisterArea,
  RegisterBox,
  RegisterBackground,
  RegisterForm,
} from './register.style';

import BgAnimation from '@components/design/bgAnimation/bgAnimation';
import { OffScreenTitle } from '@components/styles/common/hiddenText.style';

interface ContainerProps {
  children: ReactNode;
}

function RegisterContainer({ children }: ContainerProps) {
  return (
    <RegisterArea>
      <RegisterBackground />
      <RegisterBox>
        <OffScreenTitle>회원가입등록폼</OffScreenTitle>
        <RegisterForm>{children}</RegisterForm>
      </RegisterBox>
      <BgAnimation />
    </RegisterArea>
  );
}

export default RegisterContainer;
