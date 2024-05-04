import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const SegmentButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: fit-content;
    border: 1px solid ${theme.color.gray_100};
    border-radius: 8px;
    padding: 4px;
    background-color: ${theme.color.white};
  `}
`;

export const SegmentButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected, theme }) => css`
    display: flex;
    align-items: center;
    column-gap: 4px;
    border-radius: 8px;
    padding: 6px 12px;
    color: ${isSelected ? theme.color.blue_500 : theme.color.gray_500};
    background-color: ${isSelected ? theme.color.blue_100 : theme.color.white};
  `}
`;

export const SegmentButtonLabel = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_14};
  `}
`;
