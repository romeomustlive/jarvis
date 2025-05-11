import { parseAsInteger, parseAsIsoDate, parseAsString } from 'nuqs/server'

export const searchParser = parseAsString.withDefault('').withOptions({
  clearOnDefault: true,
  shallow: false,
})

export const stringParser = parseAsString.withOptions({
  shallow: false,
})

export const paginationParser = {
  page: parseAsInteger
    .withDefault(1)
    .withOptions({ clearOnDefault: true, shallow: false }),
  perPage: parseAsInteger
    .withDefault(10)
    .withOptions({ clearOnDefault: true, shallow: false }),
}

export const sortParser = {
  sortBy: parseAsString.withDefault('createdAt').withOptions({
    clearOnDefault: true,
    shallow: false,
  }),
  sortOrder: parseAsString
    .withDefault('desc')
    .withOptions({ clearOnDefault: true, shallow: false }),
}

export const dateParser = parseAsIsoDate.withOptions({
  clearOnDefault: true,
  shallow: false,
})
