'use client'

import { useTransition } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { deleteExercise } from '../actions/delete-exercise'
import { getExercises } from '../queries/get-exercises'
import { ExerciseCard } from './ExerciseCard'
import { ExerciseDeleteDialog } from './ExerciseDeleteDialog'
import { Placeholder } from '@/components/placeholder'
import { SearchInput } from '@/components/search-input'
import { Button } from '@/lib/design-system/ui/button'
import { Exercise } from '@prisma/client'
import { Loader2 } from 'lucide-react'

type ExercisesListProps = {
  exercises: Exercise[]
  meta: {
    cursor?: string
    hasNextPage: boolean
    count: number
  }
}

export function ExercisesList(props: ExercisesListProps) {
  const [isPending, startTransition] = useTransition()
  const [metadata, setMetadata] = useState(props.meta)
  const [exercises, setExercises] = useState(props.exercises)
  const [isLoading, setIsLoading] = useState(false)

  async function handleDelete(id: string) {
    startTransition(async () => {
      await deleteExercise(id)
    })
  }

  async function handleLoadMore() {
    setIsLoading(true)
    const { data: newExercises, meta } = await getExercises(
      { search: '' },
      metadata.cursor,
    )
    setMetadata(meta)
    setExercises([...exercises, ...newExercises])
    setIsLoading(false)
  }

  useEffect(() => {
    setMetadata(props.meta)
    setExercises(props.exercises)
  }, [props.meta, props.exercises])

  return (
    <div>
      <div className="flex">
        <div className="flex-grow">
          <SearchInput
            placeholder="Найти упражнение..."
            className="w-96 mb-4"
          />
        </div>
      </div>

      {exercises.length ? (
        <ul className="max-w-screen-lg mx-auto flex flex-wrap gap-8 pt-8 pb-16">
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              <ExerciseCard
                exercise={exercise}
                deleteDialog={
                  <ExerciseDeleteDialog
                    exerciseId={exercise.id}
                    onDelete={() => handleDelete(exercise.id)}
                    isPending={isPending}
                  />
                }
              />
            </li>
          ))}
        </ul>
      ) : (
        <Placeholder label="Упражнения не найдены." />
      )}
      <div className="flex justify-center">
        {metadata.hasNextPage && (
          <Button onClick={handleLoadMore}>
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            Показать еще
          </Button>
        )}
      </div>
    </div>
  )
}
