import React, {
  forwardRef,
  ComponentPropsWithoutRef,
  Ref,
  ElementType,
} from 'react';

export type Combine<T, K> = T & Omit<K, keyof T>;

export type CombineElementProps<T extends ElementType, k = unknown> = Combine<
  k,
  ComponentPropsWithoutRef<T>
>;

type OverridableProps<T extends ElementType, k = unknown> = {
  element?: T;
} & CombineElementProps<T, k>;

type TextBaseProps = {
  typography?: string;
};

type TextProps<T extends ElementType> = OverridableProps<T, TextBaseProps>;

function Text<T extends ElementType = 'span'>(
  { typography = 'content', element, ...props }: TextProps<T>,
  ref: Ref<any>
) {
  const target = element ?? 'span';
  const Component = target;
  return (
    <Component
      className="block ml-4"
      ref={ref}
      {...props}
      style={{ color: 'wheat' }}
    />
  );
}

export default forwardRef(Text) as typeof Text;
