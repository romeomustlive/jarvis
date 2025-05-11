import { FormPage } from '@/components/form-page'

export default function NewExerciseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <FormPage title="Новое упражнение">{children}</FormPage>
}
