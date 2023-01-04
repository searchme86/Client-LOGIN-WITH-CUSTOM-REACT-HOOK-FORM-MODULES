import React, { ComponentProps } from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: string;
} & Omit<ComponentProps<'button'>, 'children'>;

function ButtonElm({ type, children, ...rest }: ButtonProps) {
  return (
    <div className="">
      <button type={type} {...rest}>
        {children}
      </button>
    </div>
  );
}

export default ButtonElm;
