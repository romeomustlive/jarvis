import { z } from 'zod'

export const createAttemptSchema = z.object({
  exerciseId: z.string().min(1, 'Поле обязательно'),
  weight: z
    .number({ required_error: 'Поле обязательно' })
    .min(1, 'Вес не может быть меньше 1кг'),
  reps: z
    .number({ required_error: 'Поле обязательно' })
    .min(1, 'Количество повторений не может быть меньше 1'),
  date: z.date({
    required_error: 'Поле обязательно',
  }),
})

export const upsertAttemptSchema = z.object({
  exerciseId: z.string().min(1, 'Поле обязательно'),
  weight: z
    .number({ required_error: 'Поле обязательно' })
    .min(1, 'Вес не может быть меньше 1кг'),
  reps: z
    .number({ required_error: 'Поле обязательно' })
    .min(1, 'Количество повторений не может быть меньше 1'),
  date: z.date({
    required_error: 'Поле обязательно',
  }),
})
