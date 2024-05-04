import React from 'react';

import UserListFilter from './filter/UserListFilter';
import UserListTable from './table/UserListTable';

const UserDataSection = () => {
  return (
    <>
      <UserListFilter />
      <UserListTable />
    </>
  );
};

export default UserDataSection;
