import { Loader2 } from 'lucide-react'

export function Loader() {
  return (
    <div className="flex items-center justify-center h-[20rem]">
      <Loader2 className="animate-spin text-gray-700" />
    </div>
  )
}
