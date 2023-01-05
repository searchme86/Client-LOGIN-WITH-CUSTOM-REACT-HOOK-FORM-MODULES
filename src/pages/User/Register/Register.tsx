import React from 'react';

import RegisterContainer from './RegisterView/RegisterContainer';
import RegisterHead from './RegisterView/RegisterHead';
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
