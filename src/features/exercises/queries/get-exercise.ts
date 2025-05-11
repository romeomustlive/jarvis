'use server'

import { notFound } from 'next/navigation'

import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { findExercise } from '@/features/exercises/dal'
import { authorizeUser } from '@/lib/authorization'

export async function getExercise(id: string) {
  const user = await getAuthUserOrRedirect()
  const exercise = await findExercise(id)

  if (!exercise || !authorizeUser(user, exercise)) {
    return notFound()
  }

  return exercise
}
