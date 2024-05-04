import React from 'react';

import { MainLayout } from '@/layouts';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  const isAuth = true; // TODO: 수정 예정

  if (!isAuth) return null;

  return <MainLayout>{children}</MainLayout>;
};

export default BaseLayout;
