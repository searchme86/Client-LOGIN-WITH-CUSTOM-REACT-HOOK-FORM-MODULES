import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@assets/styles/Button.style';

function ResetBtnElm<DefaultValue extends Record<string, any>>({
  width,
  values,
  btnTxt,
  bgColor,
  fontColor,
  display,
  padding,
  margin,
}: {
  values: DefaultValue;
  btnTxt: string;
  width?: string;
  bgColor?: string;
  fontColor?: string;
  display?: string;
  padding?: string;
  margin?: string;
}) {
  const {
    reset,
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button
      type="button"
      disabled={isSubmitting}
      display={display}
      width={width}
      bgColor={bgColor}
      fontColor={fontColor}
      padding={padding}
      margin={margin}
      onClick={() => reset && reset(values)}
    >
      {btnTxt}
    </Button>
  );
}

export default ResetBtnElm;
