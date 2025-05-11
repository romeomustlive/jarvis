'use client'

import { useActionState } from 'react'
import { useState } from 'react'

import { upsertAttempt } from '../actions/upsert-attempt'
import { Form } from '@/components/form'
import { FormField } from '@/components/form-field'
import { FormFieldError } from '@/components/form-field-error'
import { SimpleDatepicker } from '@/components/simple-datepicker'
import { SimpleSelect } from '@/components/simple-select'
import { fromGramToKilograms } from '@/features/shared/utils/units'
import { Button } from '@/lib/design-system/ui/button'
import { Input } from '@/lib/design-system/ui/input'
import { Label } from '@/lib/design-system/ui/label'
import { Attempt, Exercise } from '@prisma/client'
import { Loader2 } from 'lucide-react'

type AttemptFormProps = {
  exercises: Exercise[]
  attempt?: Attempt
}

export function AttemptForm(props: AttemptFormProps) {
  const [date, setDate] = useState<Date | null>(new Date())
  const [actionState, action, isPending] = useActionState(
    upsertAttempt.bind(null, props.attempt?.id),
    {
      message: '',
    },
  )

  return (
    <Form action={action} actionState={actionState}>
      <FormField>
        <Label htmlFor="exercise">Упражнение</Label>
        <SimpleSelect
          name="exerciseId"
          defaultValue={props.attempt?.exerciseId}
          options={props.exercises.map((exercise) => ({
            label: exercise.name,
            value: exercise.id,
          }))}
          placeholder="Выберите упражнение"
        />
        <FormFieldError error={actionState?.fieldErrors?.exerciseId?.[0]} />
      </FormField>
      <FormField>
        <Label htmlFor="weight">Вес (в килограммах)</Label>
        <Input
          name="weight"
          type="number"
          min={0}
          defaultValue={
            (actionState?.payload?.get('weight') as string) ??
            fromGramToKilograms(props.attempt?.weight ?? 0)
          }
        />
        <FormFieldError error={actionState?.fieldErrors?.weight?.[0]} />
      </FormField>
      <FormField>
        <Label htmlFor="reps">Количество повторений</Label>
        <Input
          name="reps"
          type="number"
          min={0}
          defaultValue={
            (actionState?.payload?.get('reps') as string) ?? props.attempt?.reps
          }
        />
        <FormFieldError error={actionState?.fieldErrors?.reps?.[0]} />
      </FormField>
      <FormField>
        <Label htmlFor="date">Дата</Label>
        <input
          type="hidden"
          name="date"
          value={date?.toISOString() ?? undefined}
        />
        <SimpleDatepicker
          value={date ?? props.attempt?.date ?? null}
          onChange={setDate}
        />
        <FormFieldError error={actionState?.fieldErrors?.date?.[0]} />
      </FormField>
      <FormField>
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            'Добавить'
          )}
        </Button>
      </FormField>
    </Form>
  )
}
