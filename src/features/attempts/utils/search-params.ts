import {
  dateParser,
  paginationParser,
  sortParser,
  stringParser,
} from '@/lib/nuqs'
import { createSearchParamsCache } from 'nuqs/server'

export const searchParamsCache = createSearchParamsCache({
  ...sortParser,
  ...paginationParser,
  dateFrom: dateParser,
  dateTo: dateParser,
  exerciseId: stringParser,
})

export type ParsedSearchParams = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>
