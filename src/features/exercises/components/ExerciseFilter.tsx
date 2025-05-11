import { SimpleSelect } from '@/components/simple-select'
import { Label } from '@/lib/design-system/ui/label'
import { paginationParser, stringParser } from '@/lib/nuqs'
import { Exercise } from '@prisma/client'
import { useQueryState, useQueryStates } from 'nuqs'

type ExerciseFilterProps = {
  exercises: Exercise[]
  queryKey: string
  label: string
  placeholder?: string
}

export function ExerciseFilter(props: ExerciseFilterProps) {
  const [exercise, setExercise] = useQueryState(props.queryKey, stringParser)
  const [, setPagination] = useQueryStates(paginationParser)

  function handleChange(value: string | null) {
    setExercise(value)
    setPagination({ page: 1 })
  }

  return (
    <div className="flex flex-col gap-2">
      <Label>{props.label}</Label>
      <SimpleSelect
        options={props.exercises.map((exercise) => ({
          label: exercise.name,
          value: exercise.id,
        }))}
        placeholder={props.placeholder}
        defaultValue={exercise ?? undefined}
        onChange={handleChange}
        className="w-64"
        clearable
      />
    </div>
  )
}
