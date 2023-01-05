import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '../../../assets/styles/Button.style';

function SubmitBtnElm({
  display,
  bgColor,
  width,
  btnTxt,
  fontColor,
  padding,
  margin,
}: {
  btnTxt: string;
  bgColor?: string;
  width?: string;
  fontColor?: string;
  display?: string;
  padding?: string;
  margin?: string;
}) {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button
      type="submit"
      display={display}
      disabled={isSubmitting}
      width={width}
      bgColor={bgColor}
      fontColor={fontColor}
      padding={padding}
      margin={margin}
    >
      {btnTxt}
    </Button>
  );
}

export default SubmitBtnElm;
