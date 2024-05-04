import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

export const searchInput = (theme: Theme) => css`
  position: relative;

  & > input {
    width: 100%;
    padding-left: 35px;
    background-color: ${theme.color.white};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  left: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
`;
