'use client'

import { useState } from 'react'

import Link from 'next/link'

import { deleteAttempt } from '../actions/delete-attempt'
import { AttemptDeleteDialog } from './attempt-delete-dialog'
import { Button } from '@/lib/design-system/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/lib/design-system/ui/dropdown-menu'
import { EllipsisVerticalIcon, PencilIcon } from 'lucide-react'

type AttemptsListItemMenuProps = {
  id: string
}

export function AttemptsListItemMenu(props: AttemptsListItemMenuProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleDelete() {
    setIsLoading(true)
    await deleteAttempt(props.id)
    setIsLoading(false)
    setDialogOpen(false)
  }

  function handleSelectDeleteItem(e: Event) {
    e.preventDefault()
  }

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="p-0 focus-visible:ring-0"
        >
          <EllipsisVerticalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            href={`/attempts/${props.id}/edit`}
            className="flex items-center gap-2"
          >
            <PencilIcon className="h-4 w-4" />
            Редактировать
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleSelectDeleteItem}>
          <AttemptDeleteDialog
            id={props.id}
            isOpen={dialogOpen}
            onOpenChange={setDialogOpen}
            onDelete={handleDelete}
            isLoading={isLoading}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
