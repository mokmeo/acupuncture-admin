import { css } from '@emotion/react';

import { color } from './color';

export const style = {
  HORIZONTAL_SCROLL_BAR: css`
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: ${color.gray_100} transparent;

    ::-webkit-scrollbar {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${color.gray_100};
      border-radius: 50px;
    }
  `,
} as const;

export type StyleType = typeof style;
