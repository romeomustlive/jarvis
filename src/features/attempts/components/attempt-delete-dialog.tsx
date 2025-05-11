'use client'

import { SimpleDialog } from '@/components/simple-dialog'
import { Button } from '@/lib/design-system/ui/button'
import { Trash2 } from 'lucide-react'
import { Loader2 } from 'lucide-react'

type AttemptDeleteDialogProps = {
  id: string
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  onDelete: () => void
  isLoading: boolean
}

export function AttemptDeleteDialog(props: AttemptDeleteDialogProps) {
  return (
    <SimpleDialog
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      title="Удалить попытку"
      description="Вы уверены, что хотите удалить попытку?"
      trigger={
        <span className="flex items-center gap-2 cursor-pointer">
          <Trash2 className="w-4 h-4" />
          Удалить
        </span>
      }
      footer={
        <>
          <Button
            variant="destructive"
            onClick={props.onDelete}
            disabled={props.isLoading}
          >
            {props.isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Удаляем...
              </>
            ) : (
              'Удалить'
            )}
          </Button>
          <Button variant="outline" onClick={() => props.onOpenChange(false)}>
            Отмена
          </Button>
        </>
      }
    />
  )
}
