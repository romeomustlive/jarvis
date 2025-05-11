export function FormFieldError({ error }: { error?: string }) {
  if (!error) return null
  return <span className="text-red-500 text-xs">{error}</span>
}
