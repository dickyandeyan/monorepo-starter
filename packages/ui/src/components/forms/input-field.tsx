import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

interface InputFieldProps<T extends FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  control: Control<T>
  name: FieldPath<T>
  label?: string
}

export default function InputFormField<T extends FieldValues>({
  control,
  name,
  label,
  type = 'text',
  placeholder,
  className,
  ...props
}: InputFieldProps<T>) {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            className={className}
            {...props}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
