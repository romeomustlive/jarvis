import { searchParser } from '@/lib/nuqs'
import { createSearchParamsCache } from 'nuqs/server'

export const searchParamsCache = createSearchParamsCache({
  search: searchParser,
})

export type ParsedSearchParams = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>
