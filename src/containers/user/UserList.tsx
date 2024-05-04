import React from 'react';

import { Breadcrumbs, Button } from '@/components';
import DownloadIcon from '@/assets/icon/ic_download.svg?react';
import PlusIcon from '@/assets/icon/ic_plus.svg?react';
import { USER_LIST_BREADCRUMBS } from '@/constants';
import UserDataSection from './dataSection/UserDataSection';
import * as S from './UserList.styled';

const UserList = () => {
  return (
    <S.UserList>
      <S.Outline>
        <S.TextWrapper>
          <S.Title>회원 리스트</S.Title>
          <Breadcrumbs items={USER_LIST_BREADCRUMBS} />
        </S.TextWrapper>
        <S.ButtonWrapper>
          <Button
            icon={<DownloadIcon />}
            label="엑셀 다운로드"
            sizeType="sm"
            styleType="secondaryBlue"
          />
          <Button
            icon={<PlusIcon />}
            label="회원 등록"
            sizeType="sm"
            styleType="primaryBlue"
          />
        </S.ButtonWrapper>
      </S.Outline>
      <UserDataSection />
    </S.UserList>
  );
};

export default UserList;
