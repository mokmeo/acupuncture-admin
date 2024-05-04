import React, { useState } from 'react';

import SearchIcon from '@/assets/icon/ic_search.svg?react';
import Input from '../Input';
import * as S from './SearchInput.styled';

interface SearchInputProps {
  className?: string;
  maxLength?: number;
  placeholder?: string;
  onSearch: (value: string) => (e: React.FormEvent) => void;
}

const SearchInput = ({
  className,
  maxLength,
  placeholder,
  onSearch,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className={className} onSubmit={onSearch(searchValue)}>
      <Input
        css={S.searchInput}
        maxLength={maxLength}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearchValueChange}
      >
        <S.SearchButton aria-label="search">
          <SearchIcon />
        </S.SearchButton>
      </Input>
    </form>
  );
};

export default SearchInput;
