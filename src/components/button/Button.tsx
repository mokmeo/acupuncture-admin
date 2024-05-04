import React from 'react';

import type {
  ButtonActionType,
  ButtonSizeType,
  ButtonStyleType,
} from '@/types';
import * as S from './Button.styled';

interface ButtonProps {
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  actionType?: ButtonActionType;
  icon?: React.ReactNode;
  label: string;
  styleType: ButtonStyleType;
  sizeType: ButtonSizeType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  className,
  isDisabled = false,
  isLoading = false,
  actionType = 'button',
  icon,
  label,
  styleType,
  sizeType,
  onClick,
}: ButtonProps) => {
  return (
    <S.Button
      className={className}
      type={actionType}
      isLoading={isLoading}
      disabled={isDisabled}
      sizeType={sizeType}
      styleType={styleType}
      onClick={onClick}
    >
      {icon && icon}
      {label}
    </S.Button>
  );
};

export default Button;
