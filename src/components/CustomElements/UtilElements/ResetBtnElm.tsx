import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '../../../assets/styles/Button.style';

function ResetBtnElm<DefaultValue extends Record<string, any>>({
  width,
  values,
  btnTxt,
  bgColor,
  fontColor,
}: {
  values: DefaultValue;
  btnTxt: string;
  width?: string;
  bgColor?: string;
  fontColor?: string;
}) {
  const {
    reset,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button
      type="button"
      disabled={isSubmitting}
      width={width}
      bgColor={bgColor}
      fontColor={fontColor}
      onClick={() => reset && reset(values)}
    >
      {btnTxt}
    </Button>
  );
}

export default ResetBtnElm;
