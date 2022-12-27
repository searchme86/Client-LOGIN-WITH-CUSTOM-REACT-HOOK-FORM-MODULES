import React from 'react';
import { useFormContext } from 'react-hook-form';

import { ResetType } from '../../../pages/User/Login/LoginUtils/LoginFormType';

function ResetBtnElm({ values }: ResetType) {
  const {
    reset,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <input
      disabled={isSubmitting}
      type="button"
      onClick={() => reset && reset(values)}
      value="Reset"
    />
  );
}

export default ResetBtnElm;
