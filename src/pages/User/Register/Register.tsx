import React from 'react';
import RegisterBody from './View/RegisterBody';

import RegisterContainer from './View/RegisterContainer';
import RegisterHead from './View/RegisterHead';

function Register() {
  return (
    <RegisterContainer>
      <RegisterHead />
      <RegisterBody />
    </RegisterContainer>
  );
}

export default Register;
