'use server'

import { findAttemptsByCriteria } from '../dal'
import { ParsedSearchParams } from '../utils/search-params'
import { getAuthUserOrRedirect } from '@/features/auth/actions/get-user'
import { queryMeta } from '@/features/shared/utils/query-meta'
import { Prisma } from '@prisma/client'

export async function getAttempts(params: ParsedSearchParams) {
  const user = await getAuthUserOrRedirect()

  const where: Prisma.AttemptWhereInput = {
    userId: user.id,
    createdAt: {
      gte: params.dateFrom ?? undefined,
      lte: params.dateTo ?? undefined,
    },
    exerciseId: params.exerciseId ?? undefined,
  }

  const { attempts, count } = await findAttemptsByCriteria({
    where,
    orderBy: [
      {
        [params.sortBy]: params.sortOrder,
      },
    ],
    take: params.perPage,
    skip: (params.page - 1) * params.perPage,
  })

  return {
    data: attempts,
    meta: queryMeta({
      total: count,
      perPage: params.perPage,
      currentPage: params.page,
    }),
  }
}
