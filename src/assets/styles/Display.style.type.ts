type justifyContentType =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type alignItemsType = 'start' | 'center' | 'start' | 'end';

type flexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

type textAlign = 'center' | 'left' | 'right';
export interface LayOutType {
  display?: string;
  width?: string;
  padding?: string;
  margin?: string;
  justifyContent?: justifyContentType;
  alignItems?: alignItemsType;
  flexDirection?: flexDirection;
  textAlign?: textAlign;
}
