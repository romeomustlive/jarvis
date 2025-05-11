import { MessageSquareMore } from 'lucide-react'

type PlaceholderProps = {
  label: string
}

export function Placeholder(props: PlaceholderProps) {
  return (
    <div className="text-muted-foreground h-[14rem] flex flex-col gap-2 items-center justify-center">
      <div className="flex items-center justify-center">
        <MessageSquareMore className="text-muted-foreground h-12 w-12" />
      </div>
      <div>{props.label}</div>
    </div>
  )
}
