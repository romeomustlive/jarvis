'use server'

import { AttemptForm } from '@/features/attempts/components/attempt-form'
import { getExercises } from '@/features/exercises/queries/get-exercises'

export default async function AttemptsNewPage() {
  const { data: exercises } = await getExercises()

  return <AttemptForm exercises={exercises} />
}
