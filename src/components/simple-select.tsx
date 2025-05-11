import { useState } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/lib/design-system/ui/select'
import { cn } from '@/lib/design-system/utils'
import { X } from 'lucide-react'

type SimpleSelectProps = {
  options: { label: string; value: string }[]
  placeholder?: string
  name?: string
  defaultValue?: string
  onChange?: (value: string | null) => void
  className?: string
  clearable?: boolean
}

export function SimpleSelect({
  options,
  placeholder,
  name,
  defaultValue,
  onChange,
  className,
  clearable = false,
}: SimpleSelectProps) {
  const [value, setValue] = useState(defaultValue ?? '')

  function handleValueChange(value: string) {
    setValue(value)
    onChange?.(value)
  }

  function handleResetValue() {
    setValue('')
    onChange?.(null)
  }

  return (
    <div className="relative">
      <Select name={name} value={value ?? ''} onValueChange={handleValueChange}>
        <SelectTrigger className={cn('w-full', className)}>
          <SelectValue placeholder={placeholder} className={className} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {clearable && value && (
        <div
          className="absolute right-8 top-2.5 cursor-pointer block"
          onClick={handleResetValue}
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </div>
      )}
    </div>
  )
}
