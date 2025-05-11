import { useActionFeedback } from '@/features/shared/hooks/use-action-feedback'
import { ActionState } from '@/features/shared/types'

type FormProps = {
  action: (payload: FormData) => void
  actionState: ActionState
  onSuccess?: () => void
  onError?: () => void
  children: React.ReactNode
}

export function Form(props: FormProps) {
  useActionFeedback(props.actionState, {
    onSuccess: props.onSuccess,
    onError: props.onError,
  })

  return (
    <form action={props.action} className="flex flex-col gap-4">
      {props.children}
    </form>
  )
}
