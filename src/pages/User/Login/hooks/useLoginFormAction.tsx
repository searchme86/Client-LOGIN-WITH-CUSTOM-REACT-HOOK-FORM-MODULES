import React from 'react';
import { FormSchemaType } from '../LoginUtils/LoginFormType';
import { SubmitHandler } from 'react-hook-form';

function useLoginFormAction() {
  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log({ data });
    await new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data));
        resolve(undefined);
      }, 3000);
    });
  };

  return { onSubmit };
}

export default useLoginFormAction;
