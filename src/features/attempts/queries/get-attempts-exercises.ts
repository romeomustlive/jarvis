'use server'

import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { db } from '@/lib/database'

export async function getAttemptsExercises() {
  const user = await getAuthUserOrRedirect()

  const exercises = await db.attempt.findMany({
    where: {
      userId: user.id,
    },
    select: {
      exercise: true,
    },
    distinct: ['exerciseId'],
  })

  return exercises.map((exercise) => exercise.exercise)
}
