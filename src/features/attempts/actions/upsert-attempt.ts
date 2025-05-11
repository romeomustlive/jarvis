'use server'

import { redirect } from 'next/navigation'

import { saveAttempt } from '@/features/attempts/dal'
import { upsertAttemptSchema } from '@/features/attempts/schemas'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { ActionState } from '@/features/shared/types'
import { fromErrorToActionState } from '@/features/shared/utils/errors'
import { toDate, toNumber } from '@/features/shared/utils/primitives'
import { fromKilogramsToGram } from '@/features/shared/utils/units'

export async function upsertAttempt(
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData,
) {
  const user = await getAuthUserOrRedirect()

  try {
    const { exerciseId, weight, ...data } = upsertAttemptSchema.parse({
      exerciseId: formData.get('exerciseId'),
      weight: toNumber(formData.get('weight') as string),
      reps: toNumber(formData.get('reps') as string),
      date: toDate(formData.get('date') as string),
    })

    await saveAttempt(
      {
        ...data,
        weight: fromKilogramsToGram(weight),
        userId: user.id,
        exercise: {
          connect: {
            id: exerciseId,
          },
        },
      },
      id || '',
    )
  } catch (e) {
    return fromErrorToActionState(e, formData)
  }

  redirect('/attempts')
}
