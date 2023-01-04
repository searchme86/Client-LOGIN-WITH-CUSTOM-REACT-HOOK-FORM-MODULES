import React from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrorMessage from '../UtilElements/FormErrorMessage';

function CheckBoxElm({ name, text }: { name: string; text: string }) {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <div>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="block border text-lg rounded w-6 h-6 border-gray-200 text-blue-600 focus:ring-0 focus:outline-none focus:ring-offset-0 disabled:text-gray-200 disabled:cursor-not-allowed"
          {...register(name)}
          disabled={isSubmitting}
        />
        <span className="block ml-4">{text}</span>
      </label>
      <FormErrorMessage name={name.toString()} />
    </div>
  );
}

export default CheckBoxElm;
