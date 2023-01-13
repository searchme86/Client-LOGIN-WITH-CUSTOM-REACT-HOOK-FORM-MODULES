import React from 'react';

import RegisterContainer from './View/RegisterContainer';
import RegisterHead from './View/RegisterHead';
import RegisterForm from './Form/RegisterForm';

function Register() {
  return (
    <RegisterContainer>
      <RegisterHead />
      <RegisterForm />
    </RegisterContainer>
  );
}

export default Register;
