import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const UserList = styled.section`
  ${({ theme }) => css`
    ${theme.layout.horizontal_center}
  `}
`;

export const Outline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
`;

export const TextWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    ${theme.font.heavy_40};
    margin-bottom: 8px;
  `}
`;
