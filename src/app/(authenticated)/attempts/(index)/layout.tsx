import Link from 'next/link'

import { ListingPage } from '@/components/listing-page'
import { Button } from '@/lib/design-system/ui/button'

export default function AttemptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ListingPage
      title="Подходы"
      actionButton={
        <Link href="/attempts/new">
          <Button>Добавить подход</Button>
        </Link>
      }
    >
      {children}
    </ListingPage>
  )
}
