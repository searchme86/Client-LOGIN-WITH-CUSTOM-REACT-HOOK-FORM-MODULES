type justifyContentType =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type alignItemsType = 'start' | 'center' | 'end';
type flexDirectionType = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type textAlignType = 'center' | 'left' | 'right';

export interface StyleProps {
  display?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  bgColor?: string;
  fontSize?: string;
  fontColor?: string;
  borderRadius?: string;
  fontWeight?: number;
  LabelHide?: boolean;
  justifyContent?: justifyContentType;
  alignItems?: alignItemsType;
  flexDirection?: flexDirectionType;
  textAlign?: textAlignType;
}
