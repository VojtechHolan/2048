import { SubmitHandler, UseFormReturn } from 'react-hook-form'

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
  return (
    <form className={classes.registrationForm}>
      <Input
        placeholder="Enter name"
        register={register('name', { required: true })}
        error={errors.name && 'This field is required'}
      />
      <Input
        placeholder="Enter email"
        register={register('email', { required: true })}
        error={errors.email && 'This field is required'}
      />
      <Input
        type="password"
        placeholder="Enter password"
        register={register('password', { required: true })}
        error={errors.password && 'This field is required'}
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
