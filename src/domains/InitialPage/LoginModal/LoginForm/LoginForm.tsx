import { UseFormReturn } from 'react-hook-form'
import { emailRegex } from 'services/form/validations/email'

import Input from '../../../../components/atoms/Input/Input'
import { LoginFormInputs } from '../types'

type RegistrationFormProps = {
  form: UseFormReturn<LoginFormInputs, LoginFormInputs>
}

export default function LoginForm({
  form,
}: RegistrationFormProps): JSX.Element {
  const {
    register,
    formState: { errors },
  } = form

  const formRegistry = {
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
    // className={classes.registrationForm}
    <form>
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
