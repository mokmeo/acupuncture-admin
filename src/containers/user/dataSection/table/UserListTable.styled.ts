import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

export const UserListTableCollection = styled.div`
  ${({ theme }) => css`
    ${theme.style.HORIZONTAL_SCROLL_BAR}
  `}
`;

export const table = css`
  thead > tr,
  tbody > tr {
    grid-template-columns: 225px 1fr 128px 255px 255px 94px 118px 116px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const DummyProfile = styled.div`
  ${({ theme }) => css`
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background-color: ${theme.color.gray_100};
  `}
`;

const text = (theme: Theme) => css`
  color: ${theme.color.gray_500};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 4px;
    color: ${theme.color.gray_900};
  `}
`;

export const Birth = styled.span`
  ${({ theme }) => css`
    ${text(theme)}
    ${theme.font.regular_12};
  `}
`;

export const Id = styled.span`
  ${({ theme }) => css`
    ${theme.font.semibold_14};
    color: ${theme.color.blue_500};
  `}
`;

export const CreatedDate = styled.time`
  ${({ theme }) => css`
    ${text(theme)}
  `}
`;

export const Location = styled.span`
  ${({ theme }) => css`
    ${text(theme)}
  `}
`;

export const Group = styled.span`
  ${({ theme }) => css`
    ${text(theme)}
  `}
`;

export const Job = styled.span`
  ${({ theme }) => css`
    ${text(theme)}
  `}
`;

export const Recommender = styled.span`
  ${({ theme }) => css`
    ${text(theme)}
  `}
`;

export const ManagementWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const ControlButton = styled.button`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.TABLE_BUTTON};

    &:hover > svg path {
      fill: ${theme.color.gray_300};
    }
  `}
`;
