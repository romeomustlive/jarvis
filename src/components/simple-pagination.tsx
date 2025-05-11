'use client'

import { Button } from '@/lib/design-system/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/lib/design-system/ui/pagination'
import { paginationParser } from '@/lib/nuqs'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useQueryStates } from 'nuqs'

type SimplePaginationProps = {
  totalPages: number
}

export function SimplePagination(props: SimplePaginationProps) {
  const [paginationState, setPaginationState] = useQueryStates(
    paginationParser,
    {
      urlKeys: {
        page: 'page',
        perPage: 'perPage',
      },
    },
  )

  const lastPage = props.totalPages
  const prevPage = paginationState.page - 1
  const hasPrevPage = prevPage > 0
  const nextPage = paginationState.page + 1
  const hasNextPage = nextPage <= lastPage

  if (props.totalPages <= 1) return null

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            disabled={!hasPrevPage}
            onClick={() => setPaginationState({ page: prevPage })}
            variant="ghost"
          >
            <ChevronLeft className="w-4 h-4" />
            Пред
          </Button>
        </PaginationItem>
        {hasPrevPage && (
          <PaginationItem>
            <Button
              onClick={() => setPaginationState({ page: prevPage })}
              variant="ghost"
            >
              {prevPage}
            </Button>
          </PaginationItem>
        )}
        <PaginationItem>
          <Button variant="outline">{paginationState.page}</Button>
        </PaginationItem>
        {hasNextPage && (
          <PaginationItem>
            <Button
              onClick={() => setPaginationState({ page: nextPage })}
              variant="ghost"
            >
              {nextPage}
            </Button>
          </PaginationItem>
        )}
        <PaginationItem>
          <Button
            disabled={!hasNextPage}
            onClick={() => setPaginationState({ page: nextPage })}
            variant="ghost"
          >
            <ChevronRight className="w-4 h-4" />
            След
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
