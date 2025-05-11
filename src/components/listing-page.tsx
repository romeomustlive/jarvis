type ListingPageProps = {
  title: string
  actionButton?: React.ReactNode
  children: React.ReactNode
}

export function ListingPage({
  title,
  actionButton,
  children,
}: ListingPageProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {actionButton}
      </div>
      {children}
    </div>
  )
}
