import Link from 'next/link'

import { ListingPage } from '@/components/listing-page'
import { Button } from '@/lib/design-system/ui/button'

export default function ExercisesListingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ListingPage
      title="Упражнения"
      actionButton={
        <Link href="/exercises/new">
          <Button>Добавить упражнение</Button>
        </Link>
      }
    >
      {children}
    </ListingPage>
  )
}
