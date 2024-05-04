import '@emotion/react';

import { theme } from '@/styles';

type ThemeType = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

declare module 'emotion-reset' {
  const reset: SerializedStyles;
  export default reset;
}
