import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
`;

export const arrowIcon = css`
  width: 16px;
  height: 16px;
`;

const mixinButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

export const ArrowButton = styled.button`
  ${({ theme }) => css`
    ${mixinButton};
    background-color: ${theme.color.blue_100};

    &:disabled {
      opacity: 0.5;
    }
  `}
`;

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
`;

export const NumberButton = styled.button<{ isCurrentPage: boolean }>`
  ${({ isCurrentPage, theme }) => css`
    ${mixinButton}
    ${theme.font.semibold_14};
    color: ${isCurrentPage ? theme.color.white : theme.color.blue_500};
    background-color: ${isCurrentPage
      ? theme.color.blue_500
      : theme.color.blue_100};
  `}
`;
