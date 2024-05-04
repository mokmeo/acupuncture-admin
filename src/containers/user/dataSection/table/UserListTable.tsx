import React, { useState } from 'react';

import { Checkbox, Table } from '@/components';
import EyeIcon from '@/assets/icon/ic_eye.svg?react';
import PencelIcon from '@/assets/icon/ic_pencil.svg?react';
import TrashIcon from '@/assets/icon/ic_trash.svg?react';
import { USER_TABLE_HEADER } from '@/constants';
import type { GetUsersServerModel } from '@/types';
import * as S from './UserListTable.styled';

const userData: GetUsersServerModel = {
  users: [
    {
      profile: null,
      name: '이용주',
      birth: '1993-04-01',
      id: 'qwer1234',
      createdDate: '2024-04-27',
      location: '서울특별시 종로구',
      group: '미지정 그룹',
      job: '무직',
      recommender: null,
    },
    {
      profile: null,
      name: '김나박이',
      birth: '1963-04-01',
      id: 'kse302011',
      createdDate: '2024-04-27',
      location: '전북특별자치도 군산시',
      group: '이침 지도자',
      job: '카페사장',
      recommender: '이용주',
    },
    {
      profile: null,
      name: '정서에스더',
      birth: '1963-12-01',
      id: 'pbrrio',
      createdDate: '2024-04-27',
      location: '세종특별자치시',
      group: '이침 전문가',
      job: '주부',
      recommender: '김종관회장님',
    },
  ],
};

const UserListTable = () => {
  const [checkedIds, setCheckIds] = useState<string[]>([]);

  const handleUserIdCheck = (id: string, isChecked: boolean) => {
    if (!isChecked) {
      setCheckIds([...checkedIds, id]);
      return;
    }
    setCheckIds([...checkedIds].filter((checkId) => checkId !== id));

    console.log(id, isChecked);
  };

  const handleUserIdAllCheck = () => {
    if (!checkedIds.length) {
      setCheckIds(userData.users.map((user) => user.id));
      return;
    }

    setCheckIds([]);
  };

  // const checkGroupList = () => {
  //  return Object.values(checkedIds).every((isChecked) => isChecked);
  // }

  // const handleAllChecksToggle = () => {
  //   const isAllCheck = checkGroupList();

  //   // toggleAllChecks(!isAllCheck);
  // };

  const formatData = (
    item: GetUsersServerModel['users'][number],
    key: keyof typeof USER_TABLE_HEADER,
  ) => {
    switch (key) {
      case 'name': {
        return (
          <S.UserInfoWrapper>
            <S.DummyProfile />
            <div>
              <S.Name>{item[key]}</S.Name>
              <S.Birth>{item.birth}</S.Birth>
            </div>
          </S.UserInfoWrapper>
        );
      }

      case 'id':
        return <S.Id>{item[key]}</S.Id>;

      case 'createdDate':
        return <S.CreatedDate>{item[key]}</S.CreatedDate>;

      case 'location':
        return <S.Location>{item[key]}</S.Location>;

      case 'group':
        return <S.Group>{item[key]}</S.Group>;

      case 'job':
        return <S.Job>{item[key]}</S.Job>;

      case 'recommender':
        return <S.Recommender>{item[key] ?? '(비어 있음)'}</S.Recommender>;

      case '':
        return (
          <S.ManagementWrapper>
            <S.ControlButton
              type="button"
              aria-label="유저 정보 수정"
              onClick={() => console.log('수정: ', item.id)}
            >
              <PencelIcon />
            </S.ControlButton>
            <S.ControlButton
              type="button"
              aria-label="유저 정보 상세조회"
              onClick={() => console.log('조회: ', item.id)}
            >
              <EyeIcon />
            </S.ControlButton>
            <S.ControlButton
              type="button"
              aria-label="유저 정보 삭제"
              onClick={() => console.log('삭제: ', item.id)}
            >
              <TrashIcon />
            </S.ControlButton>
          </S.ManagementWrapper>
        );

      default:
        return item[key];
    }
  };

  return (
    <S.UserListTableCollection>
      <Table
        css={S.table}
        isCheckedAll={!!checkedIds.length}
        onSelectAll={handleUserIdAllCheck}
        captionContent="Member Management"
        headers={USER_TABLE_HEADER}
      >
        <>
          <Table.Body>
            {userData.users.map((user) => (
              <Table.BodyRow key={user.id}>
                {Object.keys(USER_TABLE_HEADER).map((key, i) => (
                  <Table.Data key={key} hasCheckbox={i === 0}>
                    {i === 0 && <Table.RowButton onClick={() => {}} />}
                    {i === 0 && (
                      <Checkbox
                        isChecked={checkedIds.includes(user.id)}
                        id={user.id}
                        onItemSelect={handleUserIdCheck}
                      />
                    )}
                    {user &&
                      formatData(user, key as keyof typeof USER_TABLE_HEADER)}
                  </Table.Data>
                ))}
              </Table.BodyRow>
            ))}
          </Table.Body>
          <Table.Foot>
            <Table.TotalCount />
            <Table.Pagination totalPages={11} />
          </Table.Foot>
        </>
      </Table>
    </S.UserListTableCollection>
  );
};

export default UserListTable;
