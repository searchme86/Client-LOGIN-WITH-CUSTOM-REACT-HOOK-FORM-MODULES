import React, { ComponentProps } from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: string;
  makeBtnDisable?: boolean;
} & Omit<ComponentProps<'button'>, 'children'>;

function CutomButton({ type, children, ...rest }: ButtonProps) {
  return (
    <div className="">
      <button type={type} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default CutomButton;
