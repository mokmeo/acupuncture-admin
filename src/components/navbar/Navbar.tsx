import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from '@/assets';
import LogoutIcon from '@/assets/icon/ic_logout.svg?react';
import { NAVS } from '@/constants';
import * as S from './Navbar.styled';

const Navbar = () => {
  return (
    <S.Container>
      <S.NavHeader>
        <S.Logo src={logo} />
      </S.NavHeader>
      <S.NavWrapper>
        {NAVS.map(({ path, icon: Icon, text }) => {
          const isSelected = path.includes(location.pathname.split('/')[1]);

          return (
            <Link css={S.link(isSelected)} key={path} to={path}>
              <Icon css={S.icon} />
              <span>{text}</span>
            </Link>
          );
        })}
      </S.NavWrapper>
      {/* TODO: 클릭 시 로그아웃 기능은 추후 작성 */}
      <S.LogoutButton type="button" onClick={() => {}}>
        <LogoutIcon css={S.icon} />
        <span>로그아웃</span>
      </S.LogoutButton>
    </S.Container>
  );
};

export default Navbar;
