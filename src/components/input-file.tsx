import { Input } from '@/lib/design-system/ui/input'
import { Label } from '@/lib/design-system/ui/label'

type InputFileProps = {
  name: string
  label: string
}

export function InputFile({ name, label }: InputFileProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">{label}</Label>
      <Input id={name} type="file" name={name} />
    </div>
  )
}
