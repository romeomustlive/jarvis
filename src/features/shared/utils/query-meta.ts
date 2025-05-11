export type QueryMeta = {
  total: number
  page: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  nextPage: number
  previousPage: number
}

export function queryMeta({
  total,
  perPage,
  currentPage,
}: {
  total: number
  perPage: number
  currentPage: number
}) {
  const totalPages = Math.ceil(total / perPage)

  return {
    total,
    page: currentPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
    nextPage: currentPage + 1,
    previousPage: currentPage - 1,
  }
}
