import { AttemptsListItemMenu } from '../attempts-list-item-menu'
import { AttemptWithExercise } from '@/features/attempts/models'
import { fromGramToKilograms } from '@/features/shared/utils/units'
import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

export const columns: ColumnDef<AttemptWithExercise>[] = [
  {
    header: 'Упражнение',
    accessorKey: 'exercise.name',
  },
  {
    header: 'Вес',
    cell: ({ row }) => {
      return <div>{`${fromGramToKilograms(row.original.weight)} кг`}</div>
    },
  },
  {
    header: 'Повторений',
    accessorKey: 'reps',
  },
  {
    header: 'Дата',
    cell: ({ row }) => {
      return <div>{format(row.original.date, 'dd.MM.yyyy')}</div>
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <AttemptsListItemMenu id={row.original.id} />
        </div>
      )
    },
  },
]
