import React, { ReactNode } from 'react';

import {
  RegisterArea,
  RegisterBox,
  RegisterBackground,
  RegisterForm,
} from './Register.style';

import BgAnimation from '../../../../components/Design/BgAnimation/BgAnimation';
import { OffScreenTitle } from '../../../../assets/styles/Common.style';

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
