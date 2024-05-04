import React from 'react';

import usePagination from './hooks/usePagination';
import CaretLeftIcon from '@/assets/icon/ic_caret_left_blue.svg?react';
import CaretRightIcon from '@/assets/icon/ic_caret_right_blue.svg?react';
import * as S from './Pagination.styled';

interface PaginationProps {
  className?: string;
  totalPages?: number;
  maxPageCount?: number;
}

const Pagination = ({
  className,
  totalPages = 0,
  maxPageCount = 5,
}: PaginationProps) => {
  const {
    currentPage,
    pageNumbers,
    isPreviousButtonDisabled,
    isNextButtonDisabled,
    handlePreviousPageMove,
    handleNextPageMove,
    handleNumberClick,
  } = usePagination(maxPageCount, totalPages);

  return (
    <S.Pagination className={className}>
      <S.ArrowButton
        type="button"
        aria-label="move previous page"
        disabled={isPreviousButtonDisabled}
        onClick={handlePreviousPageMove}
      >
        <CaretLeftIcon css={S.arrowIcon} />
      </S.ArrowButton>
      <S.NumberWrapper>
        {pageNumbers.length ? (
          pageNumbers.map((number) => (
            <S.NumberButton
              key={number}
              type="button"
              isCurrentPage={currentPage === number}
              onClick={handleNumberClick(number)}
            >
              {number}
            </S.NumberButton>
          ))
        ) : (
          <S.NumberButton type="button" isCurrentPage disabled>
            1
          </S.NumberButton>
        )}
      </S.NumberWrapper>
      <S.ArrowButton
        type="button"
        aria-label="move next page"
        disabled={isNextButtonDisabled}
        onClick={handleNextPageMove}
      >
        <CaretRightIcon css={S.arrowIcon} />
      </S.ArrowButton>
    </S.Pagination>
  );
};

export default Pagination;
