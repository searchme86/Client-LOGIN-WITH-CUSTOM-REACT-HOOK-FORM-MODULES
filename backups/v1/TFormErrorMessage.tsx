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

  return <span>{error.message?.toString()}</span>;
}

export default FormErrorMessage;
