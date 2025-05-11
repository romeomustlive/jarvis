'use server'

import { redirect } from 'next/navigation'

import { insertExercise } from '../dal'
import { createExerciseSchema } from '../schemas'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { ActionState } from '@/features/shared/types'
import { fromErrorToActionState } from '@/features/shared/utils/errors'
import { uploadFile } from '@/lib/storage'

export async function createExercise(
  _actionState: ActionState,
  formData: FormData,
) {
  const user = await getAuthUserOrRedirect()

  try {
    const data = await createExerciseSchema.parseAsync({
      name: formData.get('name'),
      description: formData.get('description'),
      image: formData.get('image') as File,
    })

    const imageUrl = data.image?.size
      ? await uploadFile(data.image, `exercises/${user.id}/${data.image.name}`)
      : null

    await insertExercise({
      name: data.name,
      description: data.description,
      userId: user.id,
      imageUrl,
    })
  } catch (error) {
    return fromErrorToActionState(error, formData)
  }

  redirect('/exercises')
}
