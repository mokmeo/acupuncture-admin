import React from 'react';

import { Footer, Header, Navbar } from '@/components';
import * as S from './MainLayout.styled';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  console.log('MainLayout');
  return (
    <>
      <Header />
      <Navbar />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
};

export default MainLayout;
