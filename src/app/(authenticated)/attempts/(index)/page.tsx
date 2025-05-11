import { AttemptsList } from '@/features/attempts/components/attempts-list'
import { getAttempts } from '@/features/attempts/queries/get-attempts'
import { getAttemptsExercises } from '@/features/attempts/queries/get-attempts-exercises'
import { searchParamsCache } from '@/features/attempts/utils/search-params'
import { SearchParams } from 'nuqs'

type AttemptsPageProps = {
  searchParams: Promise<SearchParams>
}

export default async function AttemptsPage(props: AttemptsPageProps) {
  const parsedSearchParams = await searchParamsCache.parse(props.searchParams)
  const [{ data: attempts, meta }, exercises] = await Promise.all([
    getAttempts(parsedSearchParams),
    getAttemptsExercises(),
  ])

  return (
    <AttemptsList
      attempts={attempts}
      exercises={exercises}
      totalPages={meta.totalPages}
    />
  )
}
