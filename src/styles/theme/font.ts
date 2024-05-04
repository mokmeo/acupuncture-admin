import { css } from '@emotion/react';

const LINE_HEIGHT = {
  '12': 1.5,
  '14': 1.42857,
  '16': 1.5,
  '18': 1,
  '40': 1.2,
} as const;

export const font = {
  regular_12: css`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[12]};
  `,
  regular_14: css`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[14]};
  `,
  regular_16: css`
    font-size: 1.6rem;
    font-weight: 400;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[16]};
  `,
  medium_14: css`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[14]};
  `,
  semibold_14: css`
    font-size: 1.4rem;
    font-weight: 600;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[14]};
  `,
  semibold_18: css`
    font-size: 1.8rem;
    font-weight: 600;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[18]};
  `,
  bold_14: css`
    font-size: 1.4rem;
    font-weight: 700;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[14]};
  `,
  heavy_40: css`
    font-size: 4rem;
    font-weight: 900;
    font-family: SUIT;
    line-height: ${LINE_HEIGHT[40]};
  `,
} as const;

export type FontType = typeof font;
