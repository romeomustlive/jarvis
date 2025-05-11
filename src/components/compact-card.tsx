import Image from 'next/image'

import { Button } from '@/lib/design-system/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/lib/design-system/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/design-system/ui/dropdown-menu'
import { cn } from '@/lib/design-system/utils'
import { Edit, MoreVertical, Trash } from 'lucide-react'

type CompactCardProps = {
  title: string
  content?: React.ReactNode
  description?: string
  imageUrl?: string
  hasActions?: boolean
  footer?: React.ReactNode
  onEdit?: () => void
  onDelete?: () => void
  className?: string
}

export function CompactCard({
  title,
  description,
  imageUrl,
  hasActions = false,
  footer,
  className,
  content,
  ...props
}: CompactCardProps) {
  return (
    <Card className={cn('w-full overflow-hidden', className)} {...props}>
      {imageUrl && (
        <div className="relative h-52 w-full flex-shrink-0">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-col h-full">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          {hasActions && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                  <span className="sr-only">Меню</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => props.onEdit?.()}>
                  <Edit className="mr-2 h-4 w-4" />
                  Редактировать
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => props.onDelete?.()}
                  className="text-destructive focus:text-destructive"
                >
                  <Trash className="mr-2 h-4 w-4" />
                  Удалить
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </CardHeader>

        {content && (
          <CardContent className="p-4 pt-0 flex-grow">{content}</CardContent>
        )}

        {description && (
          <CardContent className="p-4 pt-0 flex-grow">
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        )}

        {footer && (
          <CardFooter className="flex justify-end gap-2 p-4 pt-0">
            {footer}
          </CardFooter>
        )}
      </div>
    </Card>
  )
}
