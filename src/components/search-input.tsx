'use client'

import { Input } from '@/lib/design-system/ui/input'
import { cn } from '@/lib/design-system/utils'
import { searchParser } from '@/lib/nuqs'
import { useQueryState } from 'nuqs'
import { useDebouncedCallback } from 'use-debounce'

export function SearchInput({
  className,
  placeholder,
}: {
  className?: string
  placeholder: string
}) {
  const [search, setSearch] = useQueryState('search', searchParser)

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
    },
    600,
  )

  return (
    <Input
      className={cn(className)}
      defaultValue={search}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}
