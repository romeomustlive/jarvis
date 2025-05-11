'use server'

import { revalidatePath } from 'next/cache'
import { notFound } from 'next/navigation'

import { removeExercise } from '../dal'
import { findExercise } from '../dal'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { authorizeUser } from '@/lib/authorization'

export async function deleteExercise(id: string) {
  const user = await getAuthUserOrRedirect()
  const exercise = await findExercise(id)

  if (!exercise || !authorizeUser(user, exercise)) {
    return notFound()
  }

  await removeExercise(exercise.id)

  revalidatePath('/exercises')
}
