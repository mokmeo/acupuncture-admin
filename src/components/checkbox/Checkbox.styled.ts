import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    z-index: ${theme.zIndex.CHECKBOX};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    &[type='checkbox'] {
      width: 20px;
      height: 20px;
      border: 2px solid ${theme.color.gray_500};
      border-radius: 6px;
      cursor: pointer;

      &:checked {
        border: 0;
        background: url('data:image/svg+xml;charset=UTF-8, <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.532 0.774042C12.8871 1.06693 12.9374 1.59216 12.6445 1.94717L5.49542 10.6128C5.34553 10.7944 5.07496 10.8159 4.89834 10.66L1.0337 7.25005C0.688598 6.94555 0.655685 6.41894 0.960187 6.07383C1.26469 5.72873 1.7913 5.69582 2.1364 6.00032L5.03212 8.55537L11.3589 0.886533C11.6518 0.531519 12.177 0.481154 12.532 0.774042Z" fill="white"/></svg>')
          ${theme.color.blue_500} no-repeat center;
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    padding-left: 8px;
    cursor: pointer;
  `}
`;
