import styled from 'styled-components';

export const TestDiv = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
