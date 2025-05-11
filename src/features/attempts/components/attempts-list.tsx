'use client'

import { columns } from './attempts-table/columns'
import { DataTable } from '@/components/data-table'
import { DateFilter } from '@/components/filters/date-filter'
import { SimplePagination } from '@/components/simple-pagination'
import { AttemptWithExercise } from '@/features/attempts/models'
import { ExerciseFilter } from '@/features/exercises/components/ExerciseFilter'
import { Exercise } from '@prisma/client'

type AttemptsListProps = {
  attempts: AttemptWithExercise[]
  exercises: Exercise[]
  totalPages: number
}

export function AttemptsList(props: AttemptsListProps) {
  return (
    <div className="flex flex-col gap-4 pt-8 pb-16">
      <div className="flex flex-row gap-4">
        <ExerciseFilter
          exercises={props.exercises}
          queryKey="exerciseId"
          label="Упражнение"
          placeholder="Выберите упражнение"
        />
        <DateFilter queryKey="dateFrom" label="Дата от" />
        <DateFilter queryKey="dateTo" label="Дата до" />
      </div>
      <DataTable
        data={props.attempts}
        columns={columns}
        placeholder="Подходы не найдены"
      />
      <SimplePagination totalPages={props.totalPages} />
    </div>
  )
}
