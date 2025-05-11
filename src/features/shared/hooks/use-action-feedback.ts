'use client'

import { useEffect } from 'react'

import { ActionState, ActionStatusEnum } from '../types'
import { toast } from 'sonner'

type UseActionFeedbackOptions = {
  onSuccess?: () => void
  onError?: () => void
}

export function useActionFeedback(
  actionState: ActionState,
  options?: UseActionFeedbackOptions,
) {
  useEffect(() => {
    if (
      actionState.status === ActionStatusEnum.SUCCESS &&
      actionState.message
    ) {
      toast.success(actionState.message)
      options?.onSuccess?.()
    }
    if (actionState.status === ActionStatusEnum.ERROR && actionState.message) {
      toast.error(actionState.message)
      options?.onError?.()
    }
  }, [actionState])
}
