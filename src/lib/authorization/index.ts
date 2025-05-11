import { User } from '@clerk/nextjs/server'

type Entity = {
  id: string
  userId: string
}

export function authorizeUser(user: User, entity: Entity) {
  if (entity.userId !== user.id) {
    return false
  }

  return true
}
