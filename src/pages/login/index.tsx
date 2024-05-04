import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const index = () => {
  return <Wrapper>Login</Wrapper>;
};

export default index;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.red_10};
  `}
`;
