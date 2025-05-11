import { ExercisesList } from '@/features/exercises/components/ExercisesList'
import { getExercises } from '@/features/exercises/queries/get-exercises'
import { searchParamsCache } from '@/features/exercises/search-params'
import { SearchParams } from 'nuqs/server'

type ExercisesPageProps = {
  searchParams: Promise<SearchParams>
}

export default async function ExercisesPage(props: ExercisesPageProps) {
  const parsedSearchParams = await searchParamsCache.parse(props.searchParams)
  const { data: exercises, meta } = await getExercises(parsedSearchParams)

  return <ExercisesList exercises={exercises} meta={meta} />
}
