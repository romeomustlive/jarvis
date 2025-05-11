import { ActionState, ActionStatusEnum } from '../types'
import { ZodError } from 'zod'

export function fromErrorToActionState(
  error: unknown,
  formData: FormData,
): ActionState {
  if (error instanceof ZodError) {
    return {
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      status: ActionStatusEnum.ERROR,
      payload: formData,
    }
  }
  if (error instanceof Error) {
    return {
      message: error.message,
      fieldErrors: {},
      status: ActionStatusEnum.ERROR,
      payload: formData,
    }
  }
  return {
    message: 'Произошла ошибка',
    fieldErrors: {},
    status: ActionStatusEnum.ERROR,
    payload: formData,
  }
}
