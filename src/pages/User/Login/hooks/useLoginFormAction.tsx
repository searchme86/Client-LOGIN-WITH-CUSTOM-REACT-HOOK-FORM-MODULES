import React, { useState } from 'react';
import { FormSchemaType } from '../LoginUtils/LoginFormType';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { decode as base64_decode, encode as base64_encode } from 'base-64';
import { zodResolver } from '@hookform/resolvers/zod';

import { FormSchema } from '../LoginUtils/LoginSchema';

function useLoginFormAction() {
  const methods = useForm({
    resolver: zodResolver(FormSchema),
  });

  const setValue = methods.setValue;

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    if (data.files) {
      let file = data.files[0];
      console.log('file', file);
      const fileRef = data.files[0] || '';
      const fileType: string = fileRef.type || '';
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        let encoded = base64_encode(`${ev.target.result}`);
        setValue('files', `data:${fileType};base64,${encoded}`);
      };
      console.log('나옴?', data.files);
    }

    console.log('data', { data });
    console.log('ddd');

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
