import React from 'react';
import RegisterContainer from './view/registerContainer';
import RegisterHead from './view/registerHead';
import RegisterForm from './form/registerForm';

function Register() {
  return (
    <RegisterContainer>
      <RegisterHead />
      <RegisterForm />
    </RegisterContainer>
  );
}

export default Register;
