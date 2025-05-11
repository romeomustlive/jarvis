import { ListingPage } from '@/components/listing-page'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ListingPage title="Главная">{children}</ListingPage>
}
