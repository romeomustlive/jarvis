import { Prisma } from '@prisma/client'

export type AttemptWithExercise = Prisma.AttemptGetPayload<{
  include: {
    exercise: {
      select: {
        name: true
      }
    }
  }
}>
