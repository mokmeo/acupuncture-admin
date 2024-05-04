import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const InputWrapper = styled.div`
  position: relative;
`;

interface InputProps {
  hasError: boolean;
}

export const Input = styled.input<InputProps>`
  ${({ hasError, theme }) => css`
    ${theme.font.regular_14};
    height: 40px;
    border: 1px solid ${hasError ? theme.color.red_10 : theme.color.gray_100};
    border-radius: 8px;
    padding: 0 11px;
    color: ${theme.color.black};
    background-color: ${theme.color.gray_50};
  `}
`;
