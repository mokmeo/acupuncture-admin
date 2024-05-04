import DashboardIcon from '@/assets/icon/ic_dashboard.svg?react';
import UserIcon from '@/assets/icon/ic_user.svg?react';
import { PATH } from './path';

export const NAVS = [
  {
    path: PATH.dashboard,
    icon: DashboardIcon,
    text: '대시보드',
  },
  {
    path: PATH.user,
    icon: UserIcon,
    text: '회원관리',
  },
] as const;
