import { UpdateExerciseForm } from '@/features/exercises/components/UpdateExerciseForm'
import { getExercise } from '@/features/exercises/queries/get-exercise'

export default async function EditExercisePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const exercise = await getExercise(id)

  return <UpdateExerciseForm exercise={exercise} />
}
