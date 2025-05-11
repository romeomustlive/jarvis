export function toNumber(value: string | number) {
  return typeof value === 'string' ? Number(value) : value
}

export function toDate(value: string | Date) {
  return typeof value === 'string' ? new Date(value) : value
}
