import { FormPage } from '@/components/form-page'

export default function AttemptsNewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <FormPage title="Добавить результат подхода">{children}</FormPage>
}
