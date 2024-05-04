import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.size.FOOTER_HEIGHT};
    padding: 20px 0 20px
      calc(${theme.size.NAV_WIDTH} + ${theme.size.MAIN_WIDTH_PADDING});
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${theme.layout.horizontal_center};
  `}
`;
