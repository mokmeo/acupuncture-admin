import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${theme.size.HEADER_HEIGHT};
    padding: 10px 24px 10px
      calc(${theme.size.NAV_WIDTH} + ${theme.size.MAIN_WIDTH_PADDING});
    background-color: ${theme.color.gray_50};
    z-index: ${theme.zIndex.HEADER};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.layout.horizontal_center};
  `}
`;
