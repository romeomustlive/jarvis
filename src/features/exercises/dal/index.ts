import { db } from '@/lib/database'
import { Prisma } from '@prisma/client'

export type FindExercisesByCriteriaParams = {
  where?: Prisma.ExerciseWhereInput
  orderBy?: Prisma.ExerciseOrderByWithRelationInput[]
  take?: number
  skip?: number
  cursor?: {
    id: string
  }
}

export async function findExercisesByCriteria(
  criteria: FindExercisesByCriteriaParams,
) {
  const [exercises, count] = await db.$transaction([
    db.exercise.findMany({
      where: criteria.where,
      orderBy: criteria.orderBy,
      take: criteria.take,
      skip: criteria.skip,
      cursor: criteria.cursor,
    }),
    db.exercise.count({
      where: criteria.where,
    }),
  ])

  return { exercises, count }
}

export function findExercise(id: string) {
  return db.exercise.findUnique({ where: { id } })
}

export function insertExercise(exercise: Prisma.ExerciseCreateInput) {
  return db.exercise.create({
    data: exercise,
  })
}

export function editExercise(id: string, exercise: Prisma.ExerciseUpdateInput) {
  return db.exercise.update({
    where: { id },
    data: exercise,
  })
}

export function removeExercise(id: string) {
  return db.exercise.delete({ where: { id } })
}
