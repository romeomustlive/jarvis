import { CompactCard } from '@/components/compact-card'
import { getLastAttempt } from '@/features/attempts/queries/get-last-attempt'
import { fromGramToKilograms } from '@/features/shared/utils/units'

export default async function DashboardPage() {
  const lastAttempt = await getLastAttempt()

  return (
    <div className="flex gap-4">
      <CompactCard
        title="Последний подход"
        content={
          lastAttempt ? (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2  text-sm">
                <span>{lastAttempt?.exercise.name}:</span>
                <p className="flex items-center gap-1">
                  <span>{fromGramToKilograms(lastAttempt?.weight)}</span>
                  <span>кг</span>
                </p>
                <span>x</span>
                <p className="flex items-center gap-1">
                  <span> {lastAttempt?.reps}</span>
                  <span>повторений</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">12.11.2024</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Нет подходов
              </span>
            </div>
          )
        }
        className="w-96"
      />
    </div>
  )
}
