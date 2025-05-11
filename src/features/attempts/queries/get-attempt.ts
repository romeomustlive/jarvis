import { notFound } from 'next/navigation'

import { findAttempt } from '@/features/attempts/dal'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { authorizeUser } from '@/lib/authorization'

export async function getAttempt(id: string) {
  const user = await getAuthUserOrRedirect()
  const attempt = await findAttempt(id)

  if (!attempt || !authorizeUser(user, attempt)) {
    return notFound()
  }

  return attempt
}
