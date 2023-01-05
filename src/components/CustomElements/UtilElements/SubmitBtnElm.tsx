import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '../../../assets/styles/Button.style';

function SubmitBtnElm({
  bgColor,
  width,
  btnTxt,
  fontColor,
}: {
  btnTxt: string;
  bgColor?: string;
  width?: string;
  fontColor?: string;
}) {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      width={width}
      padding="10px 0"
      bgColor={bgColor}
      fontColor={fontColor}
    >
      {btnTxt}
    </Button>
  );
}

export default SubmitBtnElm;
