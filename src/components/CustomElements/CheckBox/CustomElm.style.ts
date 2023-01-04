import styled from 'styled-components';

export const CheckboxContainer = styled.div``;

export const CheckboxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;

  &:before {
    display: block;
    content: '';
    height: 13px;
    width: 13px;
    background-color: white;
    border: 1px solid gainsboro;
    border-radius: 100%;

    top: 50%;
    transform: translateY('-50%');
  }
  &:after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    opacity: 0;
    content: '';
    width: 13px;
    height: 13px;
    border: 1px solid transparent;
    border-radius: 100%;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

export const CheckboxInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${CheckboxLabel} {
    :after {
      opacity: 1;
    }
  }

  &:focus + ${CheckboxLabel} {
    &:before {
      outline: 1px solid blue;
    }
  }

  &:focus:not(:focus-visible) + ${CheckboxLabel} {
    :before {
      outline: none;
    }
  }
`;

export const CheckboxTitle = styled.p`
  margin-left: 0.5rem;
  padding: 2px 0 0 0;
`;
