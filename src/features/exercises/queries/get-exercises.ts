'use server'

import { findExercisesByCriteria } from '../dal'
import { ParsedSearchParams } from '../search-params'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { Prisma } from '@prisma/client'

const PER_PAGE = 25
const CURSOR_OFFSET = 1

export async function getExercises(
  searchParams?: ParsedSearchParams,
  cursor?: string,
) {
  const user = await getAuthUserOrRedirect()

  const where: Prisma.ExerciseWhereInput = {
    userId: user.id,
    name: { contains: searchParams?.search, mode: 'insensitive' },
  }

  const { exercises, count } = await findExercisesByCriteria({
    where,
    orderBy: [
      {
        createdAt: 'desc',
      },
      {
        id: 'asc',
      },
    ],
    cursor: cursor ? { id: cursor } : undefined,
    take: PER_PAGE,
    skip: cursor ? CURSOR_OFFSET : 0,
  })

  return {
    data: exercises,
    meta: {
      count: count,
      cursor: exercises.at(-1)?.id,
      hasNextPage: exercises.length >= PER_PAGE,
    },
  }
}
