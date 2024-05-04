import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const Text = styled.span`
  ${({ theme }) => css`
    ${theme.font.bold_14};
    color: ${theme.color.gray_500};
  `}
`;

export const link = (theme: Theme) =>
  css`
    ${theme.font.bold_14};
    color: ${theme.color.blue_500};
  `;
