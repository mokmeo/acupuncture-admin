export const size = {
  HEADER_HEIGHT: '98px',
  NAV_WIDTH: '261px',
  FOOTER_HEIGHT: '80px', // TODO: 임의의 값 추가로, 추후 수정 필요
  MAIN_WIDTH_PADDING: '40px',
  MAIN_HEIGHT_PADDING: '36px',
  LAYOUT_MIN_WIDTH: '1320px',
  LAYOUT_MAX_WIDTH: '1660px',
} as const;

export type SizeType = typeof size;
