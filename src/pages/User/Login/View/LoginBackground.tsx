import React, { ReactNode } from 'react';

import { LoginWrapper, LoginBgShapehape } from './Login.style';

import BgAnimation from '@components/Design/BgAnimation/BgAnimation';

interface ChildProps {
  children: ReactNode;
}

function LoginBase({ children }: ChildProps) {
  return (
    <LoginWrapper
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{
        x: window.innerWidth,
        transition: { ease: 'easeIn', duration: 1 },
      }}
    >
      {children}
      <LoginBgShapehape />
      <BgAnimation />
    </LoginWrapper>
  );
}

export default LoginBase;
