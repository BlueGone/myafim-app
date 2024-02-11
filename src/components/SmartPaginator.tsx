import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination.tsx";

export interface SmartPaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (currentPage: number) => void;
}

export default function SmartPaginator({ currentPage, totalPages, onPageChange }: SmartPaginatorProps) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const shouldEllipsisPrev = currentPage > 2;
  const shouldEllipsisNext = currentPage < totalPages - 1;

  return (
    <Pagination>
      <PaginationContent>
        { isFirstPage || <>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={() => onPageChange(currentPage - 1)} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" onClick={() => onPageChange(1)}>1</PaginationLink>
            </PaginationItem>
          </>
        }
        { shouldEllipsisPrev && <PaginationEllipsis /> }
        <PaginationItem>
          <PaginationLink href="#" isActive>{currentPage}</PaginationLink>
        </PaginationItem>
        { shouldEllipsisNext && <PaginationEllipsis /> }
        { isLastPage || <>
            <PaginationItem>
              <PaginationLink href="#" onClick={() => onPageChange(totalPages)}>{totalPages}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" onClick={() => onPageChange(currentPage + 1)} />
            </PaginationItem>
          </>
        }
      </PaginationContent>
    </Pagination>
  );
}
