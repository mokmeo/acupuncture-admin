import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import * as S from './Input.styled';

interface InputProps {
  className?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  hasError?: boolean;
  id?: string;
  maxLength?: number;
  placeholder?: string;
  type?: string;
  value: string;
  register?: UseFormRegisterReturn<string>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className,
  children,
  isDisabled = false,
  isReadOnly = false,
  hasError = false,
  id,
  maxLength,
  placeholder,
  type = 'text',
  value,
  register,
  onChange,
}: InputProps) => {
  return (
    <S.InputWrapper className={className}>
      <S.Input
        aria-invalid={hasError}
        autoComplete="off"
        disabled={isDisabled}
        readOnly={isReadOnly}
        hasError={hasError}
        id={id}
        maxLength={maxLength}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        {...register}
      />
      {children && children}
    </S.InputWrapper>
  );
};

export default Input;
