'use server'

import { findUserLastAttempt } from '@/features/attempts/dal'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'

export async function getLastAttempt() {
  const user = await getAuthUserOrRedirect()
  const attempt = await findUserLastAttempt(user.id)

  return attempt
}
