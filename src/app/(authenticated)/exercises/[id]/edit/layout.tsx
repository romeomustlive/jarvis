import { FormPage } from '@/components/form-page'

export default function EditExerciseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <FormPage title="Редактировать упражнение">{children}</FormPage>
}
