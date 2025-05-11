import { Button } from '@/lib/design-system/ui/button'
import { Calendar } from '@/lib/design-system/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/lib/design-system/ui/popover'
import { cn } from '@/lib/design-system/utils'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

type SimpleDatepickerProps = {
  value: Date | null
  onChange: (date: Date | null) => void
  className?: string
}

export function SimpleDatepicker(props: SimpleDatepickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !props.value && 'text-muted-foreground',
            props.className,
          )}
        >
          <CalendarIcon className="w-4 h-4" />
          {props.value ? (
            format(props.value, 'dd.MM.yyyy')
          ) : (
            <span>Выберите дату</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={props.value ?? undefined}
          onSelect={(day) => props.onChange(day ?? null)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
