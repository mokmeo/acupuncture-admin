export const zIndex = {
  CHECKBOX: 10,
  TABLE_BUTTON: 99,
  HEADER: 100,
  NAVBAR: 1000,
} as const;

export type ZIndexType = typeof zIndex;
