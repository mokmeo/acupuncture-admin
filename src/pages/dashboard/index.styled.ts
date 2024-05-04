import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Section = styled.section`
  ${({ theme }) => css`
    ${theme.layout.horizontal_center}
  `}
`;
