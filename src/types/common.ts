export type ButtonActionType = 'button' | 'submit' | 'reset';
export type ButtonStyleType = 'primaryBlue' | 'secondaryBlue' | 'secondaryGray'; // NOTE: 확정 아님
export type ButtonSizeType = 'sm' | 'md'; // NOTE: 확정 아님

export type ImmutableOptionsType = ReadonlyArray<{
  key: string;
  label: string;
}>;
export interface SelectOptionType<T extends ImmutableOptionsType> {
  key: T[number]['key'];
  label: string;
}
