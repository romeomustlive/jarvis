import { db } from '@/lib/database'
import { Prisma } from '@prisma/client'

export type FindAttemptsByCriteriaParams = {
  where?: Prisma.AttemptWhereInput
  orderBy?: Prisma.AttemptOrderByWithRelationInput[]
  take?: number
  skip?: number
}

export async function findAttemptsByCriteria(
  criteria: FindAttemptsByCriteriaParams,
) {
  const [attempts, count] = await db.$transaction([
    db.attempt.findMany({
      where: criteria.where,
      orderBy: criteria.orderBy,
      take: criteria.take,
      skip: criteria.skip,
      include: {
        exercise: {
          select: {
            name: true,
          },
        },
      },
    }),
    db.attempt.count({
      where: criteria.where,
    }),
  ])

  return { attempts, count }
}

export async function findAttempt(id: string) {
  return db.attempt.findUnique({
    where: { id },
  })
}

export async function findUserLastAttempt(userId: string) {
  return db.attempt.findFirst({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      exercise: {
        select: {
          name: true,
        },
      },
    },
  })
}

export async function insertAttempt(attempt: Prisma.AttemptCreateInput) {
  return await db.attempt.create({
    data: attempt,
  })
}

export async function saveAttempt(
  attempt: Prisma.AttemptCreateInput,
  id?: string,
) {
  return await db.attempt.upsert({
    where: { id },
    update: attempt,
    create: attempt,
  })
}

export async function removeAttempt(id: string) {
  return await db.attempt.delete({
    where: { id },
  })
}
