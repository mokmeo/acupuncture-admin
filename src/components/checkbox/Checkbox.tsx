import React from 'react';

import * as S from './Checkbox.styled';

interface CheckboxCommonProps {
  className?: string;
  children?: React.ReactNode;
  isChecked: boolean;
}

interface CheckboxItemProps<T extends string> extends CheckboxCommonProps {
  id: T;
  onItemSelect: (option: T, isChecked: boolean) => void;
  onAllSelect?: never;
}

interface CheckboxAllProps extends CheckboxCommonProps {
  id?: never;
  onItemSelect?: never;
  onAllSelect: () => void;
}

type CheckboxProps<T extends string> = CheckboxItemProps<T> | CheckboxAllProps;

const Checkbox = <T extends string>({
  className,
  children,
  isChecked,
  id,
  onItemSelect,
  onAllSelect,
}: CheckboxProps<T>) => {
  const handleCheckboxStateChange = () => {
    if (onAllSelect) {
      onAllSelect();
    }

    if (onItemSelect && id) {
      onItemSelect(id, isChecked);
    }
  };

  return (
    <S.Container className={className}>
      <S.Input
        type="checkbox"
        id={id ?? 'all'}
        checked={isChecked}
        onChange={handleCheckboxStateChange}
      />
      {children && <S.Label htmlFor={id ?? 'all'}>{children}</S.Label>}
    </S.Container>
  );
};

export default Checkbox;
