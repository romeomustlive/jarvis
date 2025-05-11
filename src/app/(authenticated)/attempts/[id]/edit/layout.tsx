import { FormPage } from '@/components/form-page'

export default function EditAttemptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <FormPage title="Редактировать подход">{children}</FormPage>
}
