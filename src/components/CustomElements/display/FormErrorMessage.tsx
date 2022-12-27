import React from 'react';
import { useFormContext } from 'react-hook-form';

function FormErrorMessage({ name }: { name?: string }) {
  const {
    formState: { errors },
  } = useFormContext();
  // the useFormContext hook returns the current state of hook form.

  if (!name) return null;

  const error = errors[name];

  if (!error) return null;

  console.log('name', name);
  return <p className="error">{error?.message?.toString()}</p>;
}

export default FormErrorMessage;
