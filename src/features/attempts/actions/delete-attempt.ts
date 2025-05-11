'use server'

import { revalidatePath } from 'next/cache'
import { notFound } from 'next/navigation'

import { removeAttempt } from '../dal'
import { findAttempt } from '@/features/attempts/dal'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { authorizeUser } from '@/lib/authorization'

export async function deleteAttempt(id: string) {
  const user = await getAuthUserOrRedirect()
  const attempt = await findAttempt(id)

  if (!attempt || !authorizeUser(user, attempt)) {
    return notFound()
  }

  await removeAttempt(id)
  revalidatePath('/attempts')
}
