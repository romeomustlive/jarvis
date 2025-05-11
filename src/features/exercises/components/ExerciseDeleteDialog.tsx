'use client'

import { useState } from 'react'

import { SimpleDialog } from '@/components/simple-dialog'
import { Button } from '@/lib/design-system/ui/button'
import { Loader2, Trash2 } from 'lucide-react'

type ExerciseDeleteDialogProps = {
  exerciseId: string
  onDelete: () => void
  isPending: boolean
}

export function ExerciseDeleteDialog(props: ExerciseDeleteDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  function closeDialog() {
    setIsOpen(false)
  }

  return (
    <SimpleDialog
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      title="Удалить упражнение"
      description="Вы уверены, что хотите удалить это упражнение?"
      trigger={
        <Button
          variant="destructive"
          size="sm"
          className="flex items-center gap-1"
        >
          <Trash2 className="h-4 w-4" />
          <span>Удалить</span>
        </Button>
      }
      footer={
        <>
          <Button
            variant="destructive"
            disabled={props.isPending}
            onClick={() => props.onDelete()}
          >
            {props.isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Удаляем...
              </>
            ) : (
              'Удалить'
            )}
          </Button>
          <Button variant="outline" onClick={closeDialog}>
            Отменить
          </Button>
        </>
      }
    />
  )
}
