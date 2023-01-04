type justifyContentType =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type alignItemsType = 'start' | 'center' | 'start' | 'end';

export interface LayOutType {
  display?: string;
  width?: string;
  justifyContent?: justifyContentType;
  alignItems?: alignItemsType;
  padding?: string;
  margin?: string;
}
