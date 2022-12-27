import React from 'react';
import { FormSchemaType } from '../LoginUtils/LoginFormType';
import { SubmitHandler, useFormContext } from 'react-hook-form';

function useLoginFormAction() {
  const AgreementConfirmation = () => {
    const { getValues } = useFormContext();
    const data = getValues(); //watch() as FormSchemaType
    return data.accept ? <p>Thank you for accepting the agreements</p> : null;
  };

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log({ data });
    await new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(data));
        resolve(undefined);
      }, 3000);
    });
  };

  return { AgreementConfirmation, onSubmit };
}

export default useLoginFormAction;
