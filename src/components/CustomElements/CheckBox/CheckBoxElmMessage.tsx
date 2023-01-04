import React from 'react';
import { useFormContext } from 'react-hook-form';

function CheckBoxElmMessage() {
  const { getValues } = useFormContext();
  const data = getValues(); //watch() as FormSchemaType

  console.log('data', data);
  return data.accept ? <p>Thank you for accepting the agreements</p> : null;
}

export default CheckBoxElmMessage;
