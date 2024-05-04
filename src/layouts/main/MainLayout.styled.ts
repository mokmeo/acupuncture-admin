import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Main = styled.main`
  ${({ theme }) => css`
    min-width: max-content;
    width: calc(100% - ${theme.size.NAV_WIDTH});
    min-height: calc(
      100vh - ${theme.size.HEADER_HEIGHT} - ${theme.size.FOOTER_HEIGHT}
    );
    margin: 0 0 0 ${theme.size.NAV_WIDTH};
    padding: 36px ${theme.size.MAIN_WIDTH_PADDING} 40px;
    background-color: ${theme.color.bg};
  `}
`;
