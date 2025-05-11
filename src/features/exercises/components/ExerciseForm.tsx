'use client'

import { useActionState } from 'react'

import { createExercise } from '../actions/create-exercise'
import { Form } from '@/components/form'
import { FormField } from '@/components/form-field'
import { FormFieldError } from '@/components/form-field-error'
import { InputFile } from '@/components/input-file'
import { Button } from '@/lib/design-system/ui/button'
import { Input } from '@/lib/design-system/ui/input'
import { Label } from '@/lib/design-system/ui/label'
import { Textarea } from '@/lib/design-system/ui/textarea'
import { Loader2 } from 'lucide-react'

export function ExerciseForm() {
  const [actionState, action, isPending] = useActionState(createExercise, {
    message: '',
  })

  return (
    <Form action={action} actionState={actionState}>
      <FormField>
        <Label htmlFor="name">Название</Label>
        <Input
          id="name"
          name="name"
          defaultValue={actionState.payload?.get('name') as string}
        />
        <FormFieldError error={actionState.fieldErrors?.name?.[0]} />
      </FormField>
      <FormField>
        <Label htmlFor="description">Описание</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={actionState.payload?.get('description') as string}
        />
        <FormFieldError error={actionState.fieldErrors?.description?.[0]} />
      </FormField>
      <FormField>
        <InputFile name="image" label="Изображение" />
        <FormFieldError error={actionState.fieldErrors?.image?.[0]} />
      </FormField>
      <FormField>
        <Button type="submit" disabled={isPending}>
          {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Создать'}
        </Button>
      </FormField>
    </Form>
  )
}
