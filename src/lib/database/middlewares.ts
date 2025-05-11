import { Prisma } from '@prisma/client'

export const logQueryMiddleware = async (
  params: Prisma.MiddlewareParams,
  next: (params: Prisma.MiddlewareParams) => Promise<unknown>,
) => {
  const start = Date.now()
  const result = await next(params)
  const duration = Date.now() - start
  console.log(`Query ${params.model}.${params.action} took ${duration}ms`)
  return result
}
