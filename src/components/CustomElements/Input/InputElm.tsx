import React from 'react';
import { useFormContext } from 'react-hook-form';
import TFormErrorMessage from '../UtilElements/FormErrorMessage';

function InputElm<Model extends Record<string, any>>({
  name,
  displayName,
  type,
}: {
  name: keyof Model;
  displayName: string;
  type: string;
}) {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <div>
      <label className="block">
        <span className="block">{displayName}</span>
        <input
          type={type}
          className={`block border text-lg px-4 py-3 mt-2 rounded-lg border-gray-200 focus:bg-white text-gray-900 focus:border-blue-600 focus:ring-0 outline-none w-full  disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed`}
          {...register(name.toString())}
          disabled={isSubmitting}
        />
      </label>

      <TFormErrorMessage name={name.toString()} />
    </div>
  );
}

export default InputElm;
