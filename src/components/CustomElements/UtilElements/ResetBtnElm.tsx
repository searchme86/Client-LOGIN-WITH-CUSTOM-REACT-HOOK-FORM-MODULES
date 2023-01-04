import React from 'react';
import { useFormContext } from 'react-hook-form';

import { ResetType } from '../../../pages/User/Login/LoginUtils/LoginFormType';

function ResetBtnElm({ values }: ResetType) {
  const {
    reset,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <div className="">
      <button
        type="button"
        disabled={isSubmitting}
        onClick={() => reset && reset(values)}
      >
        Reset
      </button>
    </div>
  );
}

export default ResetBtnElm;
