import styled from 'styled-components';

import { StyleProps } from './common/style.type';

export const FormElmContainer = styled.div<StyleProps>`
  margin: ${({ margin }) => margin};
`;
