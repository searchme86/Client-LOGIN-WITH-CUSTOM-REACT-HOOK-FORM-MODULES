import React from 'react';
import { useFormContext } from 'react-hook-form';

function SubmitBtnElm() {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <button
      type="submit"
      className="w-full px-8 py-4 flex items-center justify-center uppercase text-white font-semibold bg-blue-600 rounded-lg disabled:bg-gray-100 disabled:text-gray-400"
      disabled={isSubmitting}
    >
      Create account
    </button>
  );
}

export default SubmitBtnElm;
