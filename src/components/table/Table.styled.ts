import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 8px;
    background-color: ${theme.color.white};
    box-shadow: ${theme.boxShadow.SOFT};
    overflow: hidden;

    & > caption {
      display: none;
    }

    tbody {
      height: 800px;
    }

    thead > tr,
    tbody > tr {
      display: grid;
    }
  `}
`;

export const TableHeadRow = styled.tr`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.color.gray_50};
  `}
`;

const getCheckboxStyle = css`
  display: flex;
  column-gap: 8px;
`;

export const TableHeadCell = styled.th<{ hasCheckbox: boolean }>`
  ${({ theme, hasCheckbox }) => css`
    ${theme.font.medium_14};
    ${hasCheckbox && getCheckboxStyle}
    padding: 18px 22px;
    color: ${theme.color.gray_900};
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    white-space: nowrap;
  `}
`;

export const TableBodyRow = styled.tr`
  ${({ theme }) => css`
    position: relative;

    &:not(:nth-of-type(10)) {
      border-bottom: 1px solid ${theme.color.gray_50};
    }

    &:hover {
      background-color: ${theme.color.gray_50};
    }
  `}
`;

export const TableData = styled.td<{ hasCheckbox: boolean }>`
  ${({ theme, hasCheckbox }) => css`
    ${theme.font.medium_14};
    display: flex;
    align-items: center;
    column-gap: ${hasCheckbox && '8px'};
    height: 80px;
    padding: 0 22px;
  `}
`;

export const TableRowButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const TableFoot = styled.tfoot`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.color.gray_100};
  `}
`;

export const TableFootRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 24px;
`;

export const TotalCountData = styled.td`
  ${({ theme }) => css`
    ${theme.font.regular_16};
    color: ${theme.color.gray_500};
  `}
`;
