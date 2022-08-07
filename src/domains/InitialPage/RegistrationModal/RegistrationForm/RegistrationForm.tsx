import { SubmitHandler, UseFormReturn } from 'react-hook-form'
import { emailRegex } from 'services/form/validations/email'

import Button from '../../../../components/atoms/Button/Button'
import Input from '../../../../components/atoms/Input/Input'
import { RegistrationFormInputs } from '../types'
import classes from './RegistrationForm.module.scss'

type RegistrationFormProps = {
  form: UseFormReturn<RegistrationFormInputs, RegistrationFormInputs>
  onSubmit: SubmitHandler<RegistrationFormInputs>
  loading: boolean
}

export default function RegistrationForm({
  form,
  onSubmit,
  loading,
}: RegistrationFormProps): JSX.Element {
  const {
    register,
    handleSubmit,
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
    <form className={classes.registrationForm}>
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
      <Button
        className={classes.submitButton}
        onClick={handleSubmit(onSubmit)}
        title="Submit"
        loading={loading}
      />
    </form>
  )
}
