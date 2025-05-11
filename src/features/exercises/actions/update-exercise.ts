'use server'

import { notFound, redirect } from 'next/navigation'

import { findExercise } from '../dal'
import { editExercise } from '../dal'
import { updateExerciseSchema } from '../schemas'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { ActionState } from '@/features/shared/types'
import { fromErrorToActionState } from '@/features/shared/utils/errors'
import { authorizeUser } from '@/lib/authorization'
import { uploadFile } from '@/lib/storage'

export async function updateExercise(
  exerciseId: string,
  _actionState: ActionState,
  formData: FormData,
) {
  const user = await getAuthUserOrRedirect()
  const exercise = await findExercise(exerciseId)

  if (!exercise || !authorizeUser(user, exercise)) {
    return notFound()
  }

  try {
    const data = await updateExerciseSchema.parseAsync({
      exerciseId,
      name: formData.get('name'),
      description: formData.get('description'),
      image: formData.get('image'),
    })

    const imageUrl = data.image?.size
      ? await uploadFile(data.image, `exercises/${user.id}/${data.image.name}`)
      : exercise.imageUrl

    await editExercise(exerciseId, {
      name: data.name,
      description: data.description,
      imageUrl,
    })
  } catch (error) {
    return fromErrorToActionState(error, formData)
  }

  redirect(`/exercises`)
}
