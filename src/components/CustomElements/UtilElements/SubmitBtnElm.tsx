import React from 'react';
import { useFormContext } from 'react-hook-form';

import { ButtonWrapper, Button } from '../../../assets/styles/Button.style';

function SubmitBtnElm() {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <ButtonWrapper>
      <Button
        type="submit"
        disabled={isSubmitting}
        width="100px"
        height="100px"
        padding="10px 0"
        bgColor="red"
      >
        Create accountss
      </Button>
    </ButtonWrapper>
  );
}

export default SubmitBtnElm;
