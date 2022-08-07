import { UseFormReturn } from 'react-hook-form'
import { emailRegex } from 'services/form/validations/email'

import Input from '../../../../components/atoms/Input/Input'
import { RegistrationFormInputs } from '../types'

type RegistrationFormProps = {
  form: UseFormReturn<RegistrationFormInputs, RegistrationFormInputs>
}

export default function RegistrationForm({
  form,
}: RegistrationFormProps): JSX.Element {
  const {
    register,
    formState: { errors },
  } = form

  const formRegistry = {
    name: register('name', {
      required: {
        value: true,
        message: 'This field is required',
      },
    }),
    email: register('email', {
      required: {
        value: true,
        message: 'This field is required',
      },
      pattern: {
        value: new RegExp(emailRegex),
        message: 'This field must be valid email',
      },
    }),
    password: register('password', {
      required: {
        value: true,
        message: 'This field is required',
      },
      minLength: {
        value: 8,
        message: 'This field must has at least 8 characters',
      },
    }),
  }

  return (
    <form>
      <Input
        placeholder="Enter name"
        register={formRegistry.name}
        error={errors.name?.message}
      />
      <Input
        placeholder="Enter email"
        register={formRegistry.email}
        error={errors.email?.message}
      />
      <Input
        type="password"
        placeholder="Enter password"
        register={formRegistry.password}
        error={errors.password?.message}
      />
    </form>
  )
}
