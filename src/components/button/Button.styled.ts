import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

import type { ButtonSizeType, ButtonStyleType } from '@/types';

// NOTE: 공통 상태
const buttonDefault = (theme: Theme) => css`
  ${theme.font.bold_14};
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
`;

// NOTE: 버튼 크기
const smallSize = css`
  height: 40px;
  padding: 0 14px;
`;

const mediumSize = css`
  height: 48px;
  padding: 0 14px;
`;

// NOTE: 버튼 스타일
const primaryBlue = (theme: Theme) => css`
  color: white;
  background-color: ${theme.color.blue_500};
`;

const secondaryBlue = (theme: Theme) => css`
  color: ${theme.color.blue_500};
  background-color: ${theme.color.blue_100};
`;

const secondaryGray = (theme: Theme) => css`
  border: 1px solid ${theme.color.gray_400};
  color: ${theme.color.gray_400};
`;

const getButtonSize = (sizeType: ButtonSizeType) => {
  if (sizeType === 'sm') return smallSize;

  return mediumSize;
};

const getButtonStyle = (styleType: ButtonStyleType, theme: Theme) => {
  if (styleType === 'primaryBlue') {
    return primaryBlue(theme);
  }

  if (styleType === 'secondaryBlue') {
    return secondaryBlue(theme);
  }

  return secondaryGray(theme);
};

interface ButtonProps {
  isLoading: boolean;
  sizeType: ButtonSizeType;
  styleType: ButtonStyleType;
}

export const Button = styled.button<ButtonProps>(
  ({ sizeType, styleType, theme }) => css`
    ${buttonDefault(theme)};
    ${getButtonSize(sizeType)};
    ${getButtonStyle(styleType, theme)};
  `,
);
