'use client'

import Link from 'next/link'

import { CompactCard } from '@/components/compact-card'
import { Button } from '@/lib/design-system/ui/button'
import { Exercise } from '@prisma/client'
import { Edit } from 'lucide-react'

type ExerciseCardProps = {
  exercise: Exercise
  deleteDialog: React.ReactNode
}

export function ExerciseCard(props: ExerciseCardProps) {
  return (
    <CompactCard
      className="py-0 h-[30rem] w-[20rem]"
      title={props.exercise.name}
      description={props.exercise.description ?? undefined}
      imageUrl={props.exercise.imageUrl ?? '/placeholder.svg'}
      footer={
        <>
          <Link href={`/exercises/${props.exercise.id}/edit`}>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Edit className="h-4 w-4" />
              <span>Редактировать</span>
            </Button>
          </Link>
          {props.deleteDialog}
        </>
      }
    />
  )
}
