import React from 'react';
import { useFormContext } from 'react-hook-form';
import TFormErrorMessage from '../display/FormErrorMessage';

function SelectElm({
  options,
  name,
  ...rest
}: {
  name: string;
  options: string[];
}) {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();
  // const errorMessage = errors[name]?.message;

  return (
    <div className="">
      <p>Pizza of your choice</p>
      <select {...register(name)} {...rest} disabled={isSubmitting}>
        {options.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
      {/* {errorMessage && <p className="error">{errorMessage.toString()}</p>} */}

      <TFormErrorMessage name={name} />
    </div>
  );
}

export default SelectElm;
