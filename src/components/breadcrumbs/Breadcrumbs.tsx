import React from 'react';
import { Link } from 'react-router-dom';

import CaretRightIcon from '@/assets/icon/ic_caret_right.svg?react';
import * as S from './Breadcrumbs.styled';

interface BreadcrumbItem {
  text: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: ReadonlyArray<BreadcrumbItem>;
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <S.Breadcrumbs>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        return (
          <S.BreadcrumbItem key={i}>
            {item.path && !isLast ? (
              <Link css={S.link} to={item.path}>
                {item.text}
              </Link>
            ) : (
              <S.Text>{item.text}</S.Text>
            )}
            {!isLast && <CaretRightIcon />}
          </S.BreadcrumbItem>
        );
      })}
    </S.Breadcrumbs>
  );
};

export default Breadcrumbs;
