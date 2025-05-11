export type ActionState = {
  message: string
  fieldErrors?: Record<string, string[] | undefined>
  payload?: FormData
  status?: ActionStatusEnum
}

export enum ActionStatusEnum {
  ERROR = 'error',
  SUCCESS = 'success',
}
