export function FormPage({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  )
}
