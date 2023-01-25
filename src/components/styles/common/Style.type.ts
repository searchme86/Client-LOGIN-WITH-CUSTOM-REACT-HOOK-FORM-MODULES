type justifyContentType =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type alignItemsType = 'start' | 'center' | 'start' | 'end';
type flexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type textAlign = 'center' | 'left' | 'right';

export interface StyleProps {
  display?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  fontSize?: string;
  fontWeight?: number;
  LabelHide?: boolean;
  borderRadius?: string;
  justifyContent?: justifyContentType;
  alignItems?: alignItemsType;
  flexDirection?: flexDirection;
  textAlign?: textAlign;
  fontColor?: string;
}
