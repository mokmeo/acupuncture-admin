import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

export const Container = styled.nav`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 34px;
    width: ${theme.size.NAV_WIDTH};
    height: 100%;
    padding: 58px 16px;
    background-color: ${theme.color.black};
    z-index: ${theme.zIndex.NAVBAR};
  `}
`;

export const NavWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

export const NavHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
`;

export const Logo = styled.img`
  height: 36px;
`;

export const link = (isSelected: boolean) => (theme: Theme) =>
  css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 62px;
    padding: 11px 16px;

    & > span {
      ${theme.font.regular_14};
      color: ${isSelected ? theme.color.white : theme.color.gray_300};
    }

    & > svg > path {
      fill: ${isSelected ? theme.color.white : theme.color.gray_300};
    }

    &:hover {
      & > span {
        color: ${theme.color.white};
      }

      & > svg > path {
        fill: ${theme.color.white};
      }
    }
  `;

export const icon = css`
  width: 24px;
  height: 24px;
  margin-right: 26px;
`;

export const LogoutButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 11px 16px;

    & > span {
      ${theme.font.medium_14};
      color: ${theme.color.gray_300};
    }

    & > svg > path {
      stroke: ${theme.color.gray_300};
    }

    &:hover {
      & > span {
        color: ${theme.color.white};
      }

      & > svg > path {
        stroke: ${theme.color.white};
      }
    }
  `}
`;
