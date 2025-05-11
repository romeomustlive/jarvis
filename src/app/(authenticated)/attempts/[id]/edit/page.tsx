import { AttemptForm } from '@/features/attempts/components/attempt-form'
import { getAttempt } from '@/features/attempts/queries/get-attempt'
import { getExercises } from '@/features/exercises/queries/get-exercises'

type EditAttemptPageProps = {
  params: Promise<{ id: string }>
}

export default async function EditAttemptPage({
  params,
}: EditAttemptPageProps) {
  const { id } = await params

  const [{ data: exercises }, attempt] = await Promise.all([
    getExercises(),
    getAttempt(id),
  ])

  return <AttemptForm exercises={exercises} attempt={attempt} />
}
