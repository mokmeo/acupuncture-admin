import React from 'react';

import type { ImmutableOptionsType, SelectOptionType } from '@/types';
import * as S from './SegmentedButton.styled';

interface SegmentedButtonProps<T extends ImmutableOptionsType> {
  className?: string;
  options: ReadonlyArray<SelectOptionType<T>>;
  selectedOption: SelectOptionType<T> | null;
  onClick: (option: SelectOptionType<T>) => () => void;
}

const SegmentedButton = <T extends ImmutableOptionsType>({
  className,
  options,
  selectedOption,
  onClick,
}: SegmentedButtonProps<T>) => {
  return (
    <S.SegmentButtonGroup className={className}>
      {options.map((option) => {
        const isSelected = option.key === selectedOption?.key;

        return (
          <S.SegmentButton
            key={option.key}
            type="button"
            isSelected={isSelected}
            onClick={onClick(option)}
          >
            <S.SegmentButtonLabel>{option.label}</S.SegmentButtonLabel>
          </S.SegmentButton>
        );
      })}
    </S.SegmentButtonGroup>
  );
};

export default SegmentedButton;
