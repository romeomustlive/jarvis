import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { db } from '@/lib/database'
import { z } from 'zod'

export const exercisesQuerySchema = z.object({
  skip: z.number().optional(),
  take: z.number().max(25).optional(),
  orderBy: z.string().optional(),
  orderDirection: z.enum(['asc', 'desc']).optional(),
  search: z.string().optional(),
})

export const createExerciseSchema = z.object({
  name: z
    .string({ required_error: 'Поле должно быть заполнено.' })
    .min(1, {
      message: 'Поле должно быть заполнено.',
    })
    .refine(
      async (name) => {
        const user = await getAuthUserOrRedirect()
        return !(await db.exercise.findFirst({
          where: { name: name, userId: user.id },
        }))
      },
      {
        message: 'Упражнение с таким названием уже существует.',
      },
    ),
  description: z.string().max(200, {
    message: 'Описание должно быть меньше 200 символов.',
  }),
  image: z.instanceof(File).optional(),
})

export const updateExerciseSchema = createExerciseSchema
  .omit({ name: true })
  .extend({
    exerciseId: z.string(),
    name: z.string().min(1, {
      message: 'Поле должно быть заполнено.',
    }),
  })
  .superRefine(async (data, ctx) => {
    const currentExercise = await db.exercise.findUnique({
      where: { id: data.exerciseId },
    })
    if (
      currentExercise?.name !== data.name &&
      (await db.exercise.findFirst({
        where: { name: data.name, userId: currentExercise?.userId },
      }))
    ) {
      ctx.addIssue({
        path: ['name'],
        code: z.ZodIssueCode.custom,
        message: 'Упражнение с таким названием уже существует.',
      })
    }
  })
