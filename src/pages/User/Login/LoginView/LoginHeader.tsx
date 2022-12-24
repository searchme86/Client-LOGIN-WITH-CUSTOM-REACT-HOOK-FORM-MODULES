import React from 'react';

import { LoginHead, LoginToHome, LoginTitle } from '../Login.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';

import { OffScreenSpan } from '../../../../assets/styles/Common.style';

function LoginHeader() {
  return (
    <LoginHead>
      <LoginToHome to={'/'}>
        <OffScreenSpan>홈으로 이동</OffScreenSpan>
        <FontAwesomeIcon
          icon={faHouseChimneyWindow}
          style={{ fontSize: '30px', color: '#303C6C' }}
        />
      </LoginToHome>
      <LoginTitle>LogIn</LoginTitle>
    </LoginHead>
  );
}

export default LoginHeader;
