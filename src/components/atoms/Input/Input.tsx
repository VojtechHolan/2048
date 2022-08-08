import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import classes from './Input.module.scss'

type InputProps = {
  register: UseFormRegisterReturn<string>
  type?: HTMLInputTypeAttribute
  placeholder?: string
  error?: string | null
}

// Input is prepared only for react-hook-form
export default function Input({
  register,
  type,
  placeholder,
  error,
}: InputProps): JSX.Element {
  return (
    <div className={classes.inputHolder}>
      <input
        placeholder={placeholder}
        type={type}
        className={classes.input}
        {...register}
      />
      <p className={classes.inputError}>{error}</p>
    </div>
  )
}
