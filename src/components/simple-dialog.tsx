import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/design-system/ui/dialog'

type SimpleDialogProps = {
  isOpen: boolean
  title: string
  description: string
  trigger: React.ReactNode
  footer: React.ReactNode
  onOpenChange: (isOpen: boolean) => void
}

export function SimpleDialog(props: SimpleDialogProps) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange}>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{props.description}</DialogDescription>
        <DialogFooter>{props.footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
