import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const ErrorMsg = styled.p`
  font-size: 13px;
  margin: 5px 0 0 5px;
  color: #ff3333;
  font-weight: bold;
`;

function FormErrorMessage({ name }: { name?: string }) {
  const {
    formState: { errors },
  } = useFormContext();
  // the useFormContext hook returns the current state of hook form.

  if (!name) return null;
  const error = errors[name];
  if (!error) return null;
  console.log('name', name);

  return <ErrorMsg>{error?.message?.toString()}</ErrorMsg>;
}

export default FormErrorMessage;
