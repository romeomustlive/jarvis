import { SimpleDatepicker } from '../simple-datepicker'
import { Label } from '@/lib/design-system/ui/label'
import { dateParser, paginationParser } from '@/lib/nuqs'
import { useQueryState, useQueryStates } from 'nuqs'

type DateFilterProps = {
  queryKey: string
  label: string
  className?: string
}

export function DateFilter(props: DateFilterProps) {
  const [date, setDate] = useQueryState(props.queryKey, dateParser)
  const [, setPagination] = useQueryStates(paginationParser)

  function handleChange(value: Date | null) {
    setDate(value)
    setPagination({ page: 1 })
  }

  return (
    <div className="flex flex-col gap-2">
      <Label>{props.label}</Label>
      <SimpleDatepicker value={date} onChange={handleChange} className="w-56" />
    </div>
  )
}
