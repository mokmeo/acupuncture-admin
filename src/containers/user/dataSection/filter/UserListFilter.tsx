import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchInput, SegmentButton } from '@/components';
import { useOptionSelector } from '@/hooks';
import { getAllQuery } from '@/utils';
import { USER_GROUP_FILTER_OPTIONS } from '@/constants';
import type { SelectOptionType } from '@/types';
import * as S from './UserListFilter.styled';

const UserListFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [, setSearchValue] = useState('');

  const handleUserSearch = (value: string) => (e: React.FormEvent) => {
    e.preventDefault();

    setSearchValue(value);
    setSearchParams({ ...getAllQuery(searchParams), search: value });
  };

  const { currentOption, changeOption } = useOptionSelector(
    USER_GROUP_FILTER_OPTIONS,
  );

  const handleOptionSelect =
    (option: SelectOptionType<typeof USER_GROUP_FILTER_OPTIONS>) => () => {
      changeOption(option);
      setSearchParams({ group: option.key });
    };

  const findGroupOptionByKey = (key: string) => {
    return USER_GROUP_FILTER_OPTIONS.find((option) => option.key === key);
  };

  useEffect(() => {
    const initialGroupKey = searchParams.get('group');
    const defaultGroupOption = USER_GROUP_FILTER_OPTIONS[0];

    const selectedGroup = initialGroupKey
      ? findGroupOptionByKey(initialGroupKey) ?? defaultGroupOption
      : defaultGroupOption;

    changeOption(selectedGroup);
  }, []);

  return (
    <S.FilterWrapper>
      <SegmentButton
        options={USER_GROUP_FILTER_OPTIONS}
        selectedOption={currentOption}
        onClick={handleOptionSelect}
      />
      <SearchInput
        placeholder="이름, 아이디 검색"
        onSearch={handleUserSearch}
      />
    </S.FilterWrapper>
  );
};

export default UserListFilter;
