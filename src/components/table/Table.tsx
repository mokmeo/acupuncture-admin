import React from 'react';

import { Checkbox, Pagination } from '@/components';
import * as S from './Table.styled';

interface Props {
  className?: string;
  children: React.ReactNode;
}

interface TableProps<T> extends Props {
  isCheckedAll?: boolean;
  onSelectAll?: () => void;
  captionContent: string;
  headers: T;
}

interface TableDataProps extends Props {
  hasCheckbox?: boolean;
}

interface RowButtonProps {
  onClick: () => void;
}

interface TablePaginationProps {
  totalPages: number;
}

const Table = <T extends object>({
  className,
  children,
  isCheckedAll = false,
  captionContent,
  headers,
  onSelectAll,
}: TableProps<T>) => (
  <S.Table className={className}>
    <caption>{captionContent}</caption>
    <thead>
      <S.TableHeadRow>
        {Object.values(headers).map((header, i) => (
          <S.TableHeadCell
            key={header}
            hasCheckbox={!!onSelectAll && i === 0}
            scope="col"
          >
            {i === 0 && !!onSelectAll && (
              <Checkbox isChecked={isCheckedAll} onAllSelect={onSelectAll} />
            )}
            {header}
          </S.TableHeadCell>
        ))}
      </S.TableHeadRow>
    </thead>
    {children}
  </S.Table>
);

Table.Body = ({ children }: Props) => <tbody>{children}</tbody>;

Table.BodyRow = ({ className, children }: Props) => (
  <S.TableBodyRow className={className}>{children}</S.TableBodyRow>
);

Table.Data = ({ className, children, hasCheckbox = false }: TableDataProps) => (
  <S.TableData className={className} hasCheckbox={hasCheckbox}>
    {children}
  </S.TableData>
);

Table.RowButton = ({ onClick }: RowButtonProps) => (
  <S.TableRowButton type="button" onClick={onClick} />
);

Table.Foot = ({ children }: Props) => (
  <S.TableFoot>
    <S.TableFootRow>{children}</S.TableFootRow>
  </S.TableFoot>
);

Table.TotalCount = () => (
  // TODO: API 연동 시 수정 예정
  <S.TotalCountData>전체 100 중 1-10 보기</S.TotalCountData>
);

Table.Pagination = ({ totalPages }: TablePaginationProps) => (
  <td>
    <Pagination totalPages={totalPages} />
  </td>
);

export default Table;
