type FormFieldProps = {
  children: React.ReactNode
}

export function FormField(props: FormFieldProps) {
  return <div className="flex flex-col gap-3">{props.children}</div>
}
